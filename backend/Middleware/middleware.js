const express = require('express')
const jwt = require('jsonwebtoken')
const JWTpasskey = require('../config')

function authenticationMiddleware(req,res,next){
    
    const authorization = req.headers.authorization
    if(!authorization || !authorization.startsWith('Bearer')){
        return res.status(403).json({message:"Invalid token"});
    }
    const token = authorization.split(' ')[1]
    try{
        const parsed = jwt.verify(token,JWTpasskey)
        req.body.userId = parsed.userId
    }
    catch(e){
       return res.status(403).json({message:"Invalid user id"})
    }
    next()
}

module.exports = authenticationMiddleware
