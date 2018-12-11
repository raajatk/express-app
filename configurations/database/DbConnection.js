
mongoose.Promise = global.Promise;

var getDbConnection = function () {

    switch (process.env.NODE_ENV) {
      case 'development':
        var db = mongoose.connect('mongodb://admin:nodeseed@localhost:27017/mongoseed',{ useMongoClient: true});
        console.log("Connecting the mongodb in development mode");
        break;
      case 'staging':
        var db = mongoose.connect('mongodb://admin:nodeseed@localhost:27017/mongoseed',{ useMongoClient: true});
        console.log("Connecting the mongodb in staging mode");
        break;
      case 'testing':
        var db = mongoose.connect('mongodb://admin:nodeseed@localhost:27017/mongoseed',{ useMongoClient: true});
        console.log("Connecting the mongodb in testing mode");
        break;
      case 'production':
        var db = mongoose.connect('mongodb://admin:nodeseed@localhost:27017/mongoseed',{ useMongoClient: true});
        console.log("Connecting the mongodb in production mode");
        break;
      default:
        var db = mongoose.connect('mongodb://admin:nodeseed@localhost:27017/mongoseed',{ useMongoClient: true});
        console.log("Connecting the mongodb in default mode i.e development");
        break;
    }
    db.then(db => {
        console.log('Mongodb has been connected');
    })
    .catch(err => {
        console.log('Error while trying to connect with mongodb');
        throw err;
    });
}

module.exports.getDbConnection = getDbConnection;
