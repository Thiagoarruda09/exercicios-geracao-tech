const ProductModel=require('../models/ProductModel')
const ProductList=async(req,res,next)=>{
    try{
        const Products= await ProductModel.findAll();
        res.send(Products)

    }catch(error){
        res.send({
            'success':false,
            'error':`erro na requisicao ${error}`

        })
        
    }

}
const ProductRegister=async(req,res,next)=>{
    try{
      const nome=req.body.nome
      const preco=req.body.preco
      const marca=req.body.marca 
      const estoque=req.body.estoque

      const Product=await ProductModel.create({
        nome:nome,
        preco:preco,
        marca:marca,
        estoque:estoque
      })

      res.send({
        'success':true,
        'message':`Produto cadastrado ${Product.nome}`
      })
      
      
    }catch(error){
        res.send({
            'success':false,
            'error':`erro na requisicao ${error}`
        })
    }
}

module.exports={ProductList, ProductRegister}






// res.send([
    //     {
    //       name: "sapato nike",
    //       price: 300,
    //       image: "sapato3.png",
    //     },
    //     {
    //       name: "sapato nike2",
    //       price: 400,
    //       image: "sapato3.png",
    //     },
    //     {
    //       name: "sapato nike3",
    //       price: 500,
    //       image: "sapato3.png",
    //     },
    //     {
    //       name: "sapato nike4",
    //       price: 600,
    //       image: "sapato3.png",
    //     },
    //     {
    //       name: "sapato nike5",
    //       price: 700,
    //       image: "sapato3.png",
    //     },
    //     {
    //       name: "sapato nike6",
    //       price: 800,
    //       image: "sapato3.png",
    //     },
    //     {
    //       name: "sapato nike7",
    //       price: 900,
    //       image: "sapato3.png",
    //     },
    //     {
    //       name: "sapato nike8",
    //       price: 1000,
    //       image: "sapato3.png",
    //     },
    //   ]);
    // });