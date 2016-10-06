var Sequelize = require('sequelize');
var db = require('./_db');


var Day = db.define('day', {
	number: {
		type: Sequelize.INTEGER,
		allowNull: false,
		unique: true
	}
});

var DayRestaurant = db.define('dayrestaurant', {
	role: Sequelize.STRING
});

var DayActivity = db.define('dayactivity', {
	role: Sequelize.STRING
});

module.exports = {Day, DayRestaurant, DayActivity};