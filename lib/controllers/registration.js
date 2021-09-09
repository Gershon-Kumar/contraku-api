const User = require('../model/User')

contrakuSignup = async (req,res) => {
    try{
        res.status(200).send()
    }catch(e){
        console.log(e)
        res.status(500).send()
    }
}

module.exports = {
    contrakuSignup
}