const multer = require('multer')

//configuracion de como funciona multer
const storage = multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, "public/uploads")
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage}) //storage:storage

module.exports = upload