import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductCard.css";
import { FaSearch } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { CirclesWithBar } from "react-loader-spinner";

function Productcard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://dummyjson.com/products";

  const getProduct = async () => {
    try {
      const res = await axios.get(url);

      setProducts(res.data.products);
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h2 className="mains-heading"> All Products</h2>
          </div>
          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
              type="search"
              placeholder="Please Enter the product Like:watch,toy etc"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="p3-5 prods">
            {isLoading ? (
              <div className="loader">
                <CirclesWithBar />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="empty-search-conatiner">
                <div className="empty-search">
                  <img
                    src={
                      "https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                    }
                    alt="No results found"
                    className="no-product-found"
                  />
                  <h3> No Products Found</h3>
                  <p> Search something else</p>
                </div>
              </div>
            ) : (
              filteredProducts.map((item, index) => {
                const { brand, image_url, price, rating, title } = item;

                return (
                  <LazyLoad key={index}>
                    <div className="product-container">
                      <img src={image_url} alt="" className="map-image" />
                      <div className="card-body">
                        <h5 className="card-title text-center pt-2">
                          {title.substr(0, 30)}
                        </h5>
                        <p className="card-text text-center">{`by ${brand}`}</p>
                        <p className="text-center price">{`₹ ${price}`}</p>
                        <div className="rating-container">
                          <p className="ratings text-center">{`${rating} ⭐`}</p>
                        </div>
                        <div className="btns text-center">
                          <button className="btns">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </LazyLoad>
                );
              })
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Productcard;
