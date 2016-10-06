var router = require('express').Router();
var Sequelize = require('sequelize');
var db = require('../../models');
var Days = db.model('day');
var DayActivity = db.model('dayactivity');
var DayRestaurant = db.model('dayrestaurant');

module.exports = router;


// get list of all days
router.get('/', function(req, res, next) {
	Days.findAll()
	.then(function(days) {
		res.send(days)
	})
	.catch(next)
});

// get day-activity table
router.get('/activities', function(req, res, next) {
	DayActivity.findAll()
	.then(function(dayactivities) {
		res.send(dayactivities)
	})
	.catch(next)
})

// get day-restaurant table
router.get('/restaurants', function(req, res, next) {
	DayRestaurant.findAll()
	.then(function(dayrestaurants) {
		res.send(dayrestaurants)
	})
	.catch(next)
})

router.get('/:id', function(req, res, next) {
	Days.findById(req.params.id)
	.then(function(day) {
		res.send(day)
	})
	.catch(next)
});

router.post('/', function(req, res, next) {
	// use jquery to submit right number in req.body.num
	Days.create({
		number: req.body.num
	})
	.then(function(newDay) {
		res.send(newDay)
	})
	.catch(next)
});



router.put('/', function(req, res, next) {
	//
});



router.delete('/:num', function(req, res, next) {
	var numToDelete = req.params.num
	Days.destroy({
		where: {
			number: numToDelete
		}
	})
	.then(function(numOfDeletedRows) {
		res.send(numToDelete);
	})
	.catch(next)
});
