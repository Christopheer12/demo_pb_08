const {users} = require('../data/data')
const authorizer =(req,res,next)=>{
    const{id}= req.query
    const user = users.find(user => user.id===+id)
    if(user){
        req.user = user;
        next()
    }else{
        res.status(401).send('No autorizado')
    }
}

module.exports = authorizer