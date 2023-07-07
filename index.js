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

  // Add a click event listener to the <li> element, calling the 'handleClick' function
  listItem.addEventListener("click", handleClick);

   // Append the <li> element as a child to the 'strongList' element
   strongList.appendChild(listItem);
}
function handleClick(event)//Function to handle click events on the <li> elements
let clickedItem = event.target;// Get the element that was clicked
let id = clickedItem.getAttribute("data-id"); // Get the value of the 'data-id' attribute
  
// Find the object in the 'strong' array with the matching id
let selectedObject = strongArray.find(function (obj) {
    return obj.id === id;
  });
  // Update the content of the elements with the selected object's data
document.getElementById("title").textContent = selectedObject.title;
// Update the 'textContent' of the element with id 'title' with the 'title' property of the selected object

document.getElementById("bravesong").innerHTML =
  '<a href="' + selectedObject.bravesong + '">Brave Song</a>';
// Update the 'innerHTML' of the element with id 'bravesong' with an anchor tag containing the 'bravesong' property of the selected object as the href attribute

document.getElementById("dance").innerHTML =
  '<a href="' + selectedObject.dance + '">Dance</a>';
// Update the 'innerHTML' of the element with id 'dance' with an anchor tag containing the 'dance' property of the selected object as the href attribute


})
