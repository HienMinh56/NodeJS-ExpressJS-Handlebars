const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    // Home, search, contact are pages that not need controller so add these to SiteController, site.js   
    app.use('/news', newsRouter);
      
    app.use('/', siteRouter);
}

module.exports = route;