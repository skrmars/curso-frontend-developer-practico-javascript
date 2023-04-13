const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIconMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconShop = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuIconMobile.addEventListener("click",toggleMobileMenu);
iconShop.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive"); 
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");  
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
      mobileMenu.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pc',
  price: 650,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'cel',
  price: 860,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for(product of productList){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productDetail = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$ ' + product.price;
  const productName = document.createElement('p');
  productName.innerText = '$ ' + product.name;
  
  productDetail.appendChild(productPrice);
  productDetail.appendChild(productName);

  const productFigure = document.createElement('figure');
  
  const productFigureImg = document.createElement('img');
  productFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');

  productFigure.appendChild(productFigureImg);
  
  productInfo.appendChild(productDetail);
  productInfo.appendChild(productFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard); 

}
