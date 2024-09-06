var USER = require('../model/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.Secure =  async function(req, res, next) {
    try {
        let token = req.headers.authorization
        if(!token){
          throw new Error('please attach token..!')
        }
        var decoded = jwt.verify(token, 'E-COMMERCE')
        // console.log(decoded);
        req.userID = decoded.id  
        let userCheck = await USER.findById(decoded.id)
        if(!userCheck){
          throw new Error('User Not token')
        }
        next()
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  };

exports.UserCreate = async function(req, res, next) {
    try {
        req.body.Password = await bcrypt.hash(req.body.Password,10)
        let User = await USER.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            User
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.userLogin = async function (req, res, next) {
    try {
        let userCheck = await USER.findOne({Email : req.body.Email})
        if(!userCheck) {
            throw new Error("User Not Found")
        }
        let passwordV = await bcrypt.compare(req.body.Password,userCheck.Password)
        if(!passwordV){
            throw new Error("Password invalid")
        }
        var token = jwt.sign({ id: userCheck._id}, 'E-COMMERCE');
        res.status(201).json({
            status : 'success',
            message : 'User login successfully',
            userCheck,  
            token
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}
exports.AllData = async function(req, res, next) {
    try {
        let UserAll = await USER.find() 
        res.status(201).json({
            status : 'success',
            message : 'All data successfully',
            UserAll
        })  
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}
exports.SingleData = async function(req, res, next) {
    try {
        let SingleUser = await USER.findById(req.params.id);
        res.status(201).json({
            status : 'success',
            message : 'Single data successfully',
            SingleUser
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}

exports.UserUpdate = async function(req, res, next) {
    try {
        let UserUpdate = await USER.findByIdAndUpdate(req.params.id, req.body,{new : true})
        res.status(201).json({
            status : 'success',
            message : 'User update successfully',
            UserUpdate
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}

exports.delete = async function(req, res, next) {
    try {
        await USER.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : 'User update successfully',
            
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}

