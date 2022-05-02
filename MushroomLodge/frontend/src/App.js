import data from "./data";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Fresh mushrooms</h1>
      <div className="products">
      {data.products.map(product => (
        <div className="product-card" key={product.slug}>
            <a href={"/product/${product.slug}"}>
            <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">
            <a href={"/product/${product.slug}"}>
            <p>{product.name}</p>
            </a>
            <p>£{product.price}</p>
            <button>Add to cart</button>
            </div>
          </div>))
      }     
      </div>
    </div>
    
  );
}

export default App;
