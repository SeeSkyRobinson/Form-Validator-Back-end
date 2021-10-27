

const PDFParser = require("pdf2json")








let getFormData = callback => {
    const pdfParser = new PDFParser()
    pdfParser.loadPDF("./pdf_files/sample.pdf")
    pdfParser.on("pdfParser_dataError", error => {
        callback('invalid file - wrong file type')
    })
    // pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError))
    pdfParser.on("pdfParser_dataReady", pdfData => {
        callback(JSON.stringify(pdfData))
    })
}


module.exports = getFormData