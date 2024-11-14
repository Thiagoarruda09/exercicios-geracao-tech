const UserModel = require("../models/UserModel");

const UsersList = async (req, res, next) => {
  try {
    const Users = await UserModel.findAll();
    res.send(Users);
  } catch (error) {
    res.send({
      success: false,
      error: `erro na requisicao ${error}`,
    });
  }
};

const UsersCreate = async (req, res, next) => {
  try {
    const bcrypt=require('bcrypt')

    const FirstName = req.body.FirstName;
    const Surname = req.body.Surname;
    const Email = req.body.Email;
    const Password = req.body.Password;

   
      const saltRound=10

      const hash=await bcrypt.hash(Password, saltRound)
  
      const Users = await UserModel.create({
        FirstName: FirstName,
        Surname: Surname,
        Email: Email,
        Password: hash,
      });
      res.send({
        success: true,
        message: `usuario cadastrado com sucesso ${Users.id - Users.FirstName}`,
        
      })
   


next()
  } catch (error) {
    res.send({
      success: false,
      error: `erro na requisiçao ${error}`,
    });
  }

}
;



const UserUpdate= async(req,res,next)=>{
  try{
    const id=req.params.id
    const idValid= await UserModel.findOne({where:{id:id}})



    if(idValid){
     
      const user=await UserModel.update(req.body,{
        where:{id}
      })
      res.send({
      'sucess':true,
      'message': `Usuario alterado com sucesso" id: ${user.id - user.FirstName}`
      })
    }else{
      res.send({
        'sucess':true,
        'message': "usuario nao encontrado"
      })
    }


  }catch(error){
    res.send({
      'sucess':false,
      'error': `erro na requisição ${error}`
    })
  }
}

const UserDelete=async(req,res,next)=>{


try{
  const id=req.params.id
  const idValid= await UserModel.findOne({where:{id:id}})
  
  if(idValid){
    
  const user = await UserModel.destroy({
    where:{id}
  })
  res.send({
    success:true,
    message:`usuario deletado com sucesso ${user.id - user.FirstName}`
  }) 
}else{
  res.send({
    success:'false',
    message:"usuario nao encontrado"
  })
}



}catch(error){
  res.send({
    success:false,
    error:`erro na requisição ${error}`
  })
}
}
module.exports = { UsersList, UsersCreate, UserUpdate, UserDelete};
