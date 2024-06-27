const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"]
const chosenImage = images[Math.floor(Math.random() * images.length)]
const bgContainer = document.getElementById("backgroundContainer");
const bgImage = document.createElement("img");
bgImage.id = 'background';
bgImage.src = `img/${chosenImage}`;
bgContainer.appendChild(bgImage);

