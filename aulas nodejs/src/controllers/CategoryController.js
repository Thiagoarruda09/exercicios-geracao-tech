const CategoryModel=require('../models/CategoryModel')
const CategoryList=async(req,res,next)=>{

    const id=req.params.id
    const idValid= await CategoryModel.findOne({where:{id:id}})
    
    try{
        const Categorys= await CategoryModel.findAll();
        res.send(Categorys)

    }catch(error){
        res.send({
            'success':false,
            'error':`erro na requisicao ${error}`

        })
        
    }

}
const CategoryRegister=async(req,res,next)=>{
    try{
      const name=req.body.name
      const slug=req.body.slug
      const use_in_menu=req.body.use_in_menu 
   

      const Category=await CategoryModel.create({
        name:name,
        slug:slug,
        use_in_menu:use_in_menu
       
      })

      res.send({
        'success':true,
        'message':`Categoria cadastrado ${Category.name}`
      })
      
      
    }catch(error){
        res.send({
            'success':false,
            'error':`erro na requisicao ${error}`
        })
    }
}
const CategoryUpdate= async(req,res,next)=>{
    try{
      const id=req.params.id
      const idValid= await CategoryModel.findOne({where:{id:id}})
  
  
  
      if(idValid){
       
        const Category=await CategoryModel.update(req.body,{
          where:{id}
        })
        res.send({
        'sucess':true,
        'message': `categoria alterada com sucesso" id: ${Category.id - Category.name}`
        })
      }else{
        res.send({
          'sucess':true,
          'message': "categoria nao encontrada"
        })
      }
  
  
    }catch(error){
      res.send({
        'sucess':false,
        'error': `erro na requisição ${error}`
      })
    }
  }

  const CategoryDelete=async(req,res,next)=>{


    try{
      const id=req.params.id
      const idValid= await CategoryModel.findOne({where:{id:id}})
      
      if(idValid){
        
      const Category = await CategoryModel.destroy({
        where:{id}
      })
      res.send({
        success:true,
        message:`Categoria deletado com sucesso ${Category.id - Category.nome}`
      }) 
    }else{
      res.send({
        success:'false',
        message:"categoria nao encontrada"
      })
    }
    
    
    
    }catch(error){
      res.send({
        success:false,
        error:`erro na requisição ${error}`
      })
    }
    }

module.exports={CategoryList, CategoryRegister,CategoryDelete,CategoryUpdate}