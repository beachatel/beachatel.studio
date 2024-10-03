// let lat, lon;
 
// // Initialize the map, but don't set the view yet
// var map = L.map('map');

// // Load and display the tile layer from OpenStreetMap
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

// // Optional: Add a marker
// var marker;



// if ("geolocation" in navigator) {
//     console.log("location is available");
//     // Call the getCurrentPosition function on the navigator object
//     navigator.geolocation.getCurrentPosition(position => {
//         lat = position.coords.latitude;
//         lon = position.coords.longitude;

//         // Set the map's view to the user's location
//         map.setView([lat, lon], 13);

//         // Add a marker at the user's location
//         marker = L.marker([lat, lon]).addTo(map)

//     });
// } else {
//     // No location data available error message
//     console.log("location is NOT available");
// }


let lat, lon;

// Initialize the map, but don't set the view yet
var map = L.map('map');

// Load and display the tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Optional: Add a marker
var marker;

if ("geolocation" in navigator) {
    console.log("location is available");
    // Call the getCurrentPosition function on the navigator object
    navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        // Set the map's view to the user's location
        map.setView([lat, lon], 13);

        // Add a marker at the user's location
        marker = L.marker([lat, lon]).addTo(map)

        // Send the location data to the server
        const data = { lat, lon };
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) // Convert to string
        };
        
        const response = await fetch("http://127.0.0.1:5500/api", options); // Send POST request
        const jsonResponse = await response.json(); // Handle server response
        console.log(jsonResponse);
    });
} else {
    // No location data available error message
    console.log("location is NOT available");
}


