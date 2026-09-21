
//  ANNOUNCEMENT BAR

const announceBar = document.getElementById("announceBar");
const announceClose = document.getElementById("announceClose");

if (announceBar && announceClose) {
  announceClose.addEventListener("click", function() {
    announceBar.style.display = "none";
  });
}



// NAVIGATION DROPDOWN

const shopToggle = document.getElementById("shopToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const shopChevron = document.getElementById("shopChevron");

if (shopToggle && dropdownMenu && shopChevron) {

  shopToggle.addEventListener("click", function(event) {
    event.preventDefault();
    dropdownMenu.classList.toggle("open");
    shopChevron.classList.toggle("rotated");
  });

  document.addEventListener("click", function(event) {
    const clickedOnShop = shopToggle.contains(event.target);
    if (!clickedOnShop) {
      dropdownMenu.classList.remove("open");
      shopChevron.classList.remove("rotated");
    }
  });

}

// QUANTITY
const qtyMinus = document.getElementById("qtyMinus");
const qtyPlus = document.getElementById("qtyPlus");
const qtyNumber = document.getElementById("qtyNumber");

if (qtyMinus && qtyPlus && qtyNumber) {

  let quantity = 1;

qtyPlus.addEventListener("click", function() {
  quantity = quantity + 1;
  qtyNumber.textContent = quantity;
});

qtyMinus.addEventListener("click", function() {
  if (quantity > 1) {
    quantity = quantity -1;
    qtyNumber.textContent = quantity;
  }
});

}

// color buttons

const colorButtons = document.querySelectorAll(".color-btn");
colorButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    colorButtons.forEach(function(btn) {
    btn.classList.remove('active')
   });
    button.classList.add('active')
 
  
  });
});

// size buttons

const sizeButtons = document.querySelectorAll(".size-btn");

if (sizeButtons.length > 0) {

  sizeButtons.forEach(function(button) {
    button.addEventListener('click', function() {

      sizeButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });


      button.classList.add('active');

    });
  });

}

// TABS
const tabButtons= document.querySelectorAll(".tab-btn");

if (tabButtons.length > 0) {

  tabButtons.forEach(function(button) {
    button.addEventListener('click', function(){

      tabButtons.forEach(function(btn){
        btn.classList.remove('active');
      })
      
      button.classList.add('active');
    })
  })
}


// ADD TO CART

const cartButton = document.querySelector(".cart-btn");

if (cartButton) {

  cartButton.addEventListener('click', function() {

    cartButton.textContent = "Added ✓";

    setTimeout(function() {
      cartButton.textContent = "Add to Cart";
    }, 2000);

  });

}
// newsletter
const newsletterBtn = document.querySelector(".newsletter-btn");
const newsletterInput = document.querySelector(".newsletter-input");

if (newsletterBtn && newsletterInput) {
  newsletterBtn.addEventListener('click', function(){

     if (newsletterInput.value === "") {
      alert(" enter your email");
    } else {
      newsletterBtn.textContent = "Subscribed ✓";
      newsletterInput.value = "";

      setTimeout(function() {
        newsletterBtn.textContent = "subscribe to Newsletter";
      }, 2000);
    }
  })
}
