// author: http://lamyoung.com/
import { BoxCollider, Collider2D, UITransform,Input, PhysicsSystem2D,Intersection ,Intersection2D,BoxCollider2D, CircleCollider2D, PolygonCollider2D} from "cc";

export default class QuadtreeCollision {
    private _tree;
    constructor(rect: { x: number, y: number, width: number, height: number }) {
        this._tree = new Quadtree(rect);
    }

    //colliders所有被检测的刚体
    //colloder 移动刚体
    check(colliders: cc.Collider[], testCollider: cc.Collider) {
        // retrieve 准备测试的对象(预览图中的绿色)   cc.Collider[]
        // contacts 碰撞对象(预览图中的红色)   cc.Collider[]
        const ret: { retrieve: cc.Collider[], contacts: cc.Collider[] } = { retrieve: [], contacts: [] }; 

        if (this._tree) {
            // 四叉树清理
            this._tree.clear();
            // const collisionManager = cc.director.getCollisionManager();
            // collisionManager['updateCollider'](testCollider);
            for (let i = 0, l = colliders.length; i < l; i++) {
                const collider = colliders[i];
                // 更新碰撞体世界aabb
                // collisionManager['updateCollider'](collider);
                // const aabb = collider['world'].aabb;
                const aabb = collider.node.getComponent(UITransform).getBoundingBoxToWorld()
                const rect = { x: aabb.x, y: aabb.y, height: aabb.height, width: aabb.width, collider: collider };
                // 四叉树插入
                this._tree.insert(rect)
            }
            // 四叉树抓出待检查的对象(属于那个块的所有节点)
            const retrieveObjects = this._tree.retrieve(testCollider.getComponent(UITransform).getBoundingBoxToWorld());

            retrieveObjects.forEach(element => {
                ret.retrieve.push(element.collider);
                // 抓出来后检查碰撞
                if (testContact(element.collider, testCollider)) {
                    ret.contacts.push(element.collider);
                }
            });
        }
        return ret;
    }

}

function testContact(collider1, collider2) {
    // 分组不通过
    // if (!cc.director.getCollisionManager()['shouldCollide'](collider1, collider2)) {
    //     return false;
    // }

    const collisionMatrix = PhysicsSystem2D.instance.collisionMatrix;

    if (collisionMatrix[collider1.group] != collisionMatrix[collider2.group]) {
        return false;
    }

    // let world1 = collider1.getComponent(UITransform).getBoundingBoxToWorld();
    // let world2 = collider2.getComponent(UITransform).getBoundingBoxToWorld();

    let point1 = collider1.worldPoints
    let point2 = collider2.worldPoints

    if (collider1.worldAABB.intersects(collider2.worldAABB)) {
        return false;
    }

    let isCollider1Polygon = (collider1 instanceof BoxCollider2D) || (collider1 instanceof PolygonCollider2D);
    let isCollider2Polygon = (collider2 instanceof BoxCollider2D) || (collider2 instanceof PolygonCollider2D);
    let isCollider1Circle = collider1 instanceof CircleCollider2D;
    let isCollider2Circle = collider2 instanceof CircleCollider2D;

    if (isCollider1Polygon && isCollider2Polygon) {
        return Intersection2D.polygonPolygon(point1, point2);
    } else if (isCollider1Circle && isCollider2Circle) {
        return Intersection2D.circleCircle(point1, point2);
    } else if (isCollider1Polygon && isCollider2Circle) {
        return Intersection2D.polygonCircle(world1.points, world2);
    } else if (isCollider1Circle && isCollider2Polygon) {
        return Intersection2D.polygonCircle(world2.points, world1);
    } else {
        // cc.errorID(6601, cc.js.getClassName(collider1), cc.js.getClassName(collider2));
    }
    return false;
}


/* https://github.com/timohausmann/quadtree-js.git v1.2.2 */

/**
     * Quadtree Constructor
     * @param Object bounds            bounds of the node { x, y, width, height }
     * @param Integer max_objects      (optional) max objects a node can hold before splitting into 4 subnodes (default: 10)
     * @param Integer max_levels       (optional) total max levels inside root Quadtree (default: 4) 
     * @param Integer level            (optional) deepth level, required for subnodes (default: 0)
     */
function Quadtree(bounds, max_objects?, max_levels?, level?) {

    this.max_objects = max_objects || 10; //一个区域的最大节点数量
    this.max_levels = max_levels || 4; //最大子节点深度

    this.level = level || 0; //子节点深度
    this.bounds = bounds; //边界

    this.objects = [];//物体数组
    this.nodes = []; //四个子节点
};


/**
 * 将当前节点分成4个子节点，并用计算好的新节点数据初始化
 */
Quadtree.prototype.split = function () {

    var nextLevel = this.level + 1,
        subWidth = this.bounds.width / 2,
        subHeight = this.bounds.height / 2,
        x = this.bounds.x,
        y = this.bounds.y;

    //top right node
    this.nodes[0] = new Quadtree({
        x: x + subWidth,
        y: y,
        width: subWidth,
        height: subHeight
    }, this.max_objects, this.max_levels, nextLevel);

    //top left node
    this.nodes[1] = new Quadtree({
        x: x,
        y: y,
        width: subWidth,
        height: subHeight
    }, this.max_objects, this.max_levels, nextLevel);

    //bottom left node
    this.nodes[2] = new Quadtree({
        x: x,
        y: y + subHeight,
        width: subWidth,
        height: subHeight
    }, this.max_objects, this.max_levels, nextLevel);

    //bottom right node
    this.nodes[3] = new Quadtree({
        x: x + subWidth,
        y: y + subHeight,
        width: subWidth,
        height: subHeight
    }, this.max_objects, this.max_levels, nextLevel);


};


/**
 * 判断对象属于哪个节点
 * @param Object pRect      bounds of the area to be checked, with x, y, width, height
 * @return Array            an array of indexes of the intersecting subnodes 
 *                          (0-3 = top-right, top-left, bottom-left, bottom-right / ne, nw, sw, se) 右上、左上、左下、右下
 */
Quadtree.prototype.getIndex = function (pRect) {

    var indexes = [],
        verticalMidpoint = this.bounds.x + (this.bounds.width / 2), // 垂直中点
        horizontalMidpoint = this.bounds.y + (this.bounds.height / 2); //水平中点

    var startIsNorth = pRect.y < horizontalMidpoint,
        startIsWest = pRect.x < verticalMidpoint,
        endIsEast = pRect.x + pRect.width > verticalMidpoint,
        endIsSouth = pRect.y + pRect.height > horizontalMidpoint;

    //top-right quad
    if (startIsNorth && endIsEast) { //右上
        indexes.push(0);
    }

    //top-left quad
    if (startIsWest && startIsNorth) { //左上
        indexes.push(1);
    }

    //bottom-left quad
    if (startIsWest && endIsSouth) { //左下
        indexes.push(2);
    }

    //bottom-right quad
    if (endIsEast && endIsSouth) { //右下
        indexes.push(3);
    }

    return indexes;
};


/**
 //将对象插入节点。如果节点超出容量，会拆分并全部相加对象到它们相应的子节点
 * @param Object pRect        bounds of the object to be added { x, y, width, height }
 */
Quadtree.prototype.insert = function (pRect) {

    var i = 0,
        indexes;

    //如果有子节点，找到并对应插入
    if (this.nodes.length) {
        indexes = this.getIndex(pRect);

        for (i = 0; i < indexes.length; i++) {
            this.nodes[indexes[i]].insert(pRect);
        }
        return;
    }

    //没有对应子节点存到this.objects里
    this.objects.push(pRect);

    //达到上限以后
    if (this.objects.length > this.max_objects && this.level < this.max_levels) {

        //如果还没有子节点则拆分
        if (!this.nodes.length) {
            this.split();
        }

        //将所有对象添加到其对应的子节点
        for (i = 0; i < this.objects.length; i++) {
            indexes = this.getIndex(this.objects[i]);
            for (var k = 0; k < indexes.length; k++) {
                this.nodes[indexes[k]].insert(this.objects[i]);
            }
        }

        //clean up this node
        this.objects = [];
    }
};


/**
 * 返回可能与给定对象发生碰撞的所有对象
 * @param Object pRect      bounds of the object to be checked { x, y, width, height }
 * @Return Array            array with all detected objects
 */
Quadtree.prototype.retrieve = function (pRect) {

    var indexes = this.getIndex(pRect),
        returnObjects = this.objects;

    //如果我们有子节点，检索它们的对象
    if (this.nodes.length) {
        for (var i = 0; i < indexes.length; i++) {
            returnObjects = returnObjects.concat(this.nodes[indexes[i]].retrieve(pRect));
        }
    }

    //移除重复的节点
    returnObjects = returnObjects.filter(function (item, index) {
        return returnObjects.indexOf(item) >= index;
    });

    return returnObjects;
};


/**
 * 清理四叉树
 */
Quadtree.prototype.clear = function () {

    this.objects = [];

    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes.length) {
            this.nodes[i].clear();
        }
    }

    this.nodes = [];
};



