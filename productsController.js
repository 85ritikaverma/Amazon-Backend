const productModel = require('../models/productsModel.js');

const getAllProducts = async(req,res) => {
    //........(1).......
    // const q=req.query;
    // console.log(q);
    // const data =await productModel.find(q);
    // let query=productModel.find();
    // const products=await query;
    // console.log(query);
    // console.log(req.url);
    // console.log(data);
    //........till this........

    //.....(2) yha se........
    const {sort,...q}=req.query;
    console.log(q,sort);
    let query=await productModel.find(q);
    query=query.sort();
    const products = await query;
    console.log(query);
    //......yha tak.........
    // products=products.find(q);

    // (3)create page no bo our data by yourself
    //res.json is common for(1)(2)(3)
    res.json({
        status:'success',
        results:0,
        data:{
            // products: data,
            products,
        }
    })
}


const addProduct = async (req,res)=>{
    try{
    const {_id,...reqData} = req.body;
    const data = await productModel.create(reqData);
    console.log(data);
    res.json({
        status:'false',
        results:1,
        data:{
            products:data,
        }
    });
}
catch(err){
    res.status(403);
    console.log(err);
    res.json({
        status:'fail',
        message:JSON.stringify(err),
    });
}
}

const replaceProduct = async (req,res)=>{
    try{
    const reqId = req.params.id;
    const data = {...req.body,_id: reqId};
    const result = await productModel.findOneAndReplace({_id:reqid},data);
     res.json({
        status:'success',
        data:{
            products:result,
        }
     });
}
catch(err){
    res.status(500);
    res.json({
        status:'fail',
        message:JSON.stringify(err),
    })
}
}

module.exports={
    getAllProducts,
    addProduct,
    replaceProduct,
}


















//...e it will hold all other value which is discarded
//...rest