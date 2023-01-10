const profileModel = require("../models/profileModel");
var jwt = require('jsonwebtoken');

exports.createProfile = (req, res) => {
    let reqBody = req.body;
    profileModel.create(reqBody, (error, data) => {
        if (error) {
            res.status(400).json({ status: "failed", data: error })
        } else {
            res.status(200).json({ status: "success", data: data })
        };
        
    })
};
exports.userLogin= (req, res)=> {
    let UserName = req.body['UserName'];
    let Password = req.body['Password'];
    
    profileModel.find({ UserName: UserName, Password: Password }, (error, data) => {
        if (error) {
          res.status(400).json({ status: "failed", data: error })  
        } else {
            if (data.length > 0) {
                
                let Payload = { exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60), data: data[0] };
                let token = jwt.sign(Payload, 'MyKey908213087');


            res.status(200).json({ status: "Authorized", token:token ,data: data[0] })
        } else {
            res.status(401).json({ status: "Unauthorized" })
        }
        }
    })
    }
exports.userProfile= (req, res)=> {
    let UserName = req.headers['username'];
    
    
    profileModel.find({ UserName: UserName }, (error, data) => {
        if (error) {
            res.status(400).json({ status: "failed", data: error })
        } else {
            res.status(200).json({ status: "success", data: data })
        }
    })
    }
exports.updateProfile= (req, res)=> {
    let UserName = req.headers['username'];
    let reqBody = req.body;
    res.status(200).json(reqBody);

    profileModel.updateOne({ UserName: UserName }, { $set: reqBody }, {upsert:true}, (error, data) => {
        if (error) {
            res.status(400).json({ status: "failed", data: error })
        } else {
            res.status(200).json({ status: "success", data: data })
        } 
    })

    }


