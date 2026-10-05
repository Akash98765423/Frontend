const Products = () => {

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 50000,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Mobile",
            price: 25000,
            category: "Electronics"
        },
        {
            id: 3,
            name: "Headphones",
            price: 2000,
            category: "Accessories"
        },
        {
            id: 4,
            name: "Keyboard",
            price: 1500,
            category: "Accessories"
        },
        {
            id: 5,
            name: "Mouse",
            price: 800,
            category: "Accessories"
        }
    ];

    return (
        <div>
            <h2>Products</h2>

            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                    <p>Category: {product.category}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Products;