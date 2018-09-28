const express   = require('express');
const router    = express.Router();
const { allTeachers, singleTeacher, addTeacher, updateTeacher, deleteTeacher } = require ('../controllers/teachers-controller')
// import rides controller
// router.get('/', function(req, res) {
//     res.send({ message: 'index route RIDES'});
// });

// Get      all rides
router.get( '/', allTeachers)

// Get      a ride by id
router.get('/:userID',  singleTeacher)

// Create   a ride
router.post('/', addTeacher)

// Update   a ride by id
router.put('/:userID', updateTeacher)

// Delete   a ride by id
router.delete('/:userID', deleteTeacher)

// Get      all rides associated with a user id
// router.get('/:userID', userRides) //need to use a filter to find all rides associated with the userID number

module.exports = router