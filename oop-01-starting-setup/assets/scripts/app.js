class Product {
	// title = "DEFAULT";
	// imageURL;
	// description;
	// price;

	constructor(title, image, description, price) {
		this.title = title;
		this.imageURL = image;
		this.description = description;
		this.price = price;
	}
}

class ProductItem {
	constructor(product) {
		this.product = product;
	}
	render() {
		const prodEl = document.createElement("li");
		prodEl.className = "product-item";
		prodEl.innerHTML = `
      <div>
        <img src='${this.product.imageURL}' alt='${this.product.title}'
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add To Cart</button>
        </div>
      </div>
      `;
      return prodEl;
	}
}

class ProductList {
	products = [
		new Product(
			"Pillow",
			"https://images.ctfassets.net/q5lwz1whkyct/5PBclacXnoyzxJ58lCFeuV/d3a2539f7e56661b9dd58bcc242b6719/18_OriginalCasperPillow_LowLoft_OH_0095.jpg",
			"A soft pillow",
			19.99
		),
		new Product(
			"Carpet",
			"https://mobileimages.lowes.com/productimages/bca901c5-085f-4a20-828f-5a020f44f830/04825715.jpg?size=xl",
			"A carpet which you might like - or not.",
			89.99
		),
	];

	constructor() {}

	render() {
		const renderHook = document.getElementById("app");
		const prodList = document.createElement("ul");
		prodList.className = "product-list";
		for (const prod of this.products) {
      const productItem = new ProductItem(prod)
      const prodEl = productItem.render();
			prodList.append(prodEl);
		}
		renderHook.append(prodList);
	}
}

const productList = new ProductList();
productList.render();
