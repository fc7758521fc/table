namespace COMM {
            // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Properties of a pb_player. */
export interface Ipb_player {

    /** pb_player name */
    name: string;

    /** pb_player logo */
    logo: number;

    /** pb_player gid */
    gid?: (number|null);

    /** pb_player gname */
    gname?: (string|null);

    /** pb_player border */
    border?: (number|null);

    /** pb_player glv */
    glv?: (number|null);

    /** pb_player country */
    country?: (string|null);

    /** pb_player sds */
    sds?: (string|null);

    /** pb_player city */
    city?: (string|null);
}

/** Represents a pb_player. */
export class pb_player implements Ipb_player {

    /**
     * Constructs a new pb_player.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_player);

    /** pb_player name. */
    public name: string;

    /** pb_player logo. */
    public logo: number;

    /** pb_player gid. */
    public gid: number;

    /** pb_player gname. */
    public gname: string;

    /** pb_player border. */
    public border: number;

    /** pb_player glv. */
    public glv: number;

    /** pb_player country. */
    public country: string;

    /** pb_player sds. */
    public sds: string;

    /** pb_player city. */
    public city: string;

    /**
     * Creates a new pb_player instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_player instance
     */
    public static create(properties?: Ipb_player): pb_player;

    /**
     * Encodes the specified pb_player message. Does not implicitly {@link pb_player.verify|verify} messages.
     * @param message pb_player message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_player, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_player message, length delimited. Does not implicitly {@link pb_player.verify|verify} messages.
     * @param message pb_player message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_player, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_player message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_player;

    /**
     * Decodes a pb_player message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_player;

    /**
     * Verifies a pb_player message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_player message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_player
     */
    public static fromObject(object: { [k: string]: any }): pb_player;

    /**
     * Creates a plain object from a pb_player message. Also converts values to other types if specified.
     * @param message pb_player
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_player, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_player to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_player
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_server. */
export interface Ipb_server {

    /** pb_server sid */
    sid: number;

    /** pb_server sname */
    sname: string;

    /** pb_server pname */
    pname?: (string|null);

    /** pb_server plogo */
    plogo?: (number|null);

    /** pb_server plv */
    plv?: (number|null);

    /** pb_server flag */
    flag?: (number|null);

    /** pb_server uid */
    uid?: (number|null);

    /** pb_server border */
    border?: (number|null);

    /** pb_server loginCd */
    loginCd?: (number|null);
}

/** Represents a pb_server. */
export class pb_server implements Ipb_server {

    /**
     * Constructs a new pb_server.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_server);

    /** pb_server sid. */
    public sid: number;

    /** pb_server sname. */
    public sname: string;

    /** pb_server pname. */
    public pname: string;

    /** pb_server plogo. */
    public plogo: number;

    /** pb_server plv. */
    public plv: number;

    /** pb_server flag. */
    public flag: number;

    /** pb_server uid. */
    public uid: number;

    /** pb_server border. */
    public border: number;

    /** pb_server loginCd. */
    public loginCd: number;

    /**
     * Creates a new pb_server instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_server instance
     */
    public static create(properties?: Ipb_server): pb_server;

    /**
     * Encodes the specified pb_server message. Does not implicitly {@link pb_server.verify|verify} messages.
     * @param message pb_server message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_server, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_server message, length delimited. Does not implicitly {@link pb_server.verify|verify} messages.
     * @param message pb_server message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_server, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_server message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_server
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_server;

    /**
     * Decodes a pb_server message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_server
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_server;

    /**
     * Verifies a pb_server message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_server message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_server
     */
    public static fromObject(object: { [k: string]: any }): pb_server;

    /**
     * Creates a plain object from a pb_server message. Also converts values to other types if specified.
     * @param message pb_server
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_server, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_server to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_server
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_item. */
export interface Ipb_item {

    /** pb_item id */
    id: number;

    /** pb_item num */
    num: (number|Long);
}

/** Represents a pb_item. */
export class pb_item implements Ipb_item {

    /**
     * Constructs a new pb_item.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_item);

    /** pb_item id. */
    public id: number;

    /** pb_item num. */
    public num: (number|Long);

    /**
     * Creates a new pb_item instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_item instance
     */
    public static create(properties?: Ipb_item): pb_item;

    /**
     * Encodes the specified pb_item message. Does not implicitly {@link pb_item.verify|verify} messages.
     * @param message pb_item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_item message, length delimited. Does not implicitly {@link pb_item.verify|verify} messages.
     * @param message pb_item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_item message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_item;

    /**
     * Decodes a pb_item message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_item;

    /**
     * Verifies a pb_item message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_item message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_item
     */
    public static fromObject(object: { [k: string]: any }): pb_item;

    /**
     * Creates a plain object from a pb_item message. Also converts values to other types if specified.
     * @param message pb_item
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_item to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_item
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_equip. */
export interface Ipb_equip {

    /** pb_equip id */
    id: number;

    /** pb_equip num */
    num: number;

    /** pb_equip eid */
    eid?: (number|null);

    /** pb_equip hid */
    hid?: (number|null);
}

/** Represents a pb_equip. */
export class pb_equip implements Ipb_equip {

    /**
     * Constructs a new pb_equip.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_equip);

    /** pb_equip id. */
    public id: number;

    /** pb_equip num. */
    public num: number;

    /** pb_equip eid. */
    public eid: number;

    /** pb_equip hid. */
    public hid: number;

    /**
     * Creates a new pb_equip instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_equip instance
     */
    public static create(properties?: Ipb_equip): pb_equip;

    /**
     * Encodes the specified pb_equip message. Does not implicitly {@link pb_equip.verify|verify} messages.
     * @param message pb_equip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_equip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_equip message, length delimited. Does not implicitly {@link pb_equip.verify|verify} messages.
     * @param message pb_equip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_equip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_equip message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_equip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_equip;

    /**
     * Decodes a pb_equip message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_equip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_equip;

    /**
     * Verifies a pb_equip message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_equip message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_equip
     */
    public static fromObject(object: { [k: string]: any }): pb_equip;

    /**
     * Creates a plain object from a pb_equip message. Also converts values to other types if specified.
     * @param message pb_equip
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_equip, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_equip to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_equip
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_bag. */
export interface Ipb_bag {

    /** pb_bag items */
    items?: (Ipb_item[]|null);

    /** pb_bag equips */
    equips?: (Ipb_equip[]|null);
}

/** Represents a pb_bag. */
export class pb_bag implements Ipb_bag {

    /**
     * Constructs a new pb_bag.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_bag);

    /** pb_bag items. */
    public items: Ipb_item[];

    /** pb_bag equips. */
    public equips: Ipb_equip[];

    /**
     * Creates a new pb_bag instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_bag instance
     */
    public static create(properties?: Ipb_bag): pb_bag;

    /**
     * Encodes the specified pb_bag message. Does not implicitly {@link pb_bag.verify|verify} messages.
     * @param message pb_bag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_bag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_bag message, length delimited. Does not implicitly {@link pb_bag.verify|verify} messages.
     * @param message pb_bag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_bag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_bag message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_bag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_bag;

    /**
     * Decodes a pb_bag message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_bag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_bag;

    /**
     * Verifies a pb_bag message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_bag message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_bag
     */
    public static fromObject(object: { [k: string]: any }): pb_bag;

    /**
     * Creates a plain object from a pb_bag message. Also converts values to other types if specified.
     * @param message pb_bag
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_bag, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_bag to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_bag
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_hero_qlc. */
export interface Ipb_hero_qlc {

    /** pb_hero_qlc lv */
    lv?: (number|null);

    /** pb_hero_qlc atk */
    atk?: (number|null);

    /** pb_hero_qlc hp */
    hp?: (number|null);

    /** pb_hero_qlc spd */
    spd?: (number|null);

    /** pb_hero_qlc attrIdx */
    attrIdx?: (number|Long|null);

    /** pb_hero_qlc time */
    time?: (number|null);

    /** pb_hero_qlc cd */
    cd?: (number|null);
}

/** Represents a pb_hero_qlc. */
export class pb_hero_qlc implements Ipb_hero_qlc {

    /**
     * Constructs a new pb_hero_qlc.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_hero_qlc);

    /** pb_hero_qlc lv. */
    public lv: number;

    /** pb_hero_qlc atk. */
    public atk: number;

    /** pb_hero_qlc hp. */
    public hp: number;

    /** pb_hero_qlc spd. */
    public spd: number;

    /** pb_hero_qlc attrIdx. */
    public attrIdx: (number|Long);

    /** pb_hero_qlc time. */
    public time: number;

    /** pb_hero_qlc cd. */
    public cd: number;

    /**
     * Creates a new pb_hero_qlc instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_hero_qlc instance
     */
    public static create(properties?: Ipb_hero_qlc): pb_hero_qlc;

    /**
     * Encodes the specified pb_hero_qlc message. Does not implicitly {@link pb_hero_qlc.verify|verify} messages.
     * @param message pb_hero_qlc message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_hero_qlc, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_hero_qlc message, length delimited. Does not implicitly {@link pb_hero_qlc.verify|verify} messages.
     * @param message pb_hero_qlc message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_hero_qlc, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_hero_qlc message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_hero_qlc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_hero_qlc;

    /**
     * Decodes a pb_hero_qlc message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_hero_qlc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_hero_qlc;

    /**
     * Verifies a pb_hero_qlc message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_hero_qlc message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_hero_qlc
     */
    public static fromObject(object: { [k: string]: any }): pb_hero_qlc;

    /**
     * Creates a plain object from a pb_hero_qlc message. Also converts values to other types if specified.
     * @param message pb_hero_qlc
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_hero_qlc, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_hero_qlc to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_hero_qlc
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_hero_qlt. */
export interface Ipb_hero_qlt {

    /** pb_hero_qlt qlc */
    qlc?: (Ipb_hero_qlc|null);

    /** pb_hero_qlt qlcs */
    qlcs?: (Ipb_hero_qlc[]|null);

    /** pb_hero_qlt attrIdx */
    attrIdx?: (number|Long|null);
}

/** Represents a pb_hero_qlt. */
export class pb_hero_qlt implements Ipb_hero_qlt {

    /**
     * Constructs a new pb_hero_qlt.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_hero_qlt);

    /** pb_hero_qlt qlc. */
    public qlc?: (Ipb_hero_qlc|null);

    /** pb_hero_qlt qlcs. */
    public qlcs: Ipb_hero_qlc[];

    /** pb_hero_qlt attrIdx. */
    public attrIdx: (number|Long);

    /**
     * Creates a new pb_hero_qlt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_hero_qlt instance
     */
    public static create(properties?: Ipb_hero_qlt): pb_hero_qlt;

    /**
     * Encodes the specified pb_hero_qlt message. Does not implicitly {@link pb_hero_qlt.verify|verify} messages.
     * @param message pb_hero_qlt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_hero_qlt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_hero_qlt message, length delimited. Does not implicitly {@link pb_hero_qlt.verify|verify} messages.
     * @param message pb_hero_qlt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_hero_qlt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_hero_qlt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_hero_qlt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_hero_qlt;

    /**
     * Decodes a pb_hero_qlt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_hero_qlt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_hero_qlt;

    /**
     * Verifies a pb_hero_qlt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_hero_qlt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_hero_qlt
     */
    public static fromObject(object: { [k: string]: any }): pb_hero_qlt;

    /**
     * Creates a plain object from a pb_hero_qlt message. Also converts values to other types if specified.
     * @param message pb_hero_qlt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_hero_qlt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_hero_qlt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_hero_qlt
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_tree. */
export interface Ipb_tree {

    /** pb_tree lv */
    lv?: (number|null);

    /** pb_tree blv */
    blv?: (number|null);

    /** pb_tree bra */
    bra?: (number[]|null);
}

/** Represents a pb_tree. */
export class pb_tree implements Ipb_tree {

    /**
     * Constructs a new pb_tree.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_tree);

    /** pb_tree lv. */
    public lv: number;

    /** pb_tree blv. */
    public blv: number;

    /** pb_tree bra. */
    public bra: number[];

    /**
     * Creates a new pb_tree instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_tree instance
     */
    public static create(properties?: Ipb_tree): pb_tree;

    /**
     * Encodes the specified pb_tree message. Does not implicitly {@link pb_tree.verify|verify} messages.
     * @param message pb_tree message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_tree, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_tree message, length delimited. Does not implicitly {@link pb_tree.verify|verify} messages.
     * @param message pb_tree message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_tree, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_tree message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_tree
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_tree;

    /**
     * Decodes a pb_tree message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_tree
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_tree;

    /**
     * Verifies a pb_tree message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_tree message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_tree
     */
    public static fromObject(object: { [k: string]: any }): pb_tree;

    /**
     * Creates a plain object from a pb_tree message. Also converts values to other types if specified.
     * @param message pb_tree
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_tree, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_tree to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_tree
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_hero. */
export interface Ipb_hero {

    /** pb_hero hid */
    hid: number;

    /** pb_hero id */
    id: number;

    /** pb_hero lv */
    lv: number;

    /** pb_hero star */
    star: number;

    /** pb_hero flag */
    flag?: (number|null);

    /** pb_hero equips */
    equips?: (Ipb_equip[]|null);

    /** pb_hero wake */
    wake?: (number|null);

    /** pb_hero jade */
    jade?: (number[]|null);

    /** pb_hero visit */
    visit?: (boolean|null);

    /** pb_hero skillId */
    skillId?: (number[]|null);

    /** pb_hero sattrs */
    sattrs?: (Ipb_sattr[]|null);

    /** pb_hero qlt */
    qlt?: (Ipb_hero_qlt|null);

    /** pb_hero tree */
    tree?: (Ipb_tree|null);
}

/** Represents a pb_hero. */
export class pb_hero implements Ipb_hero {

    /**
     * Constructs a new pb_hero.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_hero);

    /** pb_hero hid. */
    public hid: number;

    /** pb_hero id. */
    public id: number;

    /** pb_hero lv. */
    public lv: number;

    /** pb_hero star. */
    public star: number;

    /** pb_hero flag. */
    public flag: number;

    /** pb_hero equips. */
    public equips: Ipb_equip[];

    /** pb_hero wake. */
    public wake: number;

    /** pb_hero jade. */
    public jade: number[];

    /** pb_hero visit. */
    public visit: boolean;

    /** pb_hero skillId. */
    public skillId: number[];

    /** pb_hero sattrs. */
    public sattrs: Ipb_sattr[];

    /** pb_hero qlt. */
    public qlt?: (Ipb_hero_qlt|null);

    /** pb_hero tree. */
    public tree?: (Ipb_tree|null);

    /**
     * Creates a new pb_hero instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_hero instance
     */
    public static create(properties?: Ipb_hero): pb_hero;

    /**
     * Encodes the specified pb_hero message. Does not implicitly {@link pb_hero.verify|verify} messages.
     * @param message pb_hero message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_hero, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_hero message, length delimited. Does not implicitly {@link pb_hero.verify|verify} messages.
     * @param message pb_hero message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_hero, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_hero message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_hero
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_hero;

    /**
     * Decodes a pb_hero message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_hero
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_hero;

    /**
     * Verifies a pb_hero message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_hero message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_hero
     */
    public static fromObject(object: { [k: string]: any }): pb_hero;

    /**
     * Creates a plain object from a pb_hero message. Also converts values to other types if specified.
     * @param message pb_hero
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_hero to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_hero
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_sattr. */
export interface Ipb_sattr {

    /** pb_sattr id */
    id?: (number|null);

    /** pb_sattr attr */
    attr?: (number|null);

    /** pb_sattr value */
    value?: (number|null);
}

/** Represents a pb_sattr. */
export class pb_sattr implements Ipb_sattr {

    /**
     * Constructs a new pb_sattr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_sattr);

    /** pb_sattr id. */
    public id: number;

    /** pb_sattr attr. */
    public attr: number;

    /** pb_sattr value. */
    public value: number;

    /**
     * Creates a new pb_sattr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_sattr instance
     */
    public static create(properties?: Ipb_sattr): pb_sattr;

    /**
     * Encodes the specified pb_sattr message. Does not implicitly {@link pb_sattr.verify|verify} messages.
     * @param message pb_sattr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_sattr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_sattr message, length delimited. Does not implicitly {@link pb_sattr.verify|verify} messages.
     * @param message pb_sattr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_sattr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_sattr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_sattr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_sattr;

    /**
     * Decodes a pb_sattr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_sattr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_sattr;

    /**
     * Verifies a pb_sattr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_sattr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_sattr
     */
    public static fromObject(object: { [k: string]: any }): pb_sattr;

    /**
     * Creates a plain object from a pb_sattr message. Also converts values to other types if specified.
     * @param message pb_sattr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_sattr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_sattr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_sattr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_dup. */
export interface Ipb_dup {

    /** pb_dup id */
    id?: (number|null);

    /** pb_dup bids */
    bids?: (number[]|null);

    /** pb_dup sts */
    sts?: (number|null);

    /** pb_dup mid */
    mid?: (number|null);

    /** pb_dup rid */
    rid?: (number|null);

    /** pb_dup skip */
    skip?: (number|null);
}

/** Represents a pb_dup. */
export class pb_dup implements Ipb_dup {

    /**
     * Constructs a new pb_dup.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_dup);

    /** pb_dup id. */
    public id: number;

    /** pb_dup bids. */
    public bids: number[];

    /** pb_dup sts. */
    public sts: number;

    /** pb_dup mid. */
    public mid: number;

    /** pb_dup rid. */
    public rid: number;

    /** pb_dup skip. */
    public skip: number;

    /**
     * Creates a new pb_dup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_dup instance
     */
    public static create(properties?: Ipb_dup): pb_dup;

    /**
     * Encodes the specified pb_dup message. Does not implicitly {@link pb_dup.verify|verify} messages.
     * @param message pb_dup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_dup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_dup message, length delimited. Does not implicitly {@link pb_dup.verify|verify} messages.
     * @param message pb_dup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_dup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_dup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_dup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_dup;

    /**
     * Decodes a pb_dup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_dup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_dup;

    /**
     * Verifies a pb_dup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_dup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_dup
     */
    public static fromObject(object: { [k: string]: any }): pb_dup;

    /**
     * Creates a plain object from a pb_dup message. Also converts values to other types if specified.
     * @param message pb_dup
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_dup, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_dup to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_dup
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_embr. */
export interface Ipb_embr {

    /** pb_embr uid */
    uid?: (number|null);

    /** pb_embr lv */
    lv?: (number|null);

    /** pb_embr status */
    status?: (number|null);

    /** pb_embr stime */
    stime?: (string|null);

    /** pb_embr logo */
    logo?: (number|null);

    /** pb_embr name */
    name?: (string|null);

    /** pb_embr border */
    border?: (number|null);

    /** pb_embr id */
    id?: (number|null);
}

/** Represents a pb_embr. */
export class pb_embr implements Ipb_embr {

    /**
     * Constructs a new pb_embr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_embr);

    /** pb_embr uid. */
    public uid: number;

    /** pb_embr lv. */
    public lv: number;

    /** pb_embr status. */
    public status: number;

    /** pb_embr stime. */
    public stime: string;

    /** pb_embr logo. */
    public logo: number;

    /** pb_embr name. */
    public name: string;

    /** pb_embr border. */
    public border: number;

    /** pb_embr id. */
    public id: number;

    /**
     * Creates a new pb_embr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_embr instance
     */
    public static create(properties?: Ipb_embr): pb_embr;

    /**
     * Encodes the specified pb_embr message. Does not implicitly {@link pb_embr.verify|verify} messages.
     * @param message pb_embr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_embr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_embr message, length delimited. Does not implicitly {@link pb_embr.verify|verify} messages.
     * @param message pb_embr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_embr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_embr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_embr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_embr;

    /**
     * Decodes a pb_embr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_embr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_embr;

    /**
     * Verifies a pb_embr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_embr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_embr
     */
    public static fromObject(object: { [k: string]: any }): pb_embr;

    /**
     * Creates a plain object from a pb_embr message. Also converts values to other types if specified.
     * @param message pb_embr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_embr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_embr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_embr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_scell. */
export interface Ipb_scell {

    /** pb_scell pos */
    pos?: (number|null);

    /** pb_scell status */
    status?: (number|null);

    /** pb_scell id */
    id?: (number|null);

    /** pb_scell ids1 */
    ids1?: (number[]|null);

    /** pb_scell ids2 */
    ids2?: (number[]|null);
}

/** Represents a pb_scell. */
export class pb_scell implements Ipb_scell {

    /**
     * Constructs a new pb_scell.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_scell);

    /** pb_scell pos. */
    public pos: number;

    /** pb_scell status. */
    public status: number;

    /** pb_scell id. */
    public id: number;

    /** pb_scell ids1. */
    public ids1: number[];

    /** pb_scell ids2. */
    public ids2: number[];

    /**
     * Creates a new pb_scell instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_scell instance
     */
    public static create(properties?: Ipb_scell): pb_scell;

    /**
     * Encodes the specified pb_scell message. Does not implicitly {@link pb_scell.verify|verify} messages.
     * @param message pb_scell message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_scell, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_scell message, length delimited. Does not implicitly {@link pb_scell.verify|verify} messages.
     * @param message pb_scell message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_scell, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_scell message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_scell
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_scell;

    /**
     * Decodes a pb_scell message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_scell
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_scell;

    /**
     * Verifies a pb_scell message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_scell message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_scell
     */
    public static fromObject(object: { [k: string]: any }): pb_scell;

    /**
     * Creates a plain object from a pb_scell message. Also converts values to other types if specified.
     * @param message pb_scell
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_scell, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_scell to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_scell
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_sbuilding. */
export interface Ipb_sbuilding {

    /** pb_sbuilding lv */
    lv?: (number|null);

    /** pb_sbuilding cd */
    cd?: (number|null);

    /** pb_sbuilding num */
    num?: (number|null);
}

/** Represents a pb_sbuilding. */
export class pb_sbuilding implements Ipb_sbuilding {

    /**
     * Constructs a new pb_sbuilding.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_sbuilding);

    /** pb_sbuilding lv. */
    public lv: number;

    /** pb_sbuilding cd. */
    public cd: number;

    /** pb_sbuilding num. */
    public num: number;

    /**
     * Creates a new pb_sbuilding instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_sbuilding instance
     */
    public static create(properties?: Ipb_sbuilding): pb_sbuilding;

    /**
     * Encodes the specified pb_sbuilding message. Does not implicitly {@link pb_sbuilding.verify|verify} messages.
     * @param message pb_sbuilding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_sbuilding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_sbuilding message, length delimited. Does not implicitly {@link pb_sbuilding.verify|verify} messages.
     * @param message pb_sbuilding message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_sbuilding, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_sbuilding message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_sbuilding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_sbuilding;

    /**
     * Decodes a pb_sbuilding message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_sbuilding
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_sbuilding;

    /**
     * Verifies a pb_sbuilding message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_sbuilding message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_sbuilding
     */
    public static fromObject(object: { [k: string]: any }): pb_sbuilding;

    /**
     * Creates a plain object from a pb_sbuilding message. Also converts values to other types if specified.
     * @param message pb_sbuilding
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_sbuilding, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_sbuilding to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_sbuilding
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_sscell. */
export interface Ipb_sscell {

    /** pb_sscell pos */
    pos?: (number|null);

    /** pb_sscell status */
    status?: (number|null);

    /** pb_sscell id */
    id?: (number|null);

    /** pb_sscell bossId */
    bossId?: (number|null);

    /** pb_sscell bossHp */
    bossHp?: (number[]|null);

    /** pb_sscell mbr */
    mbr?: (Ipb_pmbr|null);

    /** pb_sscell hid */
    hid?: (number|null);

    /** pb_sscell cd */
    cd?: (number|null);

    /** pb_sscell lv */
    lv?: (number|null);

    /** pb_sscell add */
    add?: (number|null);

    /** pb_sscell times */
    times?: (number|null);

    /** pb_sscell rid */
    rid?: (number|null);

    /** pb_sscell wake */
    wake?: (number|null);

    /** pb_sscell rlv */
    rlv?: (number|null);

    /** pb_sscell rqlv */
    rqlv?: (number|null);
}

/** Represents a pb_sscell. */
export class pb_sscell implements Ipb_sscell {

    /**
     * Constructs a new pb_sscell.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_sscell);

    /** pb_sscell pos. */
    public pos: number;

    /** pb_sscell status. */
    public status: number;

    /** pb_sscell id. */
    public id: number;

    /** pb_sscell bossId. */
    public bossId: number;

    /** pb_sscell bossHp. */
    public bossHp: number[];

    /** pb_sscell mbr. */
    public mbr?: (Ipb_pmbr|null);

    /** pb_sscell hid. */
    public hid: number;

    /** pb_sscell cd. */
    public cd: number;

    /** pb_sscell lv. */
    public lv: number;

    /** pb_sscell add. */
    public add: number;

    /** pb_sscell times. */
    public times: number;

    /** pb_sscell rid. */
    public rid: number;

    /** pb_sscell wake. */
    public wake: number;

    /** pb_sscell rlv. */
    public rlv: number;

    /** pb_sscell rqlv. */
    public rqlv: number;

    /**
     * Creates a new pb_sscell instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_sscell instance
     */
    public static create(properties?: Ipb_sscell): pb_sscell;

    /**
     * Encodes the specified pb_sscell message. Does not implicitly {@link pb_sscell.verify|verify} messages.
     * @param message pb_sscell message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_sscell, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_sscell message, length delimited. Does not implicitly {@link pb_sscell.verify|verify} messages.
     * @param message pb_sscell message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_sscell, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_sscell message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_sscell
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_sscell;

    /**
     * Decodes a pb_sscell message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_sscell
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_sscell;

    /**
     * Verifies a pb_sscell message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_sscell message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_sscell
     */
    public static fromObject(object: { [k: string]: any }): pb_sscell;

    /**
     * Creates a plain object from a pb_sscell message. Also converts values to other types if specified.
     * @param message pb_sscell
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_sscell, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_sscell to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_sscell
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ssevent. */
export interface Ipb_ssevent {

    /** pb_ssevent id */
    id?: (number|null);

    /** pb_ssevent num */
    num?: (number|null);

    /** pb_ssevent lvItem */
    lvItem?: (number|null);

    /** pb_ssevent score */
    score?: (number|null);

    /** pb_ssevent num2 */
    num2?: (number|null);

    /** pb_ssevent reward */
    reward?: (Ipb_bag[]|null);
}

/** Represents a pb_ssevent. */
export class pb_ssevent implements Ipb_ssevent {

    /**
     * Constructs a new pb_ssevent.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ssevent);

    /** pb_ssevent id. */
    public id: number;

    /** pb_ssevent num. */
    public num: number;

    /** pb_ssevent lvItem. */
    public lvItem: number;

    /** pb_ssevent score. */
    public score: number;

    /** pb_ssevent num2. */
    public num2: number;

    /** pb_ssevent reward. */
    public reward: Ipb_bag[];

    /**
     * Creates a new pb_ssevent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ssevent instance
     */
    public static create(properties?: Ipb_ssevent): pb_ssevent;

    /**
     * Encodes the specified pb_ssevent message. Does not implicitly {@link pb_ssevent.verify|verify} messages.
     * @param message pb_ssevent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ssevent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ssevent message, length delimited. Does not implicitly {@link pb_ssevent.verify|verify} messages.
     * @param message pb_ssevent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ssevent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ssevent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ssevent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ssevent;

    /**
     * Decodes a pb_ssevent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ssevent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ssevent;

    /**
     * Verifies a pb_ssevent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ssevent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ssevent
     */
    public static fromObject(object: { [k: string]: any }): pb_ssevent;

    /**
     * Creates a plain object from a pb_ssevent message. Also converts values to other types if specified.
     * @param message pb_ssevent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ssevent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ssevent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ssevent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_sssweep. */
export interface Ipb_sssweep {

    /** pb_sssweep pos */
    pos?: (number|null);

    /** pb_sssweep hid */
    hid?: (number|null);
}

/** Represents a pb_sssweep. */
export class pb_sssweep implements Ipb_sssweep {

    /**
     * Constructs a new pb_sssweep.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_sssweep);

    /** pb_sssweep pos. */
    public pos: number;

    /** pb_sssweep hid. */
    public hid: number;

    /**
     * Creates a new pb_sssweep instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_sssweep instance
     */
    public static create(properties?: Ipb_sssweep): pb_sssweep;

    /**
     * Encodes the specified pb_sssweep message. Does not implicitly {@link pb_sssweep.verify|verify} messages.
     * @param message pb_sssweep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_sssweep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_sssweep message, length delimited. Does not implicitly {@link pb_sssweep.verify|verify} messages.
     * @param message pb_sssweep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_sssweep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_sssweep message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_sssweep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_sssweep;

    /**
     * Decodes a pb_sssweep message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_sssweep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_sssweep;

    /**
     * Verifies a pb_sssweep message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_sssweep message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_sssweep
     */
    public static fromObject(object: { [k: string]: any }): pb_sssweep;

    /**
     * Creates a plain object from a pb_sssweep message. Also converts values to other types if specified.
     * @param message pb_sssweep
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_sssweep, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_sssweep to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_sssweep
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gacha. */
export interface Ipb_gacha {

    /** pb_gacha item */
    item: number;

    /** pb_gacha gem */
    gem: number;

    /** pb_gacha id */
    id?: (number|null);

    /** pb_gacha act */
    act?: (number|null);

    /** pb_gacha cd */
    cd?: (number|null);
}

/** Represents a pb_gacha. */
export class pb_gacha implements Ipb_gacha {

    /**
     * Constructs a new pb_gacha.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gacha);

    /** pb_gacha item. */
    public item: number;

    /** pb_gacha gem. */
    public gem: number;

    /** pb_gacha id. */
    public id: number;

    /** pb_gacha act. */
    public act: number;

    /** pb_gacha cd. */
    public cd: number;

    /**
     * Creates a new pb_gacha instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gacha instance
     */
    public static create(properties?: Ipb_gacha): pb_gacha;

    /**
     * Encodes the specified pb_gacha message. Does not implicitly {@link pb_gacha.verify|verify} messages.
     * @param message pb_gacha message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gacha, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gacha message, length delimited. Does not implicitly {@link pb_gacha.verify|verify} messages.
     * @param message pb_gacha message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gacha, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gacha message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gacha
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gacha;

    /**
     * Decodes a pb_gacha message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gacha
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gacha;

    /**
     * Verifies a pb_gacha message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gacha message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gacha
     */
    public static fromObject(object: { [k: string]: any }): pb_gacha;

    /**
     * Creates a plain object from a pb_gacha message. Also converts values to other types if specified.
     * @param message pb_gacha
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gacha, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gacha to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gacha
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_mail. */
export interface Ipb_mail {

    /** pb_mail mid */
    mid: number;

    /** pb_mail id */
    id: number;

    /** pb_mail uid */
    uid?: (number|Long|null);

    /** pb_mail flag */
    flag: number;

    /** pb_mail sendTime */
    sendTime: number;

    /** pb_mail title */
    title?: (string|null);

    /** pb_mail from */
    from?: (string|null);

    /** pb_mail content */
    content?: (string|null);

    /** pb_mail contentO */
    contentO?: (string|null);

    /** pb_mail affix */
    affix?: (Ipb_bag|null);
}

/** Represents a pb_mail. */
export class pb_mail implements Ipb_mail {

    /**
     * Constructs a new pb_mail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_mail);

    /** pb_mail mid. */
    public mid: number;

    /** pb_mail id. */
    public id: number;

    /** pb_mail uid. */
    public uid: (number|Long);

    /** pb_mail flag. */
    public flag: number;

    /** pb_mail sendTime. */
    public sendTime: number;

    /** pb_mail title. */
    public title: string;

    /** pb_mail from. */
    public from: string;

    /** pb_mail content. */
    public content: string;

    /** pb_mail contentO. */
    public contentO: string;

    /** pb_mail affix. */
    public affix?: (Ipb_bag|null);

    /**
     * Creates a new pb_mail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_mail instance
     */
    public static create(properties?: Ipb_mail): pb_mail;

    /**
     * Encodes the specified pb_mail message. Does not implicitly {@link pb_mail.verify|verify} messages.
     * @param message pb_mail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_mail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_mail message, length delimited. Does not implicitly {@link pb_mail.verify|verify} messages.
     * @param message pb_mail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_mail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_mail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_mail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_mail;

    /**
     * Decodes a pb_mail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_mail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_mail;

    /**
     * Verifies a pb_mail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_mail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_mail
     */
    public static fromObject(object: { [k: string]: any }): pb_mail;

    /**
     * Creates a plain object from a pb_mail message. Also converts values to other types if specified.
     * @param message pb_mail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_mail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_mail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_mail
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_cunit. */
export interface Ipb_cunit {

    /** pb_cunit id */
    id: number;

    /** pb_cunit lv */
    lv?: (number|null);

    /** pb_cunit star */
    star?: (number|null);

    /** pb_cunit power */
    power?: (number|Long|null);

    /** pb_cunit hp */
    hp?: (number|null);

    /** pb_cunit atk */
    atk?: (number|null);

    /** pb_cunit armor */
    armor?: (number|null);

    /** pb_cunit spd */
    spd?: (number|null);

    /** pb_cunit wake */
    wake?: (number|null);

    /** pb_cunit skin */
    skin?: (number|null);

    /** pb_cunit stl */
    stl?: (number|null);

    /** pb_cunit qlv */
    qlv?: (number|null);

    /** pb_cunit tree */
    tree?: (Ipb_tree|null);

    /** pb_cunit core */
    core?: (number|null);
}

/** Represents a pb_cunit. */
export class pb_cunit implements Ipb_cunit {

    /**
     * Constructs a new pb_cunit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_cunit);

    /** pb_cunit id. */
    public id: number;

    /** pb_cunit lv. */
    public lv: number;

    /** pb_cunit star. */
    public star: number;

    /** pb_cunit power. */
    public power: (number|Long);

    /** pb_cunit hp. */
    public hp: number;

    /** pb_cunit atk. */
    public atk: number;

    /** pb_cunit armor. */
    public armor: number;

    /** pb_cunit spd. */
    public spd: number;

    /** pb_cunit wake. */
    public wake: number;

    /** pb_cunit skin. */
    public skin: number;

    /** pb_cunit stl. */
    public stl: number;

    /** pb_cunit qlv. */
    public qlv: number;

    /** pb_cunit tree. */
    public tree?: (Ipb_tree|null);

    /** pb_cunit core. */
    public core: number;

    /**
     * Creates a new pb_cunit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_cunit instance
     */
    public static create(properties?: Ipb_cunit): pb_cunit;

    /**
     * Encodes the specified pb_cunit message. Does not implicitly {@link pb_cunit.verify|verify} messages.
     * @param message pb_cunit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_cunit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_cunit message, length delimited. Does not implicitly {@link pb_cunit.verify|verify} messages.
     * @param message pb_cunit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_cunit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_cunit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_cunit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_cunit;

    /**
     * Decodes a pb_cunit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_cunit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_cunit;

    /**
     * Verifies a pb_cunit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_cunit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_cunit
     */
    public static fromObject(object: { [k: string]: any }): pb_cunit;

    /**
     * Creates a plain object from a pb_cunit message. Also converts values to other types if specified.
     * @param message pb_cunit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_cunit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_cunit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_cunit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_chat. */
export interface Ipb_chat {

    /** pb_chat uid */
    uid?: (number|Long|null);

    /** pb_chat logo */
    logo?: (number|null);

    /** pb_chat lv */
    lv?: (number|null);

    /** pb_chat vip */
    vip?: (number|null);

    /** pb_chat name */
    name?: (string|null);

    /** pb_chat type */
    type?: (number|null);

    /** pb_chat text */
    text?: (string|null);

    /** pb_chat time */
    time?: (number|null);

    /** pb_chat shareId */
    shareId?: (number|null);

    /** pb_chat heroId */
    heroId?: (number|null);

    /** pb_chat finalRank */
    finalRank?: (number|null);

    /** pb_chat gid */
    gid?: (number|null);

    /** pb_chat gname */
    gname?: (string|null);

    /** pb_chat glv */
    glv?: (number|null);

    /** pb_chat gmsg */
    gmsg?: (string|null);

    /** pb_chat gFight */
    gFight?: (number|null);

    /** pb_chat border */
    border?: (number|null);

    /** pb_chat hteam */
    hteam?: (Ipb_hteam|null);

    /** pb_chat country */
    country?: (string|null);

    /** pb_chat sds */
    sds?: (string|null);

    /** pb_chat city */
    city?: (string|null);

    /** pb_chat emblem */
    emblem?: (number|Long|null);
}

/** Represents a pb_chat. */
export class pb_chat implements Ipb_chat {

    /**
     * Constructs a new pb_chat.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_chat);

    /** pb_chat uid. */
    public uid: (number|Long);

    /** pb_chat logo. */
    public logo: number;

    /** pb_chat lv. */
    public lv: number;

    /** pb_chat vip. */
    public vip: number;

    /** pb_chat name. */
    public name: string;

    /** pb_chat type. */
    public type: number;

    /** pb_chat text. */
    public text: string;

    /** pb_chat time. */
    public time: number;

    /** pb_chat shareId. */
    public shareId: number;

    /** pb_chat heroId. */
    public heroId: number;

    /** pb_chat finalRank. */
    public finalRank: number;

    /** pb_chat gid. */
    public gid: number;

    /** pb_chat gname. */
    public gname: string;

    /** pb_chat glv. */
    public glv: number;

    /** pb_chat gmsg. */
    public gmsg: string;

    /** pb_chat gFight. */
    public gFight: number;

    /** pb_chat border. */
    public border: number;

    /** pb_chat hteam. */
    public hteam?: (Ipb_hteam|null);

    /** pb_chat country. */
    public country: string;

    /** pb_chat sds. */
    public sds: string;

    /** pb_chat city. */
    public city: string;

    /** pb_chat emblem. */
    public emblem: (number|Long);

    /**
     * Creates a new pb_chat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_chat instance
     */
    public static create(properties?: Ipb_chat): pb_chat;

    /**
     * Encodes the specified pb_chat message. Does not implicitly {@link pb_chat.verify|verify} messages.
     * @param message pb_chat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_chat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_chat message, length delimited. Does not implicitly {@link pb_chat.verify|verify} messages.
     * @param message pb_chat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_chat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_chat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_chat;

    /**
     * Decodes a pb_chat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_chat;

    /**
     * Verifies a pb_chat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_chat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_chat
     */
    public static fromObject(object: { [k: string]: any }): pb_chat;

    /**
     * Creates a plain object from a pb_chat message. Also converts values to other types if specified.
     * @param message pb_chat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_chat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_chat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_upfile. */
export interface Ipb_upfile {

    /** pb_upfile md5 */
    md5: string;

    /** pb_upfile path */
    path: string;
}

/** Represents a pb_upfile. */
export class pb_upfile implements Ipb_upfile {

    /**
     * Constructs a new pb_upfile.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_upfile);

    /** pb_upfile md5. */
    public md5: string;

    /** pb_upfile path. */
    public path: string;

    /**
     * Creates a new pb_upfile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_upfile instance
     */
    public static create(properties?: Ipb_upfile): pb_upfile;

    /**
     * Encodes the specified pb_upfile message. Does not implicitly {@link pb_upfile.verify|verify} messages.
     * @param message pb_upfile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_upfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_upfile message, length delimited. Does not implicitly {@link pb_upfile.verify|verify} messages.
     * @param message pb_upfile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_upfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_upfile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_upfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_upfile;

    /**
     * Decodes a pb_upfile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_upfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_upfile;

    /**
     * Verifies a pb_upfile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_upfile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_upfile
     */
    public static fromObject(object: { [k: string]: any }): pb_upfile;

    /**
     * Creates a plain object from a pb_upfile message. Also converts values to other types if specified.
     * @param message pb_upfile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_upfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_upfile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_upfile
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_good. */
export interface Ipb_good {

    /** pb_good id */
    id: number;

    /** pb_good type */
    type: number;

    /** pb_good count */
    count: number;

    /** pb_good excelId */
    excelId: number;

    /** pb_good bought */
    bought?: (number|null);
}

/** Represents a pb_good. */
export class pb_good implements Ipb_good {

    /**
     * Constructs a new pb_good.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_good);

    /** pb_good id. */
    public id: number;

    /** pb_good type. */
    public type: number;

    /** pb_good count. */
    public count: number;

    /** pb_good excelId. */
    public excelId: number;

    /** pb_good bought. */
    public bought: number;

    /**
     * Creates a new pb_good instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_good instance
     */
    public static create(properties?: Ipb_good): pb_good;

    /**
     * Encodes the specified pb_good message. Does not implicitly {@link pb_good.verify|verify} messages.
     * @param message pb_good message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_good, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_good message, length delimited. Does not implicitly {@link pb_good.verify|verify} messages.
     * @param message pb_good message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_good, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_good message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_good
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_good;

    /**
     * Decodes a pb_good message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_good
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_good;

    /**
     * Verifies a pb_good message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_good message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_good
     */
    public static fromObject(object: { [k: string]: any }): pb_good;

    /**
     * Creates a plain object from a pb_good message. Also converts values to other types if specified.
     * @param message pb_good
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_good, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_good to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_good
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_onepay. */
export interface Ipb_onepay {

    /** pb_onepay tid */
    tid: string;

    /** pb_onepay txid */
    txid?: (string|null);

    /** pb_onepay tdate */
    tdate?: (string|null);
}

/** Represents a pb_onepay. */
export class pb_onepay implements Ipb_onepay {

    /**
     * Constructs a new pb_onepay.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_onepay);

    /** pb_onepay tid. */
    public tid: string;

    /** pb_onepay txid. */
    public txid: string;

    /** pb_onepay tdate. */
    public tdate: string;

    /**
     * Creates a new pb_onepay instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_onepay instance
     */
    public static create(properties?: Ipb_onepay): pb_onepay;

    /**
     * Encodes the specified pb_onepay message. Does not implicitly {@link pb_onepay.verify|verify} messages.
     * @param message pb_onepay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_onepay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_onepay message, length delimited. Does not implicitly {@link pb_onepay.verify|verify} messages.
     * @param message pb_onepay message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_onepay, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_onepay message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_onepay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_onepay;

    /**
     * Decodes a pb_onepay message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_onepay
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_onepay;

    /**
     * Verifies a pb_onepay message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_onepay message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_onepay
     */
    public static fromObject(object: { [k: string]: any }): pb_onepay;

    /**
     * Creates a plain object from a pb_onepay message. Also converts values to other types if specified.
     * @param message pb_onepay
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_onepay, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_onepay to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_onepay
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_hook. */
export interface Ipb_hook {

    /** pb_hook status */
    status: number;

    /** pb_hook hookStage */
    hookStage?: (number|null);

    /** pb_hook bossCd */
    bossCd?: (number|null);

    /** pb_hook pokerCd */
    pokerCd?: (number|null);

    /** pb_hook reward */
    reward?: (Ipb_bag|null);

    /** pb_hook pveStage */
    pveStage?: (number|null);

    /** pb_hook extra */
    extra?: (Ipb_bag|null);

    /** pb_hook ids */
    ids?: (Ipb_item[]|null);

    /** pb_hook hardStage */
    hardStage?: (number|null);
}

/** Represents a pb_hook. */
export class pb_hook implements Ipb_hook {

    /**
     * Constructs a new pb_hook.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_hook);

    /** pb_hook status. */
    public status: number;

    /** pb_hook hookStage. */
    public hookStage: number;

    /** pb_hook bossCd. */
    public bossCd: number;

    /** pb_hook pokerCd. */
    public pokerCd: number;

    /** pb_hook reward. */
    public reward?: (Ipb_bag|null);

    /** pb_hook pveStage. */
    public pveStage: number;

    /** pb_hook extra. */
    public extra?: (Ipb_bag|null);

    /** pb_hook ids. */
    public ids: Ipb_item[];

    /** pb_hook hardStage. */
    public hardStage: number;

    /**
     * Creates a new pb_hook instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_hook instance
     */
    public static create(properties?: Ipb_hook): pb_hook;

    /**
     * Encodes the specified pb_hook message. Does not implicitly {@link pb_hook.verify|verify} messages.
     * @param message pb_hook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_hook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_hook message, length delimited. Does not implicitly {@link pb_hook.verify|verify} messages.
     * @param message pb_hook message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_hook, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_hook message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_hook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_hook;

    /**
     * Decodes a pb_hook message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_hook
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_hook;

    /**
     * Verifies a pb_hook message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_hook message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_hook
     */
    public static fromObject(object: { [k: string]: any }): pb_hook;

    /**
     * Creates a plain object from a pb_hook message. Also converts values to other types if specified.
     * @param message pb_hook
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_hook, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_hook to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_hook
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_frd. */
export interface Ipb_frd {

    /** pb_frd logo */
    logo: number;

    /** pb_frd name */
    name: string;

    /** pb_frd lv */
    lv: number;

    /** pb_frd flag */
    flag?: (number|null);

    /** pb_frd uid */
    uid?: (number|Long|null);

    /** pb_frd last */
    last?: (number|null);

    /** pb_frd power */
    power?: (number|Long|null);

    /** pb_frd border */
    border?: (number|null);

    /** pb_frd country */
    country?: (string|null);

    /** pb_frd sds */
    sds?: (string|null);

    /** pb_frd city */
    city?: (string|null);

    /** pb_frd emblem */
    emblem?: (number|Long|null);
}

/** Represents a pb_frd. */
export class pb_frd implements Ipb_frd {

    /**
     * Constructs a new pb_frd.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_frd);

    /** pb_frd logo. */
    public logo: number;

    /** pb_frd name. */
    public name: string;

    /** pb_frd lv. */
    public lv: number;

    /** pb_frd flag. */
    public flag: number;

    /** pb_frd uid. */
    public uid: (number|Long);

    /** pb_frd last. */
    public last: number;

    /** pb_frd power. */
    public power: (number|Long);

    /** pb_frd border. */
    public border: number;

    /** pb_frd country. */
    public country: string;

    /** pb_frd sds. */
    public sds: string;

    /** pb_frd city. */
    public city: string;

    /** pb_frd emblem. */
    public emblem: (number|Long);

    /**
     * Creates a new pb_frd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_frd instance
     */
    public static create(properties?: Ipb_frd): pb_frd;

    /**
     * Encodes the specified pb_frd message. Does not implicitly {@link pb_frd.verify|verify} messages.
     * @param message pb_frd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_frd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_frd message, length delimited. Does not implicitly {@link pb_frd.verify|verify} messages.
     * @param message pb_frd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_frd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_frd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_frd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_frd;

    /**
     * Decodes a pb_frd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_frd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_frd;

    /**
     * Verifies a pb_frd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_frd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_frd
     */
    public static fromObject(object: { [k: string]: any }): pb_frd;

    /**
     * Creates a plain object from a pb_frd message. Also converts values to other types if specified.
     * @param message pb_frd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_frd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_frd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_frd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_friend. */
export interface Ipb_friend {

    /** pb_friend friends */
    friends?: (Ipb_frd[]|null);

    /** pb_friend love */
    love: number;

    /** pb_friend cd */
    cd: number;

    /** pb_friend apply */
    apply?: (Ipb_frd[]|null);

    /** pb_friend recmd */
    recmd?: (Ipb_frd[]|null);
}

/** Represents a pb_friend. */
export class pb_friend implements Ipb_friend {

    /**
     * Constructs a new pb_friend.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_friend);

    /** pb_friend friends. */
    public friends: Ipb_frd[];

    /** pb_friend love. */
    public love: number;

    /** pb_friend cd. */
    public cd: number;

    /** pb_friend apply. */
    public apply: Ipb_frd[];

    /** pb_friend recmd. */
    public recmd: Ipb_frd[];

    /**
     * Creates a new pb_friend instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_friend instance
     */
    public static create(properties?: Ipb_friend): pb_friend;

    /**
     * Encodes the specified pb_friend message. Does not implicitly {@link pb_friend.verify|verify} messages.
     * @param message pb_friend message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_friend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_friend message, length delimited. Does not implicitly {@link pb_friend.verify|verify} messages.
     * @param message pb_friend message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_friend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_friend message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_friend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_friend;

    /**
     * Decodes a pb_friend message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_friend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_friend;

    /**
     * Verifies a pb_friend message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_friend message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_friend
     */
    public static fromObject(object: { [k: string]: any }): pb_friend;

    /**
     * Creates a plain object from a pb_friend message. Also converts values to other types if specified.
     * @param message pb_friend
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_friend, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_friend to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_friend
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_casino_item. */
export interface Ipb_casino_item {

    /** pb_casino_item type */
    type: number;

    /** pb_casino_item id */
    id: number;

    /** pb_casino_item count */
    count: number;

    /** pb_casino_item cool */
    cool?: (number|null);

    /** pb_casino_item limitBuy */
    limitBuy?: (number|null);

    /** pb_casino_item weight */
    weight?: (number|null);
}

/** Represents a pb_casino_item. */
export class pb_casino_item implements Ipb_casino_item {

    /**
     * Constructs a new pb_casino_item.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_casino_item);

    /** pb_casino_item type. */
    public type: number;

    /** pb_casino_item id. */
    public id: number;

    /** pb_casino_item count. */
    public count: number;

    /** pb_casino_item cool. */
    public cool: number;

    /** pb_casino_item limitBuy. */
    public limitBuy: number;

    /** pb_casino_item weight. */
    public weight: number;

    /**
     * Creates a new pb_casino_item instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_casino_item instance
     */
    public static create(properties?: Ipb_casino_item): pb_casino_item;

    /**
     * Encodes the specified pb_casino_item message. Does not implicitly {@link pb_casino_item.verify|verify} messages.
     * @param message pb_casino_item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_casino_item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_casino_item message, length delimited. Does not implicitly {@link pb_casino_item.verify|verify} messages.
     * @param message pb_casino_item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_casino_item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_casino_item message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_casino_item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_casino_item;

    /**
     * Decodes a pb_casino_item message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_casino_item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_casino_item;

    /**
     * Verifies a pb_casino_item message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_casino_item message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_casino_item
     */
    public static fromObject(object: { [k: string]: any }): pb_casino_item;

    /**
     * Creates a plain object from a pb_casino_item message. Also converts values to other types if specified.
     * @param message pb_casino_item
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_casino_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_casino_item to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_casino_item
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_casino_msg. */
export interface Ipb_casino_msg {

    /** pb_casino_msg name */
    name: string;

    /** pb_casino_msg type */
    type: number;

    /** pb_casino_msg id */
    id: number;

    /** pb_casino_msg count */
    count: number;
}

/** Represents a pb_casino_msg. */
export class pb_casino_msg implements Ipb_casino_msg {

    /**
     * Constructs a new pb_casino_msg.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_casino_msg);

    /** pb_casino_msg name. */
    public name: string;

    /** pb_casino_msg type. */
    public type: number;

    /** pb_casino_msg id. */
    public id: number;

    /** pb_casino_msg count. */
    public count: number;

    /**
     * Creates a new pb_casino_msg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_casino_msg instance
     */
    public static create(properties?: Ipb_casino_msg): pb_casino_msg;

    /**
     * Encodes the specified pb_casino_msg message. Does not implicitly {@link pb_casino_msg.verify|verify} messages.
     * @param message pb_casino_msg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_casino_msg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_casino_msg message, length delimited. Does not implicitly {@link pb_casino_msg.verify|verify} messages.
     * @param message pb_casino_msg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_casino_msg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_casino_msg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_casino_msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_casino_msg;

    /**
     * Decodes a pb_casino_msg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_casino_msg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_casino_msg;

    /**
     * Verifies a pb_casino_msg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_casino_msg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_casino_msg
     */
    public static fromObject(object: { [k: string]: any }): pb_casino_msg;

    /**
     * Creates a plain object from a pb_casino_msg message. Also converts values to other types if specified.
     * @param message pb_casino_msg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_casino_msg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_casino_msg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_casino_msg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gmember. */
export interface Ipb_gmember {

    /** pb_gmember uid */
    uid: (number|Long);

    /** pb_gmember name */
    name: string;

    /** pb_gmember lv */
    lv?: (number|null);

    /** pb_gmember logo */
    logo?: (number|null);

    /** pb_gmember last */
    last?: (number|null);

    /** pb_gmember title */
    title?: (number|null);

    /** pb_gmember power */
    power?: (number|Long|null);

    /** pb_gmember gfight */
    gfight?: (number|null);

    /** pb_gmember border */
    border?: (number|null);

    /** pb_gmember cwar */
    cwar?: (number|null);

    /** pb_gmember country */
    country?: (string|null);

    /** pb_gmember sds */
    sds?: (string|null);

    /** pb_gmember city */
    city?: (string|null);

    /** pb_gmember emblem */
    emblem?: (number|Long|null);
}

/** Represents a pb_gmember. */
export class pb_gmember implements Ipb_gmember {

    /**
     * Constructs a new pb_gmember.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gmember);

    /** pb_gmember uid. */
    public uid: (number|Long);

    /** pb_gmember name. */
    public name: string;

    /** pb_gmember lv. */
    public lv: number;

    /** pb_gmember logo. */
    public logo: number;

    /** pb_gmember last. */
    public last: number;

    /** pb_gmember title. */
    public title: number;

    /** pb_gmember power. */
    public power: (number|Long);

    /** pb_gmember gfight. */
    public gfight: number;

    /** pb_gmember border. */
    public border: number;

    /** pb_gmember cwar. */
    public cwar: number;

    /** pb_gmember country. */
    public country: string;

    /** pb_gmember sds. */
    public sds: string;

    /** pb_gmember city. */
    public city: string;

    /** pb_gmember emblem. */
    public emblem: (number|Long);

    /**
     * Creates a new pb_gmember instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gmember instance
     */
    public static create(properties?: Ipb_gmember): pb_gmember;

    /**
     * Encodes the specified pb_gmember message. Does not implicitly {@link pb_gmember.verify|verify} messages.
     * @param message pb_gmember message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gmember, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gmember message, length delimited. Does not implicitly {@link pb_gmember.verify|verify} messages.
     * @param message pb_gmember message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gmember, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gmember message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gmember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gmember;

    /**
     * Decodes a pb_gmember message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gmember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gmember;

    /**
     * Verifies a pb_gmember message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gmember message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gmember
     */
    public static fromObject(object: { [k: string]: any }): pb_gmember;

    /**
     * Creates a plain object from a pb_gmember message. Also converts values to other types if specified.
     * @param message pb_gmember
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gmember, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gmember to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gmember
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_guild. */
export interface Ipb_guild {

    /** pb_guild id */
    id: number;

    /** pb_guild name */
    name: string;

    /** pb_guild logo */
    logo: number;

    /** pb_guild exp */
    exp: number;

    /** pb_guild notice */
    notice?: (string|null);

    /** pb_guild power */
    power?: (number|Long|null);

    /** pb_guild rank */
    rank?: (number|null);

    /** pb_guild members */
    members?: (number|null);

    /** pb_guild pname */
    pname?: (string|null);

    /** pb_guild dismissCd */
    dismissCd?: (number|null);

    /** pb_guild flag */
    flag?: (number|null);
}

/** Represents a pb_guild. */
export class pb_guild implements Ipb_guild {

    /**
     * Constructs a new pb_guild.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_guild);

    /** pb_guild id. */
    public id: number;

    /** pb_guild name. */
    public name: string;

    /** pb_guild logo. */
    public logo: number;

    /** pb_guild exp. */
    public exp: number;

    /** pb_guild notice. */
    public notice: string;

    /** pb_guild power. */
    public power: (number|Long);

    /** pb_guild rank. */
    public rank: number;

    /** pb_guild members. */
    public members: number;

    /** pb_guild pname. */
    public pname: string;

    /** pb_guild dismissCd. */
    public dismissCd: number;

    /** pb_guild flag. */
    public flag: number;

    /**
     * Creates a new pb_guild instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_guild instance
     */
    public static create(properties?: Ipb_guild): pb_guild;

    /**
     * Encodes the specified pb_guild message. Does not implicitly {@link pb_guild.verify|verify} messages.
     * @param message pb_guild message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_guild, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_guild message, length delimited. Does not implicitly {@link pb_guild.verify|verify} messages.
     * @param message pb_guild message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_guild, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_guild message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_guild
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_guild;

    /**
     * Decodes a pb_guild message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_guild
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_guild;

    /**
     * Verifies a pb_guild message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_guild message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_guild
     */
    public static fromObject(object: { [k: string]: any }): pb_guild;

    /**
     * Creates a plain object from a pb_guild message. Also converts values to other types if specified.
     * @param message pb_guild
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_guild, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_guild to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_guild
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_glog. */
export interface Ipb_glog {

    /** pb_glog type */
    type: number;

    /** pb_glog time */
    time?: (number|null);

    /** pb_glog objName */
    objName?: (string|null);

    /** pb_glog doName */
    doName?: (string|null);
}

/** Represents a pb_glog. */
export class pb_glog implements Ipb_glog {

    /**
     * Constructs a new pb_glog.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_glog);

    /** pb_glog type. */
    public type: number;

    /** pb_glog time. */
    public time: number;

    /** pb_glog objName. */
    public objName: string;

    /** pb_glog doName. */
    public doName: string;

    /**
     * Creates a new pb_glog instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_glog instance
     */
    public static create(properties?: Ipb_glog): pb_glog;

    /**
     * Encodes the specified pb_glog message. Does not implicitly {@link pb_glog.verify|verify} messages.
     * @param message pb_glog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_glog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_glog message, length delimited. Does not implicitly {@link pb_glog.verify|verify} messages.
     * @param message pb_glog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_glog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_glog message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_glog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_glog;

    /**
     * Decodes a pb_glog message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_glog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_glog;

    /**
     * Verifies a pb_glog message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_glog message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_glog
     */
    public static fromObject(object: { [k: string]: any }): pb_glog;

    /**
     * Creates a plain object from a pb_glog message. Also converts values to other types if specified.
     * @param message pb_glog
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_glog, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_glog to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_glog
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_unit. */
export interface Ipb_unit {

    /** pb_unit hid */
    hid?: (number|null);

    /** pb_unit id */
    id?: (number|null);

    /** pb_unit pos */
    pos?: (number|null);

    /** pb_unit lv */
    lv?: (number|null);

    /** pb_unit star */
    star?: (number|null);

    /** pb_unit energy */
    energy?: (number|null);

    /** pb_unit hpp */
    hpp?: (number|null);

    /** pb_unit wake */
    wake?: (number|null);

    /** pb_unit skin */
    skin?: (number|null);

    /** pb_unit stl */
    stl?: (number|null);

    /** pb_unit flag */
    flag?: (number|null);

    /** pb_unit ex2 */
    ex2?: (number|null);

    /** pb_unit core */
    core?: (number|null);

    /** pb_unit ex4 */
    ex4?: (number|null);

    /** pb_unit bra */
    bra?: (number[]|null);
}

/** Represents a pb_unit. */
export class pb_unit implements Ipb_unit {

    /**
     * Constructs a new pb_unit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_unit);

    /** pb_unit hid. */
    public hid: number;

    /** pb_unit id. */
    public id: number;

    /** pb_unit pos. */
    public pos: number;

    /** pb_unit lv. */
    public lv: number;

    /** pb_unit star. */
    public star: number;

    /** pb_unit energy. */
    public energy: number;

    /** pb_unit hpp. */
    public hpp: number;

    /** pb_unit wake. */
    public wake: number;

    /** pb_unit skin. */
    public skin: number;

    /** pb_unit stl. */
    public stl: number;

    /** pb_unit flag. */
    public flag: number;

    /** pb_unit ex2. */
    public ex2: number;

    /** pb_unit core. */
    public core: number;

    /** pb_unit ex4. */
    public ex4: number;

    /** pb_unit bra. */
    public bra: number[];

    /**
     * Creates a new pb_unit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_unit instance
     */
    public static create(properties?: Ipb_unit): pb_unit;

    /**
     * Encodes the specified pb_unit message. Does not implicitly {@link pb_unit.verify|verify} messages.
     * @param message pb_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_unit message, length delimited. Does not implicitly {@link pb_unit.verify|verify} messages.
     * @param message pb_unit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_unit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_unit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_unit;

    /**
     * Decodes a pb_unit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_unit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_unit;

    /**
     * Verifies a pb_unit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_unit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_unit
     */
    public static fromObject(object: { [k: string]: any }): pb_unit;

    /**
     * Creates a plain object from a pb_unit message. Also converts values to other types if specified.
     * @param message pb_unit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_unit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_unit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_unit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_strial. */
export interface Ipb_strial {

    /** pb_strial id */
    id: number;

    /** pb_strial tl */
    tl: number;

    /** pb_strial cd */
    cd: number;
}

/** Represents a pb_strial. */
export class pb_strial implements Ipb_strial {

    /**
     * Constructs a new pb_strial.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_strial);

    /** pb_strial id. */
    public id: number;

    /** pb_strial tl. */
    public tl: number;

    /** pb_strial cd. */
    public cd: number;

    /**
     * Creates a new pb_strial instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_strial instance
     */
    public static create(properties?: Ipb_strial): pb_strial;

    /**
     * Encodes the specified pb_strial message. Does not implicitly {@link pb_strial.verify|verify} messages.
     * @param message pb_strial message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_strial, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_strial message, length delimited. Does not implicitly {@link pb_strial.verify|verify} messages.
     * @param message pb_strial message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_strial, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_strial message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_strial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_strial;

    /**
     * Decodes a pb_strial message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_strial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_strial;

    /**
     * Verifies a pb_strial message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_strial message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_strial
     */
    public static fromObject(object: { [k: string]: any }): pb_strial;

    /**
     * Creates a plain object from a pb_strial message. Also converts values to other types if specified.
     * @param message pb_strial
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_strial, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_strial to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_strial
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_trial. */
export interface Ipb_trial {

    /** pb_trial logo */
    logo: number;

    /** pb_trial lv */
    lv: number;

    /** pb_trial name */
    name: string;

    /** pb_trial power */
    power?: (number|Long|null);

    /** pb_trial stage */
    stage?: (number|null);

    /** pb_trial video */
    video?: (Ipb_evideo|null);

    /** pb_trial border */
    border?: (number|null);

    /** pb_trial uid */
    uid?: (number|Long|null);
}

/** Represents a pb_trial. */
export class pb_trial implements Ipb_trial {

    /**
     * Constructs a new pb_trial.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_trial);

    /** pb_trial logo. */
    public logo: number;

    /** pb_trial lv. */
    public lv: number;

    /** pb_trial name. */
    public name: string;

    /** pb_trial power. */
    public power: (number|Long);

    /** pb_trial stage. */
    public stage: number;

    /** pb_trial video. */
    public video?: (Ipb_evideo|null);

    /** pb_trial border. */
    public border: number;

    /** pb_trial uid. */
    public uid: (number|Long);

    /**
     * Creates a new pb_trial instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_trial instance
     */
    public static create(properties?: Ipb_trial): pb_trial;

    /**
     * Encodes the specified pb_trial message. Does not implicitly {@link pb_trial.verify|verify} messages.
     * @param message pb_trial message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_trial, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_trial message, length delimited. Does not implicitly {@link pb_trial.verify|verify} messages.
     * @param message pb_trial message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_trial, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_trial message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_trial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_trial;

    /**
     * Decodes a pb_trial message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_trial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_trial;

    /**
     * Verifies a pb_trial message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_trial message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_trial
     */
    public static fromObject(object: { [k: string]: any }): pb_trial;

    /**
     * Creates a plain object from a pb_trial message. Also converts values to other types if specified.
     * @param message pb_trial
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_trial, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_trial to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_trial
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_plog. */
export interface Ipb_plog {

    /** pb_plog rival */
    rival: Ipb_pmbr;

    /** pb_plog atk */
    atk: boolean;

    /** pb_plog win */
    win: boolean;

    /** pb_plog vid */
    vid?: (number[]|null);

    /** pb_plog time */
    time: number;

    /** pb_plog score */
    score: number;

    /** pb_plog wins */
    wins?: (boolean[]|null);
}

/** Represents a pb_plog. */
export class pb_plog implements Ipb_plog {

    /**
     * Constructs a new pb_plog.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_plog);

    /** pb_plog rival. */
    public rival: Ipb_pmbr;

    /** pb_plog atk. */
    public atk: boolean;

    /** pb_plog win. */
    public win: boolean;

    /** pb_plog vid. */
    public vid: number[];

    /** pb_plog time. */
    public time: number;

    /** pb_plog score. */
    public score: number;

    /** pb_plog wins. */
    public wins: boolean[];

    /**
     * Creates a new pb_plog instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_plog instance
     */
    public static create(properties?: Ipb_plog): pb_plog;

    /**
     * Encodes the specified pb_plog message. Does not implicitly {@link pb_plog.verify|verify} messages.
     * @param message pb_plog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_plog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_plog message, length delimited. Does not implicitly {@link pb_plog.verify|verify} messages.
     * @param message pb_plog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_plog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_plog message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_plog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_plog;

    /**
     * Decodes a pb_plog message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_plog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_plog;

    /**
     * Verifies a pb_plog message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_plog message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_plog
     */
    public static fromObject(object: { [k: string]: any }): pb_plog;

    /**
     * Creates a plain object from a pb_plog message. Also converts values to other types if specified.
     * @param message pb_plog
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_plog, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_plog to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_plog
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_p3plog. */
export interface Ipb_p3plog {

    /** pb_p3plog def */
    def?: (Ipb_p3pmbr|null);

    /** pb_p3plog atk */
    atk?: (boolean|null);

    /** pb_p3plog win */
    win?: (boolean|null);

    /** pb_p3plog vid */
    vid?: (number|null);

    /** pb_p3plog time */
    time?: (number|null);

    /** pb_p3plog score */
    score?: (number|null);
}

/** Represents a pb_p3plog. */
export class pb_p3plog implements Ipb_p3plog {

    /**
     * Constructs a new pb_p3plog.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_p3plog);

    /** pb_p3plog def. */
    public def?: (Ipb_p3pmbr|null);

    /** pb_p3plog atk. */
    public atk: boolean;

    /** pb_p3plog win. */
    public win: boolean;

    /** pb_p3plog vid. */
    public vid: number;

    /** pb_p3plog time. */
    public time: number;

    /** pb_p3plog score. */
    public score: number;

    /**
     * Creates a new pb_p3plog instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_p3plog instance
     */
    public static create(properties?: Ipb_p3plog): pb_p3plog;

    /**
     * Encodes the specified pb_p3plog message. Does not implicitly {@link pb_p3plog.verify|verify} messages.
     * @param message pb_p3plog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_p3plog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_p3plog message, length delimited. Does not implicitly {@link pb_p3plog.verify|verify} messages.
     * @param message pb_p3plog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_p3plog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_p3plog message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_p3plog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_p3plog;

    /**
     * Decodes a pb_p3plog message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_p3plog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_p3plog;

    /**
     * Verifies a pb_p3plog message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_p3plog message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_p3plog
     */
    public static fromObject(object: { [k: string]: any }): pb_p3plog;

    /**
     * Creates a plain object from a pb_p3plog message. Also converts values to other types if specified.
     * @param message pb_p3plog
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_p3plog, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_p3plog to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_p3plog
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_pmbr. */
export interface Ipb_pmbr {

    /** pb_pmbr name */
    name?: (string|null);

    /** pb_pmbr uid */
    uid?: (number|Long|null);

    /** pb_pmbr lv */
    lv?: (number|null);

    /** pb_pmbr logo */
    logo?: (number|null);

    /** pb_pmbr score */
    score?: (number|null);

    /** pb_pmbr power */
    power?: (number|Long|null);

    /** pb_pmbr rank */
    rank?: (number|null);

    /** pb_pmbr gname */
    gname?: (string|null);

    /** pb_pmbr trank */
    trank?: (number|null);

    /** pb_pmbr tscore */
    tscore?: (number|null);

    /** pb_pmbr camp */
    camp?: (Ipb_unit[]|null);

    /** pb_pmbr win */
    win?: (number|null);

    /** pb_pmbr fight */
    fight?: (number|null);

    /** pb_pmbr sid */
    sid?: (number|null);

    /** pb_pmbr border */
    border?: (number|null);

    /** pb_pmbr ptype */
    ptype?: (number|null);

    /** pb_pmbr emblem */
    emblem?: (number|Long|null);
}

/** Represents a pb_pmbr. */
export class pb_pmbr implements Ipb_pmbr {

    /**
     * Constructs a new pb_pmbr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_pmbr);

    /** pb_pmbr name. */
    public name: string;

    /** pb_pmbr uid. */
    public uid: (number|Long);

    /** pb_pmbr lv. */
    public lv: number;

    /** pb_pmbr logo. */
    public logo: number;

    /** pb_pmbr score. */
    public score: number;

    /** pb_pmbr power. */
    public power: (number|Long);

    /** pb_pmbr rank. */
    public rank: number;

    /** pb_pmbr gname. */
    public gname: string;

    /** pb_pmbr trank. */
    public trank: number;

    /** pb_pmbr tscore. */
    public tscore: number;

    /** pb_pmbr camp. */
    public camp: Ipb_unit[];

    /** pb_pmbr win. */
    public win: number;

    /** pb_pmbr fight. */
    public fight: number;

    /** pb_pmbr sid. */
    public sid: number;

    /** pb_pmbr border. */
    public border: number;

    /** pb_pmbr ptype. */
    public ptype: number;

    /** pb_pmbr emblem. */
    public emblem: (number|Long);

    /**
     * Creates a new pb_pmbr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_pmbr instance
     */
    public static create(properties?: Ipb_pmbr): pb_pmbr;

    /**
     * Encodes the specified pb_pmbr message. Does not implicitly {@link pb_pmbr.verify|verify} messages.
     * @param message pb_pmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_pmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_pmbr message, length delimited. Does not implicitly {@link pb_pmbr.verify|verify} messages.
     * @param message pb_pmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_pmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_pmbr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_pmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_pmbr;

    /**
     * Decodes a pb_pmbr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_pmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_pmbr;

    /**
     * Verifies a pb_pmbr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_pmbr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_pmbr
     */
    public static fromObject(object: { [k: string]: any }): pb_pmbr;

    /**
     * Creates a plain object from a pb_pmbr message. Also converts values to other types if specified.
     * @param message pb_pmbr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_pmbr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_pmbr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_pmbr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_p3pmbr. */
export interface Ipb_p3pmbr {

    /** pb_p3pmbr name */
    name?: (string|null);

    /** pb_p3pmbr uid */
    uid?: (number|Long|null);

    /** pb_p3pmbr lv */
    lv?: (number|null);

    /** pb_p3pmbr logo */
    logo?: (number|null);

    /** pb_p3pmbr lbox */
    lbox?: (number|null);

    /** pb_p3pmbr power */
    power?: (number|Long|null);

    /** pb_p3pmbr rank */
    rank?: (number|null);

    /** pb_p3pmbr score */
    score?: (number|null);

    /** pb_p3pmbr camp */
    camp?: (Ipb_unit[]|null);

    /** pb_p3pmbr emblem */
    emblem?: (number|Long|null);
}

/** Represents a pb_p3pmbr. */
export class pb_p3pmbr implements Ipb_p3pmbr {

    /**
     * Constructs a new pb_p3pmbr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_p3pmbr);

    /** pb_p3pmbr name. */
    public name: string;

    /** pb_p3pmbr uid. */
    public uid: (number|Long);

    /** pb_p3pmbr lv. */
    public lv: number;

    /** pb_p3pmbr logo. */
    public logo: number;

    /** pb_p3pmbr lbox. */
    public lbox: number;

    /** pb_p3pmbr power. */
    public power: (number|Long);

    /** pb_p3pmbr rank. */
    public rank: number;

    /** pb_p3pmbr score. */
    public score: number;

    /** pb_p3pmbr camp. */
    public camp: Ipb_unit[];

    /** pb_p3pmbr emblem. */
    public emblem: (number|Long);

    /**
     * Creates a new pb_p3pmbr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_p3pmbr instance
     */
    public static create(properties?: Ipb_p3pmbr): pb_p3pmbr;

    /**
     * Encodes the specified pb_p3pmbr message. Does not implicitly {@link pb_p3pmbr.verify|verify} messages.
     * @param message pb_p3pmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_p3pmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_p3pmbr message, length delimited. Does not implicitly {@link pb_p3pmbr.verify|verify} messages.
     * @param message pb_p3pmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_p3pmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_p3pmbr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_p3pmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_p3pmbr;

    /**
     * Decodes a pb_p3pmbr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_p3pmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_p3pmbr;

    /**
     * Verifies a pb_p3pmbr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_p3pmbr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_p3pmbr
     */
    public static fromObject(object: { [k: string]: any }): pb_p3pmbr;

    /**
     * Creates a plain object from a pb_p3pmbr message. Also converts values to other types if specified.
     * @param message pb_p3pmbr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_p3pmbr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_p3pmbr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_p3pmbr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_smbr. */
export interface Ipb_smbr {

    /** pb_smbr name */
    name?: (string|null);

    /** pb_smbr uid */
    uid?: (number|Long|null);

    /** pb_smbr lv */
    lv?: (number|null);

    /** pb_smbr logo */
    logo?: (number|null);

    /** pb_smbr lbox */
    lbox?: (number|null);

    /** pb_smbr score */
    score?: (number|null);

    /** pb_smbr like */
    like?: (number|null);

    /** pb_smbr cluster */
    cluster?: (string|null);

    /** pb_smbr udk */
    udk?: (string|null);

    /** pb_smbr gname */
    gname?: (string|null);

    /** pb_smbr camp */
    camp?: (Ipb_unit[]|null);

    /** pb_smbr skls */
    skls?: (number[]|null);

    /** pb_smbr power */
    power?: (number|Long|null);

    /** pb_smbr hide */
    hide?: (number[]|null);

    /** pb_smbr emblem */
    emblem?: (number|Long|null);
}

/** Represents a pb_smbr. */
export class pb_smbr implements Ipb_smbr {

    /**
     * Constructs a new pb_smbr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_smbr);

    /** pb_smbr name. */
    public name: string;

    /** pb_smbr uid. */
    public uid: (number|Long);

    /** pb_smbr lv. */
    public lv: number;

    /** pb_smbr logo. */
    public logo: number;

    /** pb_smbr lbox. */
    public lbox: number;

    /** pb_smbr score. */
    public score: number;

    /** pb_smbr like. */
    public like: number;

    /** pb_smbr cluster. */
    public cluster: string;

    /** pb_smbr udk. */
    public udk: string;

    /** pb_smbr gname. */
    public gname: string;

    /** pb_smbr camp. */
    public camp: Ipb_unit[];

    /** pb_smbr skls. */
    public skls: number[];

    /** pb_smbr power. */
    public power: (number|Long);

    /** pb_smbr hide. */
    public hide: number[];

    /** pb_smbr emblem. */
    public emblem: (number|Long);

    /**
     * Creates a new pb_smbr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_smbr instance
     */
    public static create(properties?: Ipb_smbr): pb_smbr;

    /**
     * Encodes the specified pb_smbr message. Does not implicitly {@link pb_smbr.verify|verify} messages.
     * @param message pb_smbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_smbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_smbr message, length delimited. Does not implicitly {@link pb_smbr.verify|verify} messages.
     * @param message pb_smbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_smbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_smbr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_smbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_smbr;

    /**
     * Decodes a pb_smbr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_smbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_smbr;

    /**
     * Verifies a pb_smbr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_smbr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_smbr
     */
    public static fromObject(object: { [k: string]: any }): pb_smbr;

    /**
     * Creates a plain object from a pb_smbr message. Also converts values to other types if specified.
     * @param message pb_smbr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_smbr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_smbr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_smbr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_smbrs. */
export interface Ipb_smbrs {

    /** pb_smbrs mbrs */
    mbrs?: (Ipb_smbr[]|null);

    /** pb_smbrs score */
    score?: (number|null);

    /** pb_smbrs rank */
    rank?: (number|null);

    /** pb_smbrs like */
    like?: (number|null);
}

/** Represents a pb_smbrs. */
export class pb_smbrs implements Ipb_smbrs {

    /**
     * Constructs a new pb_smbrs.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_smbrs);

    /** pb_smbrs mbrs. */
    public mbrs: Ipb_smbr[];

    /** pb_smbrs score. */
    public score: number;

    /** pb_smbrs rank. */
    public rank: number;

    /** pb_smbrs like. */
    public like: number;

    /**
     * Creates a new pb_smbrs instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_smbrs instance
     */
    public static create(properties?: Ipb_smbrs): pb_smbrs;

    /**
     * Encodes the specified pb_smbrs message. Does not implicitly {@link pb_smbrs.verify|verify} messages.
     * @param message pb_smbrs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_smbrs, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_smbrs message, length delimited. Does not implicitly {@link pb_smbrs.verify|verify} messages.
     * @param message pb_smbrs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_smbrs, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_smbrs message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_smbrs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_smbrs;

    /**
     * Decodes a pb_smbrs message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_smbrs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_smbrs;

    /**
     * Verifies a pb_smbrs message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_smbrs message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_smbrs
     */
    public static fromObject(object: { [k: string]: any }): pb_smbrs;

    /**
     * Creates a plain object from a pb_smbrs message. Also converts values to other types if specified.
     * @param message pb_smbrs
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_smbrs, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_smbrs to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_smbrs
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_template. */
export interface Ipb_template {

    /** pb_template id */
    id?: (number|null);

    /** pb_template name */
    name?: (string|null);

    /** pb_template buildings */
    buildings?: (Ipb_buildings[]|null);

    /** pb_template rooms */
    rooms?: (Ipb_room[]|null);
}

/** Represents a pb_template. */
export class pb_template implements Ipb_template {

    /**
     * Constructs a new pb_template.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_template);

    /** pb_template id. */
    public id: number;

    /** pb_template name. */
    public name: string;

    /** pb_template buildings. */
    public buildings: Ipb_buildings[];

    /** pb_template rooms. */
    public rooms: Ipb_room[];

    /**
     * Creates a new pb_template instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_template instance
     */
    public static create(properties?: Ipb_template): pb_template;

    /**
     * Encodes the specified pb_template message. Does not implicitly {@link pb_template.verify|verify} messages.
     * @param message pb_template message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_template, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_template message, length delimited. Does not implicitly {@link pb_template.verify|verify} messages.
     * @param message pb_template message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_template, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_template message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_template
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_template;

    /**
     * Decodes a pb_template message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_template
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_template;

    /**
     * Verifies a pb_template message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_template message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_template
     */
    public static fromObject(object: { [k: string]: any }): pb_template;

    /**
     * Creates a plain object from a pb_template message. Also converts values to other types if specified.
     * @param message pb_template
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_template, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_template to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_template
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_pvp. */
export interface Ipb_pvp {

    /** pb_pvp id */
    id: number;

    /** pb_pvp status */
    status: number;

    /** pb_pvp self */
    self?: (Ipb_pmbr|null);

    /** pb_pvp seasonCd */
    seasonCd?: (number|null);

    /** pb_pvp dailyCd */
    dailyCd?: (number|null);
}

/** Represents a pb_pvp. */
export class pb_pvp implements Ipb_pvp {

    /**
     * Constructs a new pb_pvp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_pvp);

    /** pb_pvp id. */
    public id: number;

    /** pb_pvp status. */
    public status: number;

    /** pb_pvp self. */
    public self?: (Ipb_pmbr|null);

    /** pb_pvp seasonCd. */
    public seasonCd: number;

    /** pb_pvp dailyCd. */
    public dailyCd: number;

    /**
     * Creates a new pb_pvp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_pvp instance
     */
    public static create(properties?: Ipb_pvp): pb_pvp;

    /**
     * Encodes the specified pb_pvp message. Does not implicitly {@link pb_pvp.verify|verify} messages.
     * @param message pb_pvp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_pvp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_pvp message, length delimited. Does not implicitly {@link pb_pvp.verify|verify} messages.
     * @param message pb_pvp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_pvp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_pvp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_pvp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_pvp;

    /**
     * Decodes a pb_pvp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_pvp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_pvp;

    /**
     * Verifies a pb_pvp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_pvp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_pvp
     */
    public static fromObject(object: { [k: string]: any }): pb_pvp;

    /**
     * Creates a plain object from a pb_pvp message. Also converts values to other types if specified.
     * @param message pb_pvp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_pvp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_pvp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_pvp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_wpvp. */
export interface Ipb_wpvp {

    /** pb_wpvp wid */
    wid: number;

    /** pb_wpvp flag */
    flag?: (number|null);

    /** pb_wpvp cd */
    cd?: (number|null);
}

/** Represents a pb_wpvp. */
export class pb_wpvp implements Ipb_wpvp {

    /**
     * Constructs a new pb_wpvp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_wpvp);

    /** pb_wpvp wid. */
    public wid: number;

    /** pb_wpvp flag. */
    public flag: number;

    /** pb_wpvp cd. */
    public cd: number;

    /**
     * Creates a new pb_wpvp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_wpvp instance
     */
    public static create(properties?: Ipb_wpvp): pb_wpvp;

    /**
     * Encodes the specified pb_wpvp message. Does not implicitly {@link pb_wpvp.verify|verify} messages.
     * @param message pb_wpvp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_wpvp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_wpvp message, length delimited. Does not implicitly {@link pb_wpvp.verify|verify} messages.
     * @param message pb_wpvp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_wpvp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_wpvp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_wpvp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_wpvp;

    /**
     * Decodes a pb_wpvp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_wpvp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_wpvp;

    /**
     * Verifies a pb_wpvp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_wpvp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_wpvp
     */
    public static fromObject(object: { [k: string]: any }): pb_wpvp;

    /**
     * Creates a plain object from a pb_wpvp message. Also converts values to other types if specified.
     * @param message pb_wpvp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_wpvp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_wpvp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_wpvp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_wmbr. */
export interface Ipb_wmbr {

    /** pb_wmbr uid */
    uid?: (number|Long|null);

    /** pb_wmbr gname */
    gname?: (string|null);

    /** pb_wmbr score */
    score?: (number|null);

    /** pb_wmbr name */
    name?: (string|null);

    /** pb_wmbr logo */
    logo?: (number|null);

    /** pb_wmbr lv */
    lv?: (number|null);

    /** pb_wmbr power */
    power?: (number|Long|null);

    /** pb_wmbr lbox */
    lbox?: (number|null);

    /** pb_wmbr like */
    like?: (number|null);

    /** pb_wmbr king */
    king?: (boolean|null);

    /** pb_wmbr num */
    num?: (number|null);

    /** pb_wmbr emblem */
    emblem?: (number|Long|null);
}

/** Represents a pb_wmbr. */
export class pb_wmbr implements Ipb_wmbr {

    /**
     * Constructs a new pb_wmbr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_wmbr);

    /** pb_wmbr uid. */
    public uid: (number|Long);

    /** pb_wmbr gname. */
    public gname: string;

    /** pb_wmbr score. */
    public score: number;

    /** pb_wmbr name. */
    public name: string;

    /** pb_wmbr logo. */
    public logo: number;

    /** pb_wmbr lv. */
    public lv: number;

    /** pb_wmbr power. */
    public power: (number|Long);

    /** pb_wmbr lbox. */
    public lbox: number;

    /** pb_wmbr like. */
    public like: number;

    /** pb_wmbr king. */
    public king: boolean;

    /** pb_wmbr num. */
    public num: number;

    /** pb_wmbr emblem. */
    public emblem: (number|Long);

    /**
     * Creates a new pb_wmbr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_wmbr instance
     */
    public static create(properties?: Ipb_wmbr): pb_wmbr;

    /**
     * Encodes the specified pb_wmbr message. Does not implicitly {@link pb_wmbr.verify|verify} messages.
     * @param message pb_wmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_wmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_wmbr message, length delimited. Does not implicitly {@link pb_wmbr.verify|verify} messages.
     * @param message pb_wmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_wmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_wmbr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_wmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_wmbr;

    /**
     * Decodes a pb_wmbr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_wmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_wmbr;

    /**
     * Verifies a pb_wmbr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_wmbr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_wmbr
     */
    public static fromObject(object: { [k: string]: any }): pb_wmbr;

    /**
     * Creates a plain object from a pb_wmbr message. Also converts values to other types if specified.
     * @param message pb_wmbr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_wmbr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_wmbr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_wmbr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_link. */
export interface Ipb_link {

    /** pb_link cd */
    cd?: (number|null);

    /** pb_link win */
    win?: (number|null);

    /** pb_link vid */
    vid?: (number|Long|null);
}

/** Represents a pb_link. */
export class pb_link implements Ipb_link {

    /**
     * Constructs a new pb_link.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_link);

    /** pb_link cd. */
    public cd: number;

    /** pb_link win. */
    public win: number;

    /** pb_link vid. */
    public vid: (number|Long);

    /**
     * Creates a new pb_link instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_link instance
     */
    public static create(properties?: Ipb_link): pb_link;

    /**
     * Encodes the specified pb_link message. Does not implicitly {@link pb_link.verify|verify} messages.
     * @param message pb_link message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_link, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_link message, length delimited. Does not implicitly {@link pb_link.verify|verify} messages.
     * @param message pb_link message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_link, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_link message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_link;

    /**
     * Decodes a pb_link message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_link;

    /**
     * Verifies a pb_link message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_link message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_link
     */
    public static fromObject(object: { [k: string]: any }): pb_link;

    /**
     * Creates a plain object from a pb_link message. Also converts values to other types if specified.
     * @param message pb_link
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_link, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_link to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_link
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_wlog. */
export interface Ipb_wlog {

    /** pb_wlog vid */
    vid?: (number|Long|null);

    /** pb_wlog atk */
    atk?: (Ipb_unit[]|null);

    /** pb_wlog def */
    def?: (Ipb_unit[]|null);

    /** pb_wlog win */
    win: boolean;
}

/** Represents a pb_wlog. */
export class pb_wlog implements Ipb_wlog {

    /**
     * Constructs a new pb_wlog.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_wlog);

    /** pb_wlog vid. */
    public vid: (number|Long);

    /** pb_wlog atk. */
    public atk: Ipb_unit[];

    /** pb_wlog def. */
    public def: Ipb_unit[];

    /** pb_wlog win. */
    public win: boolean;

    /**
     * Creates a new pb_wlog instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_wlog instance
     */
    public static create(properties?: Ipb_wlog): pb_wlog;

    /**
     * Encodes the specified pb_wlog message. Does not implicitly {@link pb_wlog.verify|verify} messages.
     * @param message pb_wlog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_wlog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_wlog message, length delimited. Does not implicitly {@link pb_wlog.verify|verify} messages.
     * @param message pb_wlog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_wlog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_wlog message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_wlog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_wlog;

    /**
     * Decodes a pb_wlog message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_wlog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_wlog;

    /**
     * Verifies a pb_wlog message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_wlog message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_wlog
     */
    public static fromObject(object: { [k: string]: any }): pb_wlog;

    /**
     * Creates a plain object from a pb_wlog message. Also converts values to other types if specified.
     * @param message pb_wlog
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_wlog, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_wlog to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_wlog
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_wvideo. */
export interface Ipb_wvideo {

    /** pb_wvideo atk */
    atk?: (Ipb_unit[]|null);

    /** pb_wvideo def */
    def?: (Ipb_unit[]|null);

    /** pb_wvideo frames */
    frames?: (Uint8Array[]|null);

    /** pb_wvideo hurts */
    hurts?: (Ipb_hurts[]|null);

    /** pb_wvideo win */
    win: boolean;
}

/** Represents a pb_wvideo. */
export class pb_wvideo implements Ipb_wvideo {

    /**
     * Constructs a new pb_wvideo.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_wvideo);

    /** pb_wvideo atk. */
    public atk: Ipb_unit[];

    /** pb_wvideo def. */
    public def: Ipb_unit[];

    /** pb_wvideo frames. */
    public frames: Uint8Array[];

    /** pb_wvideo hurts. */
    public hurts: Ipb_hurts[];

    /** pb_wvideo win. */
    public win: boolean;

    /**
     * Creates a new pb_wvideo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_wvideo instance
     */
    public static create(properties?: Ipb_wvideo): pb_wvideo;

    /**
     * Encodes the specified pb_wvideo message. Does not implicitly {@link pb_wvideo.verify|verify} messages.
     * @param message pb_wvideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_wvideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_wvideo message, length delimited. Does not implicitly {@link pb_wvideo.verify|verify} messages.
     * @param message pb_wvideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_wvideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_wvideo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_wvideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_wvideo;

    /**
     * Decodes a pb_wvideo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_wvideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_wvideo;

    /**
     * Verifies a pb_wvideo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_wvideo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_wvideo
     */
    public static fromObject(object: { [k: string]: any }): pb_wvideo;

    /**
     * Creates a plain object from a pb_wvideo message. Also converts values to other types if specified.
     * @param message pb_wvideo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_wvideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_wvideo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_wvideo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_wscore. */
export interface Ipb_wscore {

    /** pb_wscore score */
    score: number;

    /** pb_wscore delta */
    delta: number;

    /** pb_wscore king */
    king?: (boolean|null);
}

/** Represents a pb_wscore. */
export class pb_wscore implements Ipb_wscore {

    /**
     * Constructs a new pb_wscore.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_wscore);

    /** pb_wscore score. */
    public score: number;

    /** pb_wscore delta. */
    public delta: number;

    /** pb_wscore king. */
    public king: boolean;

    /**
     * Creates a new pb_wscore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_wscore instance
     */
    public static create(properties?: Ipb_wscore): pb_wscore;

    /**
     * Encodes the specified pb_wscore message. Does not implicitly {@link pb_wscore.verify|verify} messages.
     * @param message pb_wscore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_wscore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_wscore message, length delimited. Does not implicitly {@link pb_wscore.verify|verify} messages.
     * @param message pb_wscore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_wscore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_wscore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_wscore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_wscore;

    /**
     * Decodes a pb_wscore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_wscore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_wscore;

    /**
     * Verifies a pb_wscore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_wscore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_wscore
     */
    public static fromObject(object: { [k: string]: any }): pb_wscore;

    /**
     * Creates a plain object from a pb_wscore message. Also converts values to other types if specified.
     * @param message pb_wscore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_wscore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_wscore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_wscore
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_wcamp. */
export interface Ipb_wcamp {

    /** pb_wcamp camp */
    camp?: (Ipb_unit[]|null);
}

/** Represents a pb_wcamp. */
export class pb_wcamp implements Ipb_wcamp {

    /**
     * Constructs a new pb_wcamp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_wcamp);

    /** pb_wcamp camp. */
    public camp: Ipb_unit[];

    /**
     * Creates a new pb_wcamp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_wcamp instance
     */
    public static create(properties?: Ipb_wcamp): pb_wcamp;

    /**
     * Encodes the specified pb_wcamp message. Does not implicitly {@link pb_wcamp.verify|verify} messages.
     * @param message pb_wcamp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_wcamp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_wcamp message, length delimited. Does not implicitly {@link pb_wcamp.verify|verify} messages.
     * @param message pb_wcamp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_wcamp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_wcamp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_wcamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_wcamp;

    /**
     * Decodes a pb_wcamp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_wcamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_wcamp;

    /**
     * Verifies a pb_wcamp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_wcamp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_wcamp
     */
    public static fromObject(object: { [k: string]: any }): pb_wcamp;

    /**
     * Creates a plain object from a pb_wcamp message. Also converts values to other types if specified.
     * @param message pb_wcamp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_wcamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_wcamp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_wcamp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_wloger. */
export interface Ipb_wloger {

    /** pb_wloger vid */
    vid: (number|Long);

    /** pb_wloger mbr */
    mbr?: (Ipb_wmbr|null);

    /** pb_wloger time */
    time?: (number|null);

    /** pb_wloger atk */
    atk?: (boolean|null);

    /** pb_wloger win */
    win?: (boolean|null);

    /** pb_wloger delta */
    delta?: (number|null);
}

/** Represents a pb_wloger. */
export class pb_wloger implements Ipb_wloger {

    /**
     * Constructs a new pb_wloger.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_wloger);

    /** pb_wloger vid. */
    public vid: (number|Long);

    /** pb_wloger mbr. */
    public mbr?: (Ipb_wmbr|null);

    /** pb_wloger time. */
    public time: number;

    /** pb_wloger atk. */
    public atk: boolean;

    /** pb_wloger win. */
    public win: boolean;

    /** pb_wloger delta. */
    public delta: number;

    /**
     * Creates a new pb_wloger instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_wloger instance
     */
    public static create(properties?: Ipb_wloger): pb_wloger;

    /**
     * Encodes the specified pb_wloger message. Does not implicitly {@link pb_wloger.verify|verify} messages.
     * @param message pb_wloger message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_wloger, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_wloger message, length delimited. Does not implicitly {@link pb_wloger.verify|verify} messages.
     * @param message pb_wloger message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_wloger, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_wloger message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_wloger
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_wloger;

    /**
     * Decodes a pb_wloger message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_wloger
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_wloger;

    /**
     * Verifies a pb_wloger message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_wloger message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_wloger
     */
    public static fromObject(object: { [k: string]: any }): pb_wloger;

    /**
     * Creates a plain object from a pb_wloger message. Also converts values to other types if specified.
     * @param message pb_wloger
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_wloger, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_wloger to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_wloger
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_pvideo. */
export interface Ipb_pvideo {

    /** pb_pvideo id */
    id?: (number|null);

    /** pb_pvideo atk */
    atk?: (Ipb_pmbr|null);

    /** pb_pvideo def */
    def?: (Ipb_pmbr|null);

    /** pb_pvideo win */
    win: boolean;

    /** pb_pvideo frames */
    frames?: (Uint8Array[]|null);

    /** pb_pvideo ascore */
    ascore?: (number|null);

    /** pb_pvideo dscore */
    dscore?: (number|null);

    /** pb_pvideo adelta */
    adelta?: (number|null);

    /** pb_pvideo ddelta */
    ddelta?: (number|null);

    /** pb_pvideo hurts */
    hurts?: (Ipb_hurts[]|null);

    /** pb_pvideo rewards */
    rewards?: (Ipb_bag[]|null);

    /** pb_pvideo select */
    select?: (number|null);
}

/** Represents a pb_pvideo. */
export class pb_pvideo implements Ipb_pvideo {

    /**
     * Constructs a new pb_pvideo.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_pvideo);

    /** pb_pvideo id. */
    public id: number;

    /** pb_pvideo atk. */
    public atk?: (Ipb_pmbr|null);

    /** pb_pvideo def. */
    public def?: (Ipb_pmbr|null);

    /** pb_pvideo win. */
    public win: boolean;

    /** pb_pvideo frames. */
    public frames: Uint8Array[];

    /** pb_pvideo ascore. */
    public ascore: number;

    /** pb_pvideo dscore. */
    public dscore: number;

    /** pb_pvideo adelta. */
    public adelta: number;

    /** pb_pvideo ddelta. */
    public ddelta: number;

    /** pb_pvideo hurts. */
    public hurts: Ipb_hurts[];

    /** pb_pvideo rewards. */
    public rewards: Ipb_bag[];

    /** pb_pvideo select. */
    public select: number;

    /**
     * Creates a new pb_pvideo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_pvideo instance
     */
    public static create(properties?: Ipb_pvideo): pb_pvideo;

    /**
     * Encodes the specified pb_pvideo message. Does not implicitly {@link pb_pvideo.verify|verify} messages.
     * @param message pb_pvideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_pvideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_pvideo message, length delimited. Does not implicitly {@link pb_pvideo.verify|verify} messages.
     * @param message pb_pvideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_pvideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_pvideo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_pvideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_pvideo;

    /**
     * Decodes a pb_pvideo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_pvideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_pvideo;

    /**
     * Verifies a pb_pvideo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_pvideo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_pvideo
     */
    public static fromObject(object: { [k: string]: any }): pb_pvideo;

    /**
     * Creates a plain object from a pb_pvideo message. Also converts values to other types if specified.
     * @param message pb_pvideo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_pvideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_pvideo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_pvideo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_p3pvideo. */
export interface Ipb_p3pvideo {

    /** pb_p3pvideo atk */
    atk?: (Ipb_p3pmbr|null);

    /** pb_p3pvideo def */
    def?: (Ipb_p3pmbr|null);

    /** pb_p3pvideo win */
    win: boolean;

    /** pb_p3pvideo frames */
    frames?: (Uint8Array[]|null);

    /** pb_p3pvideo hurts */
    hurts?: (Ipb_hurts[]|null);

    /** pb_p3pvideo ascore */
    ascore?: (number|null);

    /** pb_p3pvideo dscore */
    dscore?: (number|null);

    /** pb_p3pvideo adelta */
    adelta?: (number|null);

    /** pb_p3pvideo ddelta */
    ddelta?: (number|null);

    /** pb_p3pvideo rewards */
    rewards?: (Ipb_bag[]|null);

    /** pb_p3pvideo select */
    select?: (number|null);
}

/** Represents a pb_p3pvideo. */
export class pb_p3pvideo implements Ipb_p3pvideo {

    /**
     * Constructs a new pb_p3pvideo.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_p3pvideo);

    /** pb_p3pvideo atk. */
    public atk?: (Ipb_p3pmbr|null);

    /** pb_p3pvideo def. */
    public def?: (Ipb_p3pmbr|null);

    /** pb_p3pvideo win. */
    public win: boolean;

    /** pb_p3pvideo frames. */
    public frames: Uint8Array[];

    /** pb_p3pvideo hurts. */
    public hurts: Ipb_hurts[];

    /** pb_p3pvideo ascore. */
    public ascore: number;

    /** pb_p3pvideo dscore. */
    public dscore: number;

    /** pb_p3pvideo adelta. */
    public adelta: number;

    /** pb_p3pvideo ddelta. */
    public ddelta: number;

    /** pb_p3pvideo rewards. */
    public rewards: Ipb_bag[];

    /** pb_p3pvideo select. */
    public select: number;

    /**
     * Creates a new pb_p3pvideo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_p3pvideo instance
     */
    public static create(properties?: Ipb_p3pvideo): pb_p3pvideo;

    /**
     * Encodes the specified pb_p3pvideo message. Does not implicitly {@link pb_p3pvideo.verify|verify} messages.
     * @param message pb_p3pvideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_p3pvideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_p3pvideo message, length delimited. Does not implicitly {@link pb_p3pvideo.verify|verify} messages.
     * @param message pb_p3pvideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_p3pvideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_p3pvideo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_p3pvideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_p3pvideo;

    /**
     * Decodes a pb_p3pvideo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_p3pvideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_p3pvideo;

    /**
     * Verifies a pb_p3pvideo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_p3pvideo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_p3pvideo
     */
    public static fromObject(object: { [k: string]: any }): pb_p3pvideo;

    /**
     * Creates a plain object from a pb_p3pvideo message. Also converts values to other types if specified.
     * @param message pb_p3pvideo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_p3pvideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_p3pvideo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_p3pvideo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_htask_info. */
export interface Ipb_htask_info {

    /** pb_htask_info tid */
    tid?: (number|null);

    /** pb_htask_info hids */
    hids?: (number[]|null);

    /** pb_htask_info heads */
    heads?: (number[]|null);
}

/** Represents a pb_htask_info. */
export class pb_htask_info implements Ipb_htask_info {

    /**
     * Constructs a new pb_htask_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_htask_info);

    /** pb_htask_info tid. */
    public tid: number;

    /** pb_htask_info hids. */
    public hids: number[];

    /** pb_htask_info heads. */
    public heads: number[];

    /**
     * Creates a new pb_htask_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_htask_info instance
     */
    public static create(properties?: Ipb_htask_info): pb_htask_info;

    /**
     * Encodes the specified pb_htask_info message. Does not implicitly {@link pb_htask_info.verify|verify} messages.
     * @param message pb_htask_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_htask_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_htask_info message, length delimited. Does not implicitly {@link pb_htask_info.verify|verify} messages.
     * @param message pb_htask_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_htask_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_htask_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_htask_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_htask_info;

    /**
     * Decodes a pb_htask_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_htask_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_htask_info;

    /**
     * Verifies a pb_htask_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_htask_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_htask_info
     */
    public static fromObject(object: { [k: string]: any }): pb_htask_info;

    /**
     * Creates a plain object from a pb_htask_info message. Also converts values to other types if specified.
     * @param message pb_htask_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_htask_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_htask_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_htask_info
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_htask_cond. */
export interface Ipb_htask_cond {

    /** pb_htask_cond type */
    type: number;

    /** pb_htask_cond faction */
    faction?: (number|null);
}

/** Represents a pb_htask_cond. */
export class pb_htask_cond implements Ipb_htask_cond {

    /**
     * Constructs a new pb_htask_cond.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_htask_cond);

    /** pb_htask_cond type. */
    public type: number;

    /** pb_htask_cond faction. */
    public faction: number;

    /**
     * Creates a new pb_htask_cond instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_htask_cond instance
     */
    public static create(properties?: Ipb_htask_cond): pb_htask_cond;

    /**
     * Encodes the specified pb_htask_cond message. Does not implicitly {@link pb_htask_cond.verify|verify} messages.
     * @param message pb_htask_cond message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_htask_cond, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_htask_cond message, length delimited. Does not implicitly {@link pb_htask_cond.verify|verify} messages.
     * @param message pb_htask_cond message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_htask_cond, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_htask_cond message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_htask_cond
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_htask_cond;

    /**
     * Decodes a pb_htask_cond message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_htask_cond
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_htask_cond;

    /**
     * Verifies a pb_htask_cond message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_htask_cond message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_htask_cond
     */
    public static fromObject(object: { [k: string]: any }): pb_htask_cond;

    /**
     * Creates a plain object from a pb_htask_cond message. Also converts values to other types if specified.
     * @param message pb_htask_cond
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_htask_cond, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_htask_cond to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_htask_cond
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_htask_sync. */
export interface Ipb_htask_sync {

    /** pb_htask_sync cd */
    cd: number;

    /** pb_htask_sync tasks */
    tasks?: (Ipb_htask[]|null);
}

/** Represents a pb_htask_sync. */
export class pb_htask_sync implements Ipb_htask_sync {

    /**
     * Constructs a new pb_htask_sync.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_htask_sync);

    /** pb_htask_sync cd. */
    public cd: number;

    /** pb_htask_sync tasks. */
    public tasks: Ipb_htask[];

    /**
     * Creates a new pb_htask_sync instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_htask_sync instance
     */
    public static create(properties?: Ipb_htask_sync): pb_htask_sync;

    /**
     * Encodes the specified pb_htask_sync message. Does not implicitly {@link pb_htask_sync.verify|verify} messages.
     * @param message pb_htask_sync message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_htask_sync, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_htask_sync message, length delimited. Does not implicitly {@link pb_htask_sync.verify|verify} messages.
     * @param message pb_htask_sync message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_htask_sync, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_htask_sync message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_htask_sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_htask_sync;

    /**
     * Decodes a pb_htask_sync message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_htask_sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_htask_sync;

    /**
     * Verifies a pb_htask_sync message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_htask_sync message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_htask_sync
     */
    public static fromObject(object: { [k: string]: any }): pb_htask_sync;

    /**
     * Creates a plain object from a pb_htask_sync message. Also converts values to other types if specified.
     * @param message pb_htask_sync
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_htask_sync, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_htask_sync to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_htask_sync
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_htask. */
export interface Ipb_htask {

    /** pb_htask tid */
    tid: number;

    /** pb_htask id */
    id: number;

    /** pb_htask cd */
    cd?: (number|null);

    /** pb_htask heroes */
    heroes?: (Ipb_unit[]|null);

    /** pb_htask reward */
    reward?: (Ipb_bag|null);

    /** pb_htask conds */
    conds?: (Ipb_htask_cond[]|null);

    /** pb_htask power */
    power?: (number|Long|null);

    /** pb_htask lock */
    lock?: (number|null);

    /** pb_htask nameid */
    nameid: number;

    /** pb_htask heads */
    heads?: (number[]|null);
}

/** Represents a pb_htask. */
export class pb_htask implements Ipb_htask {

    /**
     * Constructs a new pb_htask.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_htask);

    /** pb_htask tid. */
    public tid: number;

    /** pb_htask id. */
    public id: number;

    /** pb_htask cd. */
    public cd: number;

    /** pb_htask heroes. */
    public heroes: Ipb_unit[];

    /** pb_htask reward. */
    public reward?: (Ipb_bag|null);

    /** pb_htask conds. */
    public conds: Ipb_htask_cond[];

    /** pb_htask power. */
    public power: (number|Long);

    /** pb_htask lock. */
    public lock: number;

    /** pb_htask nameid. */
    public nameid: number;

    /** pb_htask heads. */
    public heads: number[];

    /**
     * Creates a new pb_htask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_htask instance
     */
    public static create(properties?: Ipb_htask): pb_htask;

    /**
     * Encodes the specified pb_htask message. Does not implicitly {@link pb_htask.verify|verify} messages.
     * @param message pb_htask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_htask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_htask message, length delimited. Does not implicitly {@link pb_htask.verify|verify} messages.
     * @param message pb_htask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_htask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_htask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_htask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_htask;

    /**
     * Decodes a pb_htask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_htask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_htask;

    /**
     * Verifies a pb_htask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_htask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_htask
     */
    public static fromObject(object: { [k: string]: any }): pb_htask;

    /**
     * Creates a plain object from a pb_htask message. Also converts values to other types if specified.
     * @param message pb_htask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_htask, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_htask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_htask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_evideo. */
export interface Ipb_evideo {

    /** pb_evideo frames */
    frames?: (Uint8Array[]|null);

    /** pb_evideo win */
    win?: (boolean|null);

    /** pb_evideo reward */
    reward?: (Ipb_bag|null);

    /** pb_evideo camp */
    camp?: (Ipb_unit[]|null);

    /** pb_evideo hurts */
    hurts?: (Ipb_hurts[]|null);
}

/** Represents a pb_evideo. */
export class pb_evideo implements Ipb_evideo {

    /**
     * Constructs a new pb_evideo.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_evideo);

    /** pb_evideo frames. */
    public frames: Uint8Array[];

    /** pb_evideo win. */
    public win: boolean;

    /** pb_evideo reward. */
    public reward?: (Ipb_bag|null);

    /** pb_evideo camp. */
    public camp: Ipb_unit[];

    /** pb_evideo hurts. */
    public hurts: Ipb_hurts[];

    /**
     * Creates a new pb_evideo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_evideo instance
     */
    public static create(properties?: Ipb_evideo): pb_evideo;

    /**
     * Encodes the specified pb_evideo message. Does not implicitly {@link pb_evideo.verify|verify} messages.
     * @param message pb_evideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_evideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_evideo message, length delimited. Does not implicitly {@link pb_evideo.verify|verify} messages.
     * @param message pb_evideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_evideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_evideo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_evideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_evideo;

    /**
     * Decodes a pb_evideo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_evideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_evideo;

    /**
     * Verifies a pb_evideo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_evideo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_evideo
     */
    public static fromObject(object: { [k: string]: any }): pb_evideo;

    /**
     * Creates a plain object from a pb_evideo message. Also converts values to other types if specified.
     * @param message pb_evideo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_evideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_evideo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_evideo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_hurts. */
export interface Ipb_hurts {

    /** pb_hurts pos */
    pos: number;

    /** pb_hurts value */
    value: (number|Long);

    /** pb_hurts heal */
    heal?: (number|Long|null);

    /** pb_hurts alive */
    alive?: (boolean|null);
}

/** Represents a pb_hurts. */
export class pb_hurts implements Ipb_hurts {

    /**
     * Constructs a new pb_hurts.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_hurts);

    /** pb_hurts pos. */
    public pos: number;

    /** pb_hurts value. */
    public value: (number|Long);

    /** pb_hurts heal. */
    public heal: (number|Long);

    /** pb_hurts alive. */
    public alive: boolean;

    /**
     * Creates a new pb_hurts instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_hurts instance
     */
    public static create(properties?: Ipb_hurts): pb_hurts;

    /**
     * Encodes the specified pb_hurts message. Does not implicitly {@link pb_hurts.verify|verify} messages.
     * @param message pb_hurts message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_hurts, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_hurts message, length delimited. Does not implicitly {@link pb_hurts.verify|verify} messages.
     * @param message pb_hurts message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_hurts, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_hurts message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_hurts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_hurts;

    /**
     * Decodes a pb_hurts message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_hurts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_hurts;

    /**
     * Verifies a pb_hurts message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_hurts message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_hurts
     */
    public static fromObject(object: { [k: string]: any }): pb_hurts;

    /**
     * Creates a plain object from a pb_hurts message. Also converts values to other types if specified.
     * @param message pb_hurts
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_hurts, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_hurts to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_hurts
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_alogin. */
export interface Ipb_alogin {

    /** pb_alogin flag */
    flag: string;

    /** pb_alogin cd */
    cd?: (number|null);

    /** pb_alogin idx */
    idx?: (number|null);

    /** pb_alogin num */
    num?: (number|null);

    /** pb_alogin cd2 */
    cd2?: (number|null);

    /** pb_alogin first */
    first?: (number|null);
}

/** Represents a pb_alogin. */
export class pb_alogin implements Ipb_alogin {

    /**
     * Constructs a new pb_alogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_alogin);

    /** pb_alogin flag. */
    public flag: string;

    /** pb_alogin cd. */
    public cd: number;

    /** pb_alogin idx. */
    public idx: number;

    /** pb_alogin num. */
    public num: number;

    /** pb_alogin cd2. */
    public cd2: number;

    /** pb_alogin first. */
    public first: number;

    /**
     * Creates a new pb_alogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_alogin instance
     */
    public static create(properties?: Ipb_alogin): pb_alogin;

    /**
     * Encodes the specified pb_alogin message. Does not implicitly {@link pb_alogin.verify|verify} messages.
     * @param message pb_alogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_alogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_alogin message, length delimited. Does not implicitly {@link pb_alogin.verify|verify} messages.
     * @param message pb_alogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_alogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_alogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_alogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_alogin;

    /**
     * Decodes a pb_alogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_alogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_alogin;

    /**
     * Verifies a pb_alogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_alogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_alogin
     */
    public static fromObject(object: { [k: string]: any }): pb_alogin;

    /**
     * Creates a plain object from a pb_alogin message. Also converts values to other types if specified.
     * @param message pb_alogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_alogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_alogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_alogin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_act. */
export interface Ipb_act {

    /** pb_act id */
    id: number;

    /** pb_act status */
    status?: (number|null);

    /** pb_act cd */
    cd?: (number|null);

    /** pb_act limits */
    limits?: (number|null);

    /** pb_act read */
    read?: (number|null);

    /** pb_act next */
    next?: (number|null);

    /** pb_act loop */
    loop?: (number|null);

    /** pb_act bomb */
    bomb?: (number|null);

    /** pb_act monopoly */
    monopoly?: (Ipb_monopoly|null);

    /** pb_act code */
    code?: (string|null);

    /** pb_act limits2 */
    limits2?: (number|null);

    /** pb_act bir */
    bir?: (number|null);

    /** pb_act kv */
    kv?: (Ipb_kvs|null);

    /** pb_act grow */
    grow?: (Ipb_growup[]|null);
}

/** Represents a pb_act. */
export class pb_act implements Ipb_act {

    /**
     * Constructs a new pb_act.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_act);

    /** pb_act id. */
    public id: number;

    /** pb_act status. */
    public status: number;

    /** pb_act cd. */
    public cd: number;

    /** pb_act limits. */
    public limits: number;

    /** pb_act read. */
    public read: number;

    /** pb_act next. */
    public next: number;

    /** pb_act loop. */
    public loop: number;

    /** pb_act bomb. */
    public bomb: number;

    /** pb_act monopoly. */
    public monopoly?: (Ipb_monopoly|null);

    /** pb_act code. */
    public code: string;

    /** pb_act limits2. */
    public limits2: number;

    /** pb_act bir. */
    public bir: number;

    /** pb_act kv. */
    public kv?: (Ipb_kvs|null);

    /** pb_act grow. */
    public grow: Ipb_growup[];

    /**
     * Creates a new pb_act instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_act instance
     */
    public static create(properties?: Ipb_act): pb_act;

    /**
     * Encodes the specified pb_act message. Does not implicitly {@link pb_act.verify|verify} messages.
     * @param message pb_act message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_act, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_act message, length delimited. Does not implicitly {@link pb_act.verify|verify} messages.
     * @param message pb_act message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_act, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_act message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_act
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_act;

    /**
     * Decodes a pb_act message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_act
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_act;

    /**
     * Verifies a pb_act message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_act message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_act
     */
    public static fromObject(object: { [k: string]: any }): pb_act;

    /**
     * Creates a plain object from a pb_act message. Also converts values to other types if specified.
     * @param message pb_act
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_act, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_act to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_act
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_qstar. */
export interface Ipb_qstar {

    /** pb_qstar uid */
    uid?: (number|Long|null);

    /** pb_qstar name */
    name?: (string|null);

    /** pb_qstar logo */
    logo?: (number|null);

    /** pb_qstar score */
    score?: (number|null);
}

/** Represents a pb_qstar. */
export class pb_qstar implements Ipb_qstar {

    /**
     * Constructs a new pb_qstar.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_qstar);

    /** pb_qstar uid. */
    public uid: (number|Long);

    /** pb_qstar name. */
    public name: string;

    /** pb_qstar logo. */
    public logo: number;

    /** pb_qstar score. */
    public score: number;

    /**
     * Creates a new pb_qstar instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_qstar instance
     */
    public static create(properties?: Ipb_qstar): pb_qstar;

    /**
     * Encodes the specified pb_qstar message. Does not implicitly {@link pb_qstar.verify|verify} messages.
     * @param message pb_qstar message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_qstar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_qstar message, length delimited. Does not implicitly {@link pb_qstar.verify|verify} messages.
     * @param message pb_qstar message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_qstar, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_qstar message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_qstar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_qstar;

    /**
     * Decodes a pb_qstar message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_qstar
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_qstar;

    /**
     * Verifies a pb_qstar message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_qstar message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_qstar
     */
    public static fromObject(object: { [k: string]: any }): pb_qstar;

    /**
     * Creates a plain object from a pb_qstar message. Also converts values to other types if specified.
     * @param message pb_qstar
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_qstar, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_qstar to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_qstar
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_monopoly. */
export interface Ipb_monopoly {

    /** pb_monopoly pos */
    pos: number;

    /** pb_monopoly lv */
    lv?: (number[]|null);

    /** pb_monopoly nextEvent */
    nextEvent?: (number|null);

    /** pb_monopoly star */
    star?: (number|null);
}

/** Represents a pb_monopoly. */
export class pb_monopoly implements Ipb_monopoly {

    /**
     * Constructs a new pb_monopoly.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_monopoly);

    /** pb_monopoly pos. */
    public pos: number;

    /** pb_monopoly lv. */
    public lv: number[];

    /** pb_monopoly nextEvent. */
    public nextEvent: number;

    /** pb_monopoly star. */
    public star: number;

    /**
     * Creates a new pb_monopoly instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_monopoly instance
     */
    public static create(properties?: Ipb_monopoly): pb_monopoly;

    /**
     * Encodes the specified pb_monopoly message. Does not implicitly {@link pb_monopoly.verify|verify} messages.
     * @param message pb_monopoly message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_monopoly, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_monopoly message, length delimited. Does not implicitly {@link pb_monopoly.verify|verify} messages.
     * @param message pb_monopoly message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_monopoly, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_monopoly message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_monopoly
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_monopoly;

    /**
     * Decodes a pb_monopoly message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_monopoly
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_monopoly;

    /**
     * Verifies a pb_monopoly message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_monopoly message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_monopoly
     */
    public static fromObject(object: { [k: string]: any }): pb_monopoly;

    /**
     * Creates a plain object from a pb_monopoly message. Also converts values to other types if specified.
     * @param message pb_monopoly
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_monopoly, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_monopoly to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_monopoly
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_monopoly_step. */
export interface Ipb_monopoly_step {

    /** pb_monopoly_step id */
    id: number;

    /** pb_monopoly_step reward */
    reward?: (Ipb_item[]|null);

    /** pb_monopoly_step star */
    star?: (number|null);

    /** pb_monopoly_step event */
    event?: (number|null);

    /** pb_monopoly_step cards */
    cards?: (number[]|null);

    /** pb_monopoly_step opId */
    opId?: (number|null);
}

/** Represents a pb_monopoly_step. */
export class pb_monopoly_step implements Ipb_monopoly_step {

    /**
     * Constructs a new pb_monopoly_step.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_monopoly_step);

    /** pb_monopoly_step id. */
    public id: number;

    /** pb_monopoly_step reward. */
    public reward: Ipb_item[];

    /** pb_monopoly_step star. */
    public star: number;

    /** pb_monopoly_step event. */
    public event: number;

    /** pb_monopoly_step cards. */
    public cards: number[];

    /** pb_monopoly_step opId. */
    public opId: number;

    /**
     * Creates a new pb_monopoly_step instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_monopoly_step instance
     */
    public static create(properties?: Ipb_monopoly_step): pb_monopoly_step;

    /**
     * Encodes the specified pb_monopoly_step message. Does not implicitly {@link pb_monopoly_step.verify|verify} messages.
     * @param message pb_monopoly_step message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_monopoly_step, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_monopoly_step message, length delimited. Does not implicitly {@link pb_monopoly_step.verify|verify} messages.
     * @param message pb_monopoly_step message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_monopoly_step, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_monopoly_step message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_monopoly_step
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_monopoly_step;

    /**
     * Decodes a pb_monopoly_step message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_monopoly_step
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_monopoly_step;

    /**
     * Verifies a pb_monopoly_step message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_monopoly_step message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_monopoly_step
     */
    public static fromObject(object: { [k: string]: any }): pb_monopoly_step;

    /**
     * Creates a plain object from a pb_monopoly_step message. Also converts values to other types if specified.
     * @param message pb_monopoly_step
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_monopoly_step, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_monopoly_step to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_monopoly_step
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_dice_sweep. */
export interface Ipb_dice_sweep {

    /** pb_dice_sweep type */
    type?: (number|null);

    /** pb_dice_sweep steps */
    steps?: (Ipb_monopoly_step[]|null);

    /** pb_dice_sweep num1 */
    num1?: (number|null);

    /** pb_dice_sweep num2 */
    num2?: (number|null);
}

/** Represents a pb_dice_sweep. */
export class pb_dice_sweep implements Ipb_dice_sweep {

    /**
     * Constructs a new pb_dice_sweep.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_dice_sweep);

    /** pb_dice_sweep type. */
    public type: number;

    /** pb_dice_sweep steps. */
    public steps: Ipb_monopoly_step[];

    /** pb_dice_sweep num1. */
    public num1: number;

    /** pb_dice_sweep num2. */
    public num2: number;

    /**
     * Creates a new pb_dice_sweep instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_dice_sweep instance
     */
    public static create(properties?: Ipb_dice_sweep): pb_dice_sweep;

    /**
     * Encodes the specified pb_dice_sweep message. Does not implicitly {@link pb_dice_sweep.verify|verify} messages.
     * @param message pb_dice_sweep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_dice_sweep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_dice_sweep message, length delimited. Does not implicitly {@link pb_dice_sweep.verify|verify} messages.
     * @param message pb_dice_sweep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_dice_sweep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_dice_sweep message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_dice_sweep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_dice_sweep;

    /**
     * Decodes a pb_dice_sweep message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_dice_sweep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_dice_sweep;

    /**
     * Verifies a pb_dice_sweep message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_dice_sweep message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_dice_sweep
     */
    public static fromObject(object: { [k: string]: any }): pb_dice_sweep;

    /**
     * Creates a plain object from a pb_dice_sweep message. Also converts values to other types if specified.
     * @param message pb_dice_sweep
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_dice_sweep, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_dice_sweep to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_dice_sweep
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_sact_item. */
export interface Ipb_sact_item {

    /** pb_sact_item id */
    id: number;

    /** pb_sact_item cd */
    cd?: (number|null);

    /** pb_sact_item bomb */
    bomb?: (number|null);

    /** pb_sact_item limits */
    limits?: (number|null);

    /** pb_sact_item next */
    next?: (number|null);

    /** pb_sact_item maze */
    maze?: (Ipb_sact_maze[]|null);

    /** pb_sact_item spec */
    spec?: (number|null);

    /** pb_sact_item log */
    log?: (Ipb_kv[]|null);
}

/** Represents a pb_sact_item. */
export class pb_sact_item implements Ipb_sact_item {

    /**
     * Constructs a new pb_sact_item.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_sact_item);

    /** pb_sact_item id. */
    public id: number;

    /** pb_sact_item cd. */
    public cd: number;

    /** pb_sact_item bomb. */
    public bomb: number;

    /** pb_sact_item limits. */
    public limits: number;

    /** pb_sact_item next. */
    public next: number;

    /** pb_sact_item maze. */
    public maze: Ipb_sact_maze[];

    /** pb_sact_item spec. */
    public spec: number;

    /** pb_sact_item log. */
    public log: Ipb_kv[];

    /**
     * Creates a new pb_sact_item instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_sact_item instance
     */
    public static create(properties?: Ipb_sact_item): pb_sact_item;

    /**
     * Encodes the specified pb_sact_item message. Does not implicitly {@link pb_sact_item.verify|verify} messages.
     * @param message pb_sact_item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_sact_item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_sact_item message, length delimited. Does not implicitly {@link pb_sact_item.verify|verify} messages.
     * @param message pb_sact_item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_sact_item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_sact_item message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_sact_item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_sact_item;

    /**
     * Decodes a pb_sact_item message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_sact_item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_sact_item;

    /**
     * Verifies a pb_sact_item message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_sact_item message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_sact_item
     */
    public static fromObject(object: { [k: string]: any }): pb_sact_item;

    /**
     * Creates a plain object from a pb_sact_item message. Also converts values to other types if specified.
     * @param message pb_sact_item
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_sact_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_sact_item to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_sact_item
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_rabbit. */
export interface Ipb_rabbit {

    /** pb_rabbit type */
    type?: (number|null);

    /** pb_rabbit poses */
    poses?: (Ipb_kv[]|null);
}

/** Represents a pb_rabbit. */
export class pb_rabbit implements Ipb_rabbit {

    /**
     * Constructs a new pb_rabbit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_rabbit);

    /** pb_rabbit type. */
    public type: number;

    /** pb_rabbit poses. */
    public poses: Ipb_kv[];

    /**
     * Creates a new pb_rabbit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_rabbit instance
     */
    public static create(properties?: Ipb_rabbit): pb_rabbit;

    /**
     * Encodes the specified pb_rabbit message. Does not implicitly {@link pb_rabbit.verify|verify} messages.
     * @param message pb_rabbit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_rabbit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_rabbit message, length delimited. Does not implicitly {@link pb_rabbit.verify|verify} messages.
     * @param message pb_rabbit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_rabbit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_rabbit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_rabbit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_rabbit;

    /**
     * Decodes a pb_rabbit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_rabbit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_rabbit;

    /**
     * Verifies a pb_rabbit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_rabbit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_rabbit
     */
    public static fromObject(object: { [k: string]: any }): pb_rabbit;

    /**
     * Creates a plain object from a pb_rabbit message. Also converts values to other types if specified.
     * @param message pb_rabbit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_rabbit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_rabbit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_rabbit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ract_item. */
export interface Ipb_ract_item {

    /** pb_ract_item id */
    id: number;

    /** pb_ract_item rewards */
    rewards?: (number[]|null);

    /** pb_ract_item item */
    item?: (Ipb_item[]|null);

    /** pb_ract_item day */
    day?: (number|null);

    /** pb_ract_item cd */
    cd?: (number|null);
}

/** Represents a pb_ract_item. */
export class pb_ract_item implements Ipb_ract_item {

    /**
     * Constructs a new pb_ract_item.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ract_item);

    /** pb_ract_item id. */
    public id: number;

    /** pb_ract_item rewards. */
    public rewards: number[];

    /** pb_ract_item item. */
    public item: Ipb_item[];

    /** pb_ract_item day. */
    public day: number;

    /** pb_ract_item cd. */
    public cd: number;

    /**
     * Creates a new pb_ract_item instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ract_item instance
     */
    public static create(properties?: Ipb_ract_item): pb_ract_item;

    /**
     * Encodes the specified pb_ract_item message. Does not implicitly {@link pb_ract_item.verify|verify} messages.
     * @param message pb_ract_item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ract_item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ract_item message, length delimited. Does not implicitly {@link pb_ract_item.verify|verify} messages.
     * @param message pb_ract_item message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ract_item, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ract_item message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ract_item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ract_item;

    /**
     * Decodes a pb_ract_item message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ract_item
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ract_item;

    /**
     * Verifies a pb_ract_item message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ract_item message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ract_item
     */
    public static fromObject(object: { [k: string]: any }): pb_ract_item;

    /**
     * Creates a plain object from a pb_ract_item message. Also converts values to other types if specified.
     * @param message pb_ract_item
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ract_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ract_item to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ract_item
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_sact_maze. */
export interface Ipb_sact_maze {

    /** pb_sact_maze pos */
    pos: (number|Long);

    /** pb_sact_maze id */
    id?: (number|null);

    /** pb_sact_maze rewards */
    rewards?: (Ipb_bag|null);

    /** pb_sact_maze num */
    num?: (number|null);
}

/** Represents a pb_sact_maze. */
export class pb_sact_maze implements Ipb_sact_maze {

    /**
     * Constructs a new pb_sact_maze.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_sact_maze);

    /** pb_sact_maze pos. */
    public pos: (number|Long);

    /** pb_sact_maze id. */
    public id: number;

    /** pb_sact_maze rewards. */
    public rewards?: (Ipb_bag|null);

    /** pb_sact_maze num. */
    public num: number;

    /**
     * Creates a new pb_sact_maze instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_sact_maze instance
     */
    public static create(properties?: Ipb_sact_maze): pb_sact_maze;

    /**
     * Encodes the specified pb_sact_maze message. Does not implicitly {@link pb_sact_maze.verify|verify} messages.
     * @param message pb_sact_maze message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_sact_maze, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_sact_maze message, length delimited. Does not implicitly {@link pb_sact_maze.verify|verify} messages.
     * @param message pb_sact_maze message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_sact_maze, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_sact_maze message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_sact_maze
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_sact_maze;

    /**
     * Decodes a pb_sact_maze message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_sact_maze
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_sact_maze;

    /**
     * Verifies a pb_sact_maze message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_sact_maze message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_sact_maze
     */
    public static fromObject(object: { [k: string]: any }): pb_sact_maze;

    /**
     * Creates a plain object from a pb_sact_maze message. Also converts values to other types if specified.
     * @param message pb_sact_maze
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_sact_maze, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_sact_maze to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_sact_maze
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_sact_log. */
export interface Ipb_sact_log {

    /** pb_sact_log time */
    time?: (number|null);

    /** pb_sact_log result */
    result?: (number|null);
}

/** Represents a pb_sact_log. */
export class pb_sact_log implements Ipb_sact_log {

    /**
     * Constructs a new pb_sact_log.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_sact_log);

    /** pb_sact_log time. */
    public time: number;

    /** pb_sact_log result. */
    public result: number;

    /**
     * Creates a new pb_sact_log instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_sact_log instance
     */
    public static create(properties?: Ipb_sact_log): pb_sact_log;

    /**
     * Encodes the specified pb_sact_log message. Does not implicitly {@link pb_sact_log.verify|verify} messages.
     * @param message pb_sact_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_sact_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_sact_log message, length delimited. Does not implicitly {@link pb_sact_log.verify|verify} messages.
     * @param message pb_sact_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_sact_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_sact_log message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_sact_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_sact_log;

    /**
     * Decodes a pb_sact_log message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_sact_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_sact_log;

    /**
     * Verifies a pb_sact_log message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_sact_log message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_sact_log
     */
    public static fromObject(object: { [k: string]: any }): pb_sact_log;

    /**
     * Creates a plain object from a pb_sact_log message. Also converts values to other types if specified.
     * @param message pb_sact_log
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_sact_log, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_sact_log to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_sact_log
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_mact. */
export interface Ipb_mact {

    /** pb_mact cd */
    cd: number;

    /** pb_mact war */
    war?: (Ipb_item[]|null);

    /** pb_mact htask */
    htask?: (Ipb_item[]|null);

    /** pb_mact hmerge */
    hmerge?: (Ipb_item[]|null);

    /** pb_mact spaceSt */
    spaceSt?: (number|null);

    /** pb_mact brave */
    brave?: (Ipb_item[]|null);

    /** pb_mact status */
    status?: (number|null);

    /** pb_mact hmerge2 */
    hmerge2?: (Ipb_item[]|null);

    /** pb_mact highCasino */
    highCasino?: (Ipb_item[]|null);
}

/** Represents a pb_mact. */
export class pb_mact implements Ipb_mact {

    /**
     * Constructs a new pb_mact.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_mact);

    /** pb_mact cd. */
    public cd: number;

    /** pb_mact war. */
    public war: Ipb_item[];

    /** pb_mact htask. */
    public htask: Ipb_item[];

    /** pb_mact hmerge. */
    public hmerge: Ipb_item[];

    /** pb_mact spaceSt. */
    public spaceSt: number;

    /** pb_mact brave. */
    public brave: Ipb_item[];

    /** pb_mact status. */
    public status: number;

    /** pb_mact hmerge2. */
    public hmerge2: Ipb_item[];

    /** pb_mact highCasino. */
    public highCasino: Ipb_item[];

    /**
     * Creates a new pb_mact instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_mact instance
     */
    public static create(properties?: Ipb_mact): pb_mact;

    /**
     * Encodes the specified pb_mact message. Does not implicitly {@link pb_mact.verify|verify} messages.
     * @param message pb_mact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_mact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_mact message, length delimited. Does not implicitly {@link pb_mact.verify|verify} messages.
     * @param message pb_mact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_mact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_mact message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_mact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_mact;

    /**
     * Decodes a pb_mact message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_mact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_mact;

    /**
     * Verifies a pb_mact message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_mact message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_mact
     */
    public static fromObject(object: { [k: string]: any }): pb_mact;

    /**
     * Creates a plain object from a pb_mact message. Also converts values to other types if specified.
     * @param message pb_mact
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_mact, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_mact to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_mact
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_task. */
export interface Ipb_task {

    /** pb_task id */
    id: number;

    /** pb_task count */
    count: number;

    /** pb_task isClaim */
    isClaim: number;
}

/** Represents a pb_task. */
export class pb_task implements Ipb_task {

    /**
     * Constructs a new pb_task.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_task);

    /** pb_task id. */
    public id: number;

    /** pb_task count. */
    public count: number;

    /** pb_task isClaim. */
    public isClaim: number;

    /**
     * Creates a new pb_task instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_task instance
     */
    public static create(properties?: Ipb_task): pb_task;

    /**
     * Encodes the specified pb_task message. Does not implicitly {@link pb_task.verify|verify} messages.
     * @param message pb_task message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_task, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_task message, length delimited. Does not implicitly {@link pb_task.verify|verify} messages.
     * @param message pb_task message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_task, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_task message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_task;

    /**
     * Decodes a pb_task message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_task;

    /**
     * Verifies a pb_task message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_task message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_task
     */
    public static fromObject(object: { [k: string]: any }): pb_task;

    /**
     * Creates a plain object from a pb_task message. Also converts values to other types if specified.
     * @param message pb_task
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_task, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_task to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_task
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_online. */
export interface Ipb_online {

    /** pb_online id */
    id: number;

    /** pb_online cd */
    cd?: (number|null);
}

/** Represents a pb_online. */
export class pb_online implements Ipb_online {

    /**
     * Constructs a new pb_online.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_online);

    /** pb_online id. */
    public id: number;

    /** pb_online cd. */
    public cd: number;

    /**
     * Creates a new pb_online instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_online instance
     */
    public static create(properties?: Ipb_online): pb_online;

    /**
     * Encodes the specified pb_online message. Does not implicitly {@link pb_online.verify|verify} messages.
     * @param message pb_online message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_online, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_online message, length delimited. Does not implicitly {@link pb_online.verify|verify} messages.
     * @param message pb_online message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_online, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_online message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_online
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_online;

    /**
     * Decodes a pb_online message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_online
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_online;

    /**
     * Verifies a pb_online message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_online message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_online
     */
    public static fromObject(object: { [k: string]: any }): pb_online;

    /**
     * Creates a plain object from a pb_online message. Also converts values to other types if specified.
     * @param message pb_online
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_online, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_online to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_online
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_sachieve. */
export interface Ipb_sachieve {

    /** pb_sachieve num */
    num?: (number[]|null);

    /** pb_sachieve id */
    id?: (number[]|null);

    /** pb_sachieve curnum */
    curnum?: (number[]|null);
}

/** Represents a pb_sachieve. */
export class pb_sachieve implements Ipb_sachieve {

    /**
     * Constructs a new pb_sachieve.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_sachieve);

    /** pb_sachieve num. */
    public num: number[];

    /** pb_sachieve id. */
    public id: number[];

    /** pb_sachieve curnum. */
    public curnum: number[];

    /**
     * Creates a new pb_sachieve instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_sachieve instance
     */
    public static create(properties?: Ipb_sachieve): pb_sachieve;

    /**
     * Encodes the specified pb_sachieve message. Does not implicitly {@link pb_sachieve.verify|verify} messages.
     * @param message pb_sachieve message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_sachieve, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_sachieve message, length delimited. Does not implicitly {@link pb_sachieve.verify|verify} messages.
     * @param message pb_sachieve message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_sachieve, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_sachieve message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_sachieve
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_sachieve;

    /**
     * Decodes a pb_sachieve message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_sachieve
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_sachieve;

    /**
     * Verifies a pb_sachieve message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_sachieve message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_sachieve
     */
    public static fromObject(object: { [k: string]: any }): pb_sachieve;

    /**
     * Creates a plain object from a pb_sachieve message. Also converts values to other types if specified.
     * @param message pb_sachieve
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_sachieve, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_sachieve to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_sachieve
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_hmarket. */
export interface Ipb_hmarket {

    /** pb_hmarket id */
    id: number;

    /** pb_hmarket num */
    num?: (number|null);

    /** pb_hmarket cd */
    cd?: (number|null);
}

/** Represents a pb_hmarket. */
export class pb_hmarket implements Ipb_hmarket {

    /**
     * Constructs a new pb_hmarket.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_hmarket);

    /** pb_hmarket id. */
    public id: number;

    /** pb_hmarket num. */
    public num: number;

    /** pb_hmarket cd. */
    public cd: number;

    /**
     * Creates a new pb_hmarket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_hmarket instance
     */
    public static create(properties?: Ipb_hmarket): pb_hmarket;

    /**
     * Encodes the specified pb_hmarket message. Does not implicitly {@link pb_hmarket.verify|verify} messages.
     * @param message pb_hmarket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_hmarket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_hmarket message, length delimited. Does not implicitly {@link pb_hmarket.verify|verify} messages.
     * @param message pb_hmarket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_hmarket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_hmarket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_hmarket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_hmarket;

    /**
     * Decodes a pb_hmarket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_hmarket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_hmarket;

    /**
     * Verifies a pb_hmarket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_hmarket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_hmarket
     */
    public static fromObject(object: { [k: string]: any }): pb_hmarket;

    /**
     * Creates a plain object from a pb_hmarket message. Also converts values to other types if specified.
     * @param message pb_hmarket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_hmarket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_hmarket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_hmarket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gmarket. */
export interface Ipb_gmarket {

    /** pb_gmarket id */
    id: number;

    /** pb_gmarket num */
    num?: (number|null);

    /** pb_gmarket gid */
    gid?: (number|null);
}

/** Represents a pb_gmarket. */
export class pb_gmarket implements Ipb_gmarket {

    /**
     * Constructs a new pb_gmarket.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gmarket);

    /** pb_gmarket id. */
    public id: number;

    /** pb_gmarket num. */
    public num: number;

    /** pb_gmarket gid. */
    public gid: number;

    /**
     * Creates a new pb_gmarket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gmarket instance
     */
    public static create(properties?: Ipb_gmarket): pb_gmarket;

    /**
     * Encodes the specified pb_gmarket message. Does not implicitly {@link pb_gmarket.verify|verify} messages.
     * @param message pb_gmarket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gmarket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gmarket message, length delimited. Does not implicitly {@link pb_gmarket.verify|verify} messages.
     * @param message pb_gmarket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gmarket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gmarket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gmarket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gmarket;

    /**
     * Decodes a pb_gmarket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gmarket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gmarket;

    /**
     * Verifies a pb_gmarket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gmarket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gmarket
     */
    public static fromObject(object: { [k: string]: any }): pb_gmarket;

    /**
     * Creates a plain object from a pb_gmarket message. Also converts values to other types if specified.
     * @param message pb_gmarket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gmarket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gmarket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gmarket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gvrank. */
export interface Ipb_gvrank {

    /** pb_gvrank uid */
    uid: (number|Long);

    /** pb_gvrank name */
    name?: (string|null);

    /** pb_gvrank lv */
    lv?: (number|null);

    /** pb_gvrank logo */
    logo?: (number|null);

    /** pb_gvrank hurt */
    hurt: (number|Long);

    /** pb_gvrank reward */
    reward?: (Ipb_bag|null);

    /** pb_gvrank border */
    border?: (number|null);
}

/** Represents a pb_gvrank. */
export class pb_gvrank implements Ipb_gvrank {

    /**
     * Constructs a new pb_gvrank.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gvrank);

    /** pb_gvrank uid. */
    public uid: (number|Long);

    /** pb_gvrank name. */
    public name: string;

    /** pb_gvrank lv. */
    public lv: number;

    /** pb_gvrank logo. */
    public logo: number;

    /** pb_gvrank hurt. */
    public hurt: (number|Long);

    /** pb_gvrank reward. */
    public reward?: (Ipb_bag|null);

    /** pb_gvrank border. */
    public border: number;

    /**
     * Creates a new pb_gvrank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gvrank instance
     */
    public static create(properties?: Ipb_gvrank): pb_gvrank;

    /**
     * Encodes the specified pb_gvrank message. Does not implicitly {@link pb_gvrank.verify|verify} messages.
     * @param message pb_gvrank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gvrank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gvrank message, length delimited. Does not implicitly {@link pb_gvrank.verify|verify} messages.
     * @param message pb_gvrank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gvrank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gvrank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gvrank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gvrank;

    /**
     * Decodes a pb_gvrank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gvrank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gvrank;

    /**
     * Verifies a pb_gvrank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gvrank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gvrank
     */
    public static fromObject(object: { [k: string]: any }): pb_gvrank;

    /**
     * Creates a plain object from a pb_gvrank message. Also converts values to other types if specified.
     * @param message pb_gvrank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gvrank, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gvrank to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gvrank
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gvrank_donate. */
export interface Ipb_gvrank_donate {

    /** pb_gvrank_donate name */
    name: string;

    /** pb_gvrank_donate lv */
    lv: number;

    /** pb_gvrank_donate logo */
    logo: number;

    /** pb_gvrank_donate num */
    num?: (number|null);
}

/** Represents a pb_gvrank_donate. */
export class pb_gvrank_donate implements Ipb_gvrank_donate {

    /**
     * Constructs a new pb_gvrank_donate.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gvrank_donate);

    /** pb_gvrank_donate name. */
    public name: string;

    /** pb_gvrank_donate lv. */
    public lv: number;

    /** pb_gvrank_donate logo. */
    public logo: number;

    /** pb_gvrank_donate num. */
    public num: number;

    /**
     * Creates a new pb_gvrank_donate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gvrank_donate instance
     */
    public static create(properties?: Ipb_gvrank_donate): pb_gvrank_donate;

    /**
     * Encodes the specified pb_gvrank_donate message. Does not implicitly {@link pb_gvrank_donate.verify|verify} messages.
     * @param message pb_gvrank_donate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gvrank_donate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gvrank_donate message, length delimited. Does not implicitly {@link pb_gvrank_donate.verify|verify} messages.
     * @param message pb_gvrank_donate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gvrank_donate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gvrank_donate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gvrank_donate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gvrank_donate;

    /**
     * Decodes a pb_gvrank_donate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gvrank_donate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gvrank_donate;

    /**
     * Verifies a pb_gvrank_donate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gvrank_donate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gvrank_donate
     */
    public static fromObject(object: { [k: string]: any }): pb_gvrank_donate;

    /**
     * Creates a plain object from a pb_gvrank_donate message. Also converts values to other types if specified.
     * @param message pb_gvrank_donate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gvrank_donate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gvrank_donate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gvrank_donate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_bboss. */
export interface Ipb_bboss {

    /** pb_bboss uid */
    uid: number;

    /** pb_bboss name */
    name?: (string|null);

    /** pb_bboss lv */
    lv?: (number|null);

    /** pb_bboss logo */
    logo?: (number|null);

    /** pb_bboss hurt */
    hurt: (number|Long);

    /** pb_bboss sid */
    sid?: (number|null);
}

/** Represents a pb_bboss. */
export class pb_bboss implements Ipb_bboss {

    /**
     * Constructs a new pb_bboss.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_bboss);

    /** pb_bboss uid. */
    public uid: number;

    /** pb_bboss name. */
    public name: string;

    /** pb_bboss lv. */
    public lv: number;

    /** pb_bboss logo. */
    public logo: number;

    /** pb_bboss hurt. */
    public hurt: (number|Long);

    /** pb_bboss sid. */
    public sid: number;

    /**
     * Creates a new pb_bboss instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_bboss instance
     */
    public static create(properties?: Ipb_bboss): pb_bboss;

    /**
     * Encodes the specified pb_bboss message. Does not implicitly {@link pb_bboss.verify|verify} messages.
     * @param message pb_bboss message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_bboss, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_bboss message, length delimited. Does not implicitly {@link pb_bboss.verify|verify} messages.
     * @param message pb_bboss message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_bboss, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_bboss message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_bboss
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_bboss;

    /**
     * Decodes a pb_bboss message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_bboss
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_bboss;

    /**
     * Verifies a pb_bboss message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_bboss message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_bboss
     */
    public static fromObject(object: { [k: string]: any }): pb_bboss;

    /**
     * Creates a plain object from a pb_bboss message. Also converts values to other types if specified.
     * @param message pb_bboss
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_bboss, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_bboss to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_bboss
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gskl. */
export interface Ipb_gskl {

    /** pb_gskl id */
    id: number;

    /** pb_gskl lv */
    lv: number;
}

/** Represents a pb_gskl. */
export class pb_gskl implements Ipb_gskl {

    /**
     * Constructs a new pb_gskl.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gskl);

    /** pb_gskl id. */
    public id: number;

    /** pb_gskl lv. */
    public lv: number;

    /**
     * Creates a new pb_gskl instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gskl instance
     */
    public static create(properties?: Ipb_gskl): pb_gskl;

    /**
     * Encodes the specified pb_gskl message. Does not implicitly {@link pb_gskl.verify|verify} messages.
     * @param message pb_gskl message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gskl, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gskl message, length delimited. Does not implicitly {@link pb_gskl.verify|verify} messages.
     * @param message pb_gskl message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gskl, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gskl message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gskl
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gskl;

    /**
     * Decodes a pb_gskl message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gskl
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gskl;

    /**
     * Verifies a pb_gskl message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gskl message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gskl
     */
    public static fromObject(object: { [k: string]: any }): pb_gskl;

    /**
     * Creates a plain object from a pb_gskl message. Also converts values to other types if specified.
     * @param message pb_gskl
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gskl, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gskl to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gskl
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_bunit. */
export interface Ipb_bunit {

    /** pb_bunit hid */
    hid?: (number|null);

    /** pb_bunit id */
    id?: (number|null);

    /** pb_bunit lv */
    lv?: (number|null);

    /** pb_bunit star */
    star?: (number|null);

    /** pb_bunit hpp */
    hpp?: (number|null);

    /** pb_bunit pos */
    pos?: (number|null);

    /** pb_bunit wake */
    wake?: (number|null);

    /** pb_bunit revive */
    revive?: (number|null);

    /** pb_bunit skin */
    skin?: (number|null);

    /** pb_bunit flag */
    flag?: (number|null);

    /** pb_bunit qlv */
    qlv?: (number|null);

    /** pb_bunit core */
    core?: (number|null);
}

/** Represents a pb_bunit. */
export class pb_bunit implements Ipb_bunit {

    /**
     * Constructs a new pb_bunit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_bunit);

    /** pb_bunit hid. */
    public hid: number;

    /** pb_bunit id. */
    public id: number;

    /** pb_bunit lv. */
    public lv: number;

    /** pb_bunit star. */
    public star: number;

    /** pb_bunit hpp. */
    public hpp: number;

    /** pb_bunit pos. */
    public pos: number;

    /** pb_bunit wake. */
    public wake: number;

    /** pb_bunit revive. */
    public revive: number;

    /** pb_bunit skin. */
    public skin: number;

    /** pb_bunit flag. */
    public flag: number;

    /** pb_bunit qlv. */
    public qlv: number;

    /** pb_bunit core. */
    public core: number;

    /**
     * Creates a new pb_bunit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_bunit instance
     */
    public static create(properties?: Ipb_bunit): pb_bunit;

    /**
     * Encodes the specified pb_bunit message. Does not implicitly {@link pb_bunit.verify|verify} messages.
     * @param message pb_bunit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_bunit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_bunit message, length delimited. Does not implicitly {@link pb_bunit.verify|verify} messages.
     * @param message pb_bunit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_bunit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_bunit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_bunit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_bunit;

    /**
     * Decodes a pb_bunit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_bunit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_bunit;

    /**
     * Verifies a pb_bunit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_bunit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_bunit
     */
    public static fromObject(object: { [k: string]: any }): pb_bunit;

    /**
     * Creates a plain object from a pb_bunit message. Also converts values to other types if specified.
     * @param message pb_bunit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_bunit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_bunit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_bunit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_benemy. */
export interface Ipb_benemy {

    /** pb_benemy logo */
    logo: number;

    /** pb_benemy lv */
    lv: number;

    /** pb_benemy name */
    name: string;

    /** pb_benemy power */
    power: (number|Long);

    /** pb_benemy sid */
    sid: number;

    /** pb_benemy camp */
    camp?: (Ipb_bunit[]|null);

    /** pb_benemy border */
    border?: (number|null);
}

/** Represents a pb_benemy. */
export class pb_benemy implements Ipb_benemy {

    /**
     * Constructs a new pb_benemy.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_benemy);

    /** pb_benemy logo. */
    public logo: number;

    /** pb_benemy lv. */
    public lv: number;

    /** pb_benemy name. */
    public name: string;

    /** pb_benemy power. */
    public power: (number|Long);

    /** pb_benemy sid. */
    public sid: number;

    /** pb_benemy camp. */
    public camp: Ipb_bunit[];

    /** pb_benemy border. */
    public border: number;

    /**
     * Creates a new pb_benemy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_benemy instance
     */
    public static create(properties?: Ipb_benemy): pb_benemy;

    /**
     * Encodes the specified pb_benemy message. Does not implicitly {@link pb_benemy.verify|verify} messages.
     * @param message pb_benemy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_benemy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_benemy message, length delimited. Does not implicitly {@link pb_benemy.verify|verify} messages.
     * @param message pb_benemy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_benemy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_benemy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_benemy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_benemy;

    /**
     * Decodes a pb_benemy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_benemy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_benemy;

    /**
     * Verifies a pb_benemy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_benemy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_benemy
     */
    public static fromObject(object: { [k: string]: any }): pb_benemy;

    /**
     * Creates a plain object from a pb_benemy message. Also converts values to other types if specified.
     * @param message pb_benemy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_benemy, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_benemy to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_benemy
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ngwshold. */
export interface Ipb_ngwshold {

    /** pb_ngwshold left */
    left?: (number|null);

    /** pb_ngwshold total */
    total?: (number|null);

    /** pb_ngwshold buffs */
    buffs?: (Ipb_ngwbuff[]|null);

    /** pb_ngwshold power */
    power?: (number|Long|null);
}

/** Represents a pb_ngwshold. */
export class pb_ngwshold implements Ipb_ngwshold {

    /**
     * Constructs a new pb_ngwshold.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ngwshold);

    /** pb_ngwshold left. */
    public left: number;

    /** pb_ngwshold total. */
    public total: number;

    /** pb_ngwshold buffs. */
    public buffs: Ipb_ngwbuff[];

    /** pb_ngwshold power. */
    public power: (number|Long);

    /**
     * Creates a new pb_ngwshold instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ngwshold instance
     */
    public static create(properties?: Ipb_ngwshold): pb_ngwshold;

    /**
     * Encodes the specified pb_ngwshold message. Does not implicitly {@link pb_ngwshold.verify|verify} messages.
     * @param message pb_ngwshold message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ngwshold, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ngwshold message, length delimited. Does not implicitly {@link pb_ngwshold.verify|verify} messages.
     * @param message pb_ngwshold message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ngwshold, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ngwshold message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ngwshold
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ngwshold;

    /**
     * Decodes a pb_ngwshold message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ngwshold
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ngwshold;

    /**
     * Verifies a pb_ngwshold message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ngwshold message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ngwshold
     */
    public static fromObject(object: { [k: string]: any }): pb_ngwshold;

    /**
     * Creates a plain object from a pb_ngwshold message. Also converts values to other types if specified.
     * @param message pb_ngwshold
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ngwshold, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ngwshold to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ngwshold
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ngwrank. */
export interface Ipb_ngwrank {

    /** pb_ngwrank gid */
    gid?: (number|null);

    /** pb_ngwrank score */
    score?: (number|null);

    /** pb_ngwrank seg */
    seg?: (number|null);

    /** pb_ngwrank time */
    time?: (number|null);

    /** pb_ngwrank logo */
    logo?: (number|null);

    /** pb_ngwrank name */
    name?: (string|null);

    /** pb_ngwrank power */
    power?: (number|Long|null);
}

/** Represents a pb_ngwrank. */
export class pb_ngwrank implements Ipb_ngwrank {

    /**
     * Constructs a new pb_ngwrank.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ngwrank);

    /** pb_ngwrank gid. */
    public gid: number;

    /** pb_ngwrank score. */
    public score: number;

    /** pb_ngwrank seg. */
    public seg: number;

    /** pb_ngwrank time. */
    public time: number;

    /** pb_ngwrank logo. */
    public logo: number;

    /** pb_ngwrank name. */
    public name: string;

    /** pb_ngwrank power. */
    public power: (number|Long);

    /**
     * Creates a new pb_ngwrank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ngwrank instance
     */
    public static create(properties?: Ipb_ngwrank): pb_ngwrank;

    /**
     * Encodes the specified pb_ngwrank message. Does not implicitly {@link pb_ngwrank.verify|verify} messages.
     * @param message pb_ngwrank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ngwrank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ngwrank message, length delimited. Does not implicitly {@link pb_ngwrank.verify|verify} messages.
     * @param message pb_ngwrank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ngwrank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ngwrank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ngwrank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ngwrank;

    /**
     * Decodes a pb_ngwrank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ngwrank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ngwrank;

    /**
     * Verifies a pb_ngwrank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ngwrank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ngwrank
     */
    public static fromObject(object: { [k: string]: any }): pb_ngwrank;

    /**
     * Creates a plain object from a pb_ngwrank message. Also converts values to other types if specified.
     * @param message pb_ngwrank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ngwrank, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ngwrank to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ngwrank
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ngwprank. */
export interface Ipb_ngwprank {

    /** pb_ngwprank uid */
    uid?: (number|Long|null);

    /** pb_ngwprank name */
    name?: (string|null);

    /** pb_ngwprank lv */
    lv?: (number|null);

    /** pb_ngwprank logo */
    logo?: (number|null);

    /** pb_ngwprank lbox */
    lbox?: (number|null);

    /** pb_ngwprank gname */
    gname?: (string|null);

    /** pb_ngwprank score */
    score?: (number|null);

    /** pb_ngwprank time */
    time?: (number|null);

    /** pb_ngwprank power */
    power?: (number|Long|null);

    /** pb_ngwprank daily */
    daily?: (number[]|null);
}

/** Represents a pb_ngwprank. */
export class pb_ngwprank implements Ipb_ngwprank {

    /**
     * Constructs a new pb_ngwprank.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ngwprank);

    /** pb_ngwprank uid. */
    public uid: (number|Long);

    /** pb_ngwprank name. */
    public name: string;

    /** pb_ngwprank lv. */
    public lv: number;

    /** pb_ngwprank logo. */
    public logo: number;

    /** pb_ngwprank lbox. */
    public lbox: number;

    /** pb_ngwprank gname. */
    public gname: string;

    /** pb_ngwprank score. */
    public score: number;

    /** pb_ngwprank time. */
    public time: number;

    /** pb_ngwprank power. */
    public power: (number|Long);

    /** pb_ngwprank daily. */
    public daily: number[];

    /**
     * Creates a new pb_ngwprank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ngwprank instance
     */
    public static create(properties?: Ipb_ngwprank): pb_ngwprank;

    /**
     * Encodes the specified pb_ngwprank message. Does not implicitly {@link pb_ngwprank.verify|verify} messages.
     * @param message pb_ngwprank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ngwprank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ngwprank message, length delimited. Does not implicitly {@link pb_ngwprank.verify|verify} messages.
     * @param message pb_ngwprank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ngwprank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ngwprank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ngwprank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ngwprank;

    /**
     * Decodes a pb_ngwprank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ngwprank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ngwprank;

    /**
     * Verifies a pb_ngwprank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ngwprank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ngwprank
     */
    public static fromObject(object: { [k: string]: any }): pb_ngwprank;

    /**
     * Creates a plain object from a pb_ngwprank message. Also converts values to other types if specified.
     * @param message pb_ngwprank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ngwprank, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ngwprank to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ngwprank
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ngwbuff. */
export interface Ipb_ngwbuff {

    /** pb_ngwbuff id */
    id?: (number|null);

    /** pb_ngwbuff num */
    num?: (number|null);
}

/** Represents a pb_ngwbuff. */
export class pb_ngwbuff implements Ipb_ngwbuff {

    /**
     * Constructs a new pb_ngwbuff.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ngwbuff);

    /** pb_ngwbuff id. */
    public id: number;

    /** pb_ngwbuff num. */
    public num: number;

    /**
     * Creates a new pb_ngwbuff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ngwbuff instance
     */
    public static create(properties?: Ipb_ngwbuff): pb_ngwbuff;

    /**
     * Encodes the specified pb_ngwbuff message. Does not implicitly {@link pb_ngwbuff.verify|verify} messages.
     * @param message pb_ngwbuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ngwbuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ngwbuff message, length delimited. Does not implicitly {@link pb_ngwbuff.verify|verify} messages.
     * @param message pb_ngwbuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ngwbuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ngwbuff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ngwbuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ngwbuff;

    /**
     * Decodes a pb_ngwbuff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ngwbuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ngwbuff;

    /**
     * Verifies a pb_ngwbuff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ngwbuff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ngwbuff
     */
    public static fromObject(object: { [k: string]: any }): pb_ngwbuff;

    /**
     * Creates a plain object from a pb_ngwbuff message. Also converts values to other types if specified.
     * @param message pb_ngwbuff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ngwbuff, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ngwbuff to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ngwbuff
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ngwmbr. */
export interface Ipb_ngwmbr {

    /** pb_ngwmbr idx */
    idx?: (number|null);

    /** pb_ngwmbr logo */
    logo?: (number|null);

    /** pb_ngwmbr gname */
    gname?: (string|null);

    /** pb_ngwmbr power */
    power?: (number|Long|null);

    /** pb_ngwmbr lv */
    lv?: (number|null);

    /** pb_ngwmbr lbox */
    lbox?: (number|null);

    /** pb_ngwmbr unit */
    unit?: (Ipb_unit[]|null);

    /** pb_ngwmbr uid */
    uid?: (number|Long|null);

    /** pb_ngwmbr gid */
    gid?: (number|null);

    /** pb_ngwmbr win */
    win?: (number|null);
}

/** Represents a pb_ngwmbr. */
export class pb_ngwmbr implements Ipb_ngwmbr {

    /**
     * Constructs a new pb_ngwmbr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ngwmbr);

    /** pb_ngwmbr idx. */
    public idx: number;

    /** pb_ngwmbr logo. */
    public logo: number;

    /** pb_ngwmbr gname. */
    public gname: string;

    /** pb_ngwmbr power. */
    public power: (number|Long);

    /** pb_ngwmbr lv. */
    public lv: number;

    /** pb_ngwmbr lbox. */
    public lbox: number;

    /** pb_ngwmbr unit. */
    public unit: Ipb_unit[];

    /** pb_ngwmbr uid. */
    public uid: (number|Long);

    /** pb_ngwmbr gid. */
    public gid: number;

    /** pb_ngwmbr win. */
    public win: number;

    /**
     * Creates a new pb_ngwmbr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ngwmbr instance
     */
    public static create(properties?: Ipb_ngwmbr): pb_ngwmbr;

    /**
     * Encodes the specified pb_ngwmbr message. Does not implicitly {@link pb_ngwmbr.verify|verify} messages.
     * @param message pb_ngwmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ngwmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ngwmbr message, length delimited. Does not implicitly {@link pb_ngwmbr.verify|verify} messages.
     * @param message pb_ngwmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ngwmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ngwmbr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ngwmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ngwmbr;

    /**
     * Decodes a pb_ngwmbr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ngwmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ngwmbr;

    /**
     * Verifies a pb_ngwmbr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ngwmbr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ngwmbr
     */
    public static fromObject(object: { [k: string]: any }): pb_ngwmbr;

    /**
     * Creates a plain object from a pb_ngwmbr message. Also converts values to other types if specified.
     * @param message pb_ngwmbr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ngwmbr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ngwmbr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ngwmbr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_clink. */
export interface Ipb_clink {

    /** pb_clink cd */
    cd?: (number|null);

    /** pb_clink atk */
    atk?: (number|null);

    /** pb_clink def */
    def?: (number|null);

    /** pb_clink win */
    win?: (number|null);

    /** pb_clink vid */
    vid?: (number|Long|null);
}

/** Represents a pb_clink. */
export class pb_clink implements Ipb_clink {

    /**
     * Constructs a new pb_clink.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_clink);

    /** pb_clink cd. */
    public cd: number;

    /** pb_clink atk. */
    public atk: number;

    /** pb_clink def. */
    public def: number;

    /** pb_clink win. */
    public win: number;

    /** pb_clink vid. */
    public vid: (number|Long);

    /**
     * Creates a new pb_clink instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_clink instance
     */
    public static create(properties?: Ipb_clink): pb_clink;

    /**
     * Encodes the specified pb_clink message. Does not implicitly {@link pb_clink.verify|verify} messages.
     * @param message pb_clink message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_clink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_clink message, length delimited. Does not implicitly {@link pb_clink.verify|verify} messages.
     * @param message pb_clink message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_clink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_clink message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_clink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_clink;

    /**
     * Decodes a pb_clink message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_clink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_clink;

    /**
     * Verifies a pb_clink message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_clink message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_clink
     */
    public static fromObject(object: { [k: string]: any }): pb_clink;

    /**
     * Creates a plain object from a pb_clink message. Also converts values to other types if specified.
     * @param message pb_clink
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_clink, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_clink to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_clink
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_cgw_info. */
export interface Ipb_cgw_info {

    /** pb_cgw_info id */
    id?: (number|null);

    /** pb_cgw_info logo */
    logo?: (number|null);

    /** pb_cgw_info power */
    power?: (number|Long|null);

    /** pb_cgw_info name */
    name?: (string|null);
}

/** Represents a pb_cgw_info. */
export class pb_cgw_info implements Ipb_cgw_info {

    /**
     * Constructs a new pb_cgw_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_cgw_info);

    /** pb_cgw_info id. */
    public id: number;

    /** pb_cgw_info logo. */
    public logo: number;

    /** pb_cgw_info power. */
    public power: (number|Long);

    /** pb_cgw_info name. */
    public name: string;

    /**
     * Creates a new pb_cgw_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_cgw_info instance
     */
    public static create(properties?: Ipb_cgw_info): pb_cgw_info;

    /**
     * Encodes the specified pb_cgw_info message. Does not implicitly {@link pb_cgw_info.verify|verify} messages.
     * @param message pb_cgw_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_cgw_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_cgw_info message, length delimited. Does not implicitly {@link pb_cgw_info.verify|verify} messages.
     * @param message pb_cgw_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_cgw_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_cgw_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_cgw_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_cgw_info;

    /**
     * Decodes a pb_cgw_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_cgw_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_cgw_info;

    /**
     * Verifies a pb_cgw_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_cgw_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_cgw_info
     */
    public static fromObject(object: { [k: string]: any }): pb_cgw_info;

    /**
     * Creates a plain object from a pb_cgw_info message. Also converts values to other types if specified.
     * @param message pb_cgw_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_cgw_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_cgw_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_cgw_info
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_cgw_mbr. */
export interface Ipb_cgw_mbr {

    /** pb_cgw_mbr uid */
    uid?: (number|Long|null);

    /** pb_cgw_mbr logo */
    logo?: (number|null);

    /** pb_cgw_mbr lv */
    lv?: (number|null);

    /** pb_cgw_mbr lbox */
    lbox?: (number|null);

    /** pb_cgw_mbr name */
    name?: (string|null);

    /** pb_cgw_mbr camp */
    camp?: (Ipb_unit[]|null);
}

/** Represents a pb_cgw_mbr. */
export class pb_cgw_mbr implements Ipb_cgw_mbr {

    /**
     * Constructs a new pb_cgw_mbr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_cgw_mbr);

    /** pb_cgw_mbr uid. */
    public uid: (number|Long);

    /** pb_cgw_mbr logo. */
    public logo: number;

    /** pb_cgw_mbr lv. */
    public lv: number;

    /** pb_cgw_mbr lbox. */
    public lbox: number;

    /** pb_cgw_mbr name. */
    public name: string;

    /** pb_cgw_mbr camp. */
    public camp: Ipb_unit[];

    /**
     * Creates a new pb_cgw_mbr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_cgw_mbr instance
     */
    public static create(properties?: Ipb_cgw_mbr): pb_cgw_mbr;

    /**
     * Encodes the specified pb_cgw_mbr message. Does not implicitly {@link pb_cgw_mbr.verify|verify} messages.
     * @param message pb_cgw_mbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_cgw_mbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_cgw_mbr message, length delimited. Does not implicitly {@link pb_cgw_mbr.verify|verify} messages.
     * @param message pb_cgw_mbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_cgw_mbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_cgw_mbr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_cgw_mbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_cgw_mbr;

    /**
     * Decodes a pb_cgw_mbr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_cgw_mbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_cgw_mbr;

    /**
     * Verifies a pb_cgw_mbr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_cgw_mbr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_cgw_mbr
     */
    public static fromObject(object: { [k: string]: any }): pb_cgw_mbr;

    /**
     * Creates a plain object from a pb_cgw_mbr message. Also converts values to other types if specified.
     * @param message pb_cgw_mbr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_cgw_mbr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_cgw_mbr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_cgw_mbr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_cgw_record. */
export interface Ipb_cgw_record {

    /** pb_cgw_record gid */
    gid?: (number|null);

    /** pb_cgw_record logo */
    logo?: (number|null);

    /** pb_cgw_record vid */
    vid?: (number|null);

    /** pb_cgw_record cd */
    cd?: (number|null);

    /** pb_cgw_record flag */
    flag?: (number|null);

    /** pb_cgw_record power */
    power?: (number|Long|null);

    /** pb_cgw_record name */
    name?: (string|null);

    /** pb_cgw_record atk */
    atk?: (boolean|null);

    /** pb_cgw_record win */
    win?: (boolean|null);

    /** pb_cgw_record spower */
    spower?: (number|Long|null);
}

/** Represents a pb_cgw_record. */
export class pb_cgw_record implements Ipb_cgw_record {

    /**
     * Constructs a new pb_cgw_record.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_cgw_record);

    /** pb_cgw_record gid. */
    public gid: number;

    /** pb_cgw_record logo. */
    public logo: number;

    /** pb_cgw_record vid. */
    public vid: number;

    /** pb_cgw_record cd. */
    public cd: number;

    /** pb_cgw_record flag. */
    public flag: number;

    /** pb_cgw_record power. */
    public power: (number|Long);

    /** pb_cgw_record name. */
    public name: string;

    /** pb_cgw_record atk. */
    public atk: boolean;

    /** pb_cgw_record win. */
    public win: boolean;

    /** pb_cgw_record spower. */
    public spower: (number|Long);

    /**
     * Creates a new pb_cgw_record instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_cgw_record instance
     */
    public static create(properties?: Ipb_cgw_record): pb_cgw_record;

    /**
     * Encodes the specified pb_cgw_record message. Does not implicitly {@link pb_cgw_record.verify|verify} messages.
     * @param message pb_cgw_record message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_cgw_record, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_cgw_record message, length delimited. Does not implicitly {@link pb_cgw_record.verify|verify} messages.
     * @param message pb_cgw_record message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_cgw_record, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_cgw_record message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_cgw_record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_cgw_record;

    /**
     * Decodes a pb_cgw_record message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_cgw_record
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_cgw_record;

    /**
     * Verifies a pb_cgw_record message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_cgw_record message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_cgw_record
     */
    public static fromObject(object: { [k: string]: any }): pb_cgw_record;

    /**
     * Creates a plain object from a pb_cgw_record message. Also converts values to other types if specified.
     * @param message pb_cgw_record
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_cgw_record, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_cgw_record to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_cgw_record
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_cgw_log. */
export interface Ipb_cgw_log {

    /** pb_cgw_log atk */
    atk?: (Ipb_cgw_mbr|null);

    /** pb_cgw_log def */
    def?: (Ipb_cgw_mbr|null);

    /** pb_cgw_log win */
    win?: (boolean|null);
}

/** Represents a pb_cgw_log. */
export class pb_cgw_log implements Ipb_cgw_log {

    /**
     * Constructs a new pb_cgw_log.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_cgw_log);

    /** pb_cgw_log atk. */
    public atk?: (Ipb_cgw_mbr|null);

    /** pb_cgw_log def. */
    public def?: (Ipb_cgw_mbr|null);

    /** pb_cgw_log win. */
    public win: boolean;

    /**
     * Creates a new pb_cgw_log instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_cgw_log instance
     */
    public static create(properties?: Ipb_cgw_log): pb_cgw_log;

    /**
     * Encodes the specified pb_cgw_log message. Does not implicitly {@link pb_cgw_log.verify|verify} messages.
     * @param message pb_cgw_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_cgw_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_cgw_log message, length delimited. Does not implicitly {@link pb_cgw_log.verify|verify} messages.
     * @param message pb_cgw_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_cgw_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_cgw_log message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_cgw_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_cgw_log;

    /**
     * Decodes a pb_cgw_log message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_cgw_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_cgw_log;

    /**
     * Verifies a pb_cgw_log message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_cgw_log message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_cgw_log
     */
    public static fromObject(object: { [k: string]: any }): pb_cgw_log;

    /**
     * Creates a plain object from a pb_cgw_log message. Also converts values to other types if specified.
     * @param message pb_cgw_log
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_cgw_log, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_cgw_log to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_cgw_log
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ngw_sweep. */
export interface Ipb_ngw_sweep {

    /** pb_ngw_sweep status */
    status?: (number|null);

    /** pb_ngw_sweep id */
    id?: (number|null);

    /** pb_ngw_sweep destroy */
    destroy?: (number|null);
}

/** Represents a pb_ngw_sweep. */
export class pb_ngw_sweep implements Ipb_ngw_sweep {

    /**
     * Constructs a new pb_ngw_sweep.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ngw_sweep);

    /** pb_ngw_sweep status. */
    public status: number;

    /** pb_ngw_sweep id. */
    public id: number;

    /** pb_ngw_sweep destroy. */
    public destroy: number;

    /**
     * Creates a new pb_ngw_sweep instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ngw_sweep instance
     */
    public static create(properties?: Ipb_ngw_sweep): pb_ngw_sweep;

    /**
     * Encodes the specified pb_ngw_sweep message. Does not implicitly {@link pb_ngw_sweep.verify|verify} messages.
     * @param message pb_ngw_sweep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ngw_sweep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ngw_sweep message, length delimited. Does not implicitly {@link pb_ngw_sweep.verify|verify} messages.
     * @param message pb_ngw_sweep message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ngw_sweep, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ngw_sweep message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ngw_sweep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ngw_sweep;

    /**
     * Decodes a pb_ngw_sweep message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ngw_sweep
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ngw_sweep;

    /**
     * Verifies a pb_ngw_sweep message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ngw_sweep message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ngw_sweep
     */
    public static fromObject(object: { [k: string]: any }): pb_ngw_sweep;

    /**
     * Creates a plain object from a pb_ngw_sweep message. Also converts values to other types if specified.
     * @param message pb_ngw_sweep
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ngw_sweep, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ngw_sweep to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ngw_sweep
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_cd. */
export interface Ipb_cd {

    /** pb_cd id */
    id: number;

    /** pb_cd cd */
    cd: number;
}

/** Represents a pb_cd. */
export class pb_cd implements Ipb_cd {

    /**
     * Constructs a new pb_cd.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_cd);

    /** pb_cd id. */
    public id: number;

    /** pb_cd cd. */
    public cd: number;

    /**
     * Creates a new pb_cd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_cd instance
     */
    public static create(properties?: Ipb_cd): pb_cd;

    /**
     * Encodes the specified pb_cd message. Does not implicitly {@link pb_cd.verify|verify} messages.
     * @param message pb_cd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_cd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_cd message, length delimited. Does not implicitly {@link pb_cd.verify|verify} messages.
     * @param message pb_cd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_cd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_cd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_cd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_cd;

    /**
     * Decodes a pb_cd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_cd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_cd;

    /**
     * Verifies a pb_cd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_cd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_cd
     */
    public static fromObject(object: { [k: string]: any }): pb_cd;

    /**
     * Creates a plain object from a pb_cd message. Also converts values to other types if specified.
     * @param message pb_cd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_cd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_cd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_cd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gpvpteam. */
export interface Ipb_gpvpteam {

    /** pb_gpvpteam leader */
    leader?: (number|null);

    /** pb_gpvpteam mbrs */
    mbrs?: (Ipb_pmbr[]|null);

    /** pb_gpvpteam sid */
    sid?: (number|null);

    /** pb_gpvpteam score */
    score?: (number|null);

    /** pb_gpvpteam rank */
    rank?: (number|null);

    /** pb_gpvpteam power */
    power?: (number|Long|null);

    /** pb_gpvpteam name */
    name?: (string|null);

    /** pb_gpvpteam needPower */
    needPower?: (number|Long|null);

    /** pb_gpvpteam password */
    password?: (string|null);

    /** pb_gpvpteam id */
    id?: (number|null);

    /** pb_gpvpteam reg */
    reg?: (boolean|null);

    /** pb_gpvpteam enegy */
    enegy?: (number|null);

    /** pb_gpvpteam enggyCd */
    enggyCd?: (number|null);
}

/** Represents a pb_gpvpteam. */
export class pb_gpvpteam implements Ipb_gpvpteam {

    /**
     * Constructs a new pb_gpvpteam.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gpvpteam);

    /** pb_gpvpteam leader. */
    public leader: number;

    /** pb_gpvpteam mbrs. */
    public mbrs: Ipb_pmbr[];

    /** pb_gpvpteam sid. */
    public sid: number;

    /** pb_gpvpteam score. */
    public score: number;

    /** pb_gpvpteam rank. */
    public rank: number;

    /** pb_gpvpteam power. */
    public power: (number|Long);

    /** pb_gpvpteam name. */
    public name: string;

    /** pb_gpvpteam needPower. */
    public needPower: (number|Long);

    /** pb_gpvpteam password. */
    public password: string;

    /** pb_gpvpteam id. */
    public id: number;

    /** pb_gpvpteam reg. */
    public reg: boolean;

    /** pb_gpvpteam enegy. */
    public enegy: number;

    /** pb_gpvpteam enggyCd. */
    public enggyCd: number;

    /**
     * Creates a new pb_gpvpteam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gpvpteam instance
     */
    public static create(properties?: Ipb_gpvpteam): pb_gpvpteam;

    /**
     * Encodes the specified pb_gpvpteam message. Does not implicitly {@link pb_gpvpteam.verify|verify} messages.
     * @param message pb_gpvpteam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gpvpteam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gpvpteam message, length delimited. Does not implicitly {@link pb_gpvpteam.verify|verify} messages.
     * @param message pb_gpvpteam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gpvpteam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gpvpteam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gpvpteam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gpvpteam;

    /**
     * Decodes a pb_gpvpteam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gpvpteam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gpvpteam;

    /**
     * Verifies a pb_gpvpteam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gpvpteam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gpvpteam
     */
    public static fromObject(object: { [k: string]: any }): pb_gpvpteam;

    /**
     * Creates a plain object from a pb_gpvpteam message. Also converts values to other types if specified.
     * @param message pb_gpvpteam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gpvpteam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gpvpteam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gpvpteam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gpvplog. */
export interface Ipb_gpvplog {

    /** pb_gpvplog logId */
    logId: number;

    /** pb_gpvplog enemy */
    enemy: Ipb_gpvpteam;

    /** pb_gpvplog score */
    score?: (number|null);

    /** pb_gpvplog win */
    win?: (boolean|null);

    /** pb_gpvplog time */
    time?: (number|null);
}

/** Represents a pb_gpvplog. */
export class pb_gpvplog implements Ipb_gpvplog {

    /**
     * Constructs a new pb_gpvplog.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gpvplog);

    /** pb_gpvplog logId. */
    public logId: number;

    /** pb_gpvplog enemy. */
    public enemy: Ipb_gpvpteam;

    /** pb_gpvplog score. */
    public score: number;

    /** pb_gpvplog win. */
    public win: boolean;

    /** pb_gpvplog time. */
    public time: number;

    /**
     * Creates a new pb_gpvplog instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gpvplog instance
     */
    public static create(properties?: Ipb_gpvplog): pb_gpvplog;

    /**
     * Encodes the specified pb_gpvplog message. Does not implicitly {@link pb_gpvplog.verify|verify} messages.
     * @param message pb_gpvplog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gpvplog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gpvplog message, length delimited. Does not implicitly {@link pb_gpvplog.verify|verify} messages.
     * @param message pb_gpvplog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gpvplog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gpvplog message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gpvplog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gpvplog;

    /**
     * Decodes a pb_gpvplog message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gpvplog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gpvplog;

    /**
     * Verifies a pb_gpvplog message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gpvplog message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gpvplog
     */
    public static fromObject(object: { [k: string]: any }): pb_gpvplog;

    /**
     * Creates a plain object from a pb_gpvplog message. Also converts values to other types if specified.
     * @param message pb_gpvplog
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gpvplog, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gpvplog to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gpvplog
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gpvp_wlog. */
export interface Ipb_gpvp_wlog {

    /** pb_gpvp_wlog atk */
    atk: Ipb_gpvpteam;

    /** pb_gpvp_wlog def */
    def: Ipb_gpvpteam;

    /** pb_gpvp_wlog wins */
    wins?: (boolean[]|null);

    /** pb_gpvp_wlog vids */
    vids?: (number[]|null);
}

/** Represents a pb_gpvp_wlog. */
export class pb_gpvp_wlog implements Ipb_gpvp_wlog {

    /**
     * Constructs a new pb_gpvp_wlog.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gpvp_wlog);

    /** pb_gpvp_wlog atk. */
    public atk: Ipb_gpvpteam;

    /** pb_gpvp_wlog def. */
    public def: Ipb_gpvpteam;

    /** pb_gpvp_wlog wins. */
    public wins: boolean[];

    /** pb_gpvp_wlog vids. */
    public vids: number[];

    /**
     * Creates a new pb_gpvp_wlog instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gpvp_wlog instance
     */
    public static create(properties?: Ipb_gpvp_wlog): pb_gpvp_wlog;

    /**
     * Encodes the specified pb_gpvp_wlog message. Does not implicitly {@link pb_gpvp_wlog.verify|verify} messages.
     * @param message pb_gpvp_wlog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gpvp_wlog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gpvp_wlog message, length delimited. Does not implicitly {@link pb_gpvp_wlog.verify|verify} messages.
     * @param message pb_gpvp_wlog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gpvp_wlog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gpvp_wlog message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gpvp_wlog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gpvp_wlog;

    /**
     * Decodes a pb_gpvp_wlog message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gpvp_wlog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gpvp_wlog;

    /**
     * Verifies a pb_gpvp_wlog message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gpvp_wlog message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gpvp_wlog
     */
    public static fromObject(object: { [k: string]: any }): pb_gpvp_wlog;

    /**
     * Creates a plain object from a pb_gpvp_wlog message. Also converts values to other types if specified.
     * @param message pb_gpvp_wlog
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gpvp_wlog, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gpvp_wlog to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gpvp_wlog
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_pet. */
export interface Ipb_pet {

    /** pb_pet id */
    id: number;

    /** pb_pet lv */
    lv: number;

    /** pb_pet star */
    star: number;

    /** pb_pet skl */
    skl?: (number[]|null);
}

/** Represents a pb_pet. */
export class pb_pet implements Ipb_pet {

    /**
     * Constructs a new pb_pet.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_pet);

    /** pb_pet id. */
    public id: number;

    /** pb_pet lv. */
    public lv: number;

    /** pb_pet star. */
    public star: number;

    /** pb_pet skl. */
    public skl: number[];

    /**
     * Creates a new pb_pet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_pet instance
     */
    public static create(properties?: Ipb_pet): pb_pet;

    /**
     * Encodes the specified pb_pet message. Does not implicitly {@link pb_pet.verify|verify} messages.
     * @param message pb_pet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_pet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_pet message, length delimited. Does not implicitly {@link pb_pet.verify|verify} messages.
     * @param message pb_pet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_pet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_pet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_pet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_pet;

    /**
     * Decodes a pb_pet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_pet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_pet;

    /**
     * Verifies a pb_pet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_pet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_pet
     */
    public static fromObject(object: { [k: string]: any }): pb_pet;

    /**
     * Creates a plain object from a pb_pet message. Also converts values to other types if specified.
     * @param message pb_pet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_pet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_pet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_pet
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_spkunit. */
export interface Ipb_spkunit {

    /** pb_spkunit base */
    base?: (Ipb_unit|null);

    /** pb_spkunit buf */
    buf?: (Ipb_item[]|null);
}

/** Represents a pb_spkunit. */
export class pb_spkunit implements Ipb_spkunit {

    /**
     * Constructs a new pb_spkunit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_spkunit);

    /** pb_spkunit base. */
    public base?: (Ipb_unit|null);

    /** pb_spkunit buf. */
    public buf: Ipb_item[];

    /**
     * Creates a new pb_spkunit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_spkunit instance
     */
    public static create(properties?: Ipb_spkunit): pb_spkunit;

    /**
     * Encodes the specified pb_spkunit message. Does not implicitly {@link pb_spkunit.verify|verify} messages.
     * @param message pb_spkunit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_spkunit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_spkunit message, length delimited. Does not implicitly {@link pb_spkunit.verify|verify} messages.
     * @param message pb_spkunit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_spkunit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_spkunit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_spkunit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_spkunit;

    /**
     * Decodes a pb_spkunit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_spkunit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_spkunit;

    /**
     * Verifies a pb_spkunit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_spkunit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_spkunit
     */
    public static fromObject(object: { [k: string]: any }): pb_spkunit;

    /**
     * Creates a plain object from a pb_spkunit message. Also converts values to other types if specified.
     * @param message pb_spkunit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_spkunit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_spkunit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_spkunit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_spkmbr. */
export interface Ipb_spkmbr {

    /** pb_spkmbr uid */
    uid: number;

    /** pb_spkmbr lv */
    lv: number;

    /** pb_spkmbr wave */
    wave: number;

    /** pb_spkmbr time */
    time: number;

    /** pb_spkmbr logo */
    logo: number;

    /** pb_spkmbr name */
    name: string;

    /** pb_spkmbr border */
    border?: (number|null);
}

/** Represents a pb_spkmbr. */
export class pb_spkmbr implements Ipb_spkmbr {

    /**
     * Constructs a new pb_spkmbr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_spkmbr);

    /** pb_spkmbr uid. */
    public uid: number;

    /** pb_spkmbr lv. */
    public lv: number;

    /** pb_spkmbr wave. */
    public wave: number;

    /** pb_spkmbr time. */
    public time: number;

    /** pb_spkmbr logo. */
    public logo: number;

    /** pb_spkmbr name. */
    public name: string;

    /** pb_spkmbr border. */
    public border: number;

    /**
     * Creates a new pb_spkmbr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_spkmbr instance
     */
    public static create(properties?: Ipb_spkmbr): pb_spkmbr;

    /**
     * Encodes the specified pb_spkmbr message. Does not implicitly {@link pb_spkmbr.verify|verify} messages.
     * @param message pb_spkmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_spkmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_spkmbr message, length delimited. Does not implicitly {@link pb_spkmbr.verify|verify} messages.
     * @param message pb_spkmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_spkmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_spkmbr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_spkmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_spkmbr;

    /**
     * Decodes a pb_spkmbr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_spkmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_spkmbr;

    /**
     * Verifies a pb_spkmbr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_spkmbr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_spkmbr
     */
    public static fromObject(object: { [k: string]: any }): pb_spkmbr;

    /**
     * Creates a plain object from a pb_spkmbr message. Also converts values to other types if specified.
     * @param message pb_spkmbr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_spkmbr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_spkmbr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_spkmbr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_holy. */
export interface Ipb_holy {

    /** pb_holy id */
    id: number;

    /** pb_holy pos */
    pos: number;

    /** pb_holy val */
    val?: (number|null);
}

/** Represents a pb_holy. */
export class pb_holy implements Ipb_holy {

    /**
     * Constructs a new pb_holy.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_holy);

    /** pb_holy id. */
    public id: number;

    /** pb_holy pos. */
    public pos: number;

    /** pb_holy val. */
    public val: number;

    /**
     * Creates a new pb_holy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_holy instance
     */
    public static create(properties?: Ipb_holy): pb_holy;

    /**
     * Encodes the specified pb_holy message. Does not implicitly {@link pb_holy.verify|verify} messages.
     * @param message pb_holy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_holy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_holy message, length delimited. Does not implicitly {@link pb_holy.verify|verify} messages.
     * @param message pb_holy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_holy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_holy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_holy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_holy;

    /**
     * Decodes a pb_holy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_holy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_holy;

    /**
     * Verifies a pb_holy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_holy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_holy
     */
    public static fromObject(object: { [k: string]: any }): pb_holy;

    /**
     * Creates a plain object from a pb_holy message. Also converts values to other types if specified.
     * @param message pb_holy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_holy, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_holy to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_holy
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_mine. */
export interface Ipb_mine {

    /** pb_mine id */
    id: number;

    /** pb_mine pos */
    pos: number;

    /** pb_mine val */
    val: number;
}

/** Represents a pb_mine. */
export class pb_mine implements Ipb_mine {

    /**
     * Constructs a new pb_mine.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_mine);

    /** pb_mine id. */
    public id: number;

    /** pb_mine pos. */
    public pos: number;

    /** pb_mine val. */
    public val: number;

    /**
     * Creates a new pb_mine instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_mine instance
     */
    public static create(properties?: Ipb_mine): pb_mine;

    /**
     * Encodes the specified pb_mine message. Does not implicitly {@link pb_mine.verify|verify} messages.
     * @param message pb_mine message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_mine, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_mine message, length delimited. Does not implicitly {@link pb_mine.verify|verify} messages.
     * @param message pb_mine message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_mine, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_mine message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_mine
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_mine;

    /**
     * Decodes a pb_mine message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_mine
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_mine;

    /**
     * Verifies a pb_mine message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_mine message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_mine
     */
    public static fromObject(object: { [k: string]: any }): pb_mine;

    /**
     * Creates a plain object from a pb_mine message. Also converts values to other types if specified.
     * @param message pb_mine
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_mine, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_mine to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_mine
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_land. */
export interface Ipb_land {

    /** pb_land id */
    id: number;

    /** pb_land pos */
    pos: number;

    /** pb_land cd */
    cd?: (number|null);

    /** pb_land cdk */
    cdk?: (number|null);

    /** pb_land dead */
    dead?: (boolean|null);
}

/** Represents a pb_land. */
export class pb_land implements Ipb_land {

    /**
     * Constructs a new pb_land.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_land);

    /** pb_land id. */
    public id: number;

    /** pb_land pos. */
    public pos: number;

    /** pb_land cd. */
    public cd: number;

    /** pb_land cdk. */
    public cdk: number;

    /** pb_land dead. */
    public dead: boolean;

    /**
     * Creates a new pb_land instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_land instance
     */
    public static create(properties?: Ipb_land): pb_land;

    /**
     * Encodes the specified pb_land message. Does not implicitly {@link pb_land.verify|verify} messages.
     * @param message pb_land message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_land, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_land message, length delimited. Does not implicitly {@link pb_land.verify|verify} messages.
     * @param message pb_land message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_land, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_land message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_land
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_land;

    /**
     * Decodes a pb_land message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_land
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_land;

    /**
     * Verifies a pb_land message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_land message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_land
     */
    public static fromObject(object: { [k: string]: any }): pb_land;

    /**
     * Creates a plain object from a pb_land message. Also converts values to other types if specified.
     * @param message pb_land
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_land, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_land to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_land
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_vit. */
export interface Ipb_vit {

    /** pb_vit vit */
    vit: number;

    /** pb_vit buy */
    buy?: (number|null);
}

/** Represents a pb_vit. */
export class pb_vit implements Ipb_vit {

    /**
     * Constructs a new pb_vit.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_vit);

    /** pb_vit vit. */
    public vit: number;

    /** pb_vit buy. */
    public buy: number;

    /**
     * Creates a new pb_vit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_vit instance
     */
    public static create(properties?: Ipb_vit): pb_vit;

    /**
     * Encodes the specified pb_vit message. Does not implicitly {@link pb_vit.verify|verify} messages.
     * @param message pb_vit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_vit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_vit message, length delimited. Does not implicitly {@link pb_vit.verify|verify} messages.
     * @param message pb_vit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_vit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_vit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_vit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_vit;

    /**
     * Decodes a pb_vit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_vit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_vit;

    /**
     * Verifies a pb_vit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_vit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_vit
     */
    public static fromObject(object: { [k: string]: any }): pb_vit;

    /**
     * Creates a plain object from a pb_vit message. Also converts values to other types if specified.
     * @param message pb_vit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_vit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_vit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_vit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ievent. */
export interface Ipb_ievent {

    /** pb_ievent id */
    id: number;

    /** pb_ievent cd */
    cd?: (number|null);

    /** pb_ievent ext */
    ext?: (string|null);

    /** pb_ievent sid */
    sid?: (number|null);

    /** pb_ievent reward */
    reward?: (Ipb_bag|null);
}

/** Represents a pb_ievent. */
export class pb_ievent implements Ipb_ievent {

    /**
     * Constructs a new pb_ievent.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ievent);

    /** pb_ievent id. */
    public id: number;

    /** pb_ievent cd. */
    public cd: number;

    /** pb_ievent ext. */
    public ext: string;

    /** pb_ievent sid. */
    public sid: number;

    /** pb_ievent reward. */
    public reward?: (Ipb_bag|null);

    /**
     * Creates a new pb_ievent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ievent instance
     */
    public static create(properties?: Ipb_ievent): pb_ievent;

    /**
     * Encodes the specified pb_ievent message. Does not implicitly {@link pb_ievent.verify|verify} messages.
     * @param message pb_ievent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ievent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ievent message, length delimited. Does not implicitly {@link pb_ievent.verify|verify} messages.
     * @param message pb_ievent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ievent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ievent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ievent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ievent;

    /**
     * Decodes a pb_ievent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ievent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ievent;

    /**
     * Verifies a pb_ievent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ievent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ievent
     */
    public static fromObject(object: { [k: string]: any }): pb_ievent;

    /**
     * Creates a plain object from a pb_ievent message. Also converts values to other types if specified.
     * @param message pb_ievent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ievent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ievent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ievent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_iadt. */
export interface Ipb_iadt {

    /** pb_iadt dist */
    dist?: (number|null);

    /** pb_iadt mevts */
    mevts?: (Ipb_ievent[]|null);

    /** pb_iadt pevts */
    pevts?: (Ipb_ievent[]|null);

    /** pb_iadt vit */
    vit?: (number|null);

    /** pb_iadt vitcd */
    vitcd?: (number|null);

    /** pb_iadt reward */
    reward?: (Ipb_bag|null);

    /** pb_iadt rt */
    rt?: (number|null);

    /** pb_iadt num */
    num?: (number|null);
}

/** Represents a pb_iadt. */
export class pb_iadt implements Ipb_iadt {

    /**
     * Constructs a new pb_iadt.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_iadt);

    /** pb_iadt dist. */
    public dist: number;

    /** pb_iadt mevts. */
    public mevts: Ipb_ievent[];

    /** pb_iadt pevts. */
    public pevts: Ipb_ievent[];

    /** pb_iadt vit. */
    public vit: number;

    /** pb_iadt vitcd. */
    public vitcd: number;

    /** pb_iadt reward. */
    public reward?: (Ipb_bag|null);

    /** pb_iadt rt. */
    public rt: number;

    /** pb_iadt num. */
    public num: number;

    /**
     * Creates a new pb_iadt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_iadt instance
     */
    public static create(properties?: Ipb_iadt): pb_iadt;

    /**
     * Encodes the specified pb_iadt message. Does not implicitly {@link pb_iadt.verify|verify} messages.
     * @param message pb_iadt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_iadt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_iadt message, length delimited. Does not implicitly {@link pb_iadt.verify|verify} messages.
     * @param message pb_iadt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_iadt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_iadt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_iadt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_iadt;

    /**
     * Decodes a pb_iadt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_iadt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_iadt;

    /**
     * Verifies a pb_iadt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_iadt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_iadt
     */
    public static fromObject(object: { [k: string]: any }): pb_iadt;

    /**
     * Creates a plain object from a pb_iadt message. Also converts values to other types if specified.
     * @param message pb_iadt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_iadt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_iadt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_iadt
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_iboat. */
export interface Ipb_iboat {

    /** pb_iboat name */
    name?: (string|null);

    /** pb_iboat exp */
    exp?: (number|null);

    /** pb_iboat arm */
    arm?: (number|null);

    /** pb_iboat spd */
    spd?: (number|null);

    /** pb_iboat skls */
    skls?: (number[]|null);
}

/** Represents a pb_iboat. */
export class pb_iboat implements Ipb_iboat {

    /**
     * Constructs a new pb_iboat.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_iboat);

    /** pb_iboat name. */
    public name: string;

    /** pb_iboat exp. */
    public exp: number;

    /** pb_iboat arm. */
    public arm: number;

    /** pb_iboat spd. */
    public spd: number;

    /** pb_iboat skls. */
    public skls: number[];

    /**
     * Creates a new pb_iboat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_iboat instance
     */
    public static create(properties?: Ipb_iboat): pb_iboat;

    /**
     * Encodes the specified pb_iboat message. Does not implicitly {@link pb_iboat.verify|verify} messages.
     * @param message pb_iboat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_iboat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_iboat message, length delimited. Does not implicitly {@link pb_iboat.verify|verify} messages.
     * @param message pb_iboat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_iboat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_iboat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_iboat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_iboat;

    /**
     * Decodes a pb_iboat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_iboat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_iboat;

    /**
     * Verifies a pb_iboat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_iboat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_iboat
     */
    public static fromObject(object: { [k: string]: any }): pb_iboat;

    /**
     * Creates a plain object from a pb_iboat message. Also converts values to other types if specified.
     * @param message pb_iboat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_iboat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_iboat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_iboat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ipro. */
export interface Ipb_ipro {

    /** pb_ipro id */
    id?: (number|null);

    /** pb_ipro num */
    num?: (number|null);

    /** pb_ipro cd */
    cd?: (number|null);
}

/** Represents a pb_ipro. */
export class pb_ipro implements Ipb_ipro {

    /**
     * Constructs a new pb_ipro.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ipro);

    /** pb_ipro id. */
    public id: number;

    /** pb_ipro num. */
    public num: number;

    /** pb_ipro cd. */
    public cd: number;

    /**
     * Creates a new pb_ipro instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ipro instance
     */
    public static create(properties?: Ipb_ipro): pb_ipro;

    /**
     * Encodes the specified pb_ipro message. Does not implicitly {@link pb_ipro.verify|verify} messages.
     * @param message pb_ipro message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ipro, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ipro message, length delimited. Does not implicitly {@link pb_ipro.verify|verify} messages.
     * @param message pb_ipro message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ipro, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ipro message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ipro
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ipro;

    /**
     * Decodes a pb_ipro message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ipro
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ipro;

    /**
     * Verifies a pb_ipro message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ipro message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ipro
     */
    public static fromObject(object: { [k: string]: any }): pb_ipro;

    /**
     * Creates a plain object from a pb_ipro message. Also converts values to other types if specified.
     * @param message pb_ipro
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ipro, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ipro to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ipro
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_identity. */
export interface Ipb_identity {

    /** pb_identity onlineTime */
    onlineTime?: (number|null);

    /** pb_identity adult */
    adult?: (number|null);

    /** pb_identity locale */
    locale?: (string|null);

    /** pb_identity age */
    age?: (number|null);

    /** pb_identity mrecharge */
    mrecharge?: (number|null);
}

/** Represents a pb_identity. */
export class pb_identity implements Ipb_identity {

    /**
     * Constructs a new pb_identity.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_identity);

    /** pb_identity onlineTime. */
    public onlineTime: number;

    /** pb_identity adult. */
    public adult: number;

    /** pb_identity locale. */
    public locale: string;

    /** pb_identity age. */
    public age: number;

    /** pb_identity mrecharge. */
    public mrecharge: number;

    /**
     * Creates a new pb_identity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_identity instance
     */
    public static create(properties?: Ipb_identity): pb_identity;

    /**
     * Encodes the specified pb_identity message. Does not implicitly {@link pb_identity.verify|verify} messages.
     * @param message pb_identity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_identity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_identity message, length delimited. Does not implicitly {@link pb_identity.verify|verify} messages.
     * @param message pb_identity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_identity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_identity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_identity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_identity;

    /**
     * Decodes a pb_identity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_identity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_identity;

    /**
     * Verifies a pb_identity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_identity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_identity
     */
    public static fromObject(object: { [k: string]: any }): pb_identity;

    /**
     * Creates a plain object from a pb_identity message. Also converts values to other types if specified.
     * @param message pb_identity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_identity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_identity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_identity
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_sact. */
export interface Ipb_sact {

    /** pb_sact acts */
    acts?: (Ipb_sact_item[]|null);
}

/** Represents a pb_sact. */
export class pb_sact implements Ipb_sact {

    /**
     * Constructs a new pb_sact.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_sact);

    /** pb_sact acts. */
    public acts: Ipb_sact_item[];

    /**
     * Creates a new pb_sact instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_sact instance
     */
    public static create(properties?: Ipb_sact): pb_sact;

    /**
     * Encodes the specified pb_sact message. Does not implicitly {@link pb_sact.verify|verify} messages.
     * @param message pb_sact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_sact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_sact message, length delimited. Does not implicitly {@link pb_sact.verify|verify} messages.
     * @param message pb_sact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_sact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_sact message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_sact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_sact;

    /**
     * Decodes a pb_sact message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_sact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_sact;

    /**
     * Verifies a pb_sact message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_sact message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_sact
     */
    public static fromObject(object: { [k: string]: any }): pb_sact;

    /**
     * Creates a plain object from a pb_sact message. Also converts values to other types if specified.
     * @param message pb_sact
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_sact, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_sact to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_sact
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ract. */
export interface Ipb_ract {

    /** pb_ract acts */
    acts?: (Ipb_ract_item[]|null);

    /** pb_ract show */
    show?: (number|null);
}

/** Represents a pb_ract. */
export class pb_ract implements Ipb_ract {

    /**
     * Constructs a new pb_ract.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ract);

    /** pb_ract acts. */
    public acts: Ipb_ract_item[];

    /** pb_ract show. */
    public show: number;

    /**
     * Creates a new pb_ract instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ract instance
     */
    public static create(properties?: Ipb_ract): pb_ract;

    /**
     * Encodes the specified pb_ract message. Does not implicitly {@link pb_ract.verify|verify} messages.
     * @param message pb_ract message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ract, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ract message, length delimited. Does not implicitly {@link pb_ract.verify|verify} messages.
     * @param message pb_ract message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ract, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ract message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ract;

    /**
     * Decodes a pb_ract message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ract;

    /**
     * Verifies a pb_ract message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ract message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ract
     */
    public static fromObject(object: { [k: string]: any }): pb_ract;

    /**
     * Creates a plain object from a pb_ract message. Also converts values to other types if specified.
     * @param message pb_ract
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ract, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ract to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ract
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_brave_box. */
export interface Ipb_brave_box {

    /** pb_brave_box id */
    id: number;
}

/** Represents a pb_brave_box. */
export class pb_brave_box implements Ipb_brave_box {

    /**
     * Constructs a new pb_brave_box.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_brave_box);

    /** pb_brave_box id. */
    public id: number;

    /**
     * Creates a new pb_brave_box instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_brave_box instance
     */
    public static create(properties?: Ipb_brave_box): pb_brave_box;

    /**
     * Encodes the specified pb_brave_box message. Does not implicitly {@link pb_brave_box.verify|verify} messages.
     * @param message pb_brave_box message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_brave_box, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_brave_box message, length delimited. Does not implicitly {@link pb_brave_box.verify|verify} messages.
     * @param message pb_brave_box message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_brave_box, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_brave_box message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_brave_box
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_brave_box;

    /**
     * Decodes a pb_brave_box message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_brave_box
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_brave_box;

    /**
     * Verifies a pb_brave_box message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_brave_box message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_brave_box
     */
    public static fromObject(object: { [k: string]: any }): pb_brave_box;

    /**
     * Creates a plain object from a pb_brave_box message. Also converts values to other types if specified.
     * @param message pb_brave_box
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_brave_box, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_brave_box to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_brave_box
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_brave_buff. */
export interface Ipb_brave_buff {

    /** pb_brave_buff id */
    id: number;

    /** pb_brave_buff num */
    num: number;
}

/** Represents a pb_brave_buff. */
export class pb_brave_buff implements Ipb_brave_buff {

    /**
     * Constructs a new pb_brave_buff.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_brave_buff);

    /** pb_brave_buff id. */
    public id: number;

    /** pb_brave_buff num. */
    public num: number;

    /**
     * Creates a new pb_brave_buff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_brave_buff instance
     */
    public static create(properties?: Ipb_brave_buff): pb_brave_buff;

    /**
     * Encodes the specified pb_brave_buff message. Does not implicitly {@link pb_brave_buff.verify|verify} messages.
     * @param message pb_brave_buff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_brave_buff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_brave_buff message, length delimited. Does not implicitly {@link pb_brave_buff.verify|verify} messages.
     * @param message pb_brave_buff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_brave_buff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_brave_buff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_brave_buff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_brave_buff;

    /**
     * Decodes a pb_brave_buff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_brave_buff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_brave_buff;

    /**
     * Verifies a pb_brave_buff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_brave_buff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_brave_buff
     */
    public static fromObject(object: { [k: string]: any }): pb_brave_buff;

    /**
     * Creates a plain object from a pb_brave_buff message. Also converts values to other types if specified.
     * @param message pb_brave_buff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_brave_buff, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_brave_buff to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_brave_buff
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_re_sync. */
export interface Ipb_re_sync {

    /** pb_re_sync role */
    role?: (number|null);

    /** pb_re_sync giftId */
    giftId?: (number|null);

    /** pb_re_sync backGift */
    backGift?: (number|null);

    /** pb_re_sync bindTimes */
    bindTimes?: (number|null);

    /** pb_re_sync helpTimes */
    helpTimes?: (number|null);

    /** pb_re_sync backCd */
    backCd?: (number|null);

    /** pb_re_sync bind */
    bind?: (number|null);

    /** pb_re_sync sTasks */
    sTasks?: (Ipb_re_task[]|null);

    /** pb_re_sync hTasks */
    hTasks?: (Ipb_re_task[]|null);

    /** pb_re_sync cd */
    cd?: (number|null);

    /** pb_re_sync cd2 */
    cd2?: (number|null);

    /** pb_re_sync applys */
    applys?: (Ipb_re_apply[]|null);

    /** pb_re_sync code */
    code?: (string|null);

    /** pb_re_sync players */
    players?: (Ipb_re_bind_player[]|null);
}

/** Represents a pb_re_sync. */
export class pb_re_sync implements Ipb_re_sync {

    /**
     * Constructs a new pb_re_sync.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_re_sync);

    /** pb_re_sync role. */
    public role: number;

    /** pb_re_sync giftId. */
    public giftId: number;

    /** pb_re_sync backGift. */
    public backGift: number;

    /** pb_re_sync bindTimes. */
    public bindTimes: number;

    /** pb_re_sync helpTimes. */
    public helpTimes: number;

    /** pb_re_sync backCd. */
    public backCd: number;

    /** pb_re_sync bind. */
    public bind: number;

    /** pb_re_sync sTasks. */
    public sTasks: Ipb_re_task[];

    /** pb_re_sync hTasks. */
    public hTasks: Ipb_re_task[];

    /** pb_re_sync cd. */
    public cd: number;

    /** pb_re_sync cd2. */
    public cd2: number;

    /** pb_re_sync applys. */
    public applys: Ipb_re_apply[];

    /** pb_re_sync code. */
    public code: string;

    /** pb_re_sync players. */
    public players: Ipb_re_bind_player[];

    /**
     * Creates a new pb_re_sync instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_re_sync instance
     */
    public static create(properties?: Ipb_re_sync): pb_re_sync;

    /**
     * Encodes the specified pb_re_sync message. Does not implicitly {@link pb_re_sync.verify|verify} messages.
     * @param message pb_re_sync message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_re_sync, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_re_sync message, length delimited. Does not implicitly {@link pb_re_sync.verify|verify} messages.
     * @param message pb_re_sync message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_re_sync, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_re_sync message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_re_sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_re_sync;

    /**
     * Decodes a pb_re_sync message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_re_sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_re_sync;

    /**
     * Verifies a pb_re_sync message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_re_sync message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_re_sync
     */
    public static fromObject(object: { [k: string]: any }): pb_re_sync;

    /**
     * Creates a plain object from a pb_re_sync message. Also converts values to other types if specified.
     * @param message pb_re_sync
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_re_sync, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_re_sync to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_re_sync
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_re_bind_player. */
export interface Ipb_re_bind_player {

    /** pb_re_bind_player logo */
    logo?: (number|null);

    /** pb_re_bind_player uid */
    uid?: (number|null);

    /** pb_re_bind_player name */
    name?: (string|null);

    /** pb_re_bind_player bind */
    bind?: (number|null);
}

/** Represents a pb_re_bind_player. */
export class pb_re_bind_player implements Ipb_re_bind_player {

    /**
     * Constructs a new pb_re_bind_player.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_re_bind_player);

    /** pb_re_bind_player logo. */
    public logo: number;

    /** pb_re_bind_player uid. */
    public uid: number;

    /** pb_re_bind_player name. */
    public name: string;

    /** pb_re_bind_player bind. */
    public bind: number;

    /**
     * Creates a new pb_re_bind_player instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_re_bind_player instance
     */
    public static create(properties?: Ipb_re_bind_player): pb_re_bind_player;

    /**
     * Encodes the specified pb_re_bind_player message. Does not implicitly {@link pb_re_bind_player.verify|verify} messages.
     * @param message pb_re_bind_player message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_re_bind_player, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_re_bind_player message, length delimited. Does not implicitly {@link pb_re_bind_player.verify|verify} messages.
     * @param message pb_re_bind_player message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_re_bind_player, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_re_bind_player message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_re_bind_player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_re_bind_player;

    /**
     * Decodes a pb_re_bind_player message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_re_bind_player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_re_bind_player;

    /**
     * Verifies a pb_re_bind_player message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_re_bind_player message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_re_bind_player
     */
    public static fromObject(object: { [k: string]: any }): pb_re_bind_player;

    /**
     * Creates a plain object from a pb_re_bind_player message. Also converts values to other types if specified.
     * @param message pb_re_bind_player
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_re_bind_player, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_re_bind_player to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_re_bind_player
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_re_apply. */
export interface Ipb_re_apply {

    /** pb_re_apply logo */
    logo: number;

    /** pb_re_apply uid */
    uid?: (number|Long|null);

    /** pb_re_apply name */
    name?: (string|null);

    /** pb_re_apply cd */
    cd?: (number|null);
}

/** Represents a pb_re_apply. */
export class pb_re_apply implements Ipb_re_apply {

    /**
     * Constructs a new pb_re_apply.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_re_apply);

    /** pb_re_apply logo. */
    public logo: number;

    /** pb_re_apply uid. */
    public uid: (number|Long);

    /** pb_re_apply name. */
    public name: string;

    /** pb_re_apply cd. */
    public cd: number;

    /**
     * Creates a new pb_re_apply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_re_apply instance
     */
    public static create(properties?: Ipb_re_apply): pb_re_apply;

    /**
     * Encodes the specified pb_re_apply message. Does not implicitly {@link pb_re_apply.verify|verify} messages.
     * @param message pb_re_apply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_re_apply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_re_apply message, length delimited. Does not implicitly {@link pb_re_apply.verify|verify} messages.
     * @param message pb_re_apply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_re_apply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_re_apply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_re_apply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_re_apply;

    /**
     * Decodes a pb_re_apply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_re_apply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_re_apply;

    /**
     * Verifies a pb_re_apply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_re_apply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_re_apply
     */
    public static fromObject(object: { [k: string]: any }): pb_re_apply;

    /**
     * Creates a plain object from a pb_re_apply message. Also converts values to other types if specified.
     * @param message pb_re_apply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_re_apply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_re_apply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_re_apply
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_re_task. */
export interface Ipb_re_task {

    /** pb_re_task id */
    id: number;

    /** pb_re_task num1 */
    num1?: (number|null);

    /** pb_re_task num2 */
    num2?: (number|null);
}

/** Represents a pb_re_task. */
export class pb_re_task implements Ipb_re_task {

    /**
     * Constructs a new pb_re_task.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_re_task);

    /** pb_re_task id. */
    public id: number;

    /** pb_re_task num1. */
    public num1: number;

    /** pb_re_task num2. */
    public num2: number;

    /**
     * Creates a new pb_re_task instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_re_task instance
     */
    public static create(properties?: Ipb_re_task): pb_re_task;

    /**
     * Encodes the specified pb_re_task message. Does not implicitly {@link pb_re_task.verify|verify} messages.
     * @param message pb_re_task message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_re_task, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_re_task message, length delimited. Does not implicitly {@link pb_re_task.verify|verify} messages.
     * @param message pb_re_task message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_re_task, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_re_task message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_re_task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_re_task;

    /**
     * Decodes a pb_re_task message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_re_task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_re_task;

    /**
     * Verifies a pb_re_task message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_re_task message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_re_task
     */
    public static fromObject(object: { [k: string]: any }): pb_re_task;

    /**
     * Creates a plain object from a pb_re_task message. Also converts values to other types if specified.
     * @param message pb_re_task
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_re_task, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_re_task to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_re_task
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_vbuff. */
export interface Ipb_vbuff {

    /** pb_vbuff id */
    id?: (number|null);

    /** pb_vbuff type */
    type?: (number|null);
}

/** Represents a pb_vbuff. */
export class pb_vbuff implements Ipb_vbuff {

    /**
     * Constructs a new pb_vbuff.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_vbuff);

    /** pb_vbuff id. */
    public id: number;

    /** pb_vbuff type. */
    public type: number;

    /**
     * Creates a new pb_vbuff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_vbuff instance
     */
    public static create(properties?: Ipb_vbuff): pb_vbuff;

    /**
     * Encodes the specified pb_vbuff message. Does not implicitly {@link pb_vbuff.verify|verify} messages.
     * @param message pb_vbuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_vbuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_vbuff message, length delimited. Does not implicitly {@link pb_vbuff.verify|verify} messages.
     * @param message pb_vbuff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_vbuff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_vbuff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_vbuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_vbuff;

    /**
     * Decodes a pb_vbuff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_vbuff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_vbuff;

    /**
     * Verifies a pb_vbuff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_vbuff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_vbuff
     */
    public static fromObject(object: { [k: string]: any }): pb_vbuff;

    /**
     * Creates a plain object from a pb_vbuff message. Also converts values to other types if specified.
     * @param message pb_vbuff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_vbuff, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_vbuff to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_vbuff
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_stele. */
export interface Ipb_stele {

    /** pb_stele hook */
    hook?: (number|null);

    /** pb_stele solo */
    solo?: (number|null);

    /** pb_stele crush */
    crush?: (number|null);

    /** pb_stele tower */
    tower?: (number|null);

    /** pb_stele sealland */
    sealland?: (number[]|null);

    /** pb_stele st */
    st?: (number|null);
}

/** Represents a pb_stele. */
export class pb_stele implements Ipb_stele {

    /**
     * Constructs a new pb_stele.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_stele);

    /** pb_stele hook. */
    public hook: number;

    /** pb_stele solo. */
    public solo: number;

    /** pb_stele crush. */
    public crush: number;

    /** pb_stele tower. */
    public tower: number;

    /** pb_stele sealland. */
    public sealland: number[];

    /** pb_stele st. */
    public st: number;

    /**
     * Creates a new pb_stele instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_stele instance
     */
    public static create(properties?: Ipb_stele): pb_stele;

    /**
     * Encodes the specified pb_stele message. Does not implicitly {@link pb_stele.verify|verify} messages.
     * @param message pb_stele message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_stele, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_stele message, length delimited. Does not implicitly {@link pb_stele.verify|verify} messages.
     * @param message pb_stele message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_stele, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_stele message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_stele
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_stele;

    /**
     * Decodes a pb_stele message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_stele
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_stele;

    /**
     * Verifies a pb_stele message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_stele message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_stele
     */
    public static fromObject(object: { [k: string]: any }): pb_stele;

    /**
     * Creates a plain object from a pb_stele message. Also converts values to other types if specified.
     * @param message pb_stele
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_stele, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_stele to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_stele
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_midas. */
export interface Ipb_midas {

    /** pb_midas type */
    type: number;

    /** pb_midas cd */
    cd: number;

    /** pb_midas index */
    index: number;
}

/** Represents a pb_midas. */
export class pb_midas implements Ipb_midas {

    /**
     * Constructs a new pb_midas.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_midas);

    /** pb_midas type. */
    public type: number;

    /** pb_midas cd. */
    public cd: number;

    /** pb_midas index. */
    public index: number;

    /**
     * Creates a new pb_midas instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_midas instance
     */
    public static create(properties?: Ipb_midas): pb_midas;

    /**
     * Encodes the specified pb_midas message. Does not implicitly {@link pb_midas.verify|verify} messages.
     * @param message pb_midas message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_midas, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_midas message, length delimited. Does not implicitly {@link pb_midas.verify|verify} messages.
     * @param message pb_midas message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_midas, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_midas message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_midas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_midas;

    /**
     * Decodes a pb_midas message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_midas
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_midas;

    /**
     * Verifies a pb_midas message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_midas message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_midas
     */
    public static fromObject(object: { [k: string]: any }): pb_midas;

    /**
     * Creates a plain object from a pb_midas message. Also converts values to other types if specified.
     * @param message pb_midas
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_midas, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_midas to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_midas
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gve. */
export interface Ipb_gve {

    /** pb_gve id */
    id?: (number|null);

    /** pb_gve exp */
    exp?: (number|null);

    /** pb_gve record */
    record?: (number[]|null);

    /** pb_gve fight */
    fight?: (number|null);
}

/** Represents a pb_gve. */
export class pb_gve implements Ipb_gve {

    /**
     * Constructs a new pb_gve.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gve);

    /** pb_gve id. */
    public id: number;

    /** pb_gve exp. */
    public exp: number;

    /** pb_gve record. */
    public record: number[];

    /** pb_gve fight. */
    public fight: number;

    /**
     * Creates a new pb_gve instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gve instance
     */
    public static create(properties?: Ipb_gve): pb_gve;

    /**
     * Encodes the specified pb_gve message. Does not implicitly {@link pb_gve.verify|verify} messages.
     * @param message pb_gve message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gve, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gve message, length delimited. Does not implicitly {@link pb_gve.verify|verify} messages.
     * @param message pb_gve message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gve, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gve message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gve
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gve;

    /**
     * Decodes a pb_gve message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gve
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gve;

    /**
     * Verifies a pb_gve message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gve message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gve
     */
    public static fromObject(object: { [k: string]: any }): pb_gve;

    /**
     * Creates a plain object from a pb_gve message. Also converts values to other types if specified.
     * @param message pb_gve
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gve, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gve to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gve
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gve_rank. */
export interface Ipb_gve_rank {

    /** pb_gve_rank id */
    id?: (number|null);

    /** pb_gve_rank name */
    name?: (string|null);

    /** pb_gve_rank exp */
    exp?: (number|null);

    /** pb_gve_rank texp */
    texp?: (number|null);
}

/** Represents a pb_gve_rank. */
export class pb_gve_rank implements Ipb_gve_rank {

    /**
     * Constructs a new pb_gve_rank.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gve_rank);

    /** pb_gve_rank id. */
    public id: number;

    /** pb_gve_rank name. */
    public name: string;

    /** pb_gve_rank exp. */
    public exp: number;

    /** pb_gve_rank texp. */
    public texp: number;

    /**
     * Creates a new pb_gve_rank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gve_rank instance
     */
    public static create(properties?: Ipb_gve_rank): pb_gve_rank;

    /**
     * Encodes the specified pb_gve_rank message. Does not implicitly {@link pb_gve_rank.verify|verify} messages.
     * @param message pb_gve_rank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gve_rank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gve_rank message, length delimited. Does not implicitly {@link pb_gve_rank.verify|verify} messages.
     * @param message pb_gve_rank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gve_rank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gve_rank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gve_rank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gve_rank;

    /**
     * Decodes a pb_gve_rank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gve_rank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gve_rank;

    /**
     * Verifies a pb_gve_rank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gve_rank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gve_rank
     */
    public static fromObject(object: { [k: string]: any }): pb_gve_rank;

    /**
     * Creates a plain object from a pb_gve_rank message. Also converts values to other types if specified.
     * @param message pb_gve_rank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gve_rank, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gve_rank to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gve_rank
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_act_block. */
export interface Ipb_act_block {

    /** pb_act_block pos */
    pos?: (number|null);

    /** pb_act_block eventid */
    eventid?: (number|null);
}

/** Represents a pb_act_block. */
export class pb_act_block implements Ipb_act_block {

    /**
     * Constructs a new pb_act_block.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_act_block);

    /** pb_act_block pos. */
    public pos: number;

    /** pb_act_block eventid. */
    public eventid: number;

    /**
     * Creates a new pb_act_block instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_act_block instance
     */
    public static create(properties?: Ipb_act_block): pb_act_block;

    /**
     * Encodes the specified pb_act_block message. Does not implicitly {@link pb_act_block.verify|verify} messages.
     * @param message pb_act_block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_act_block, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_act_block message, length delimited. Does not implicitly {@link pb_act_block.verify|verify} messages.
     * @param message pb_act_block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_act_block, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_act_block message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_act_block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_act_block;

    /**
     * Decodes a pb_act_block message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_act_block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_act_block;

    /**
     * Verifies a pb_act_block message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_act_block message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_act_block
     */
    public static fromObject(object: { [k: string]: any }): pb_act_block;

    /**
     * Creates a plain object from a pb_act_block message. Also converts values to other types if specified.
     * @param message pb_act_block
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_act_block, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_act_block to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_act_block
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_act_maze. */
export interface Ipb_act_maze {

    /** pb_act_maze floor */
    floor?: (number|null);

    /** pb_act_maze events */
    events?: (Ipb_act_block[]|null);

    /** pb_act_maze heroid */
    heroid?: (number|null);

    /** pb_act_maze skill */
    skill?: (number|null);

    /** pb_act_maze skillLv */
    skillLv?: (number|null);

    /** pb_act_maze change */
    change?: (number|null);

    /** pb_act_maze treasures */
    treasures?: (number|null);

    /** pb_act_maze buff */
    buff?: (number|null);

    /** pb_act_maze type */
    type?: (number|null);

    /** pb_act_maze pos */
    pos?: (number|null);

    /** pb_act_maze buyNum */
    buyNum?: (number|null);

    /** pb_act_maze getFrag */
    getFrag?: (boolean|null);
}

/** Represents a pb_act_maze. */
export class pb_act_maze implements Ipb_act_maze {

    /**
     * Constructs a new pb_act_maze.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_act_maze);

    /** pb_act_maze floor. */
    public floor: number;

    /** pb_act_maze events. */
    public events: Ipb_act_block[];

    /** pb_act_maze heroid. */
    public heroid: number;

    /** pb_act_maze skill. */
    public skill: number;

    /** pb_act_maze skillLv. */
    public skillLv: number;

    /** pb_act_maze change. */
    public change: number;

    /** pb_act_maze treasures. */
    public treasures: number;

    /** pb_act_maze buff. */
    public buff: number;

    /** pb_act_maze type. */
    public type: number;

    /** pb_act_maze pos. */
    public pos: number;

    /** pb_act_maze buyNum. */
    public buyNum: number;

    /** pb_act_maze getFrag. */
    public getFrag: boolean;

    /**
     * Creates a new pb_act_maze instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_act_maze instance
     */
    public static create(properties?: Ipb_act_maze): pb_act_maze;

    /**
     * Encodes the specified pb_act_maze message. Does not implicitly {@link pb_act_maze.verify|verify} messages.
     * @param message pb_act_maze message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_act_maze, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_act_maze message, length delimited. Does not implicitly {@link pb_act_maze.verify|verify} messages.
     * @param message pb_act_maze message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_act_maze, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_act_maze message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_act_maze
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_act_maze;

    /**
     * Decodes a pb_act_maze message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_act_maze
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_act_maze;

    /**
     * Verifies a pb_act_maze message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_act_maze message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_act_maze
     */
    public static fromObject(object: { [k: string]: any }): pb_act_maze;

    /**
     * Creates a plain object from a pb_act_maze message. Also converts values to other types if specified.
     * @param message pb_act_maze
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_act_maze, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_act_maze to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_act_maze
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_ntask. */
export interface Ipb_ntask {

    /** pb_ntask id */
    id: number;

    /** pb_ntask count */
    count: (number|Long);

    /** pb_ntask status */
    status: number;

    /** pb_ntask extra */
    extra?: (Ipb_nextra[]|null);
}

/** Represents a pb_ntask. */
export class pb_ntask implements Ipb_ntask {

    /**
     * Constructs a new pb_ntask.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_ntask);

    /** pb_ntask id. */
    public id: number;

    /** pb_ntask count. */
    public count: (number|Long);

    /** pb_ntask status. */
    public status: number;

    /** pb_ntask extra. */
    public extra: Ipb_nextra[];

    /**
     * Creates a new pb_ntask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_ntask instance
     */
    public static create(properties?: Ipb_ntask): pb_ntask;

    /**
     * Encodes the specified pb_ntask message. Does not implicitly {@link pb_ntask.verify|verify} messages.
     * @param message pb_ntask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_ntask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_ntask message, length delimited. Does not implicitly {@link pb_ntask.verify|verify} messages.
     * @param message pb_ntask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_ntask, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_ntask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_ntask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_ntask;

    /**
     * Decodes a pb_ntask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_ntask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_ntask;

    /**
     * Verifies a pb_ntask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_ntask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_ntask
     */
    public static fromObject(object: { [k: string]: any }): pb_ntask;

    /**
     * Creates a plain object from a pb_ntask message. Also converts values to other types if specified.
     * @param message pb_ntask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_ntask, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_ntask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_ntask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_nextra. */
export interface Ipb_nextra {

    /** pb_nextra id */
    id?: (number[]|null);
}

/** Represents a pb_nextra. */
export class pb_nextra implements Ipb_nextra {

    /**
     * Constructs a new pb_nextra.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_nextra);

    /** pb_nextra id. */
    public id: number[];

    /**
     * Creates a new pb_nextra instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_nextra instance
     */
    public static create(properties?: Ipb_nextra): pb_nextra;

    /**
     * Encodes the specified pb_nextra message. Does not implicitly {@link pb_nextra.verify|verify} messages.
     * @param message pb_nextra message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_nextra, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_nextra message, length delimited. Does not implicitly {@link pb_nextra.verify|verify} messages.
     * @param message pb_nextra message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_nextra, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_nextra message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_nextra
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_nextra;

    /**
     * Decodes a pb_nextra message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_nextra
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_nextra;

    /**
     * Verifies a pb_nextra message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_nextra message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_nextra
     */
    public static fromObject(object: { [k: string]: any }): pb_nextra;

    /**
     * Creates a plain object from a pb_nextra message. Also converts values to other types if specified.
     * @param message pb_nextra
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_nextra, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_nextra to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_nextra
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_nt_sync. */
export interface Ipb_nt_sync {

    /** pb_nt_sync type */
    type: number;

    /** pb_nt_sync value */
    value?: ((number|Long)[]|null);
}

/** Represents a pb_nt_sync. */
export class pb_nt_sync implements Ipb_nt_sync {

    /**
     * Constructs a new pb_nt_sync.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_nt_sync);

    /** pb_nt_sync type. */
    public type: number;

    /** pb_nt_sync value. */
    public value: (number|Long)[];

    /**
     * Creates a new pb_nt_sync instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_nt_sync instance
     */
    public static create(properties?: Ipb_nt_sync): pb_nt_sync;

    /**
     * Encodes the specified pb_nt_sync message. Does not implicitly {@link pb_nt_sync.verify|verify} messages.
     * @param message pb_nt_sync message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_nt_sync, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_nt_sync message, length delimited. Does not implicitly {@link pb_nt_sync.verify|verify} messages.
     * @param message pb_nt_sync message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_nt_sync, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_nt_sync message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_nt_sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_nt_sync;

    /**
     * Decodes a pb_nt_sync message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_nt_sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_nt_sync;

    /**
     * Verifies a pb_nt_sync message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_nt_sync message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_nt_sync
     */
    public static fromObject(object: { [k: string]: any }): pb_nt_sync;

    /**
     * Creates a plain object from a pb_nt_sync message. Also converts values to other types if specified.
     * @param message pb_nt_sync
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_nt_sync, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_nt_sync to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_nt_sync
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_room. */
export interface Ipb_room {

    /** pb_room id */
    id?: (number|null);

    /** pb_room pos */
    pos?: (number|null);

    /** pb_room skinid */
    skinid?: (number|null);

    /** pb_room hid */
    hid?: (number|null);
}

/** Represents a pb_room. */
export class pb_room implements Ipb_room {

    /**
     * Constructs a new pb_room.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_room);

    /** pb_room id. */
    public id: number;

    /** pb_room pos. */
    public pos: number;

    /** pb_room skinid. */
    public skinid: number;

    /** pb_room hid. */
    public hid: number;

    /**
     * Creates a new pb_room instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_room instance
     */
    public static create(properties?: Ipb_room): pb_room;

    /**
     * Encodes the specified pb_room message. Does not implicitly {@link pb_room.verify|verify} messages.
     * @param message pb_room message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_room, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_room message, length delimited. Does not implicitly {@link pb_room.verify|verify} messages.
     * @param message pb_room message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_room, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_room message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_room
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_room;

    /**
     * Decodes a pb_room message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_room
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_room;

    /**
     * Verifies a pb_room message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_room message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_room
     */
    public static fromObject(object: { [k: string]: any }): pb_room;

    /**
     * Creates a plain object from a pb_room message. Also converts values to other types if specified.
     * @param message pb_room
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_room, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_room to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_room
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_home_land. */
export interface Ipb_home_land {

    /** pb_home_land landId */
    landId?: (number|null);

    /** pb_home_land name */
    name?: (string|null);

    /** pb_home_land rooms */
    rooms?: (Ipb_room[]|null);

    /** pb_home_land owner */
    owner?: (number|null);
}

/** Represents a pb_home_land. */
export class pb_home_land implements Ipb_home_land {

    /**
     * Constructs a new pb_home_land.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_home_land);

    /** pb_home_land landId. */
    public landId: number;

    /** pb_home_land name. */
    public name: string;

    /** pb_home_land rooms. */
    public rooms: Ipb_room[];

    /** pb_home_land owner. */
    public owner: number;

    /**
     * Creates a new pb_home_land instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_home_land instance
     */
    public static create(properties?: Ipb_home_land): pb_home_land;

    /**
     * Encodes the specified pb_home_land message. Does not implicitly {@link pb_home_land.verify|verify} messages.
     * @param message pb_home_land message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_home_land, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_home_land message, length delimited. Does not implicitly {@link pb_home_land.verify|verify} messages.
     * @param message pb_home_land message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_home_land, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_home_land message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_home_land
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_home_land;

    /**
     * Decodes a pb_home_land message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_home_land
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_home_land;

    /**
     * Verifies a pb_home_land message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_home_land message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_home_land
     */
    public static fromObject(object: { [k: string]: any }): pb_home_land;

    /**
     * Creates a plain object from a pb_home_land message. Also converts values to other types if specified.
     * @param message pb_home_land
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_home_land, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_home_land to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_home_land
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_block. */
export interface Ipb_block {

    /** pb_block type */
    type?: (number|null);

    /** pb_block from */
    from?: (number|null);

    /** pb_block to */
    to?: (number|null);
}

/** Represents a pb_block. */
export class pb_block implements Ipb_block {

    /**
     * Constructs a new pb_block.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_block);

    /** pb_block type. */
    public type: number;

    /** pb_block from. */
    public from: number;

    /** pb_block to. */
    public to: number;

    /**
     * Creates a new pb_block instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_block instance
     */
    public static create(properties?: Ipb_block): pb_block;

    /**
     * Encodes the specified pb_block message. Does not implicitly {@link pb_block.verify|verify} messages.
     * @param message pb_block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_block, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_block message, length delimited. Does not implicitly {@link pb_block.verify|verify} messages.
     * @param message pb_block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_block, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_block message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_block;

    /**
     * Decodes a pb_block message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_block;

    /**
     * Verifies a pb_block message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_block message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_block
     */
    public static fromObject(object: { [k: string]: any }): pb_block;

    /**
     * Creates a plain object from a pb_block message. Also converts values to other types if specified.
     * @param message pb_block
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_block, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_block to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_block
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_living. */
export interface Ipb_living {

    /** pb_living type */
    type?: (number|null);

    /** pb_living hid */
    hid?: (number|null);
}

/** Represents a pb_living. */
export class pb_living implements Ipb_living {

    /**
     * Constructs a new pb_living.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_living);

    /** pb_living type. */
    public type: number;

    /** pb_living hid. */
    public hid: number;

    /**
     * Creates a new pb_living instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_living instance
     */
    public static create(properties?: Ipb_living): pb_living;

    /**
     * Encodes the specified pb_living message. Does not implicitly {@link pb_living.verify|verify} messages.
     * @param message pb_living message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_living, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_living message, length delimited. Does not implicitly {@link pb_living.verify|verify} messages.
     * @param message pb_living message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_living, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_living message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_living
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_living;

    /**
     * Decodes a pb_living message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_living
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_living;

    /**
     * Verifies a pb_living message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_living message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_living
     */
    public static fromObject(object: { [k: string]: any }): pb_living;

    /**
     * Creates a plain object from a pb_living message. Also converts values to other types if specified.
     * @param message pb_living
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_living, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_living to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_living
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_buildings. */
export interface Ipb_buildings {

    /** pb_buildings id */
    id: number;

    /** pb_buildings pos */
    pos: number;

    /** pb_buildings skinid */
    skinid: number;

    /** pb_buildings collectTime */
    collectTime?: (number|null);

    /** pb_buildings store */
    store?: (number|null);
}

/** Represents a pb_buildings. */
export class pb_buildings implements Ipb_buildings {

    /**
     * Constructs a new pb_buildings.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_buildings);

    /** pb_buildings id. */
    public id: number;

    /** pb_buildings pos. */
    public pos: number;

    /** pb_buildings skinid. */
    public skinid: number;

    /** pb_buildings collectTime. */
    public collectTime: number;

    /** pb_buildings store. */
    public store: number;

    /**
     * Creates a new pb_buildings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_buildings instance
     */
    public static create(properties?: Ipb_buildings): pb_buildings;

    /**
     * Encodes the specified pb_buildings message. Does not implicitly {@link pb_buildings.verify|verify} messages.
     * @param message pb_buildings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_buildings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_buildings message, length delimited. Does not implicitly {@link pb_buildings.verify|verify} messages.
     * @param message pb_buildings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_buildings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_buildings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_buildings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_buildings;

    /**
     * Decodes a pb_buildings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_buildings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_buildings;

    /**
     * Verifies a pb_buildings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_buildings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_buildings
     */
    public static fromObject(object: { [k: string]: any }): pb_buildings;

    /**
     * Creates a plain object from a pb_buildings message. Also converts values to other types if specified.
     * @param message pb_buildings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_buildings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_buildings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_buildings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_home_roomer. */
export interface Ipb_home_roomer {

    /** pb_home_roomer roomId */
    roomId?: (number|null);

    /** pb_home_roomer hid */
    hid?: (number|null);

    /** pb_home_roomer skinid */
    skinid?: (number|null);
}

/** Represents a pb_home_roomer. */
export class pb_home_roomer implements Ipb_home_roomer {

    /**
     * Constructs a new pb_home_roomer.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_home_roomer);

    /** pb_home_roomer roomId. */
    public roomId: number;

    /** pb_home_roomer hid. */
    public hid: number;

    /** pb_home_roomer skinid. */
    public skinid: number;

    /**
     * Creates a new pb_home_roomer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_home_roomer instance
     */
    public static create(properties?: Ipb_home_roomer): pb_home_roomer;

    /**
     * Encodes the specified pb_home_roomer message. Does not implicitly {@link pb_home_roomer.verify|verify} messages.
     * @param message pb_home_roomer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_home_roomer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_home_roomer message, length delimited. Does not implicitly {@link pb_home_roomer.verify|verify} messages.
     * @param message pb_home_roomer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_home_roomer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_home_roomer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_home_roomer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_home_roomer;

    /**
     * Decodes a pb_home_roomer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_home_roomer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_home_roomer;

    /**
     * Verifies a pb_home_roomer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_home_roomer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_home_roomer
     */
    public static fromObject(object: { [k: string]: any }): pb_home_roomer;

    /**
     * Creates a plain object from a pb_home_roomer message. Also converts values to other types if specified.
     * @param message pb_home_roomer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_home_roomer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_home_roomer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_home_roomer
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_home_heroes. */
export interface Ipb_home_heroes {

    /** pb_home_heroes hid */
    hid?: (number|null);

    /** pb_home_heroes landId */
    landId?: (number|null);

    /** pb_home_heroes roomers */
    roomers?: (Ipb_home_roomer[]|null);
}

/** Represents a pb_home_heroes. */
export class pb_home_heroes implements Ipb_home_heroes {

    /**
     * Constructs a new pb_home_heroes.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_home_heroes);

    /** pb_home_heroes hid. */
    public hid: number;

    /** pb_home_heroes landId. */
    public landId: number;

    /** pb_home_heroes roomers. */
    public roomers: Ipb_home_roomer[];

    /**
     * Creates a new pb_home_heroes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_home_heroes instance
     */
    public static create(properties?: Ipb_home_heroes): pb_home_heroes;

    /**
     * Encodes the specified pb_home_heroes message. Does not implicitly {@link pb_home_heroes.verify|verify} messages.
     * @param message pb_home_heroes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_home_heroes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_home_heroes message, length delimited. Does not implicitly {@link pb_home_heroes.verify|verify} messages.
     * @param message pb_home_heroes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_home_heroes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_home_heroes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_home_heroes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_home_heroes;

    /**
     * Decodes a pb_home_heroes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_home_heroes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_home_heroes;

    /**
     * Verifies a pb_home_heroes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_home_heroes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_home_heroes
     */
    public static fromObject(object: { [k: string]: any }): pb_home_heroes;

    /**
     * Creates a plain object from a pb_home_heroes message. Also converts values to other types if specified.
     * @param message pb_home_heroes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_home_heroes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_home_heroes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_home_heroes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_coll. */
export interface Ipb_coll {

    /** pb_coll type */
    type?: (number|null);

    /** pb_coll score */
    score?: (number|null);

    /** pb_coll lv */
    lv?: (number|null);
}

/** Represents a pb_coll. */
export class pb_coll implements Ipb_coll {

    /**
     * Constructs a new pb_coll.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_coll);

    /** pb_coll type. */
    public type: number;

    /** pb_coll score. */
    public score: number;

    /** pb_coll lv. */
    public lv: number;

    /**
     * Creates a new pb_coll instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_coll instance
     */
    public static create(properties?: Ipb_coll): pb_coll;

    /**
     * Encodes the specified pb_coll message. Does not implicitly {@link pb_coll.verify|verify} messages.
     * @param message pb_coll message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_coll, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_coll message, length delimited. Does not implicitly {@link pb_coll.verify|verify} messages.
     * @param message pb_coll message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_coll, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_coll message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_coll
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_coll;

    /**
     * Decodes a pb_coll message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_coll
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_coll;

    /**
     * Verifies a pb_coll message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_coll message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_coll
     */
    public static fromObject(object: { [k: string]: any }): pb_coll;

    /**
     * Creates a plain object from a pb_coll message. Also converts values to other types if specified.
     * @param message pb_coll
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_coll, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_coll to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_coll
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_stove. */
export interface Ipb_stove {

    /** pb_stove id */
    id?: (number|null);

    /** pb_stove num */
    num?: (number|null);

    /** pb_stove cd */
    cd?: (number|null);

    /** pb_stove qid */
    qid?: (number|null);
}

/** Represents a pb_stove. */
export class pb_stove implements Ipb_stove {

    /**
     * Constructs a new pb_stove.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_stove);

    /** pb_stove id. */
    public id: number;

    /** pb_stove num. */
    public num: number;

    /** pb_stove cd. */
    public cd: number;

    /** pb_stove qid. */
    public qid: number;

    /**
     * Creates a new pb_stove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_stove instance
     */
    public static create(properties?: Ipb_stove): pb_stove;

    /**
     * Encodes the specified pb_stove message. Does not implicitly {@link pb_stove.verify|verify} messages.
     * @param message pb_stove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_stove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_stove message, length delimited. Does not implicitly {@link pb_stove.verify|verify} messages.
     * @param message pb_stove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_stove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_stove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_stove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_stove;

    /**
     * Decodes a pb_stove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_stove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_stove;

    /**
     * Verifies a pb_stove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_stove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_stove
     */
    public static fromObject(object: { [k: string]: any }): pb_stove;

    /**
     * Creates a plain object from a pb_stove message. Also converts values to other types if specified.
     * @param message pb_stove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_stove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_stove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_stove
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_stove_buy. */
export interface Ipb_stove_buy {

    /** pb_stove_buy id */
    id: number;

    /** pb_stove_buy num */
    num: number;
}

/** Represents a pb_stove_buy. */
export class pb_stove_buy implements Ipb_stove_buy {

    /**
     * Constructs a new pb_stove_buy.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_stove_buy);

    /** pb_stove_buy id. */
    public id: number;

    /** pb_stove_buy num. */
    public num: number;

    /**
     * Creates a new pb_stove_buy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_stove_buy instance
     */
    public static create(properties?: Ipb_stove_buy): pb_stove_buy;

    /**
     * Encodes the specified pb_stove_buy message. Does not implicitly {@link pb_stove_buy.verify|verify} messages.
     * @param message pb_stove_buy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_stove_buy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_stove_buy message, length delimited. Does not implicitly {@link pb_stove_buy.verify|verify} messages.
     * @param message pb_stove_buy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_stove_buy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_stove_buy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_stove_buy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_stove_buy;

    /**
     * Decodes a pb_stove_buy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_stove_buy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_stove_buy;

    /**
     * Verifies a pb_stove_buy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_stove_buy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_stove_buy
     */
    public static fromObject(object: { [k: string]: any }): pb_stove_buy;

    /**
     * Creates a plain object from a pb_stove_buy message. Also converts values to other types if specified.
     * @param message pb_stove_buy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_stove_buy, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_stove_buy to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_stove_buy
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gvm_stone. */
export interface Ipb_gvm_stone {

    /** pb_gvm_stone bid */
    bid?: (number|null);

    /** pb_gvm_stone id */
    id: number;

    /** pb_gvm_stone num */
    num?: (number[]|null);

    /** pb_gvm_stone pos */
    pos?: (number|null);
}

/** Represents a pb_gvm_stone. */
export class pb_gvm_stone implements Ipb_gvm_stone {

    /**
     * Constructs a new pb_gvm_stone.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gvm_stone);

    /** pb_gvm_stone bid. */
    public bid: number;

    /** pb_gvm_stone id. */
    public id: number;

    /** pb_gvm_stone num. */
    public num: number[];

    /** pb_gvm_stone pos. */
    public pos: number;

    /**
     * Creates a new pb_gvm_stone instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gvm_stone instance
     */
    public static create(properties?: Ipb_gvm_stone): pb_gvm_stone;

    /**
     * Encodes the specified pb_gvm_stone message. Does not implicitly {@link pb_gvm_stone.verify|verify} messages.
     * @param message pb_gvm_stone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gvm_stone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gvm_stone message, length delimited. Does not implicitly {@link pb_gvm_stone.verify|verify} messages.
     * @param message pb_gvm_stone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gvm_stone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gvm_stone message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gvm_stone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gvm_stone;

    /**
     * Decodes a pb_gvm_stone message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gvm_stone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gvm_stone;

    /**
     * Verifies a pb_gvm_stone message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gvm_stone message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gvm_stone
     */
    public static fromObject(object: { [k: string]: any }): pb_gvm_stone;

    /**
     * Creates a plain object from a pb_gvm_stone message. Also converts values to other types if specified.
     * @param message pb_gvm_stone
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gvm_stone, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gvm_stone to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gvm_stone
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gvm_map. */
export interface Ipb_gvm_map {

    /** pb_gvm_map id */
    id: number;

    /** pb_gvm_map buffNum */
    buffNum?: (number|null);
}

/** Represents a pb_gvm_map. */
export class pb_gvm_map implements Ipb_gvm_map {

    /**
     * Constructs a new pb_gvm_map.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gvm_map);

    /** pb_gvm_map id. */
    public id: number;

    /** pb_gvm_map buffNum. */
    public buffNum: number;

    /**
     * Creates a new pb_gvm_map instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gvm_map instance
     */
    public static create(properties?: Ipb_gvm_map): pb_gvm_map;

    /**
     * Encodes the specified pb_gvm_map message. Does not implicitly {@link pb_gvm_map.verify|verify} messages.
     * @param message pb_gvm_map message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gvm_map, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gvm_map message, length delimited. Does not implicitly {@link pb_gvm_map.verify|verify} messages.
     * @param message pb_gvm_map message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gvm_map, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gvm_map message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gvm_map
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gvm_map;

    /**
     * Decodes a pb_gvm_map message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gvm_map
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gvm_map;

    /**
     * Verifies a pb_gvm_map message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gvm_map message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gvm_map
     */
    public static fromObject(object: { [k: string]: any }): pb_gvm_map;

    /**
     * Creates a plain object from a pb_gvm_map message. Also converts values to other types if specified.
     * @param message pb_gvm_map
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gvm_map, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gvm_map to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gvm_map
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gvm_map_node. */
export interface Ipb_gvm_map_node {

    /** pb_gvm_map_node id */
    id: number;

    /** pb_gvm_map_node state */
    state: number;

    /** pb_gvm_map_node cfgId */
    cfgId?: (number|null);

    /** pb_gvm_map_node hps */
    hps?: (number[]|null);
}

/** Represents a pb_gvm_map_node. */
export class pb_gvm_map_node implements Ipb_gvm_map_node {

    /**
     * Constructs a new pb_gvm_map_node.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gvm_map_node);

    /** pb_gvm_map_node id. */
    public id: number;

    /** pb_gvm_map_node state. */
    public state: number;

    /** pb_gvm_map_node cfgId. */
    public cfgId: number;

    /** pb_gvm_map_node hps. */
    public hps: number[];

    /**
     * Creates a new pb_gvm_map_node instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gvm_map_node instance
     */
    public static create(properties?: Ipb_gvm_map_node): pb_gvm_map_node;

    /**
     * Encodes the specified pb_gvm_map_node message. Does not implicitly {@link pb_gvm_map_node.verify|verify} messages.
     * @param message pb_gvm_map_node message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gvm_map_node, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gvm_map_node message, length delimited. Does not implicitly {@link pb_gvm_map_node.verify|verify} messages.
     * @param message pb_gvm_map_node message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gvm_map_node, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gvm_map_node message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gvm_map_node
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gvm_map_node;

    /**
     * Decodes a pb_gvm_map_node message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gvm_map_node
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gvm_map_node;

    /**
     * Verifies a pb_gvm_map_node message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gvm_map_node message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gvm_map_node
     */
    public static fromObject(object: { [k: string]: any }): pb_gvm_map_node;

    /**
     * Creates a plain object from a pb_gvm_map_node message. Also converts values to other types if specified.
     * @param message pb_gvm_map_node
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gvm_map_node, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gvm_map_node to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gvm_map_node
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gvm_rank. */
export interface Ipb_gvm_rank {

    /** pb_gvm_rank gid */
    gid?: (number|null);

    /** pb_gvm_rank score */
    score?: (number|Long|null);

    /** pb_gvm_rank time */
    time?: (number|null);

    /** pb_gvm_rank logo */
    logo?: (number|null);

    /** pb_gvm_rank name */
    name?: (string|null);

    /** pb_gvm_rank member */
    member?: (number|null);

    /** pb_gvm_rank exp */
    exp?: (number|Long|null);
}

/** Represents a pb_gvm_rank. */
export class pb_gvm_rank implements Ipb_gvm_rank {

    /**
     * Constructs a new pb_gvm_rank.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gvm_rank);

    /** pb_gvm_rank gid. */
    public gid: number;

    /** pb_gvm_rank score. */
    public score: (number|Long);

    /** pb_gvm_rank time. */
    public time: number;

    /** pb_gvm_rank logo. */
    public logo: number;

    /** pb_gvm_rank name. */
    public name: string;

    /** pb_gvm_rank member. */
    public member: number;

    /** pb_gvm_rank exp. */
    public exp: (number|Long);

    /**
     * Creates a new pb_gvm_rank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gvm_rank instance
     */
    public static create(properties?: Ipb_gvm_rank): pb_gvm_rank;

    /**
     * Encodes the specified pb_gvm_rank message. Does not implicitly {@link pb_gvm_rank.verify|verify} messages.
     * @param message pb_gvm_rank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gvm_rank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gvm_rank message, length delimited. Does not implicitly {@link pb_gvm_rank.verify|verify} messages.
     * @param message pb_gvm_rank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gvm_rank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gvm_rank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gvm_rank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gvm_rank;

    /**
     * Decodes a pb_gvm_rank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gvm_rank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gvm_rank;

    /**
     * Verifies a pb_gvm_rank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gvm_rank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gvm_rank
     */
    public static fromObject(object: { [k: string]: any }): pb_gvm_rank;

    /**
     * Creates a plain object from a pb_gvm_rank message. Also converts values to other types if specified.
     * @param message pb_gvm_rank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gvm_rank, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gvm_rank to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gvm_rank
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_match. */
export interface Ipb_match {

    /** pb_match idx */
    idx: number;

    /** pb_match name */
    name?: (string|null);

    /** pb_match uid */
    uid?: (number|Long|null);

    /** pb_match lv */
    lv?: (number|null);

    /** pb_match logo */
    logo?: (number|null);

    /** pb_match lbox */
    lbox?: (number|null);

    /** pb_match win */
    win?: (number|null);

    /** pb_match heroes */
    heroes?: (Ipb_match_hero[]|null);

    /** pb_match power */
    power?: (number|Long|null);
}

/** Represents a pb_match. */
export class pb_match implements Ipb_match {

    /**
     * Constructs a new pb_match.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_match);

    /** pb_match idx. */
    public idx: number;

    /** pb_match name. */
    public name: string;

    /** pb_match uid. */
    public uid: (number|Long);

    /** pb_match lv. */
    public lv: number;

    /** pb_match logo. */
    public logo: number;

    /** pb_match lbox. */
    public lbox: number;

    /** pb_match win. */
    public win: number;

    /** pb_match heroes. */
    public heroes: Ipb_match_hero[];

    /** pb_match power. */
    public power: (number|Long);

    /**
     * Creates a new pb_match instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_match instance
     */
    public static create(properties?: Ipb_match): pb_match;

    /**
     * Encodes the specified pb_match message. Does not implicitly {@link pb_match.verify|verify} messages.
     * @param message pb_match message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_match, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_match message, length delimited. Does not implicitly {@link pb_match.verify|verify} messages.
     * @param message pb_match message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_match, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_match message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_match
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_match;

    /**
     * Decodes a pb_match message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_match
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_match;

    /**
     * Verifies a pb_match message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_match message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_match
     */
    public static fromObject(object: { [k: string]: any }): pb_match;

    /**
     * Creates a plain object from a pb_match message. Also converts values to other types if specified.
     * @param message pb_match
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_match, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_match to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_match
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_match_hero. */
export interface Ipb_match_hero {

    /** pb_match_hero pos */
    pos: number;

    /** pb_match_hero id */
    id: number;

    /** pb_match_hero lv */
    lv?: (number|null);

    /** pb_match_hero stl */
    stl?: (number|null);

    /** pb_match_hero flag */
    flag?: (number|null);

    /** pb_match_hero equips */
    equips?: (Ipb_equip[]|null);

    /** pb_match_hero wake */
    wake?: (number|null);

    /** pb_match_hero skillId */
    skillId?: (number[]|null);

    /** pb_match_hero attr */
    attr?: (Ipb_attr|null);

    /** pb_match_hero skin */
    skin?: (number|null);

    /** pb_match_hero qlv */
    qlv?: (number|null);

    /** pb_match_hero treeFlag */
    treeFlag?: (number|null);

    /** pb_match_hero core */
    core?: (number|null);

    /** pb_match_hero times */
    times?: (number|null);

    /** pb_match_hero use */
    use?: (number|null);
}

/** Represents a pb_match_hero. */
export class pb_match_hero implements Ipb_match_hero {

    /**
     * Constructs a new pb_match_hero.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_match_hero);

    /** pb_match_hero pos. */
    public pos: number;

    /** pb_match_hero id. */
    public id: number;

    /** pb_match_hero lv. */
    public lv: number;

    /** pb_match_hero stl. */
    public stl: number;

    /** pb_match_hero flag. */
    public flag: number;

    /** pb_match_hero equips. */
    public equips: Ipb_equip[];

    /** pb_match_hero wake. */
    public wake: number;

    /** pb_match_hero skillId. */
    public skillId: number[];

    /** pb_match_hero attr. */
    public attr?: (Ipb_attr|null);

    /** pb_match_hero skin. */
    public skin: number;

    /** pb_match_hero qlv. */
    public qlv: number;

    /** pb_match_hero treeFlag. */
    public treeFlag: number;

    /** pb_match_hero core. */
    public core: number;

    /** pb_match_hero times. */
    public times: number;

    /** pb_match_hero use. */
    public use: number;

    /**
     * Creates a new pb_match_hero instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_match_hero instance
     */
    public static create(properties?: Ipb_match_hero): pb_match_hero;

    /**
     * Encodes the specified pb_match_hero message. Does not implicitly {@link pb_match_hero.verify|verify} messages.
     * @param message pb_match_hero message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_match_hero, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_match_hero message, length delimited. Does not implicitly {@link pb_match_hero.verify|verify} messages.
     * @param message pb_match_hero message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_match_hero, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_match_hero message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_match_hero
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_match_hero;

    /**
     * Decodes a pb_match_hero message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_match_hero
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_match_hero;

    /**
     * Verifies a pb_match_hero message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_match_hero message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_match_hero
     */
    public static fromObject(object: { [k: string]: any }): pb_match_hero;

    /**
     * Creates a plain object from a pb_match_hero message. Also converts values to other types if specified.
     * @param message pb_match_hero
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_match_hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_match_hero to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_match_hero
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_pvp_accounts. */
export interface Ipb_pvp_accounts {

    /** pb_pvp_accounts score */
    score: number;

    /** pb_pvp_accounts win */
    win: number;
}

/** Represents a pb_pvp_accounts. */
export class pb_pvp_accounts implements Ipb_pvp_accounts {

    /**
     * Constructs a new pb_pvp_accounts.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_pvp_accounts);

    /** pb_pvp_accounts score. */
    public score: number;

    /** pb_pvp_accounts win. */
    public win: number;

    /**
     * Creates a new pb_pvp_accounts instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_pvp_accounts instance
     */
    public static create(properties?: Ipb_pvp_accounts): pb_pvp_accounts;

    /**
     * Encodes the specified pb_pvp_accounts message. Does not implicitly {@link pb_pvp_accounts.verify|verify} messages.
     * @param message pb_pvp_accounts message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_pvp_accounts, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_pvp_accounts message, length delimited. Does not implicitly {@link pb_pvp_accounts.verify|verify} messages.
     * @param message pb_pvp_accounts message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_pvp_accounts, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_pvp_accounts message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_pvp_accounts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_pvp_accounts;

    /**
     * Decodes a pb_pvp_accounts message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_pvp_accounts
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_pvp_accounts;

    /**
     * Verifies a pb_pvp_accounts message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_pvp_accounts message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_pvp_accounts
     */
    public static fromObject(object: { [k: string]: any }): pb_pvp_accounts;

    /**
     * Creates a plain object from a pb_pvp_accounts message. Also converts values to other types if specified.
     * @param message pb_pvp_accounts
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_pvp_accounts, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_pvp_accounts to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_pvp_accounts
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_attr. */
export interface Ipb_attr {

    /** pb_attr atk */
    atk?: (number|null);

    /** pb_attr hp */
    hp?: (number|Long|null);

    /** pb_attr arm */
    arm?: (number|null);

    /** pb_attr spd */
    spd?: (number|null);

    /** pb_attr sklP */
    sklP?: (number|null);

    /** pb_attr hit */
    hit?: (number|null);

    /** pb_attr miss */
    miss?: (number|null);

    /** pb_attr crit */
    crit?: (number|null);

    /** pb_attr critTime */
    critTime?: (number|null);

    /** pb_attr brk */
    brk?: (number|null);

    /** pb_attr free */
    free?: (number|null);

    /** pb_attr decDmg */
    decDmg?: (number|null);

    /** pb_attr trueAtk */
    trueAtk?: (number|null);
}

/** Represents a pb_attr. */
export class pb_attr implements Ipb_attr {

    /**
     * Constructs a new pb_attr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_attr);

    /** pb_attr atk. */
    public atk: number;

    /** pb_attr hp. */
    public hp: (number|Long);

    /** pb_attr arm. */
    public arm: number;

    /** pb_attr spd. */
    public spd: number;

    /** pb_attr sklP. */
    public sklP: number;

    /** pb_attr hit. */
    public hit: number;

    /** pb_attr miss. */
    public miss: number;

    /** pb_attr crit. */
    public crit: number;

    /** pb_attr critTime. */
    public critTime: number;

    /** pb_attr brk. */
    public brk: number;

    /** pb_attr free. */
    public free: number;

    /** pb_attr decDmg. */
    public decDmg: number;

    /** pb_attr trueAtk. */
    public trueAtk: number;

    /**
     * Creates a new pb_attr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_attr instance
     */
    public static create(properties?: Ipb_attr): pb_attr;

    /**
     * Encodes the specified pb_attr message. Does not implicitly {@link pb_attr.verify|verify} messages.
     * @param message pb_attr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_attr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_attr message, length delimited. Does not implicitly {@link pb_attr.verify|verify} messages.
     * @param message pb_attr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_attr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_attr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_attr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_attr;

    /**
     * Decodes a pb_attr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_attr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_attr;

    /**
     * Verifies a pb_attr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_attr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_attr
     */
    public static fromObject(object: { [k: string]: any }): pb_attr;

    /**
     * Creates a plain object from a pb_attr message. Also converts values to other types if specified.
     * @param message pb_attr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_attr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_attr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_attr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_gvm_mbr. */
export interface Ipb_gvm_mbr {

    /** pb_gvm_mbr name */
    name?: (string|null);

    /** pb_gvm_mbr uid */
    uid?: (number|Long|null);

    /** pb_gvm_mbr lv */
    lv?: (number|null);

    /** pb_gvm_mbr logo */
    logo?: (number|null);

    /** pb_gvm_mbr lbox */
    lbox?: (number|null);

    /** pb_gvm_mbr scores */
    scores?: ((number|Long)[]|null);

    /** pb_gvm_mbr score */
    score?: (number|Long|null);
}

/** Represents a pb_gvm_mbr. */
export class pb_gvm_mbr implements Ipb_gvm_mbr {

    /**
     * Constructs a new pb_gvm_mbr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_gvm_mbr);

    /** pb_gvm_mbr name. */
    public name: string;

    /** pb_gvm_mbr uid. */
    public uid: (number|Long);

    /** pb_gvm_mbr lv. */
    public lv: number;

    /** pb_gvm_mbr logo. */
    public logo: number;

    /** pb_gvm_mbr lbox. */
    public lbox: number;

    /** pb_gvm_mbr scores. */
    public scores: (number|Long)[];

    /** pb_gvm_mbr score. */
    public score: (number|Long);

    /**
     * Creates a new pb_gvm_mbr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_gvm_mbr instance
     */
    public static create(properties?: Ipb_gvm_mbr): pb_gvm_mbr;

    /**
     * Encodes the specified pb_gvm_mbr message. Does not implicitly {@link pb_gvm_mbr.verify|verify} messages.
     * @param message pb_gvm_mbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_gvm_mbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_gvm_mbr message, length delimited. Does not implicitly {@link pb_gvm_mbr.verify|verify} messages.
     * @param message pb_gvm_mbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_gvm_mbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_gvm_mbr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_gvm_mbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_gvm_mbr;

    /**
     * Decodes a pb_gvm_mbr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_gvm_mbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_gvm_mbr;

    /**
     * Verifies a pb_gvm_mbr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_gvm_mbr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_gvm_mbr
     */
    public static fromObject(object: { [k: string]: any }): pb_gvm_mbr;

    /**
     * Creates a plain object from a pb_gvm_mbr message. Also converts values to other types if specified.
     * @param message pb_gvm_mbr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_gvm_mbr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_gvm_mbr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_gvm_mbr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_up_star. */
export interface Ipb_up_star {

    /** pb_up_star id */
    id: number;

    /** pb_up_star hid */
    hid?: (number[]|null);
}

/** Represents a pb_up_star. */
export class pb_up_star implements Ipb_up_star {

    /**
     * Constructs a new pb_up_star.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_up_star);

    /** pb_up_star id. */
    public id: number;

    /** pb_up_star hid. */
    public hid: number[];

    /**
     * Creates a new pb_up_star instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_up_star instance
     */
    public static create(properties?: Ipb_up_star): pb_up_star;

    /**
     * Encodes the specified pb_up_star message. Does not implicitly {@link pb_up_star.verify|verify} messages.
     * @param message pb_up_star message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_up_star, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_up_star message, length delimited. Does not implicitly {@link pb_up_star.verify|verify} messages.
     * @param message pb_up_star message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_up_star, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_up_star message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_up_star
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_up_star;

    /**
     * Decodes a pb_up_star message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_up_star
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_up_star;

    /**
     * Verifies a pb_up_star message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_up_star message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_up_star
     */
    public static fromObject(object: { [k: string]: any }): pb_up_star;

    /**
     * Creates a plain object from a pb_up_star message. Also converts values to other types if specified.
     * @param message pb_up_star
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_up_star, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_up_star to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_up_star
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_fun. */
export interface Ipb_fun {

    /** pb_fun open */
    open: number;

    /** pb_fun cd */
    cd: number;

    /** pb_fun id */
    id?: (number|null);
}

/** Represents a pb_fun. */
export class pb_fun implements Ipb_fun {

    /**
     * Constructs a new pb_fun.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_fun);

    /** pb_fun open. */
    public open: number;

    /** pb_fun cd. */
    public cd: number;

    /** pb_fun id. */
    public id: number;

    /**
     * Creates a new pb_fun instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_fun instance
     */
    public static create(properties?: Ipb_fun): pb_fun;

    /**
     * Encodes the specified pb_fun message. Does not implicitly {@link pb_fun.verify|verify} messages.
     * @param message pb_fun message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_fun, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_fun message, length delimited. Does not implicitly {@link pb_fun.verify|verify} messages.
     * @param message pb_fun message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_fun, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_fun message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_fun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_fun;

    /**
     * Decodes a pb_fun message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_fun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_fun;

    /**
     * Verifies a pb_fun message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_fun message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_fun
     */
    public static fromObject(object: { [k: string]: any }): pb_fun;

    /**
     * Creates a plain object from a pb_fun message. Also converts values to other types if specified.
     * @param message pb_fun
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_fun, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_fun to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_fun
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a hland_change_skin. */
export interface Ihland_change_skin {

    /** hland_change_skin skin */
    skin: number;

    /** hland_change_skin pos */
    pos: number;
}

/** Represents a hland_change_skin. */
export class hland_change_skin implements Ihland_change_skin {

    /**
     * Constructs a new hland_change_skin.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ihland_change_skin);

    /** hland_change_skin skin. */
    public skin: number;

    /** hland_change_skin pos. */
    public pos: number;

    /**
     * Creates a new hland_change_skin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns hland_change_skin instance
     */
    public static create(properties?: Ihland_change_skin): hland_change_skin;

    /**
     * Encodes the specified hland_change_skin message. Does not implicitly {@link hland_change_skin.verify|verify} messages.
     * @param message hland_change_skin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ihland_change_skin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified hland_change_skin message, length delimited. Does not implicitly {@link hland_change_skin.verify|verify} messages.
     * @param message hland_change_skin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ihland_change_skin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a hland_change_skin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns hland_change_skin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hland_change_skin;

    /**
     * Decodes a hland_change_skin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns hland_change_skin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hland_change_skin;

    /**
     * Verifies a hland_change_skin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a hland_change_skin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns hland_change_skin
     */
    public static fromObject(object: { [k: string]: any }): hland_change_skin;

    /**
     * Creates a plain object from a hland_change_skin message. Also converts values to other types if specified.
     * @param message hland_change_skin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: hland_change_skin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this hland_change_skin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for hland_change_skin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_hland_log. */
export interface Ipb_hland_log {

    /** pb_hland_log name */
    name?: (string|null);

    /** pb_hland_log uid */
    uid?: (number|Long|null);

    /** pb_hland_log lv */
    lv?: (number|null);

    /** pb_hland_log logo */
    logo?: (number|null);

    /** pb_hland_log lbox */
    lbox?: (number|null);

    /** pb_hland_log type */
    type?: (number|null);

    /** pb_hland_log time */
    time?: (number|Long|null);
}

/** Represents a pb_hland_log. */
export class pb_hland_log implements Ipb_hland_log {

    /**
     * Constructs a new pb_hland_log.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_hland_log);

    /** pb_hland_log name. */
    public name: string;

    /** pb_hland_log uid. */
    public uid: (number|Long);

    /** pb_hland_log lv. */
    public lv: number;

    /** pb_hland_log logo. */
    public logo: number;

    /** pb_hland_log lbox. */
    public lbox: number;

    /** pb_hland_log type. */
    public type: number;

    /** pb_hland_log time. */
    public time: (number|Long);

    /**
     * Creates a new pb_hland_log instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_hland_log instance
     */
    public static create(properties?: Ipb_hland_log): pb_hland_log;

    /**
     * Encodes the specified pb_hland_log message. Does not implicitly {@link pb_hland_log.verify|verify} messages.
     * @param message pb_hland_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_hland_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_hland_log message, length delimited. Does not implicitly {@link pb_hland_log.verify|verify} messages.
     * @param message pb_hland_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_hland_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_hland_log message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_hland_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_hland_log;

    /**
     * Decodes a pb_hland_log message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_hland_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_hland_log;

    /**
     * Verifies a pb_hland_log message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_hland_log message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_hland_log
     */
    public static fromObject(object: { [k: string]: any }): pb_hland_log;

    /**
     * Creates a plain object from a pb_hland_log message. Also converts values to other types if specified.
     * @param message pb_hland_log
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_hland_log, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_hland_log to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_hland_log
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_hmbr. */
export interface Ipb_hmbr {

    /** pb_hmbr name */
    name?: (string|null);

    /** pb_hmbr uid */
    uid?: (number|Long|null);

    /** pb_hmbr lv */
    lv?: (number|null);

    /** pb_hmbr logo */
    logo?: (number|null);

    /** pb_hmbr lbox */
    lbox?: (number|null);

    /** pb_hmbr itemIds */
    itemIds?: (number[]|null);
}

/** Represents a pb_hmbr. */
export class pb_hmbr implements Ipb_hmbr {

    /**
     * Constructs a new pb_hmbr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_hmbr);

    /** pb_hmbr name. */
    public name: string;

    /** pb_hmbr uid. */
    public uid: (number|Long);

    /** pb_hmbr lv. */
    public lv: number;

    /** pb_hmbr logo. */
    public logo: number;

    /** pb_hmbr lbox. */
    public lbox: number;

    /** pb_hmbr itemIds. */
    public itemIds: number[];

    /**
     * Creates a new pb_hmbr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_hmbr instance
     */
    public static create(properties?: Ipb_hmbr): pb_hmbr;

    /**
     * Encodes the specified pb_hmbr message. Does not implicitly {@link pb_hmbr.verify|verify} messages.
     * @param message pb_hmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_hmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_hmbr message, length delimited. Does not implicitly {@link pb_hmbr.verify|verify} messages.
     * @param message pb_hmbr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_hmbr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_hmbr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_hmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_hmbr;

    /**
     * Decodes a pb_hmbr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_hmbr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_hmbr;

    /**
     * Verifies a pb_hmbr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_hmbr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_hmbr
     */
    public static fromObject(object: { [k: string]: any }): pb_hmbr;

    /**
     * Creates a plain object from a pb_hmbr message. Also converts values to other types if specified.
     * @param message pb_hmbr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_hmbr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_hmbr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_hmbr
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_hteam. */
export interface Ipb_hteam {

    /** pb_hteam id */
    id?: (string|null);

    /** pb_hteam leader */
    leader?: (number|Long|null);

    /** pb_hteam type */
    type?: (number|null);

    /** pb_hteam mbr */
    mbr?: (Ipb_hmbr[]|null);

    /** pb_hteam cd */
    cd?: (number|null);

    /** pb_hteam shape */
    shape?: (boolean|null);

    /** pb_hteam invites */
    invites?: ((number|Long)[]|null);
}

/** Represents a pb_hteam. */
export class pb_hteam implements Ipb_hteam {

    /**
     * Constructs a new pb_hteam.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_hteam);

    /** pb_hteam id. */
    public id: string;

    /** pb_hteam leader. */
    public leader: (number|Long);

    /** pb_hteam type. */
    public type: number;

    /** pb_hteam mbr. */
    public mbr: Ipb_hmbr[];

    /** pb_hteam cd. */
    public cd: number;

    /** pb_hteam shape. */
    public shape: boolean;

    /** pb_hteam invites. */
    public invites: (number|Long)[];

    /**
     * Creates a new pb_hteam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_hteam instance
     */
    public static create(properties?: Ipb_hteam): pb_hteam;

    /**
     * Encodes the specified pb_hteam message. Does not implicitly {@link pb_hteam.verify|verify} messages.
     * @param message pb_hteam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_hteam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_hteam message, length delimited. Does not implicitly {@link pb_hteam.verify|verify} messages.
     * @param message pb_hteam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_hteam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_hteam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_hteam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_hteam;

    /**
     * Decodes a pb_hteam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_hteam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_hteam;

    /**
     * Verifies a pb_hteam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_hteam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_hteam
     */
    public static fromObject(object: { [k: string]: any }): pb_hteam;

    /**
     * Creates a plain object from a pb_hteam message. Also converts values to other types if specified.
     * @param message pb_hteam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_hteam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_hteam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_hteam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_team_info. */
export interface Ipb_team_info {

    /** pb_team_info id */
    id: number;

    /** pb_team_info name */
    name?: (string|null);

    /** pb_team_info heroes */
    heroes?: (Ipb_team_hero[]|null);

    /** pb_team_info petid */
    petid?: (number|null);

    /** pb_team_info flag */
    flag?: (number|null);
}

/** Represents a pb_team_info. */
export class pb_team_info implements Ipb_team_info {

    /**
     * Constructs a new pb_team_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_team_info);

    /** pb_team_info id. */
    public id: number;

    /** pb_team_info name. */
    public name: string;

    /** pb_team_info heroes. */
    public heroes: Ipb_team_hero[];

    /** pb_team_info petid. */
    public petid: number;

    /** pb_team_info flag. */
    public flag: number;

    /**
     * Creates a new pb_team_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_team_info instance
     */
    public static create(properties?: Ipb_team_info): pb_team_info;

    /**
     * Encodes the specified pb_team_info message. Does not implicitly {@link pb_team_info.verify|verify} messages.
     * @param message pb_team_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_team_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_team_info message, length delimited. Does not implicitly {@link pb_team_info.verify|verify} messages.
     * @param message pb_team_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_team_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_team_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_team_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_team_info;

    /**
     * Decodes a pb_team_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_team_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_team_info;

    /**
     * Verifies a pb_team_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_team_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_team_info
     */
    public static fromObject(object: { [k: string]: any }): pb_team_info;

    /**
     * Creates a plain object from a pb_team_info message. Also converts values to other types if specified.
     * @param message pb_team_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_team_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_team_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_team_info
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_team_hero. */
export interface Ipb_team_hero {

    /** pb_team_hero pos */
    pos: number;

    /** pb_team_hero hid */
    hid: number;

    /** pb_team_hero equips */
    equips?: (Ipb_equip[]|null);

    /** pb_team_hero skillId */
    skillId?: (number[]|null);

    /** pb_team_hero sattrs */
    sattrs?: (Ipb_sattr[]|null);

    /** pb_team_hero flag */
    flag?: (number|null);
}

/** Represents a pb_team_hero. */
export class pb_team_hero implements Ipb_team_hero {

    /**
     * Constructs a new pb_team_hero.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_team_hero);

    /** pb_team_hero pos. */
    public pos: number;

    /** pb_team_hero hid. */
    public hid: number;

    /** pb_team_hero equips. */
    public equips: Ipb_equip[];

    /** pb_team_hero skillId. */
    public skillId: number[];

    /** pb_team_hero sattrs. */
    public sattrs: Ipb_sattr[];

    /** pb_team_hero flag. */
    public flag: number;

    /**
     * Creates a new pb_team_hero instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_team_hero instance
     */
    public static create(properties?: Ipb_team_hero): pb_team_hero;

    /**
     * Encodes the specified pb_team_hero message. Does not implicitly {@link pb_team_hero.verify|verify} messages.
     * @param message pb_team_hero message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_team_hero, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_team_hero message, length delimited. Does not implicitly {@link pb_team_hero.verify|verify} messages.
     * @param message pb_team_hero message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_team_hero, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_team_hero message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_team_hero
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_team_hero;

    /**
     * Decodes a pb_team_hero message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_team_hero
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_team_hero;

    /**
     * Verifies a pb_team_hero message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_team_hero message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_team_hero
     */
    public static fromObject(object: { [k: string]: any }): pb_team_hero;

    /**
     * Creates a plain object from a pb_team_hero message. Also converts values to other types if specified.
     * @param message pb_team_hero
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_team_hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_team_hero to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_team_hero
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a good. */
export interface Igood {

    /** good goodId */
    goodId?: (number|null);

    /** good heroId */
    heroId?: (number|null);

    /** good qlt */
    qlt?: (Ipb_hero_qlc|null);

    /** good price */
    price?: (number|Long|null);

    /** good delPrice */
    delPrice?: (number|Long|null);

    /** good state */
    state?: (number|null);

    /** good cd */
    cd?: (number|null);

    /** good rprice */
    rprice?: (number|null);

    /** good seller */
    seller?: (Ipb_give_role|null);

    /** good buyer */
    buyer?: (Ipb_give_role|null);
}

/** Represents a good. */
export class good implements Igood {

    /**
     * Constructs a new good.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igood);

    /** good goodId. */
    public goodId: number;

    /** good heroId. */
    public heroId: number;

    /** good qlt. */
    public qlt?: (Ipb_hero_qlc|null);

    /** good price. */
    public price: (number|Long);

    /** good delPrice. */
    public delPrice: (number|Long);

    /** good state. */
    public state: number;

    /** good cd. */
    public cd: number;

    /** good rprice. */
    public rprice: number;

    /** good seller. */
    public seller?: (Ipb_give_role|null);

    /** good buyer. */
    public buyer?: (Ipb_give_role|null);

    /**
     * Creates a new good instance using the specified properties.
     * @param [properties] Properties to set
     * @returns good instance
     */
    public static create(properties?: Igood): good;

    /**
     * Encodes the specified good message. Does not implicitly {@link good.verify|verify} messages.
     * @param message good message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igood, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified good message, length delimited. Does not implicitly {@link good.verify|verify} messages.
     * @param message good message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igood, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a good message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns good
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): good;

    /**
     * Decodes a good message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns good
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): good;

    /**
     * Verifies a good message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a good message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns good
     */
    public static fromObject(object: { [k: string]: any }): good;

    /**
     * Creates a plain object from a good message. Also converts values to other types if specified.
     * @param message good
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: good, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this good to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for good
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a mall_log. */
export interface Imall_log {

    /** mall_log time */
    time?: (number|null);

    /** mall_log heroid */
    heroid?: (number|null);

    /** mall_log qlt */
    qlt?: (Ipb_hero_qlc|null);

    /** mall_log price */
    price?: (number|null);

    /** mall_log type */
    type?: (number|null);

    /** mall_log status */
    status?: (number|null);

    /** mall_log goodid */
    goodid?: (number|null);

    /** mall_log user */
    user?: (Ipb_give_role|null);
}

/** Represents a mall_log. */
export class mall_log implements Imall_log {

    /**
     * Constructs a new mall_log.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imall_log);

    /** mall_log time. */
    public time: number;

    /** mall_log heroid. */
    public heroid: number;

    /** mall_log qlt. */
    public qlt?: (Ipb_hero_qlc|null);

    /** mall_log price. */
    public price: number;

    /** mall_log type. */
    public type: number;

    /** mall_log status. */
    public status: number;

    /** mall_log goodid. */
    public goodid: number;

    /** mall_log user. */
    public user?: (Ipb_give_role|null);

    /**
     * Creates a new mall_log instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mall_log instance
     */
    public static create(properties?: Imall_log): mall_log;

    /**
     * Encodes the specified mall_log message. Does not implicitly {@link mall_log.verify|verify} messages.
     * @param message mall_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imall_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mall_log message, length delimited. Does not implicitly {@link mall_log.verify|verify} messages.
     * @param message mall_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imall_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mall_log message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mall_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mall_log;

    /**
     * Decodes a mall_log message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mall_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mall_log;

    /**
     * Verifies a mall_log message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mall_log message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mall_log
     */
    public static fromObject(object: { [k: string]: any }): mall_log;

    /**
     * Creates a plain object from a mall_log message. Also converts values to other types if specified.
     * @param message mall_log
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mall_log, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mall_log to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for mall_log
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_kv. */
export interface Ipb_kv {

    /** pb_kv k */
    k?: (number|null);

    /** pb_kv v */
    v?: (number|null);
}

/** Represents a pb_kv. */
export class pb_kv implements Ipb_kv {

    /**
     * Constructs a new pb_kv.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_kv);

    /** pb_kv k. */
    public k: number;

    /** pb_kv v. */
    public v: number;

    /**
     * Creates a new pb_kv instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_kv instance
     */
    public static create(properties?: Ipb_kv): pb_kv;

    /**
     * Encodes the specified pb_kv message. Does not implicitly {@link pb_kv.verify|verify} messages.
     * @param message pb_kv message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_kv, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_kv message, length delimited. Does not implicitly {@link pb_kv.verify|verify} messages.
     * @param message pb_kv message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_kv, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_kv message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_kv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_kv;

    /**
     * Decodes a pb_kv message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_kv
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_kv;

    /**
     * Verifies a pb_kv message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_kv message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_kv
     */
    public static fromObject(object: { [k: string]: any }): pb_kv;

    /**
     * Creates a plain object from a pb_kv message. Also converts values to other types if specified.
     * @param message pb_kv
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_kv, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_kv to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_kv
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_kvs. */
export interface Ipb_kvs {

    /** pb_kvs k */
    k?: (number[]|null);

    /** pb_kvs v */
    v?: (number[]|null);

    /** pb_kvs v2 */
    v2?: (number[]|null);
}

/** Represents a pb_kvs. */
export class pb_kvs implements Ipb_kvs {

    /**
     * Constructs a new pb_kvs.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_kvs);

    /** pb_kvs k. */
    public k: number[];

    /** pb_kvs v. */
    public v: number[];

    /** pb_kvs v2. */
    public v2: number[];

    /**
     * Creates a new pb_kvs instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_kvs instance
     */
    public static create(properties?: Ipb_kvs): pb_kvs;

    /**
     * Encodes the specified pb_kvs message. Does not implicitly {@link pb_kvs.verify|verify} messages.
     * @param message pb_kvs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_kvs, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_kvs message, length delimited. Does not implicitly {@link pb_kvs.verify|verify} messages.
     * @param message pb_kvs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_kvs, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_kvs message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_kvs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_kvs;

    /**
     * Decodes a pb_kvs message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_kvs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_kvs;

    /**
     * Verifies a pb_kvs message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_kvs message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_kvs
     */
    public static fromObject(object: { [k: string]: any }): pb_kvs;

    /**
     * Creates a plain object from a pb_kvs message. Also converts values to other types if specified.
     * @param message pb_kvs
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_kvs, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_kvs to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_kvs
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_kv2. */
export interface Ipb_kv2 {

    /** pb_kv2 k */
    k?: (number|null);

    /** pb_kv2 v */
    v?: (number|null);

    /** pb_kv2 v2 */
    v2?: (number|null);
}

/** Represents a pb_kv2. */
export class pb_kv2 implements Ipb_kv2 {

    /**
     * Constructs a new pb_kv2.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_kv2);

    /** pb_kv2 k. */
    public k: number;

    /** pb_kv2 v. */
    public v: number;

    /** pb_kv2 v2. */
    public v2: number;

    /**
     * Creates a new pb_kv2 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_kv2 instance
     */
    public static create(properties?: Ipb_kv2): pb_kv2;

    /**
     * Encodes the specified pb_kv2 message. Does not implicitly {@link pb_kv2.verify|verify} messages.
     * @param message pb_kv2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_kv2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_kv2 message, length delimited. Does not implicitly {@link pb_kv2.verify|verify} messages.
     * @param message pb_kv2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_kv2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_kv2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_kv2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_kv2;

    /**
     * Decodes a pb_kv2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_kv2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_kv2;

    /**
     * Verifies a pb_kv2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_kv2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_kv2
     */
    public static fromObject(object: { [k: string]: any }): pb_kv2;

    /**
     * Creates a plain object from a pb_kv2 message. Also converts values to other types if specified.
     * @param message pb_kv2
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_kv2, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_kv2 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_kv2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_growup. */
export interface Ipb_growup {

    /** pb_growup id */
    id?: (number|null);

    /** pb_growup index */
    index?: (number|null);

    /** pb_growup claim */
    claim?: (number|null);
}

/** Represents a pb_growup. */
export class pb_growup implements Ipb_growup {

    /**
     * Constructs a new pb_growup.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_growup);

    /** pb_growup id. */
    public id: number;

    /** pb_growup index. */
    public index: number;

    /** pb_growup claim. */
    public claim: number;

    /**
     * Creates a new pb_growup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_growup instance
     */
    public static create(properties?: Ipb_growup): pb_growup;

    /**
     * Encodes the specified pb_growup message. Does not implicitly {@link pb_growup.verify|verify} messages.
     * @param message pb_growup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_growup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_growup message, length delimited. Does not implicitly {@link pb_growup.verify|verify} messages.
     * @param message pb_growup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_growup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_growup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_growup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_growup;

    /**
     * Decodes a pb_growup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_growup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_growup;

    /**
     * Verifies a pb_growup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_growup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_growup
     */
    public static fromObject(object: { [k: string]: any }): pb_growup;

    /**
     * Creates a plain object from a pb_growup message. Also converts values to other types if specified.
     * @param message pb_growup
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_growup, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_growup to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_growup
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_puzzle. */
export interface Ipb_puzzle {

    /** pb_puzzle id */
    id?: (number|null);

    /** pb_puzzle next */
    next?: (number|null);

    /** pb_puzzle cur */
    cur?: (number|null);

    /** pb_puzzle pos */
    pos?: (Ipb_kv[]|null);

    /** pb_puzzle bag */
    bag?: (number[]|null);

    /** pb_puzzle num */
    num?: (number|null);

    /** pb_puzzle ring */
    ring?: (number|null);

    /** pb_puzzle siz */
    siz?: (number|null);
}

/** Represents a pb_puzzle. */
export class pb_puzzle implements Ipb_puzzle {

    /**
     * Constructs a new pb_puzzle.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_puzzle);

    /** pb_puzzle id. */
    public id: number;

    /** pb_puzzle next. */
    public next: number;

    /** pb_puzzle cur. */
    public cur: number;

    /** pb_puzzle pos. */
    public pos: Ipb_kv[];

    /** pb_puzzle bag. */
    public bag: number[];

    /** pb_puzzle num. */
    public num: number;

    /** pb_puzzle ring. */
    public ring: number;

    /** pb_puzzle siz. */
    public siz: number;

    /**
     * Creates a new pb_puzzle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_puzzle instance
     */
    public static create(properties?: Ipb_puzzle): pb_puzzle;

    /**
     * Encodes the specified pb_puzzle message. Does not implicitly {@link pb_puzzle.verify|verify} messages.
     * @param message pb_puzzle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_puzzle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_puzzle message, length delimited. Does not implicitly {@link pb_puzzle.verify|verify} messages.
     * @param message pb_puzzle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_puzzle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_puzzle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_puzzle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_puzzle;

    /**
     * Decodes a pb_puzzle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_puzzle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_puzzle;

    /**
     * Verifies a pb_puzzle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_puzzle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_puzzle
     */
    public static fromObject(object: { [k: string]: any }): pb_puzzle;

    /**
     * Creates a plain object from a pb_puzzle message. Also converts values to other types if specified.
     * @param message pb_puzzle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_puzzle, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_puzzle to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_puzzle
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_give_role. */
export interface Ipb_give_role {

    /** pb_give_role uid64 */
    uid64: (number|Long);

    /** pb_give_role channel */
    channel: string;

    /** pb_give_role lv */
    lv: number;

    /** pb_give_role lbox */
    lbox?: (number|null);

    /** pb_give_role name */
    name: string;

    /** pb_give_role logo */
    logo: number;
}

/** Represents a pb_give_role. */
export class pb_give_role implements Ipb_give_role {

    /**
     * Constructs a new pb_give_role.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_give_role);

    /** pb_give_role uid64. */
    public uid64: (number|Long);

    /** pb_give_role channel. */
    public channel: string;

    /** pb_give_role lv. */
    public lv: number;

    /** pb_give_role lbox. */
    public lbox: number;

    /** pb_give_role name. */
    public name: string;

    /** pb_give_role logo. */
    public logo: number;

    /**
     * Creates a new pb_give_role instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_give_role instance
     */
    public static create(properties?: Ipb_give_role): pb_give_role;

    /**
     * Encodes the specified pb_give_role message. Does not implicitly {@link pb_give_role.verify|verify} messages.
     * @param message pb_give_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_give_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_give_role message, length delimited. Does not implicitly {@link pb_give_role.verify|verify} messages.
     * @param message pb_give_role message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_give_role, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_give_role message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_give_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_give_role;

    /**
     * Decodes a pb_give_role message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_give_role
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_give_role;

    /**
     * Verifies a pb_give_role message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_give_role message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_give_role
     */
    public static fromObject(object: { [k: string]: any }): pb_give_role;

    /**
     * Creates a plain object from a pb_give_role message. Also converts values to other types if specified.
     * @param message pb_give_role
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_give_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_give_role to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_give_role
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_give_order. */
export interface Ipb_give_order {

    /** pb_give_order id */
    id?: (number|Long|null);

    /** pb_give_order type */
    type?: (number|null);

    /** pb_give_order num */
    num?: (number|null);

    /** pb_give_order status */
    status?: (number|null);

    /** pb_give_order role */
    role?: (Ipb_give_role|null);

    /** pb_give_order cd */
    cd?: (number|null);
}

/** Represents a pb_give_order. */
export class pb_give_order implements Ipb_give_order {

    /**
     * Constructs a new pb_give_order.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_give_order);

    /** pb_give_order id. */
    public id: (number|Long);

    /** pb_give_order type. */
    public type: number;

    /** pb_give_order num. */
    public num: number;

    /** pb_give_order status. */
    public status: number;

    /** pb_give_order role. */
    public role?: (Ipb_give_role|null);

    /** pb_give_order cd. */
    public cd: number;

    /**
     * Creates a new pb_give_order instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_give_order instance
     */
    public static create(properties?: Ipb_give_order): pb_give_order;

    /**
     * Encodes the specified pb_give_order message. Does not implicitly {@link pb_give_order.verify|verify} messages.
     * @param message pb_give_order message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_give_order, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_give_order message, length delimited. Does not implicitly {@link pb_give_order.verify|verify} messages.
     * @param message pb_give_order message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_give_order, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_give_order message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_give_order
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_give_order;

    /**
     * Decodes a pb_give_order message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_give_order
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_give_order;

    /**
     * Verifies a pb_give_order message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_give_order message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_give_order
     */
    public static fromObject(object: { [k: string]: any }): pb_give_order;

    /**
     * Creates a plain object from a pb_give_order message. Also converts values to other types if specified.
     * @param message pb_give_order
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_give_order, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_give_order to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_give_order
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_give_log. */
export interface Ipb_give_log {

    /** pb_give_log name */
    name?: (string|null);

    /** pb_give_log num */
    num?: (number|null);

    /** pb_give_log tax */
    tax?: (number|null);

    /** pb_give_log time */
    time?: (number|Long|null);
}

/** Represents a pb_give_log. */
export class pb_give_log implements Ipb_give_log {

    /**
     * Constructs a new pb_give_log.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_give_log);

    /** pb_give_log name. */
    public name: string;

    /** pb_give_log num. */
    public num: number;

    /** pb_give_log tax. */
    public tax: number;

    /** pb_give_log time. */
    public time: (number|Long);

    /**
     * Creates a new pb_give_log instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_give_log instance
     */
    public static create(properties?: Ipb_give_log): pb_give_log;

    /**
     * Encodes the specified pb_give_log message. Does not implicitly {@link pb_give_log.verify|verify} messages.
     * @param message pb_give_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_give_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_give_log message, length delimited. Does not implicitly {@link pb_give_log.verify|verify} messages.
     * @param message pb_give_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_give_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_give_log message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_give_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_give_log;

    /**
     * Decodes a pb_give_log message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_give_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_give_log;

    /**
     * Verifies a pb_give_log message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_give_log message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_give_log
     */
    public static fromObject(object: { [k: string]: any }): pb_give_log;

    /**
     * Creates a plain object from a pb_give_log message. Also converts values to other types if specified.
     * @param message pb_give_log
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_give_log, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_give_log to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_give_log
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_qlt_pvp_enemy. */
export interface Ipb_qlt_pvp_enemy {

    /** pb_qlt_pvp_enemy idx */
    idx?: (number|null);

    /** pb_qlt_pvp_enemy logo */
    logo?: (number|null);

    /** pb_qlt_pvp_enemy name */
    name?: (string|null);

    /** pb_qlt_pvp_enemy cluster */
    cluster?: (string|null);

    /** pb_qlt_pvp_enemy lv */
    lv?: (number|null);

    /** pb_qlt_pvp_enemy lbox */
    lbox?: (number|null);

    /** pb_qlt_pvp_enemy camp */
    camp?: (Ipb_unit[]|null);

    /** pb_qlt_pvp_enemy skls */
    skls?: (number[]|null);

    /** pb_qlt_pvp_enemy hide */
    hide?: (number[]|null);

    /** pb_qlt_pvp_enemy uid */
    uid?: (number|Long|null);

    /** pb_qlt_pvp_enemy power */
    power?: (number|Long|null);

    /** pb_qlt_pvp_enemy isFight */
    isFight?: (number|null);

    /** pb_qlt_pvp_enemy gname */
    gname?: (string|null);
}

/** Represents a pb_qlt_pvp_enemy. */
export class pb_qlt_pvp_enemy implements Ipb_qlt_pvp_enemy {

    /**
     * Constructs a new pb_qlt_pvp_enemy.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_qlt_pvp_enemy);

    /** pb_qlt_pvp_enemy idx. */
    public idx: number;

    /** pb_qlt_pvp_enemy logo. */
    public logo: number;

    /** pb_qlt_pvp_enemy name. */
    public name: string;

    /** pb_qlt_pvp_enemy cluster. */
    public cluster: string;

    /** pb_qlt_pvp_enemy lv. */
    public lv: number;

    /** pb_qlt_pvp_enemy lbox. */
    public lbox: number;

    /** pb_qlt_pvp_enemy camp. */
    public camp: Ipb_unit[];

    /** pb_qlt_pvp_enemy skls. */
    public skls: number[];

    /** pb_qlt_pvp_enemy hide. */
    public hide: number[];

    /** pb_qlt_pvp_enemy uid. */
    public uid: (number|Long);

    /** pb_qlt_pvp_enemy power. */
    public power: (number|Long);

    /** pb_qlt_pvp_enemy isFight. */
    public isFight: number;

    /** pb_qlt_pvp_enemy gname. */
    public gname: string;

    /**
     * Creates a new pb_qlt_pvp_enemy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_qlt_pvp_enemy instance
     */
    public static create(properties?: Ipb_qlt_pvp_enemy): pb_qlt_pvp_enemy;

    /**
     * Encodes the specified pb_qlt_pvp_enemy message. Does not implicitly {@link pb_qlt_pvp_enemy.verify|verify} messages.
     * @param message pb_qlt_pvp_enemy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_qlt_pvp_enemy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_qlt_pvp_enemy message, length delimited. Does not implicitly {@link pb_qlt_pvp_enemy.verify|verify} messages.
     * @param message pb_qlt_pvp_enemy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_qlt_pvp_enemy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_qlt_pvp_enemy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_qlt_pvp_enemy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_qlt_pvp_enemy;

    /**
     * Decodes a pb_qlt_pvp_enemy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_qlt_pvp_enemy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_qlt_pvp_enemy;

    /**
     * Verifies a pb_qlt_pvp_enemy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_qlt_pvp_enemy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_qlt_pvp_enemy
     */
    public static fromObject(object: { [k: string]: any }): pb_qlt_pvp_enemy;

    /**
     * Creates a plain object from a pb_qlt_pvp_enemy message. Also converts values to other types if specified.
     * @param message pb_qlt_pvp_enemy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_qlt_pvp_enemy, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_qlt_pvp_enemy to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_qlt_pvp_enemy
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_qloger. */
export interface Ipb_qloger {

    /** pb_qloger vid */
    vid: (number|Long);

    /** pb_qloger aMbr */
    aMbr?: (Ipb_smbr|null);

    /** pb_qloger dMbr */
    dMbr?: (Ipb_smbr|null);

    /** pb_qloger time */
    time?: (number|null);

    /** pb_qloger win */
    win?: (boolean|null);

    /** pb_qloger delta */
    delta?: (number|null);

    /** pb_qloger aSkls */
    aSkls?: (number[]|null);

    /** pb_qloger dSkls */
    dSkls?: (number[]|null);
}

/** Represents a pb_qloger. */
export class pb_qloger implements Ipb_qloger {

    /**
     * Constructs a new pb_qloger.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_qloger);

    /** pb_qloger vid. */
    public vid: (number|Long);

    /** pb_qloger aMbr. */
    public aMbr?: (Ipb_smbr|null);

    /** pb_qloger dMbr. */
    public dMbr?: (Ipb_smbr|null);

    /** pb_qloger time. */
    public time: number;

    /** pb_qloger win. */
    public win: boolean;

    /** pb_qloger delta. */
    public delta: number;

    /** pb_qloger aSkls. */
    public aSkls: number[];

    /** pb_qloger dSkls. */
    public dSkls: number[];

    /**
     * Creates a new pb_qloger instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_qloger instance
     */
    public static create(properties?: Ipb_qloger): pb_qloger;

    /**
     * Encodes the specified pb_qloger message. Does not implicitly {@link pb_qloger.verify|verify} messages.
     * @param message pb_qloger message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_qloger, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_qloger message, length delimited. Does not implicitly {@link pb_qloger.verify|verify} messages.
     * @param message pb_qloger message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_qloger, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_qloger message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_qloger
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_qloger;

    /**
     * Decodes a pb_qloger message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_qloger
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_qloger;

    /**
     * Verifies a pb_qloger message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_qloger message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_qloger
     */
    public static fromObject(object: { [k: string]: any }): pb_qloger;

    /**
     * Creates a plain object from a pb_qloger message. Also converts values to other types if specified.
     * @param message pb_qloger
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_qloger, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_qloger to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_qloger
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_qvideo. */
export interface Ipb_qvideo {

    /** pb_qvideo atk */
    atk?: (Ipb_unit[]|null);

    /** pb_qvideo def */
    def?: (Ipb_unit[]|null);

    /** pb_qvideo frames */
    frames?: (Uint8Array[]|null);

    /** pb_qvideo hurts */
    hurts?: (Ipb_hurts[]|null);

    /** pb_qvideo win */
    win: boolean;
}

/** Represents a pb_qvideo. */
export class pb_qvideo implements Ipb_qvideo {

    /**
     * Constructs a new pb_qvideo.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_qvideo);

    /** pb_qvideo atk. */
    public atk: Ipb_unit[];

    /** pb_qvideo def. */
    public def: Ipb_unit[];

    /** pb_qvideo frames. */
    public frames: Uint8Array[];

    /** pb_qvideo hurts. */
    public hurts: Ipb_hurts[];

    /** pb_qvideo win. */
    public win: boolean;

    /**
     * Creates a new pb_qvideo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_qvideo instance
     */
    public static create(properties?: Ipb_qvideo): pb_qvideo;

    /**
     * Encodes the specified pb_qvideo message. Does not implicitly {@link pb_qvideo.verify|verify} messages.
     * @param message pb_qvideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_qvideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_qvideo message, length delimited. Does not implicitly {@link pb_qvideo.verify|verify} messages.
     * @param message pb_qvideo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_qvideo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_qvideo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_qvideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_qvideo;

    /**
     * Decodes a pb_qvideo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_qvideo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_qvideo;

    /**
     * Verifies a pb_qvideo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_qvideo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_qvideo
     */
    public static fromObject(object: { [k: string]: any }): pb_qvideo;

    /**
     * Creates a plain object from a pb_qvideo message. Also converts values to other types if specified.
     * @param message pb_qvideo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_qvideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_qvideo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_qvideo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a pb_qlog. */
export interface Ipb_qlog {

    /** pb_qlog video */
    video?: (Ipb_qvideo[]|null);

    /** pb_qlog aMbr */
    aMbr?: (Ipb_smbr|null);

    /** pb_qlog dMbr */
    dMbr?: (Ipb_smbr|null);

    /** pb_qlog time */
    time?: (number|null);

    /** pb_qlog win */
    win?: (boolean|null);

    /** pb_qlog delta */
    delta?: (number|null);

    /** pb_qlog aSkls */
    aSkls?: (number[]|null);

    /** pb_qlog dSkls */
    dSkls?: (number[]|null);
}

/** Represents a pb_qlog. */
export class pb_qlog implements Ipb_qlog {

    /**
     * Constructs a new pb_qlog.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipb_qlog);

    /** pb_qlog video. */
    public video: Ipb_qvideo[];

    /** pb_qlog aMbr. */
    public aMbr?: (Ipb_smbr|null);

    /** pb_qlog dMbr. */
    public dMbr?: (Ipb_smbr|null);

    /** pb_qlog time. */
    public time: number;

    /** pb_qlog win. */
    public win: boolean;

    /** pb_qlog delta. */
    public delta: number;

    /** pb_qlog aSkls. */
    public aSkls: number[];

    /** pb_qlog dSkls. */
    public dSkls: number[];

    /**
     * Creates a new pb_qlog instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pb_qlog instance
     */
    public static create(properties?: Ipb_qlog): pb_qlog;

    /**
     * Encodes the specified pb_qlog message. Does not implicitly {@link pb_qlog.verify|verify} messages.
     * @param message pb_qlog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipb_qlog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pb_qlog message, length delimited. Does not implicitly {@link pb_qlog.verify|verify} messages.
     * @param message pb_qlog message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipb_qlog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pb_qlog message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pb_qlog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb_qlog;

    /**
     * Decodes a pb_qlog message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pb_qlog
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb_qlog;

    /**
     * Verifies a pb_qlog message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pb_qlog message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pb_qlog
     */
    public static fromObject(object: { [k: string]: any }): pb_qlog;

    /**
     * Creates a plain object from a pb_qlog message. Also converts values to other types if specified.
     * @param message pb_qlog
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pb_qlog, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pb_qlog to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for pb_qlog
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a power_rank. */
export interface Ipower_rank {

    /** power_rank id */
    id?: (number|null);

    /** power_rank player */
    player?: (Ipb_give_role|null);

    /** power_rank score */
    score?: (number|null);
}

/** Represents a power_rank. */
export class power_rank implements Ipower_rank {

    /**
     * Constructs a new power_rank.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipower_rank);

    /** power_rank id. */
    public id: number;

    /** power_rank player. */
    public player?: (Ipb_give_role|null);

    /** power_rank score. */
    public score: number;

    /**
     * Creates a new power_rank instance using the specified properties.
     * @param [properties] Properties to set
     * @returns power_rank instance
     */
    public static create(properties?: Ipower_rank): power_rank;

    /**
     * Encodes the specified power_rank message. Does not implicitly {@link power_rank.verify|verify} messages.
     * @param message power_rank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipower_rank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified power_rank message, length delimited. Does not implicitly {@link power_rank.verify|verify} messages.
     * @param message power_rank message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipower_rank, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a power_rank message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns power_rank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): power_rank;

    /**
     * Decodes a power_rank message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns power_rank
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): power_rank;

    /**
     * Verifies a power_rank message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a power_rank message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns power_rank
     */
    public static fromObject(object: { [k: string]: any }): power_rank;

    /**
     * Creates a plain object from a power_rank message. Also converts values to other types if specified.
     * @param message power_rank
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: power_rank, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this power_rank to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for power_rank
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a power_task. */
export interface Ipower_task {

    /** power_task id */
    id: number;

    /** power_task type */
    type?: (number|null);

    /** power_task cd */
    cd?: (number|null);

    /** power_task num */
    num?: (number|null);

    /** power_task dotId */
    dotId?: (number|null);

    /** power_task flag */
    flag?: (number|null);
}

/** Represents a power_task. */
export class power_task implements Ipower_task {

    /**
     * Constructs a new power_task.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipower_task);

    /** power_task id. */
    public id: number;

    /** power_task type. */
    public type: number;

    /** power_task cd. */
    public cd: number;

    /** power_task num. */
    public num: number;

    /** power_task dotId. */
    public dotId: number;

    /** power_task flag. */
    public flag: number;

    /**
     * Creates a new power_task instance using the specified properties.
     * @param [properties] Properties to set
     * @returns power_task instance
     */
    public static create(properties?: Ipower_task): power_task;

    /**
     * Encodes the specified power_task message. Does not implicitly {@link power_task.verify|verify} messages.
     * @param message power_task message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipower_task, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified power_task message, length delimited. Does not implicitly {@link power_task.verify|verify} messages.
     * @param message power_task message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipower_task, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a power_task message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns power_task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): power_task;

    /**
     * Decodes a power_task message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns power_task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): power_task;

    /**
     * Verifies a power_task message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a power_task message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns power_task
     */
    public static fromObject(object: { [k: string]: any }): power_task;

    /**
     * Creates a plain object from a power_task message. Also converts values to other types if specified.
     * @param message power_task
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: power_task, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this power_task to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for power_task
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a dot_info. */
export interface Idot_info {

    /** dot_info id */
    id?: (number|null);

    /** dot_info powerId */
    powerId?: (number|null);

    /** dot_info degree */
    degree?: (number|null);

    /** dot_info max */
    max?: (number|null);

    /** dot_info status */
    status?: (number|null);

    /** dot_info item */
    item?: (number|null);

    /** dot_info buff */
    buff?: (Ipb_item[]|null);

    /** dot_info tmpId */
    tmpId?: (number|null);

    /** dot_info skill */
    skill?: (number[]|null);

    /** dot_info cd */
    cd?: (number|null);

    /** dot_info cd2 */
    cd2?: (number|null);

    /** dot_info cd3 */
    cd3?: (number|null);

    /** dot_info cd4 */
    cd4?: (number|null);

    /** dot_info cd5 */
    cd5?: (number|null);
}

/** Represents a dot_info. */
export class dot_info implements Idot_info {

    /**
     * Constructs a new dot_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Idot_info);

    /** dot_info id. */
    public id: number;

    /** dot_info powerId. */
    public powerId: number;

    /** dot_info degree. */
    public degree: number;

    /** dot_info max. */
    public max: number;

    /** dot_info status. */
    public status: number;

    /** dot_info item. */
    public item: number;

    /** dot_info buff. */
    public buff: Ipb_item[];

    /** dot_info tmpId. */
    public tmpId: number;

    /** dot_info skill. */
    public skill: number[];

    /** dot_info cd. */
    public cd: number;

    /** dot_info cd2. */
    public cd2: number;

    /** dot_info cd3. */
    public cd3: number;

    /** dot_info cd4. */
    public cd4: number;

    /** dot_info cd5. */
    public cd5: number;

    /**
     * Creates a new dot_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns dot_info instance
     */
    public static create(properties?: Idot_info): dot_info;

    /**
     * Encodes the specified dot_info message. Does not implicitly {@link dot_info.verify|verify} messages.
     * @param message dot_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Idot_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified dot_info message, length delimited. Does not implicitly {@link dot_info.verify|verify} messages.
     * @param message dot_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Idot_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a dot_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns dot_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dot_info;

    /**
     * Decodes a dot_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns dot_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dot_info;

    /**
     * Verifies a dot_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a dot_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns dot_info
     */
    public static fromObject(object: { [k: string]: any }): dot_info;

    /**
     * Creates a plain object from a dot_info message. Also converts values to other types if specified.
     * @param message dot_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: dot_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this dot_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for dot_info
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a dot_log. */
export interface Idot_log {

    /** dot_log type */
    type?: (number|null);

    /** dot_log degree */
    degree?: (number|null);

    /** dot_log time */
    time?: (string|null);

    /** dot_log id */
    id?: (number|null);

    /** dot_log add */
    add?: (number|null);
}

/** Represents a dot_log. */
export class dot_log implements Idot_log {

    /**
     * Constructs a new dot_log.
     * @param [properties] Properties to set
     */
    constructor(properties?: Idot_log);

    /** dot_log type. */
    public type: number;

    /** dot_log degree. */
    public degree: number;

    /** dot_log time. */
    public time: string;

    /** dot_log id. */
    public id: number;

    /** dot_log add. */
    public add: number;

    /**
     * Creates a new dot_log instance using the specified properties.
     * @param [properties] Properties to set
     * @returns dot_log instance
     */
    public static create(properties?: Idot_log): dot_log;

    /**
     * Encodes the specified dot_log message. Does not implicitly {@link dot_log.verify|verify} messages.
     * @param message dot_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Idot_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified dot_log message, length delimited. Does not implicitly {@link dot_log.verify|verify} messages.
     * @param message dot_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Idot_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a dot_log message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns dot_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dot_log;

    /**
     * Decodes a dot_log message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns dot_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dot_log;

    /**
     * Verifies a dot_log message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a dot_log message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns dot_log
     */
    public static fromObject(object: { [k: string]: any }): dot_log;

    /**
     * Creates a plain object from a dot_log message. Also converts values to other types if specified.
     * @param message dot_log
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: dot_log, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this dot_log to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for dot_log
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a power_monster. */
export interface Ipower_monster {

    /** power_monster id */
    id: number;

    /** power_monster camp */
    camp?: (Ipb_unit[]|null);

    /** power_monster buff */
    buff?: (number[]|null);
}

/** Represents a power_monster. */
export class power_monster implements Ipower_monster {

    /**
     * Constructs a new power_monster.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipower_monster);

    /** power_monster id. */
    public id: number;

    /** power_monster camp. */
    public camp: Ipb_unit[];

    /** power_monster buff. */
    public buff: number[];

    /**
     * Creates a new power_monster instance using the specified properties.
     * @param [properties] Properties to set
     * @returns power_monster instance
     */
    public static create(properties?: Ipower_monster): power_monster;

    /**
     * Encodes the specified power_monster message. Does not implicitly {@link power_monster.verify|verify} messages.
     * @param message power_monster message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipower_monster, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified power_monster message, length delimited. Does not implicitly {@link power_monster.verify|verify} messages.
     * @param message power_monster message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipower_monster, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a power_monster message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns power_monster
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): power_monster;

    /**
     * Decodes a power_monster message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns power_monster
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): power_monster;

    /**
     * Verifies a power_monster message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a power_monster message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns power_monster
     */
    public static fromObject(object: { [k: string]: any }): power_monster;

    /**
     * Creates a plain object from a power_monster message. Also converts values to other types if specified.
     * @param message power_monster
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: power_monster, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this power_monster to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for power_monster
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a power_skill. */
export interface Ipower_skill {

    /** power_skill id */
    id: number;

    /** power_skill name */
    name?: (string|null);

    /** power_skill skill */
    skill?: (number[]|null);

    /** power_skill cd */
    cd?: (number|null);
}

/** Represents a power_skill. */
export class power_skill implements Ipower_skill {

    /**
     * Constructs a new power_skill.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipower_skill);

    /** power_skill id. */
    public id: number;

    /** power_skill name. */
    public name: string;

    /** power_skill skill. */
    public skill: number[];

    /** power_skill cd. */
    public cd: number;

    /**
     * Creates a new power_skill instance using the specified properties.
     * @param [properties] Properties to set
     * @returns power_skill instance
     */
    public static create(properties?: Ipower_skill): power_skill;

    /**
     * Encodes the specified power_skill message. Does not implicitly {@link power_skill.verify|verify} messages.
     * @param message power_skill message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipower_skill, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified power_skill message, length delimited. Does not implicitly {@link power_skill.verify|verify} messages.
     * @param message power_skill message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipower_skill, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a power_skill message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns power_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): power_skill;

    /**
     * Decodes a power_skill message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns power_skill
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): power_skill;

    /**
     * Verifies a power_skill message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a power_skill message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns power_skill
     */
    public static fromObject(object: { [k: string]: any }): power_skill;

    /**
     * Creates a plain object from a power_skill message. Also converts values to other types if specified.
     * @param message power_skill
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: power_skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this power_skill to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for power_skill
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a power_manager. */
export interface Ipower_manager {

    /** power_manager udk */
    udk?: (string|null);

    /** power_manager cluster */
    cluster?: (string|null);

    /** power_manager uid */
    uid?: (number|Long|null);
}

/** Represents a power_manager. */
export class power_manager implements Ipower_manager {

    /**
     * Constructs a new power_manager.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipower_manager);

    /** power_manager udk. */
    public udk: string;

    /** power_manager cluster. */
    public cluster: string;

    /** power_manager uid. */
    public uid: (number|Long);

    /**
     * Creates a new power_manager instance using the specified properties.
     * @param [properties] Properties to set
     * @returns power_manager instance
     */
    public static create(properties?: Ipower_manager): power_manager;

    /**
     * Encodes the specified power_manager message. Does not implicitly {@link power_manager.verify|verify} messages.
     * @param message power_manager message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipower_manager, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified power_manager message, length delimited. Does not implicitly {@link power_manager.verify|verify} messages.
     * @param message power_manager message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipower_manager, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a power_manager message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns power_manager
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): power_manager;

    /**
     * Decodes a power_manager message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns power_manager
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): power_manager;

    /**
     * Verifies a power_manager message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a power_manager message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns power_manager
     */
    public static fromObject(object: { [k: string]: any }): power_manager;

    /**
     * Creates a plain object from a power_manager message. Also converts values to other types if specified.
     * @param message power_manager
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: power_manager, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this power_manager to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for power_manager
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a stower_breed. */
export interface Istower_breed {

    /** stower_breed id */
    id: number;

    /** stower_breed pid1 */
    pid1: number;

    /** stower_breed pid2 */
    pid2: number;

    /** stower_breed cd */
    cd: number;

    /** stower_breed egg */
    egg: number;
}

/** Represents a stower_breed. */
export class stower_breed implements Istower_breed {

    /**
     * Constructs a new stower_breed.
     * @param [properties] Properties to set
     */
    constructor(properties?: Istower_breed);

    /** stower_breed id. */
    public id: number;

    /** stower_breed pid1. */
    public pid1: number;

    /** stower_breed pid2. */
    public pid2: number;

    /** stower_breed cd. */
    public cd: number;

    /** stower_breed egg. */
    public egg: number;

    /**
     * Creates a new stower_breed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns stower_breed instance
     */
    public static create(properties?: Istower_breed): stower_breed;

    /**
     * Encodes the specified stower_breed message. Does not implicitly {@link stower_breed.verify|verify} messages.
     * @param message stower_breed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Istower_breed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified stower_breed message, length delimited. Does not implicitly {@link stower_breed.verify|verify} messages.
     * @param message stower_breed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Istower_breed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a stower_breed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns stower_breed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stower_breed;

    /**
     * Decodes a stower_breed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns stower_breed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stower_breed;

    /**
     * Verifies a stower_breed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a stower_breed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns stower_breed
     */
    public static fromObject(object: { [k: string]: any }): stower_breed;

    /**
     * Creates a plain object from a stower_breed message. Also converts values to other types if specified.
     * @param message stower_breed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: stower_breed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this stower_breed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for stower_breed
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a stower_lucky. */
export interface Istower_lucky {

    /** stower_lucky id */
    id: number;

    /** stower_lucky ratio */
    ratio?: (number[]|null);
}

/** Represents a stower_lucky. */
export class stower_lucky implements Istower_lucky {

    /**
     * Constructs a new stower_lucky.
     * @param [properties] Properties to set
     */
    constructor(properties?: Istower_lucky);

    /** stower_lucky id. */
    public id: number;

    /** stower_lucky ratio. */
    public ratio: number[];

    /**
     * Creates a new stower_lucky instance using the specified properties.
     * @param [properties] Properties to set
     * @returns stower_lucky instance
     */
    public static create(properties?: Istower_lucky): stower_lucky;

    /**
     * Encodes the specified stower_lucky message. Does not implicitly {@link stower_lucky.verify|verify} messages.
     * @param message stower_lucky message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Istower_lucky, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified stower_lucky message, length delimited. Does not implicitly {@link stower_lucky.verify|verify} messages.
     * @param message stower_lucky message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Istower_lucky, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a stower_lucky message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns stower_lucky
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stower_lucky;

    /**
     * Decodes a stower_lucky message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns stower_lucky
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stower_lucky;

    /**
     * Verifies a stower_lucky message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a stower_lucky message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns stower_lucky
     */
    public static fromObject(object: { [k: string]: any }): stower_lucky;

    /**
     * Creates a plain object from a stower_lucky message. Also converts values to other types if specified.
     * @param message stower_lucky
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: stower_lucky, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this stower_lucky to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for stower_lucky
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a power_log. */
export interface Ipower_log {

    /** power_log type */
    type?: (number|null);

    /** power_log job */
    job?: (number|null);

    /** power_log time */
    time?: (string|null);

    /** power_log name */
    name?: (string|null);

    /** power_log point */
    point?: (number|null);

    /** power_log buff */
    buff?: (number|null);
}

/** Represents a power_log. */
export class power_log implements Ipower_log {

    /**
     * Constructs a new power_log.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipower_log);

    /** power_log type. */
    public type: number;

    /** power_log job. */
    public job: number;

    /** power_log time. */
    public time: string;

    /** power_log name. */
    public name: string;

    /** power_log point. */
    public point: number;

    /** power_log buff. */
    public buff: number;

    /**
     * Creates a new power_log instance using the specified properties.
     * @param [properties] Properties to set
     * @returns power_log instance
     */
    public static create(properties?: Ipower_log): power_log;

    /**
     * Encodes the specified power_log message. Does not implicitly {@link power_log.verify|verify} messages.
     * @param message power_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipower_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified power_log message, length delimited. Does not implicitly {@link power_log.verify|verify} messages.
     * @param message power_log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipower_log, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a power_log message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns power_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): power_log;

    /**
     * Decodes a power_log message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns power_log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): power_log;

    /**
     * Verifies a power_log message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a power_log message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns power_log
     */
    public static fromObject(object: { [k: string]: any }): power_log;

    /**
     * Creates a plain object from a power_log message. Also converts values to other types if specified.
     * @param message power_log
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: power_log, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this power_log to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for power_log
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

        }
        export default COMM;