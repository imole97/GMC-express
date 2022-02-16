
module.exports = (req, res, next) => {
    let day = new Date().getDay()
    let time = new Date().getHours()
    if(day !== 0 && day!== 6){
        if(time > 9 && time < 17){

        }
        next()
    }
    // if(day=0)
        
        
    else{
        res.render('unavailable')
    }
    
}

