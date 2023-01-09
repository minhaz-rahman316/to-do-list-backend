const express = require('express');
const profileController=require('../controllers/profileController')
const router = express.Router();


router.post('/createUser',profileController.createProfile)
router.post('/userLogin',profileController.userLogin)



module.exports = router;