const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext); 
            done(null, basename + Date.now() + ext);
        },
    }),
    limit: { fileSize: 20 * 1024 * 1024 }, // 20MB로 파일 크기 제한
});

router.post('/', isLoggedIn, async (req, res, next) => {
    try {
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        const newPost = await db.Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({
                where: { name: tag.slice(1).toLowerCase() },
            })));
            await newPost.addHashtags(result.map(r => r[0]));
        }
        const fullPost = await db.Post.findOne({
            where: { id: newPost.id },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }],
        });
        return res.json(fullPost);
    } catch (err) {
        console.error(err);
        next(err);
    }

});

router.post('/images', isLoggedIn, upload.array('image'), (req, res) => {
    console.log(req.files);
    res.json(req.files.map(v => v.filename));
});

module.exports = router;