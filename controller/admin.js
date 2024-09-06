let ADMIN = require('../model/admin')
let bcrypt = require('bcrypt');

exports.adminCreate = async function(req, res, next) {
    try {
        req.body.Password = await bcrypt.hash(req.body.Password)
        let admin = await ADMIN.create(req.body)
        res.status(201).json({
            status : 'success',
            message : 'Admin created successfully',
            admin
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}

exports.adminLogin = async function (req, res, next) {
    try {
        let adminCheck = await ADMIN.findOne({email : req.body.email})
        if(!adminCheck) {
            throw new Error("Admin Not Found")
        }
        let passwordV = await bcrypt.compare(req.body.Password,adminCheck.Password)
        if(!passwordV) {
            throw new Error("Password invalid")
        }
        res.status(201).json({
            status : 'success',
            message : 'Admin login successfully',
            adminCheck
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
        let AdminAll = await ADMIN.find() 
        res.status(201).json({
            status : 'success',
            message : 'All data successfully',
            AdminAll
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
        let SingleAdmin = await ADMIN.findById(req.params.id);
        res.status(201).json({
            status : 'success',
            message : 'Single data successfully',
            SingleAdmin
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}

exports.AdminUpdate = async function(req, res, next) {
    try {
        let adminUpdate = await ADMIN.findByIdAndUpdate(req.params.id, req.body,{new : true})
        res.status(201).json({
            status : 'success',
            message : 'Admin update successfully',
            adminUpdate
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
        await ADMIN.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : 'Admin update successfully',
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
            
        })
    }
}