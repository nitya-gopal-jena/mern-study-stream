import { useState, useEffect } from 'react';

const ProductApp = () => {
  let [products, setProducts] = useState([]);
  let [selectedProduct, setSelectedProduct] = useState(null)


  // Fetch the data from API 
  useEffect(() => {
    async function fetchProducts() {
      try {
        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json();
        setProducts(data?.products);
      } catch (error) {
        console.log('Something went wrong when fetching products data from API');
      }
    }

    fetchProducts();
  }, []);

  // handle function for get the all data by id
  function getDetailsById(id) {
    const  product = products.find((p)=> p.id === id)
    setSelectedProduct(product)
    
  }

  function closePopup() {
    setSelectedProduct(null);
  }

  return (
    <>
      <section className='container card-container'>
        <div className='row'>
          {products.map((product) => (
            <div className='col-3 mt-4' key={product.id}  onClick={()=> getDetailsById(product.id)}>
              <div className='card h-100'>
                <img src={product.thumbnail} className='card-img-top product-image' alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className='card-header'>
                  <h5 className='card-title'>{product.title}</h5>
                </div>
                <div className='card-body'>
                  <p className='card-text'>{product.description}</p>
                  <p className='card-text' style={{ marginBottom: '3px' }}><strong>Price:</strong> ${product.price}{' '}</p>
                  <p className='card-text' style={{ marginBottom: '3px' }}><strong>Rating:</strong> {product.rating}</p>
                </div>
                <button className='btn btn-primary' style={{width:'100%', marginBottom:'5px', borderRadius:'0'}}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* display selected data from card  */}

      {selectedProduct && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.title}</h5>
                <button type="button" className="btn-close" onClick={closePopup}></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProduct.thumbnail}
                  alt={selectedProduct.title}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <p>{selectedProduct.description}</p>
                <p><strong>Price:</strong> ${selectedProduct.price}</p>
                <p><strong>Brand:</strong> {selectedProduct.brand}</p>
                <p><strong>Category:</strong> {selectedProduct.category}</p>
                <p><strong>Rating:</strong> {selectedProduct.rating}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closePopup}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductApp;
