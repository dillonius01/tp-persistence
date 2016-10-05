var router = require('express').Router();
var Sequelize = require('sequelize');
var db = require('../../models');
var Days = db.model('day');

module.exports = router;


// get list of all days
router.get('/', function(req, res, next) {
	Days.findAll()
	.then(function(days) {
		res.send(days)
	})
	.catch(next)
});

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
		number: num
	})
	.then(function(newDay) {
		res.send(newDay)
	})
	.catch(next)
});



router.put('/', function(req, res, next) {
	//
});



router.delete('/:id', function(req, res, next) {
	Days.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(function(rowDeleted) {
		if (rowDeleted.length === 1) {
			res.send('Successfully removed day')
		}
	})
	.catch(next)
});
