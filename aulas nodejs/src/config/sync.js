const connection=require('./database/connection')

require('../models/UserModel')

require('../models/ProductModel')

require('../models/CategoryModel')

connection.sync({alter:true})