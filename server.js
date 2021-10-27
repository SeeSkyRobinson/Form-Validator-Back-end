const express = require('express')
const fileUpload = require('express-fileupload')
const convertToJSON = require('./pdf2json.js')
const {improveReadability, test} = require('./validate.js')
const getFormData = require('./getFormData.js')
const isFormOne = require('./isFormOne.js')

// let results = []

const app = express()
const port = 8080


app.use(express.json())
app.use(fileUpload())

app.get('/', (req, res) => {
    res.json({ message: 'welcome to the final project'})
})


// app.post('/upload', (req, res) => {
//     console.log(req.files);
//     res.json({message: 'ga'})
// })


app.post('/upload', (req, res) => {
    let fileName = req.files.File.name
    // console.log(fileName);
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.')
    }
  //check the extension of the file reject if not pdf
    if (!fileName.endsWith('.pdf')) {
        return res.json({message: 'invalid file - wrong file type'}) 
    }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.File
    uploadPath = __dirname + '/pdf_files/' + 'sample.pdf'

  // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
        if (err) {
            res.status(500).send(err)
        }

        getFormData(data => {
            if (data === 'invalid file - wrong file type') {
                // console.log(data);
                res.json({message: 'invalid file type - file must be pdf'})
            } else if (isFormOne(data)) {
                convertToJSON(data => {
                    res.json(test(improveReadability(JSON.stringify(data))))
                })
            } else {
                res.json({message: "invalid file - file must be Titles Registry Form 1 Transfer"})
            }
        })
    })
})


// app.get('/api/results', (req, res) => {
//     console.log('test');
//     res.send(results)
// })





















app.listen(port, () => {
    console.log(`server listening on ${port}`);
})


