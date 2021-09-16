const bcrypt = require('bcrypt');

comparePassword = (password,hashedPassword) => {
	try{
		return bcrypt.compareSync(password,hashedPassword);
	}catch(e){
		return false;
	}
}

module.exports = {comparePassword}
