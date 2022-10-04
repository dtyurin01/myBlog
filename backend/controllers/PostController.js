import PostModel from "../models/Post.js"

export const create = async (req,res) =>{
    try {
        const doc = new PostModel({
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            text: req.body.text,
            user: req.userId
            
        })   
        console.log(doc);
        const post = await doc.save()     
        res.json(post) 
    } catch (error) {
        res.status(500).json({
            message:"Error Post"
        })
    }
}

export const getAll = async (req,res) =>{
    try {
        const posts = await PostModel.find().populate('user').exec()
        res.json(posts)
    } catch (error) {
        res.status(500).json({
            message:"Error Post"
        })
    }
}
export const getOne = async (req,res) =>{
    try {
        const postId = req.params.id 
        PostModel.findOneAndUpdate({
            _id: postId,
        }, {
            $inc: {viewsCount: 1}
        },{
            returnDocument: 'after'
        },
            (err, doc) =>{
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        message: "Error id"
                    })
                }
                if(!doc){
                    return res.status(404).json({
                        message: "Artikle not found"
                    })
                }
                res.json(doc)
            }
        )
        const posts = await PostModel.find().populate('user').exec()
        res.json(posts)
    } catch (error) {
        res.status(500).json({
            message:"Error Post"
        })
    }
}
export const remove = async (req,res) =>{
    try {
        const postId = req.params.id 
        PostModel.findOneAndDelete({_id:postId}, (err,doc)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    message: "Error id"
                })
            }
            if(!doc){
                return res.status(404).json({
                    message: "Artikle not found"
                })  
            }
            res.json({success:true})
        })
    } catch (error) {
        res.status(500).json({
            message:"Error Post"
        })
    }
}
export const update = async (req, res)=>{
    try {
        const postId = req.params.id 
        await PostModel.updateOne({
            _id: postId
        },{
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            text: req.body.text,
            user: req.userId
            
        })
        res.json({
            success:true 
        })
    } catch (error) {
        res.status(500).json({
            message:"Error to update"
        })
    }
}