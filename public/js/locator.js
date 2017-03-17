/**
 * Created by charl on 17/03/2017.
 */
var apiKey = "AIzaSyDrDZPrvXxV0Smsm0PRpWBUFSaYwGBJZuM";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geocodeLatLng);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function geocodeLatLng(position) {
    var geocoder = new google.maps.Geocoder;
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    var latlng = new google.maps.LatLng({lat: lat, lng: lng});
    geocoder.geocode({'location': latlng}, function (results, status) {
        if (status === 'OK') {
            if (results[1]) {
                var place = results[0].formatted_address;
                var inputObj = document.getElementById('location');
                if(inputObj) {
                    // Update the value
                    inputObj.value = place;
                }
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}
getLocation();