const Order = require('../models/orderModel');
const mongoose = require('mongoose')


//get orders
const getOrders = async (req,res) => {
    const orders = await Order.find({}).sort({})

    res.status(200).json(orders)
}

//create new order
const createOrders = async (req,res) => {
    const {username, item,weight,destination} = req.body

    //add to database
    try {
        const order =  await Order.create({username,item,weight,destination})
        res.status(200).json(order)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

//update order
const updateOrder = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Workout'})
    }
    const order = await Order.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if (!order) {
        return res.status(404).json({error: 'No such order'})
    }
    res.status(200).json(order)
}

//delete order
const deleteOrders = async(req,res) => {
    const {  id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Order'})
    }

    const order = await Order.findOneAndDelete({_id: id},{
        ...req.body
    })

    if (!order) {
        return res.status(400).json({error: 'No such order'})
    }
    res.status(200).json(order)
}

module.exports = {getOrders, createOrders,deleteOrders,updateOrder}