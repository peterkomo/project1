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
 // Loop through the 'strong' array and create <li> elements
for (let i = 0; i < strongArray.length; i++) 
{
    let listItem = document.createElement("li"); // Create a new <li> element
  // Set the innerHTML of the <li> element to the 'title' property of the current array item
  listItem.innerHTML = strongArray[i].title;

  // Set the 'data-id' attribute of the <li> element to the 'id' property of the current array item
  listItem.setAttribute("data-id", strongArray[i].id);

  // Set the 'data-image' attribute of the <li> element to the 'image' property of the current array item
  listItem.setAttribute("data-image", strongArray[i].image);

   })