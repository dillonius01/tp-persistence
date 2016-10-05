//setup option tags for hotels
$.get('/api/hotels')
.then(function(hotels) {
	hotels.forEach(function(hotel) {
		var hotelHtml = $('<option></option>').text(hotel.name)
		$('#hotel-choices').append(hotelHtml);
	})
})

//setup option tags for restaurants
$.get('/api/restaurants')
.then(function(restaurants) {
	restaurants.forEach(function(restaurant) {
		var restaurantHtml = $('<option></option>').text(restaurant.name)
		$('#restaurant-choices').append(restaurantHtml);
	})
})

//setup option tags for activities
$.get('/api/activities')
.then(function(activities) {
	activities.forEach(function(activity) {
		var activityHtml = $('<option></option>').text(activity.name)
		$('#activity-choices').append(activityHtml);
	})
})

