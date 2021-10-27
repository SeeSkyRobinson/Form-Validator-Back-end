



function isFormOne(data) {
    // console.log(JSON.parse(data).Meta.Title)
    let docTitle = JSON.parse(data).Meta.Title
    if (docTitle === "Titles Registry Form 1 Transfer") {
        return true
    }
}





module.exports = isFormOne