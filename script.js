fetch('https://www.boredapi.com/api/activity/')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        document.getElementById("activity").innerHTML = JSON.stringify(myJson.activity);
    });
