const uploadImagen = (req, res, next) => {
    const file = req.file

    if(!file) {
        const error = new Error(' Error subiendo el archivo')
        error.httpStatuscode = 400
        return next(error)
    }

    res.json({nombre: file.filename})
}

module.exports = {
    uploadImagen
}