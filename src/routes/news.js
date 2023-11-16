var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');

//NewsController index  (read from top to bottom so let the default go bottom)
//đọc từ trên xuống để lấy para nên để nó xét slug trước
router.use('/:slug', newsController.show);

router.use('/', newsController.index);


module.exports = router;