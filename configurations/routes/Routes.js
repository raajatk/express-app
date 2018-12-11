
var router = express.Router();
var mainService = require('../../application/services/MainService.js')

/* GET home page. */
router.get('/', mainService.helloWorld);

module.exports = router;
