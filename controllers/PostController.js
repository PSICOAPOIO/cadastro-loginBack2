const Post = require('../models/Post')
const User = require('../models/User')

module.exports = class PostController{
    static async showPost(req,res){
        res.render('post/post')
    }
}
