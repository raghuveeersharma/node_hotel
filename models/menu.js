const mongoose=require ("mongoose");

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    num_sale:{
        type:Number,
        required:true
    }
});
const menu = mongoose.model("Menu",menuSchema);
module.exports = menu;