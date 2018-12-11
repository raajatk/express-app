
var router = express.Router();
var mainService = require('../../application/services/MainService.js')

/* GET home page. */
router.get('/', mainService.helloWorld);

router.get('/get/users',mainService.getAllUsers);

router.post('/add/user',mainService.addUser);

module.exports = router;
