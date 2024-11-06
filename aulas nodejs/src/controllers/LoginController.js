const Login = async (req, res, next) => {
  try {
    console.log(req.body);
    const email = req.body.email;
    const senha = req.body.senha;

    const UserEmail = "thiago.arruda.09@hotmail.com";
    const UserSenha = "thiago123";

    if (email == UserEmail && senha == UserSenha) {
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
