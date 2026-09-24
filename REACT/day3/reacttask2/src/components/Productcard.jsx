import "./ProductCard.css";
import productImage from "../assets/Product.avif";

const ProductCard = () => {
  return (
    <div className="product-container">

      {/* Relative path image */}
      <div className="product-card">
        <img src={productImage} alt="Product" />

        <h2>Smart Watch</h2>
        <p>₹2,999</p>

        <button>Buy Now</button>
      </div>

      {/* Absolute path - image from public folder */}
      <div className="product-card">
        <img src="/Product2.png" alt="Product" />

        <h2>Headphones</h2>
        <p>₹1,999</p>

        <button>Buy Now</button>
      </div>

    </div>
  );
};

export default ProductCard;