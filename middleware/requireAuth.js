const jwt = require('jsonwebtoken');
const User = require('../models/user')

const requireAuth = async(req,res, next) => {
    
    //get authorization header and verify if user is authenticated
   const { authorization } = req.headers

   if (!authorization) {
    res.status(401).json({error: 'Authorization token required'})
   }

   //get token from authorization header by splitting bearer token 
   const token = authorization.split(' ')[1]

   //verify token with jwt
   try {
   const { _id } = jwt.verify(token, process.env.SECRET)

   //use _id in payload to find user
   req.user = await User.findOne({ _id }).select('_id')
   next()

   } catch (error) {
    console.log(error);
    res.status(401).json({error: 'Request is not authorized'})
   }

}

module.exports = requireAuth