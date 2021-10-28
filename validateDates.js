


function validateDates(file) {
    let dateResults = {}
    generateDates(file).forEach(dateObj => {
        let date = Object.values(dateObj)[0]
        let key = Object.keys(dateObj)
        if (date) {
            dateResults[key] = checkDate(date)
            // console.log(date);
            // dateResults[date] = checkDate(date)
        }
    })
    return dateResults
    // console.log(dateResults)
}

function generateDates(file) {
    return dates = [
        {dateA: {day: file.date.value, month: file.month.value, year: file.year.value}},
        {dateB: {day: file.dateb.value, month: file.monthb.value, year: file.yearb.value}},
        {dateC: {day: file.date_2.value, month: file.month_2.value, year: file.year_2.value}},
        {dateD: {day: file.datec.value, month: file.monthc.value, year: file.yearc.value}}
    ]
}

function checkDate(date) {
    // KNOWN BUG --- checks against local time (which may be behind the date signed on the document)
    if (date.day === '' && date.month === '' && date.year === '') {
        // console.log(date);
        // console.log('date empty');
        return `${date.day}/${date.month}/${date.year} date empty`
    } else if (date.day === '' || date.month === '' || date.year === '') {
        // console.log(date);
        // console.log('invalid date - date cannot have a blank field');
        return `${date.day}/${date.month}/${date.year} invalid date - date cannot have a blank field`
    } else {
        if (Math.sign(Number(date.day)) === 1 && Math.sign(Number(date.month)) === 1 && Math.sign(Number(date.year)) === 1) {
            let currentDate = new Date()
            let signedDate = new Date(date.year, date.month, date.day)
    
            if (signedDate < currentDate) {
                //valid date
                // console.log(date);
                // console.log('valid date');
                return `${date.day}/${date.month}/${date.year} valid date`
            } else {
                //invalide date - date cannot be in the future
                // console.log(date);
                // console.log('invalide date - date cannot be in the future');
                return `${date.day}/${date.month}/${date.year} invalide date - date cannot be in the future`
            }
        } else {
            //invalide date - date needs to be a number 
            // console.log(date);
            // console.log('invalide date - date needs to be a number');
            return `${date.day}/${date.month}/${date.year} invalide date - date needs to be a number`
        }
    }
}


module.exports = validateDates