$(document).ready(function() {
	var productItem = [
		{
			productName: "Portable Camping Fan",
			price: "89.00",
			photo: "PortableCampingFan.jpg"
		},
		{
			productName: "LED Lantern",
			price: "25.99",
			photo: "LED_Lantern.jpg"
		},
		{
			productName: "Portable Camping Hammock",
			price: "59.00",
			photo: "portableCampingHammock.jpg"
		},
		{
			productName: "4 pack LED Flashlight",
			price: "69.00",
			photo: "offers_4_pack_LED_flashlight.jpg"
		},
		{
			productName: "Collapsible Bottle",
			price: "29.00",
			photo: "wow9.jpg"
		},
		{
			productName: "LED Flashlight",
			price: "99.99",
			photo: "ledFlashLight.jpg"
		},
		{
			productName: "Camping Cookset",
			price: "879.00",
			photo: "offer_camping_cook_set.jpg"
		},
		{
			productName: "Two Person Tent",
			price: "129.00",
			photo: "on-sale_two_person_tent.jpg"
		},
		{
			productName: "Orange backpack",
			price: "239.00",
			photo: "on-sale_backpack.jpg"
		},
		{
			productName: "Camping Chair",
			price: "69.00",
			photo: "camping1.jpg"
		},
		{
			productName: "Camping Cot",
			price: "69.00",
			photo: "campingCot.jpeg"
		},
		{
			productName: "Unisex Backpack",
			price: "139.00",
			photo: "unisexBackpack.jpg"
		},
		{
			productName: "Outdoor Blanket",
			price: "49.00",
			photo: "outdoor_blanket.jpg"
		},
		{
			productName: "Wheelable Cooler",
			price: "99.00",
			photo: "on-sale_cooler.jpg"
		},
		{
			productName: "Beige Camping Boots",
			price: "319.00",
			photo: "campingBoots1.jpg"
		},
		{
			productName: "Puffy Outdoor Blanket",
			price: "49.00",
			photo: "on-sale_puffy_outdoor_blanket.jpg"
		},
		{
			productName: "Lightweight Chair",
			price: "39.00",
			photo: "lightweight_chair.jpg"
		},
		{
			productName: "Fire Pit",
			price: "689.00",
			photo: "fire_pit.jpg"
		},
		{
			productName: "Camping Shelter",
			price: "79.00",
			photo: "camping_shelter.jpg"
		},
		{
			productName: "Cookware Pack",
			price: "899.00",
			photo: "offers_cookware_pack.jpg"
		},
		{
			productName: "Family size Tent",
			price: "59.59",
			photo: "fam_size_tent.jpg"
		},
		{
			productName: "Chair Canopy",
			price: "109.59",
			photo: "chair_canopy.jpg"
		},
		{
			productName: "Men's Black boots",
			price: "309.00",
			photo: "campingBoots2.jpg"
		},
		{
			productName: "Portable Fire Pit",
			price: "359.59",
			photo: "rB11.jpeg"
		}
		];
	showProductGallery(productItem);
	showCartTable();
});

function addToCart(element) {
	var productParent = $(element).closest('div.product-item');

	var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}

function emptyCart() {
	if (sessionStorage.getItem('shopping-cart')) {
		// Clear JavaScript sessionStorage by index
		sessionStorage.removeItem('shopping-cart');
		showCartTable();
	}
}



function removeCartItem(index) {
	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		sessionStorage.removeItem(shoppingCart[index]);
		showCartTable();
	}
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

		//Iterate javascript shopping cart array
		shoppingCart.forEach(function(item) {
			var cartItem = JSON.parse(item);
			price = parseFloat(cartItem.price);
			quantity = parseInt(cartItem.quantity);
			subTotal = price * quantity

			cartRowHTML += "<tr>" +
				"<td>" + cartItem.productName + "</td>" +
				"<td class='text-right'>$" + price.toFixed(2) + "</td>" +
				"<td class='text-right'>" + quantity + "</td>" +
				"<td class='text-right'>$" + subTotal.toFixed(2) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
		});
	}

	$('#cartTableBody').html(cartRowHTML);
	$('#itemCount').text(itemCount);
	$('#totalAmount').text("$" + grandTotal.toFixed(2));
}


function showProductGallery(product) {
	//Iterate javascript shopping cart array
	var productHTML = "";
	product.forEach(function(item) {
		productHTML += '<div class="product-item">'+
					'<img src="product-images/' + item.photo + '">'+
					'<div class="productname">' + item.productName + '</div>'+
					'<div class="price">$<span>' + item.price + '</span></div>'+
					'<div class="cart-action">'+
						'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
						'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
					'</div>'+
				'</div>';
				"<tr>";
		
	});
	$('#product-item-container').html(productHTML);
}
