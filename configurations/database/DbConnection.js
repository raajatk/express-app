
var getDbConnection = function () {
    switch (process.env.NODE_ENV) {
    case 'development':
      var db = mongoose.connect('mongodb://admin:nodeseed@localhost:27017/mongoseed');
      return checkMongooseConnection(db)
    case 'staging':
       var db = mongoose.connect('mongodb://admin:nodeseed@localhost:27017/mongoseed');
        return checkMongooseConnection(db)
    case 'production':
      var db = mongoose.connect('mongodb://admin:nodeseed@localhost:27017/mongoseed');
       return checkMongooseConnection(db)
    case 'test':
        var db = mongoose.connect('mongodb://admin:nodeseed@localhost:27017/mongoseed');
        return checkMongooseConnection(db)
    }
}


 //function to check connection to database server
 function checkMongooseConnection(db){
       mongoose.connection.on('open', function (ref) {
            console.log('Connected to mongo server.');
            return db
       });
       mongoose.connection.on('error', function (err) {
          console.log('Could not connect to mongo server!');
          console.log(err);
      });
 }



module.exports.getDbConnection = getDbConnection;
