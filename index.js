// Execute the code when the DOM content has been loaded
document.addEventListener("DOMContentLoaded", function () {

    // Fetch data from JSON server
    fetch("http://localhost:3000/strong")
      .then(function (response) {
        return response.json(); // Convert the response to JSON format
      })
      .then(function (data) {
        // Get the 'strong' array from the JSON data
        let strongArray = data;
  
        // Get the <ul> element with id 'strong'
        let strongList = document.getElementById("strong");
  
        // Loop through the 'strong' array and create <li> elements
        for (let i = 0; i < strongArray.length; i++) {
          let listItem = document.createElement("li"); // Create a new <li> element
          listItem.innerHTML = strongArray[i].title; // Set the innerHTML of the <li> to the 'title' property of the object
          listItem.setAttribute("data-id", strongArray[i].id); // Set the 'data-id' attribute of the <li> to the 'id' property of the object
          listItem.setAttribute("data-image", strongArray[i].image); // Set the 'data-image' attribute of the <li> to the 'image' property of the object
          listItem.addEventListener("click", handleClick); // Add a click event listener to the <li> element
          strongList.appendChild(listItem); // Append the <li> element to the <ul> element
        }
  
        // Function to handle click events on the <li> elements
        function handleClick(event) {
          let clickedItem = event.target; // Get the clicked element
          let id = clickedItem.getAttribute("data-id"); // Get the 'data-id' attribute value of the clicked element
  
          // Find the object in the 'strong' array with the matching id
          let selectedObject = strongArray.find(function (obj) {
            return obj.id === id;
          });
  
          // Update the content of the elements with the selected object's data
          document.getElementById("title").textContent = selectedObject.title; // Update the title element
          document.getElementById("bravesong").innerHTML =
            '<a href="' + selectedObject.bravesong + '">Brave Song</a>'; // Update the bravesong element with a link
          document.getElementById("dance").innerHTML =
            '<a href="' + selectedObject.dance + '">Dance</a>'; // Update the dance element with a link
          document.getElementById("todo").textContent = selectedObject.todo; // Update the todo element
          document.getElementById("content").textContent = selectedObject.content; // Update the content element
          document.getElementById("description").textContent =
            selectedObject.description; // Update the description element
  
          // Update the image
          let image = document.getElementById("image");
          image.src = selectedObject.image; // Update the src attribute of the image element with the 'image' property of the object
          image.alt = selectedObject.title; // Update the alt attribute of the image element with the 'title' property of the object
        }
      })
      .catch(function (error) {
        console.log(error); // Log any errors that occur during the fetch request
      });
  });
  