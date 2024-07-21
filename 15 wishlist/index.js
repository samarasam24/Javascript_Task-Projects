   let products = [
      { id: 1, name: 'Product 1', image: '6c757d.jpg' },
      { id: 2, name: 'Product 2', image: '6c757d.jpg' },
      { id: 3, name: 'Product 3', image: '6c757d.jpg' },
    ];

   
    function addToWishlist(productId) {
      let wishlist = document.getElementById('wishlist');
      let product = products.find(p => p.id === productId);

      if (product) {
       
        if (!wishlist.querySelector('#product_' + productId)) {
          
          let productElement = document.createElement('div');
          productElement.id = 'product_' + productId;
          productElement.classList.add('product');

          
          let imageElement = document.createElement('img');
          imageElement.src = product.image;
          imageElement.alt = product.name;
          imageElement.style = "width:100%;"

         
          let removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.addEventListener('click', function() {
            removeFromWishlist(productId);
          });

        
          productElement.appendChild(imageElement);
          productElement.appendChild(document.createElement('br'));
          productElement.appendChild(document.createTextNode(product.name));
          productElement.appendChild(document.createElement('br'));
          productElement.appendChild(removeButton);

         
          wishlist.appendChild(productElement);
        } else {
          alert('Product is already in the wishlist.');
        }
      }
    }

    
    function removeFromWishlist(productId) {
      let productElement = document.getElementById('product_' + productId);
      if (productElement) {
        productElement.remove();
      }
    }