var env = process.env;


module.exports = {
    activeEnvironment : env.activeEnvironment || 'development',
    port : env.port || 5000,
    mongoUrl : env.MONGO_URL || 'mongodb://localhost:27017/contraku'
}