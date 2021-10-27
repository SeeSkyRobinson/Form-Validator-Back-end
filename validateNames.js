

function validateNames(file) {
    let nameResults = {}
    generateNames(file).forEach(person => {
        let name = Object.values(person)[0]
        let key = Object.keys(person)
        if (name) {
            nameResults[key] = checkName(name)
        }
    })
    return nameResults
}


function generateNames(file) {
    return names = [
        {transferor: file.transferor.value},
        {transferee: file.transferee.value},
        {witnessA: file.name.value},
        {witnessB: file.name1.value},
        {witnessC: file.name2.value},
        {witnessD: file.full_name.value},
        {witnessE: file.full_name_1.value}
    ] 
}

function checkName(name) {
    let nameIgnoreAND = name.replace(" and ", '')
    if (nameIgnoreAND === nameIgnoreAND.toUpperCase()) {
        return `${name} valid name`
        // console.log(`${name} valid name`);
    } else {
        return `${name} invalid name - name must be in uppercase`
        // console.log(`${name} invalid name - name must be in uppercase`);
    }
}



module.exports = validateNames



