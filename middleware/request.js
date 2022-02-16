
module.exports = (req, res, next) => {
    let day = new Date().getDay()
    let time = new Date().getHours()
    
    if(time > 9 && time < 17 && day !== 0 && day!== 6) next()
        
        
    else{
        res.render('unavailable')
    }
    
}

