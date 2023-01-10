const express = require('express');
const profileController=require('../controllers/profileController')
const authVerify = require('../middleware/authVerify');
const router = express.Router();


router.post('/createUser',profileController.createProfile)
router.post('/userLogin',profileController.userLogin)
router.get('/userProfile',authVerify,profileController.userProfile)
router.post('/updateProfile',authVerify,profileController.updateProfile)



module.exports = router;