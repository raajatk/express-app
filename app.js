global.express = require("express")

global.app = express()
global.port = 3000
global.bodyParser = require('body-parser')
global.routes = require('./configurations/routes/Routes.js')
global.mongoose = require('mongoose')
global.mongooseSchema = mongoose.Schema;
global.dbConnection = require('./configurations/database/DbConnection.js').getDbConnection()
global.domain = require('./configurations/database/Databases.js');

app.use(bodyParser.json())
app.use('/', routes)
app.listen(port)

console.log(`The Express Server is running at port ${port}`);
