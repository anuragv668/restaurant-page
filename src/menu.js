import burger from './images/burger.png';
import pizza from './images/pizza.png';
import coke from './images/coke.png';
import fries from './images/fries.png';

const menuContainer = document.createElement('div');
menuContainer.classList.add('menucontainer');

const menuHead = document.createElement('div');
menuHead.textContent = 'Menu';
menuHead.classList.add('menuhead');
menuContainer.appendChild(menuHead);

const images = [burger, pizza, coke, fries];
const items = ['Burger', 'Pizza', 'Coke', 'fries'];
const prices = [8, 10, 5, 8];

for (let i = 0; i < images.length; i++) {
  const foodContainer = document.createElement('div');
  foodContainer.classList.add('foodcontainer');

  const img = document.createElement('img');
  img.src = images[i];
  img.classList.add('menuimage');
  foodContainer.appendChild(img);

  const item = document.createElement('div');
  item.textContent = items[i];
  item.classList.add('menuprice');
  foodContainer.appendChild(item);

  const price = document.createElement('div');
  price.textContent = `$${prices[i]}`;
  price.classList.add('menuprice');
  foodContainer.appendChild(price);

  menuContainer.appendChild(foodContainer);
}

export default menuContainer;
