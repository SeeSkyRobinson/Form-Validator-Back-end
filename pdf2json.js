const fs = require('fs')
const PDFParser = require("pdf2json")

const {improveReadability, test} = require('./validate.js')




// pdfParser.loadPDF("./test1.pdf")
let convertToJSON = callback => {
    const pdfParser = new PDFParser()
    pdfParser.loadPDF("./pdf_files/sample.pdf")
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) )
    pdfParser.on("pdfParser_dataReady", () => {
        callback((pdfParser.getAllFieldsTypes()))
    })
}
module.exports = convertToJSON


// pdfData => {
//     test(improveReadability(JSON.stringify(pdfParser.getAllFieldsTypes())))
// }