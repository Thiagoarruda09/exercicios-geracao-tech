const UserModel=require('../models/UserModel')
const Login = async (req, res, next) => {
  try {
  
    const email = req.body.email;
    const senha = req.body.senha;

   
    const User=await UserModel.findOne({
      where:{email}
    })
    const bcrypt= require('bcrypt')
    const userPassword=User ? User.Password:''
    const hastValid= await bcrypt.compare(senha, userPassword)

 
    if (hastValid) {
      const jwt = require("jsonwebtoken");
      const token = jwt.sign({ id: 1, nome: "thiago" }, "hsdkjadnnosaidhh");

      res.send({
        sucess: true,
        token: token,
        message: "login efetuado com sucesso",
      });
    } else {
      res.send({
        sucess: true,
        token: "",
        message: "login invalido",
      });
    }
  } catch (error) {
    res.send({
      sucess: false,
      token: "",
      error: `erro na requisição ${error}`,
    });
  }
}

module.exports={Login}
