const UsersList=async(req,res,next)=>{
    try{
        res.send([{
            nome:'thiago',
            id:1,
            email:'thiago.arruda.09@hotmail.com',
            senha:'thiago123'
        },
        {
            nome:'kleber',
            id:2,
            email:'kleber.klebudo.09@hotmail.com',
            senha:'kleber123'
        },
        {
            nome:'icaro',
            id:3,
            email:'icaro.cababom.09@hotmail.com',
            senha:'icaro123'
        },
        {
            nome:'mateus',
            id:4,
            email:'mateus.sumido.09@hotmail.com',
            senha:'mateus123'
        },])


    }catch(error){
        res.send({
            'success':false,
            'error':`erro na requisicao ${error}`
        })

    }
}

const UsersCreate=async(req,res,next)=>{

    const nome=req.body.nome

    const email=req.body.email
    const senha=req.body.senha


    try{
        res.send({
            'sucess':true,
            'message':'usuario criado com sucesso'
        })

    }catch(error){
        res.send({
            'success':false,
            'error':`erro na requisiçao ${error}`

        })
    }

    console.log(req.body.senha)
}

module.exports={UsersList,UsersCreate}