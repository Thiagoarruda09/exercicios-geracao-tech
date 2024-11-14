const UserModel=require('../models/UserModel')
const validator = require('validator');


const UserCreateValidation = async (req,res,next)=>{
    try{
      
        

        const {FirstName, Surname, Email, Password}=req.body

        const EmailValid= await UserModel.findOne({where:{Email:Email}})

        if(EmailValid){
          res.send({
            message:'email ja cadastrado'
          })
        }

        if(Password.length <=4){
            return res.status(400).json({
                success:false,
                message:"senha deve conter mais de 4 caracteres"
            })
        }



        if(!FirstName || !Surname || !Email || !Password){
            const message="todos os campos devem ser preenchidos"
           return res.status(400).json({
                success:false,
                message:message
            })
        }

        if (!validator.isEmail(Email)) {
            return res.status(400).json({
                success:false,
                message:'email invalido'
            })
        }


next()
    }catch(error){
        return req.status(400).json({
            success:false,
            message:`Erro na requisição ${error}`
        })

    }
}




module.exports={
    UserCreateValidation,
    
}