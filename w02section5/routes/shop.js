const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, '../', 'w02section5', 'views', 'shop.html'));
});

module.exports = router;