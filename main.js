const data = [
  {
    src: 'img/Apple iPhone 14 Pro.jpg',
    categories: 'Phone',
    info: {
      memory: '128Gb',
      display: '6.1", 2556x1179 (19.5:9), 460 ppi, 120 Гц',
    },
  },
  {
    src: 'img/Xiaomi Redmi Note 11.jpg',
    categories: 'Phone',
    info: {
      memory: '6/128Gb',
      display: '6.43", 2400x1080 (20:9), 409 ppi, 90 Гц',
    },
  },
  {
    src: 'img/Google Pixel 6a.jpg',
    categories: 'Phone',
    info: {
      memory: '6/128Gb',
      display: '6.1", 2400x1080 (20:9), 428 ppi',
    },
  },
  {
    src: 'img/Samsung Galaxy M33.jpg',
    categories: 'Phone',
    info: {
      memory: '6/128Gb',
      display: '6.6", 2408x1080 (20:9), 400 ppi, 120 Гц',
    },
  },
  {
    src: 'img/MTB Crossbike Leader 29.jpg',
    categories: 'Bicycle',
    info: {
      manufacturer: 'CrossBike',
      wheel: '29", двойной алюминиевый обод',
    },
  },
  {
    src: 'img/Like.Bike Loon 26.jpg',
    categories: 'Bicycle',
    info: {
      manufacturer: 'Like.Bike',
      wheel: '26", двойной алюминиевый обод',
    },
  },
  {
    src: 'img/Engwe T14.jpg',
    categories: 'Bicycle',
    info: {
      manufacturer: 'Engwe',
      wheel: '14", алюминиевый обод',
    },
  },
  {
    src: 'img/Halmar Harissa B.jpg',
    categories: 'Table',
    info: {
      size: '420х420х410 мм',
    },
  },
  {
    src: 'img/Signal Lucca.jpg',
    categories: 'Table',
    info: {
      size: '920х600х520 мм',
    },
  },
  {
    src: 'img/Столик-трансформер.jpg',
    categories: 'Table',
    info: {
      size: '1200х600х410 мм',
    },
  },
];

const container = document.querySelector('.container');
const viewCategories = document.querySelector('.viewCategories');
const select = document.querySelector('#select');
const showInfo = document.querySelector('.showInfo');
const blockInfo = document.querySelector('.info');

function createMarkupInfo(el) {
  const objInfo = el.info;
  const mainDiv = document.createElement('div');
  for (const key in objInfo) {
    const p = document.createElement('p');
    p.textContent = `${key}: ${objInfo[key]};  `;
    mainDiv.appendChild(p);
  }
  return mainDiv;
}

function showInfoImg(img, el, parent, infoContainer) {
  img.addEventListener('click', () => {
    infoContainer.textContent = createMarkupInfo(el);
  });
  parent.appendChild(img);
  blockInfo.appendChild(infoContainer);
}

select.addEventListener('change', (e) => {
  const target = select.value;
  viewCategories.innerHTML = '';
  showInfo.innerHTML = '';

  data.forEach((el) => {
    if (target === el.categories) {
      const img = document.createElement('img');
      img.src = el.src;

      showInfoImg(img, el, viewCategories, showInfo);
    }
  });
});
