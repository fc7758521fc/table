
const fs = require('fs-extra');
const ps = require('path');

(async () => {
    const file = ps.join(__dirname, '..', 'assets', 'scripts', 'protocol', 'dr2_comm.d.ts');
    const original = await fs.readFile(file, 'utf-8');
    await fs.writeFile(
        file,
        `namespace COMM {
            ${original}
        }
        export default COMM;`
    );
})();
