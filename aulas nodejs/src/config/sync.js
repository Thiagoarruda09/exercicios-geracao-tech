const connection=require('./database/connection')

require('../models/UserModel')

connection.sync({alter:true})