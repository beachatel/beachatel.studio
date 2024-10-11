const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");
myHeaders.append("X-Application-Id", "{{5036f84f}}");
myHeaders.append("X-Api-Key", "{{45a4de942f1b32a4be715b415c4e3bcf}}");

const raw = JSON.stringify({
  "departure_searches": [
    {
      "id": "public transport from Trafalgar Square",
      "coords": {
        "lat": 51.507609,
        "lng": -0.128315
      },
      "transportation": {
        "type": "public_transport"
      },
      "departure_time": "{{departure_time}}",
      "travel_time": 900
    }
  ],
  "arrival_searches": [
    {
      "id": "public transport to Trafalgar Square",
      "coords": {
        "lat": 51.507609,
        "lng": -0.128315
      },
      "transportation": {
        "type": "public_transport"
      },
      "arrival_time": "{{arrival_time}}",
      "travel_time": 900,
      "range": {
        "enabled": true,
        "width": 3600
      }
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.traveltimeapp.com/v4/time-map", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

//   push to git 