const express = require('express');

const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /posts?offset=10&limit=10
    try {
        let where = {};
        if (parseInt(req.query.lastId, 10)) {
            where = {
                id: {
                    [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10), 
                }
            }
        }
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.Image,
            }, {
                model: db.User,
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: db.Post,
                as: 'Retweet',
                include: [{
                    model: db.User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: db.Image,
                }],
            }],
            order: [['createdAt', 'DESC']],
            limit: parseInt(req.query.limit, 10) || 10,
        }); 
        console.log(posts.length);
        res.json(posts);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;