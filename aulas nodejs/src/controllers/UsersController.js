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
    });
  } catch (error) {
    res.send({
      success: false,
      error: `erro na requisiçao ${error}`,
    });
  }
};

module.exports = { UsersList, UsersCreate };
