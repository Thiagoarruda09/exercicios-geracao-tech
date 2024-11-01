// // importante o modulo express
// const express = require('express')

// // app recebe express
// const app = express()

// // permite que o servidor entenda json no corpo das requisições
// app.use(express.json())

// // criando uma rota para a api
// app.get('/home',  (req, res)=> {
//   res.send('Hello World')
// })
// // criando uma rota para a api
// app.get('/states',  (req, res)=> {
//     res.send({'ceara':10,
//         'bahia':9.8,
//         'parana':7.78,
//         'sao paulo':5.6,
//         'rio de janeiro':3.45,
//     })
//   })
//   app.get('/usuarios',  (req, res)=> {
//     res.send([{'nome':"thiago",
//         "idade":24,
//         "profissao":"desenvolvedor"
//     },
//     {'nome':"cleber",
//         "idade":24,
//         "profissao":"desenvolvedor"
//     },
//     {'nome':"icaro",
//         "idade":25,
//         "profissao":"desenvolvedor"
//     },
//     {'nome':"matheus",
//         "idade":20,
//         "profissao":"desenvolvedor"
//     }],)
//   })
//   app.get('/produtos',  (req, res)=> {
//     res.send([{
//         name: "sapato nike",
//         price: 300,
//         image: "sapato3.png",
//       },
//       {
//         name: "sapato nike2",
//         price: 400,
//         image: "sapato3.png",
//       },
//       {
//         name: "sapato nike3",
//         price: 500,
//         image: "sapato3.png",
//       },
//       {
//         name: "sapato nike4",
//         price: 600,
//         image: "sapato3.png",
//       },
//       {
//         name: "sapato nike5",
//         price: 700,
//         image: "sapato3.png",
//       },
//       {
//         name: "sapato nike6",
//         price: 800,
//         image: "sapato3.png",
//       },
//       {
//         name: "sapato nike7",
//         price: 900,
//         image: "sapato3.png",
//       },
//       {
//         name: "sapato nike8",
//         price: 1000,
//         image: "sapato3.png",
//       }])
//   })
// // subindo o servidor para a porta 3000

// const PORT =3000
// app.listen(PORT, ()=> {console.log(`o servidor está rodando na porta ${PORT}`)})

// function login(email, senha){

//  const UserEmail='thiago.arruda.09@hotmail.com';
//   const UserSenha='thiago123'
//   const token=123456

// if(email===UserEmail && senha===UserSenha){
//   console.log(token)
// }
// else{
//   console.log('email ou senha invalidos')
// }
// }

// function produtos(token){

//     const data=
//       [{
//        nome:'sapato nike1',
//        preço:300
//       },
//       {
//        nome:'sapato nike2',
//        preço:400
//       },
//       {
//        nome:'sapato nike3',
//        preço:500
//       },]

//       if(token==123456){
//         console.log(data)
//       }
//   else{
//     console.log('token invalido')
//   }
// }

// const jwt =require('jsonwebtoken')
// const token =jwt.sign({id:1 , name:'fulano'}, 'asuhaushakdjahd')

// console.log(token)

function login(email, senha) {
  const UserEmail = "thiago.arruda.09@hotmail.com";
  const UserSenha = "thiago123";
  const jwt = require(jsonwebtoken);
  const token = jwt.sign({ id: 1, name: "thiago" }, "sudgsajkcsiuchsck");

  if (email == UserEmail && senha == UserSenha) {
    console.log(token);
  } else {
    console.log("email ou senha invalidos");
  }
}

function produtos(token) {
  const jwtVerify = (tokenUser) => {
    try {
      const decoded = jwt.verify(tokenUser, "sudgsajkcsiuchsck");
      const data = [
        {
          nome: "sapato nike1",
          preço: 300,
        },
        {
          nome: "sapato nike2",
          preço: 400,
        },
        {
          nome: "sapato nike3",
          preço: 500,
        },
      ];
      if (tokenUser == token) {
        console.log(data);
      }
      return decoded;

   
    } catch (error) {
      console.log(`Deu ruim! ${error}`);
    }
  };
}
