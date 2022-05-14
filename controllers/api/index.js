const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const shareRoutes = require('./share-routes.js');
// const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/share', shareRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;
