var db = require('./_db');

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');
var dayModels = require('./day');
var Day = dayModels.Day;
var DayRestaurant = dayModels.DayRestaurant;
var DayActivity = dayModels.DayActivity;

// new day associations here;
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Day.belongsTo(Hotel); // places hotelId on Day
Day.belongsToMany(Restaurant, {through: DayRestaurant}); // places restaurantId on Day
Day.belongsToMany(Activity, {through: DayActivity}); // places activityId on Day


module.exports = db;
