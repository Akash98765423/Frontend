let products = [];

document.getElementById("addProduct").addEventListener("click", function () {

    let productName = document.getElementById("productName").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;

    let product = {
        productName: productName,
        price: price,
        category: category
    };

    products.push(product);

    document.getElementById("productList").innerHTML = "";

    products.forEach(function (product) {

        let div = document.createElement("div");

        div.innerHTML = `
            <h3>Product Name: ${product.productName}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Category: ${product.category}</p>
            <hr>
        `;

        document.getElementById("productList").appendChild(div);
    });
});