import useProducts from "../hooks/useProducts";
import useNotifications from "../hooks/useNotification";

function Products() {
  const { products, cart, addProduct, Total, removeProduct } = useProducts();
  const { notifications, createNotification } = useNotifications();

  const isInCart = (product) => {
    return !cart.find((item) => item.id === product.id);
  };

  const productAddInCart =  (product)=>{
    addProduct(product);
    // console.log('product added');
    createNotification(`${product.name} added to your cart`);
  }

  const productRemoveFrmCart = (product)=>{
    removeProduct(product);
    createNotification(`${product.name} removed from your cart`)
  }
  
  return (
    <div>
      <div className="row">
      {notifications && <h2>Notification: {notifications}</h2>}
        {products.map((product) => {
          return (
            <div className="card col-md-4" key={product.id}>
              <div className="text-center">
                <img style={{ width: "400px" }} src={product.imageURL} />
              </div>
              <div className="card-body">
                <h2>{product.name}</h2>

                <p className="card-text">{product.description}</p>
                <p>
                  <strong>
                    price: {product.price} {product.currency}
                  </strong>
                </p>
                {isInCart(product) && (
                  <button
                    onClick={() => productAddInCart(product)}
                    className="btn btn-primary"
                  >
                    Select
                  </button>
                )}
                {!isInCart(product) && (
                  <button
                    onClick={() => productRemoveFrmCart(product)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <form>
        <div className="form-group mt-4 col-md-4">
          <p className="mt-4">You will be charged: {Total}</p>

          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Buy now
        </button>
      </form>
    </div>
  );
}

export default Products;
