//setup option tags for hotels
$.get('/api/hotels')
.then(function(hotels) {
	hotels.forEach(function(hotel) {
		var hotelHtml = $('<option></option>').text(hotel.name)
		$('#hotel-choices').append(hotelHtml);
	})
})
.catch(console.error);

//setup option tags for restaurants
$.get('/api/restaurants')
.then(function(restaurants) {
	restaurants.forEach(function(restaurant) {
		var restaurantHtml = $('<option></option>').text(restaurant.name)
		$('#restaurant-choices').append(restaurantHtml);
	})
})
.catch(console.error);

//setup option tags for activities
$.get('/api/activities')
.then(function(activities) {
	activities.forEach(function(activity) {
		var activityHtml = $('<option></option>').text(activity.name)
		$('#activity-choices').append(activityHtml);
	})
})
.catch(console.error);

//places buttons on page for each day in db
$.get('/api/days')
.then(function(days) {
	//sort days by number so buttons show up correctly ordered
	days.sort(function(day1, day2) {
		return day1.number - day2.number;
	});
	days.forEach(function(day) {
		var buttonHtml = $('<button></button').addClass('btn btn-circle day-btn')
		.text(day.number)
		buttonHtml.insertBefore($('#day-add'));
	})
	//highlights first day button as current day
	var firstDay = $('.day-buttons button:first-child');
	firstDay.addClass('current-day');

	//pull up data for day 1 when page is initially loaded
	var dayOneData = days[0];
	renderAttractions(dayOneData)

})
.catch(console.error);

//pulls up data for each day when that btn is clicked
function renderAttractions(day) {
	$.get('/api/hotels')
	.then(function(hotels) {
		var hotelName = hotels.find(function(hotel) {
			return hotel.id === day.hotelId
		}).name
		//render html with hotel name
		var hotelHtml = $('<div class="itinerary-item"> \
			<span class="title">'+ hotelName +'</span>\
            <button class="btn btn-xs btn-danger remove btn-circle">x</button></div>')
		$('ul[data-type=hotel]').append(hotelHtml);
	})
	.catch(console.error);


}

//add hotel to My Hotel & day table as hotelID

//add restaurant to My restaurants & dayrestaurants

//add activity to My activities & dayactivities
