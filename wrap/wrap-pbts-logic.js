
const fs = require('fs-extra');
const ps = require('path');

(async () => {
    const file = ps.join(__dirname, '../dr2_logic.d.ts');
    const original = await fs.readFile(file, 'utf-8');
    await fs.writeFile(
        file,
        `namespace LOGIC {
            ${original}
        }
        export default LOGIC;`
    );
})();