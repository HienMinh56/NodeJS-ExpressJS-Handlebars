var express = require('express');
var router = express.Router();

const siteController = require('../app/controllers/SiteController');

//SiteController index  (read from top to bottom so let the default go bottom)
//đọc từ trên xuống để lấy para nên để nó xét slug trước
router.use('/:slug', siteController.search);

router.use('/', siteController.index);


module.exports = router;