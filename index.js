document.addEventListener("DOMContentLoaded", function () {
   // Code to be executed when the DOM is fully loaded 
   fetch("http://localhost:3000/strong")
    .then(function (response) {// Extract the JSON data from the response
     return response.json();
   })
   .then(function (data) {
    // Handle the retrieved JSON data
     // Get the 'strong' array from the JSON data
     let strongArray = data;

     // Get the <ul> element with id 'strong'
      let strongList = document.getElementById("strong");
 
   })