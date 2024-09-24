const mongoose = require("mongoose")
const Database = ()=>{
   try {
      mongoose.connect(process.env.MONGODB_URL)
    console.log("Mongoose database connected Successfully ...!!!!🥳🥳🥳");
    
   } catch (error) {
     console.error("Mongoose connection Failed....!!!!😥😥")
   }
}
module.exports=Database