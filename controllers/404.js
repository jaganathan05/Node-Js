const path = require('path');
const rootDir = require('../helpers/path');

exports.get404page = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
};