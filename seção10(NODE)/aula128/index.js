// Listando arquivos com FS e Rescursão mútua (10/03/2023);

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
};

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        };

        // if(!/\.css/g.test(fileFullPath)) continue;
        if(/\.git/g.test(fileFullPath)) continue;
        if(/\node_modules/g.test(fileFullPath)) continue;


        console.log(fileFullPath);
    }
};

readdir('C:\\Users\\guili\\OneDrive\\Documentos\\CursoJavaScript\\Curso-JS-Udemy')