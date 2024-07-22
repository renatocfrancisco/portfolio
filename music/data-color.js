// Select all img elements with the data-color attribute
const imgs = document.querySelectorAll("img[data-color]");

// Loop through each img element
imgs.forEach((img) => {
  // Get the value of the data-color attribute
  const color = img.getAttribute("data-color");

  // Add event listener for hover effect
  img.addEventListener("mouseover", function () {
    img.style.borderColor = color;
  });

  // Reset border color on mouseout (optional)
  img.addEventListener("mouseout", function () {
    img.style.borderColor = ""; // Reset to default or any other desired behavior
  });
});
