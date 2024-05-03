const aboutContainer = document.createElement('div');
aboutContainer.classList.add('aboutcontainer');

const aboutHead = document.createElement('div');
aboutHead.textContent = 'About';
aboutHead.classList.add('about-head');
aboutContainer.appendChild(aboutHead);

const aboutBody = document.createElement('div');
aboutBody.textContent = "Nestled in the heart of the bustling city, our restaurant stands as a beacon of culinary delight and hospitality. With a rich tapestry of flavors and a warm ambiance, we invite you to embark on a gastronomic journey unlike any other. Our story is one of passion, creativity, and a relentless pursuit of excellence. From the moment you step through our doors, you are enveloped in an atmosphere of warmth and hospitality. Our team of talented chefs, sommeliers, and servers work tirelessly to ensure that every aspect of your dining experience is nothing short of extraordinary. Drawing inspiration from local ingredients and global culinary traditions, our menu is a celebration of diversity and innovation. Whether you're craving a classic comfort dish or eager to explore bold new flavors, we have something to tantalize every palate. But it's not just about the food—it's about the memories we create, the connections we forge, and the stories we share around the table. At our restaurant, we believe that every meal is an opportunity to create something truly magical, and we can't wait to welcome you into our family.";
aboutBody.classList.add('about-desc');
aboutContainer.appendChild(aboutBody);

export default aboutContainer;
