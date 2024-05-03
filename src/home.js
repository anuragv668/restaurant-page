import Image from "./restaurant.jpg";

const homeContainer = document.createElement('div');
homeContainer.classList.add('homecontainer');

const homeHead = document.createElement('div');
homeHead.textContent = "Restaurant";
homeHead.classList.add('home-head');
homeContainer.appendChild(homeHead);

const homeImage = document.createElement('img');
homeImage.src = Image;
homeImage.classList.add('home-image');
homeContainer.appendChild(homeImage);

const homeDesc = document.createElement('div');
homeDesc.textContent = "Step into our restaurant, where every dish tells a story of passion and flavor. From the moment you walk through the door, you're greeted with the inviting aroma of freshly prepared ingredients and the warm ambiance of our cozy dining space. Our menu, crafted with care and creativity, offers a culinary journey through both classic favorites and innovative twists on traditional fare. Each plate is a masterpiece, artfully presented and bursting with vibrant colors and bold flavors that delight the senses.";
homeDesc.classList.add('home-desc');
homeContainer.appendChild(homeDesc);

export default homeContainer;
