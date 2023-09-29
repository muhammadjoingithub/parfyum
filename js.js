const data = [
    {
        "images" : "https://toshkent-parfum.uz/media/cache/d5/34/d534540dd1ba7a3453cf740719b4b0b8.webp",
        "name" : "Louis Vuetton",
        "brandname" : "Brang louis wiettton pacific chill EDP 100ml",
        "money": "6 008 699 UZS",
        "imagestype" : "https://avatars.mds.yandex.net/i?id=ef2f6d68cad5fe3c545a96f4806208b9ddb09d5f-9214194-images-thumbs&n=13",
    },
    {
        "images" : "https://toshkent-parfum.uz/media/cache/3e/97/3e979de7f838407e30fa242085891592.webp",
        "name" : "Louis Vuetton",
        "brandname" : "Brang louis wiettton pacific chill EDP 100ml",
        "money": "7 008 699 UZS",
        "imagestype" : "https://avatars.mds.yandex.net/i?id=ef2f6d68cad5fe3c545a96f4806208b9ddb09d5f-9214194-images-thumbs&n=13",
    },
    {
        "images" : "https://toshkent-parfum.uz/media/cache/ee/bc/eebcfa8e4b334e24342e391924bad984.webp",
        "name" : "Louis Vuetton",
        "brandname" : "Brang louis wiettton pacific chill EDP 100ml",
        "money": "10 008 699 UZS",
        "imagestype" : "https://avatars.mds.yandex.net/i?id=ef2f6d68cad5fe3c545a96f4806208b9ddb09d5f-9214194-images-thumbs&n=13",
    },
    {
        "images" : "https://toshkent-parfum.uz/media/cache/2d/2e/2d2e73a399da5f5d6a36f1130defbebd.webp",
        "name" : "Louis Vuetton",
        "brandname" : "Brang louis wiettton pacific chill EDP 100ml",
        "money": "11 008 699 UZS",
        "imagestype" : "https://avatars.mds.yandex.net/i?id=ef2f6d68cad5fe3c545a96f4806208b9ddb09d5f-9214194-images-thumbs&n=13",
    },
    {
        "images" : "https://toshkent-parfum.uz/media/cache/e5/6f/e56f2fa816e9756de2f7ab61f2cff983.webp",
        "name" : "Louis Vuetton",
        "brandname" : "Brang louis wiettton pacific chill EDP 100ml",
        "money": "52 008 699 UZS",
        "imagestype" : "https://avatars.mds.yandex.net/i?id=ef2f6d68cad5fe3c545a96f4806208b9ddb09d5f-9214194-images-thumbs&n=13",
    }
]



class Item {
    constructor(images, name, brandname, money, imagestype) {
      this.images = images;
      this.name = name;
      this.brandname = brandname;
      this.money = money;
      this.imagestype = imagestype;
    }
  

    // container ichida items box yartuv funcsiyasi
    createItemElement() {

        // items ichi appendchild yaratish
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('items');
  
      const img = document.createElement('img');
      img.src = this.images;
      img.alt = '';
  
      const textAreasDiv = document.createElement('div');
      textAreasDiv.classList.add('text-areas');
  
      const name = document.createElement('h1');
      name.textContent = this.name;
  
      const brandName = document.createElement('p');
      brandName.textContent = this.brandname;
  
      const price = document.createElement('h4');
      price.textContent = this.money;
  
      const imageType = document.createElement('img');
      imageType.src = this.imagestype;
      imageType.alt = '';
  
      const button = document.createElement('button');
      button.classList.add('btn');
      button.textContent = 'Click up here';
  
      textAreasDiv.append(name, brandName, price, imageType, button);
      itemDiv.append(img, textAreasDiv);
  
      return itemDiv;
    }
  }
  
  const box2 = document.querySelector('.container');
  const box = document.querySelector('.box');
//   json formatlash
  data.forEach((itemData) => {
    const item = new Item(
      itemData.images,
      itemData.name,
      itemData.brandname,
      itemData.money,
      itemData.imagestype
    );
  
    const itemElement = item.createItemElement();
    box2.appendChild(itemElement);
  });
  
  
//   box ichida item elementi yaratish
  
  function Click(event) {
    const itemDiv = event.target.closest('.items');
    box.appendChild(itemDiv);
  }
  
//  agar container ichidagi btn bosilsa 
// butun item object cotains orqali boshqa appendchilga ko/chib utadi
  box2.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn')) {
      Click(event);
    }
  });

