const Blog_model = require("../models/model")

const Blog_controller = async (req,res)=>{
try {
     let Blog_user = await Blog_model.create(req.body)
     res.json({
        Blog_user,
        message:" Blog user created....... "
     })

} catch (error) {
    res.json({
        Error:
        error.message
    })
    console.log(`${error.message}`);
    
}
}
module.exports={Blog_controller}