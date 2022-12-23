const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const type2Routes = require('./type2-routes.js');

router.use('/', homeRoutes);
router.use('/type2', type2Routes);
router.use('/api', apiRoutes);

module.exports = router;