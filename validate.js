const fs = require('fs')
const validateNames = require('./validateNames.js')
const validateDates = require('./validateDates.js')






//ToDo: set the file to open as a variable
//turn everything into a class -maybe

function improveReadability(json) {
    let file = {}
    let jsonFile = JSON.parse(json)
    jsonFile.forEach(ele => {
        let name = ele.id
        file[name] = ele
    })
    return file
}

function test(file) {
    let results = {
        'names': validateNames(file),
        'dates': validateDates(file)
    }   
    // console.log(results);
    return results
}

module.exports = {improveReadability, test}


//send triggers to the errormessage file to run specific error messages



// modules.export = 