// const { response } = require('express')
let BRAND = require('../model/brand')

exports.BrandCreate = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let BrandCreate = await BRAND.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'Brand Created Successfully',
            BrandCreate
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.BrandAll = async function(req, res, next) {
    try {
        let BrandAll = await BRAND.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status: 'success',
            message: 'Brand All Successfully',
            BrandAll
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.BrandSingle = async function(req, res, next) {
    try {
        let SingleBrand = await BRAND.findById(req.params.id)
        res.status(201).json({
            status: 'success',
            message: 'Brand Single Successfully',
            SingleBrand
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.BrandUpdate = async function(req, res, next) {
    try {
        let BrandUpdate = await BRAND.findByIdAndUpdate(req.params.id,req.body,{new : true})
        res.status(201).json({
            status: 'success',
            message: 'Brand Update Successfully',
            BrandUpdate
        })
    } catch (error) {
        res.status(201).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.BrandDelete = async function(req, res, next) {
    try {
        let DeleteBrand = await BRAND.findByIdAndUpdate(req.params.id)
        res.status(201).json({
            status: 'success',
            message: 'Brand Delete Successfully',
            DeleteBrand
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}