const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/user', userRoutes);
router.use('/posts', postRoutes);
router.use('/dashboard', commentRoutes);

router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;
