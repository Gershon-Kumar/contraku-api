const User = require('../model/User')

contrakuSignup = async (req,res) => {
    try{
        let user = new User({
            name : "Gershon",
            phone : "34234234"
        })
        await user.save()
        res.status(200).send()
    }catch(e){
        console.log(e)
        res.status(500).send()
    }
}

module.exports = {
    contrakuSignup
}