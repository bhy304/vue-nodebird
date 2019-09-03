module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, // createdAt, updatedAt 자동생성
    }, {
        charset: 'utf8mb4', // utf8mb4 : 이모티콘까지 허용
        collate: 'utf8mb4_general_ci'
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // UserId
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
        db.Post.belongsTo(db.Post, { as: 'Retweet' }); // RetweetId
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    };
    return Post;
};