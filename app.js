function addToCartItem1() {
   
        var cartItemsContainer = document.getElementById("cart");        
        var newItem = document.createElement("ul");  
        
        newItem.innerHTML = `
            <div class="mx-6 flex flex-row items-center gap-8" >
                <img src="Images & Icons/Rectangle 6.png" alt="Product Image" class="w-14 h-14">
                <div id="Cart1">
                    <h2 class="text-lg font-bold">Modern Psychology</h2>
                    <p class= " price text-gray-600">1300 TK</p>
                </div>
                <button type="button" onclick="return this.parentNode.remove();"><i class="fa-solid fa-xmark"></i></button>
            </div>         
        `;    
        cartItemsContainer.appendChild(newItem);       
  
  }
    var addToCartBtn = document.getElementById("buy_btn1");  
    addToCartBtn.addEventListener("click", addToCartItem1);



 function addToCartItem2() {
   
        var cartItemsContainer = document.getElementById("cart");  
        
        var newItem = document.createElement("ul");  
        
        newItem.innerHTML = `
        <div class="mx-6 flex flex-row items-center gap-8">
            <img src="Images & Icons/Rectangle 13.png" alt="Product Image" class="w-14 h-14">
            <div id="Cart2">
                <h2 class="text-lg font-bold">Modern Psychology</h2>
                <p class=" price text-gray-600">1300 TK</p>
            </div>
            <button type="button" onclick="return this.parentNode.remove();"><i class="fa-solid fa-xmark"></i></button>
        </div>  
        
        `;
    
        cartItemsContainer.appendChild(newItem);        
  
  }
    var addToCartBtn = document.getElementById("buy_btn2");   
    addToCartBtn.addEventListener("click", addToCartItem2);



 function addToCartItem3() {
   
        var cartItemsContainer = document.getElementById("cart");          
        var newItem = document.createElement("ul");  
        
        newItem.innerHTML = `
        <div class="mx-6 flex flex-row items-center gap-8">
            <img src="Images & Icons/Rectangle 15.png" alt="Product Image" class="w-14 h-14">
            <div id="Cart3">
            <h2 class="text-lg font-bold">Modern Psychology</h2>
            <p class="price text-gray-600">1300 TK</p>
            </div>
            <button type="button" onclick="return this.parentNode.remove();"><i class="fa-solid fa-xmark"></i></button>
        </div>  
        
        `;
    
        cartItemsContainer.appendChild(newItem);
  
  }
var addToCartBtn = document.getElementById("buy_btn3");   
addToCartBtn.addEventListener("click", addToCartItem3);



 function addToCartItem4() {
   
        var cartItemsContainer = document.getElementById("cart");  
        
        var newItem = document.createElement("ul");  
        
        newItem.innerHTML = `
        <div class="mx-6 flex flex-row items-center gap-8">
            <img src="Images & Icons/Rectangle 30.png" alt="Product Image" class="w-14 h-14">
            <div id="Cart4">
            <h2 class="text-lg font-bold">Modern Psychology</h2>
            <p class="price text-gray-600">1300 TK</p>
            </div>
            <button type="button" onclick="return this.parentNode.remove();"><i class="fa-solid fa-xmark"></i></button>
        </div>          
        `;
    
        cartItemsContainer.appendChild(newItem);
  
  }
 var addToCartBtn = document.getElementById("buy_btn4");   
 addToCartBtn.addEventListener("click", addToCartItem4);




 function addToCartItem5() {
   
        var cartItemsContainer = document.getElementById("cart");  
        
        var newItem = document.createElement("ul");  
        
        newItem.innerHTML = `
        <div class="mx-6 flex flex-row items-center gap-8">
            <img src="Images & Icons/Rectangle 33.png" alt="Product Image" class="w-14 h-14">
            <div id="Cart5">
            <h2 class="text-lg font-bold">Modern Psychology</h2>
            <p class="price text-gray-600">1300 TK</p>
            </div>
            <button type="button" onclick="return this.parentNode.remove();"><i class="fa-solid fa-xmark"></i></button>
        </div>  
        
        `;
    
        cartItemsContainer.appendChild(newItem);
  
  }
  var addToCartBtn = document.getElementById("buy_btn5");   
 addToCartBtn.addEventListener("click", addToCartItem5);



 function addToCartItem6() {
   
    var cartItemsContainer = document.getElementById("cart");      
    var newItem = document.createElement("ul");  
    
    newItem.innerHTML = `
        <div class="mx-6 flex flex-row items-center gap-8">
            <img src="Images & Icons/Rectangle 34.png" alt="Product Image" class="w-14 h-14">
            <div id="Cart6">
                <h2 class="text-lg font-bold">Modern Psychology</h2>
                <p class="price text-gray-600">1300 TK</p>
            </div>
            <button type="button" onclick="return this.parentNode.remove();"><i class="fa-solid fa-xmark"></i></button>
        </div>      
        `;
  
    cartItemsContainer.appendChild(newItem);  
  }
var addToCartBtn = document.getElementById("buy_btn6");  
 addToCartBtn.addEventListener("click", addToCartItem6);


 

 function updateTotalPrice(){
    
    var checks = document.querySelectorAll('[id^="Cart"]');
    let totalPrice = 1300;

    checks.forEach(check => {
        // Get the price value from the corresponding p tag
        var priceElement = check.querySelector('.price');
        var priceValue = parseInt(priceElement.textContent, 10);

     
    
        // Add the price to the total
        totalPrice += priceValue;
       
      }); 
      total.innerText = totalPrice.toLocaleString();
      
}

