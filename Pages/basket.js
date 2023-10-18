$(document).ready(function()
{ 
	var productItem = [{
		productName: "Camping Stuff",
		price: "100.00", 
		photo: "figure8.jpeg" }, 
		{ 
		productName: "Tent", 
		price: "300.00", 
		photo: "tent.jpeg" }, 
		{ 
		productName: "Folding Camping Table and Stool",
		price: "400.00", 
		photo: "figure7.jpeg" }, 
		{ 
		productName: "A camping Tent",
		price: "120.00", 
		photo: "figure6.jpeg" }, 
		{ 
		productName: "A wicker basket", 
		price: "450.00",
		photo: "wicker basket.jpeg" },
		{ 
		productName: "A cookware sets", 
		price: "450.00", 
		photo: "cookware sets.jpeg" }, 
		{
		productName: "A cooking ware", 
		price: "450.00",
		photo: "cooking ware.jpeg" }, 
		{
		productName: "Camping basket",
		price: "450.00", 
		photo: "camping basket.jpeg" }, 
		{
		productName: "A camping stuff", 
		price: "100.00",
		photo: "figure9.jpeg" }, 
		{
		productName: "Camping chairs",
		price: "150.00", 
		photo: "figure11.jpeg" }, 
		{
		productName: "Outdoor Camping Furniture",
		price: "200.00", 
		photo: "figure10.jpeg" }, 
		{ 
		productName: "Camping Furniture", 
		price: "100.00", 
		photo: "figure12.jpeg" }]; 
		
		showProductGallery(productItem); 
		showCartTable();
		}
		); 
		
		function addToCart(element) { 
			var productParent = $(element).closest('div.product-item'); 
			var price = $(productParent).find('.price span').text(); 
			var productName = $(productParent).find('.productname').text(); 
			var quantity = $(productParent).find('.product-quantity').val(); 
			var cartItem = { productName: productName, price: price, quantity: quantity }; 
			var cartItemJSON = JSON.stringify(cartItem); 
			var cartArray = new Array(); 
			// If javascript shopping cart session is not empty 
			if (sessionStorage.getItem('shopping-cart')) { 
			cartArray = JSON.parse(sessionStorage.getItem('shopping-cart')); 
			} cartArray.push(cartItemJSON); 
			
			var cartJSON = JSON.stringify(cartArray); 
			sessionStorage.setItem('shopping-cart', cartJSON); 
			showCartTable(); 
			} 
			
		function emptyCart() { 
			if (sessionStorage.getItem('shopping-cart')) { 
			// Clear JavaScript sessionStorage by index 
			sessionStorage.removeItem('shopping-cart');
			showCartTable(); } 
		} 
		
		function removeCartItem(index) { 
			if (sessionStorage.getItem('shopping-cart')) {
			var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart')); 
			sessionStorage.removeItem(shoppingCart[index]); 
			showCartTable(); } 
			} 
			
		function showCartTable() { 
			var cartRowHTML = ""; 
			var itemCount = 0; 
			var grandTotal = 0; 
			var price = 0; 
			var quantity = 0; 
			var subTotal = 0; 
			if (sessionStorage.getItem('shopping-cart')) { 
			var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart')); 
			itemCount = shoppingCart.length;
			//Iterate javascript shopping cart array shoppingCart.forEach(function(item) 
			{ var cartItem = JSON.parse(item); 
			price = parseFloat(cartItem.price);
			quantity = parseInt(cartItem.quantity); 
			subTotal = price * quantity cartRowHTML += "" + "" + cartItem.productName + "" + "$" + price.toFixed(2) + "" + "" + quantity + "" + "$" + subTotal.toFixed(2) + "" + ""; grandTotal += subTotal; }); 
			} 
			$('#cartTableBody').html(cartRowHTML); 
			$('#itemCount').text(itemCount);
			$('#totalAmount').text("$" + grandTotal.toFixed(2)); 
			}

		function showProductGallery(product) { 
			//Iterate javascript shopping cart array var productHTML = ""; 
			product.forEach(function(item) { 
			productHTML += '' + '' + '' + item.productName + '' + '$' + item.price + '' + '' + '1' + '' + '' + '';
			""; 
			}); 
			$('#product-item-container').html(productHTML);
			}
