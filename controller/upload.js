const uploadImagen = (req, res) => {
    const file = req.file

    //si es undefined (no viene una imagen)
    if (!file) {
        const error = new Error ( 'Error subiendo el archivo')
        error.httpStatuscode = 400
        console.log(error)
        return next(error)
    }

    res.json({nombre: file.filename})
}
module.exports = {
    uploadImagen
}