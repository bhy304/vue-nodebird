const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

// 회원가입
router.post('/', isNotLoggedIn, async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 12); // pw 암호화
        const exUser = await db.User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) { // 이미 회원가입되어있다면?
            return res.status(403).json({
                errorCode: 1,
                message: '이미 회원가입이 되어있습니다.',
            });
        }
        await db.User.create({
            email: req.body.email,
            password: hash,
            nickname: req.body.nickname,
        }); // HTTP STATUS CODE
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            if (info) {
                return res.status(401).send(info.reason);
            }
            return req.login(user, async (err) => { // 세션에 사용자 정보 저장(serializeUser 이용)
                if (err) {
                    console.error(err);
                    return next(err);
                }
                return res.json(user); // 프론트로 사용자정보 넘겨준다.
            });
        })(req, res, next);
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

// 로그인
router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (err) => { // 세션에 사용자 정보 저장(serializeUser 이용)
            if (err) {
                console.error(err);
                return next(err);
            }
            return res.json(user); // 프론트로 사용자정보 넘겨준다.
        });
    })(req, res, next);

});

// 로그아웃
router.post('/logout', isLoggedIn, (req, res) => {
    if (req.isAuthenticated()) {
        req.logout();
        req.session.destroy();
        return res.status(200).send('로그아웃되었습니다.');
    }
});

module.exports = router;