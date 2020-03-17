const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // local onde os uploads serão armazenados
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext); // acrescenta-se ext para ele não exibir a extensão


            cb(null, `${name}-${Date.now()}${ext}`) // o 'null' se refere a um erro e o restante junta o nome original do arquivo, a data atual em segundos e a extenção
        }
    })
}