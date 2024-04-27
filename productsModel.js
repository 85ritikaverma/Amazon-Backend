const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    // title:String,        
    // we can use 2nd method also in next line
    title: {
        type: String,
        unique: true,
        required: true,
    },
    // price:Number,     
    //2nd method of price in next line
    price: {
        type: Number,
        required: true,
    },
    info: {
        category: String,
        brand: String,
        ratingCount: Number,
        ratingValue: Number,
        stock: Number,
        specificOffers: [
            {
                title: String,
                description: String,
            }
        ],
        amazonServices: [
            {
                title: String,
                description: String, 
            }
        ]
    },
    description: {
        type: String,
    },
    images: [String],
    //images ka ek array h
    creatededAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date,
    }
    
})


const productModel = mongoose.model('products', productSchema);

// const testProduct=new productModel({
//     title:'Titan Watch',               we do it for testing it is done or not
//     price:2000,
// });
// testProduct.save().then((res)=>{
//     console.log(res)
// });                           till this line
module.exports = productModel;