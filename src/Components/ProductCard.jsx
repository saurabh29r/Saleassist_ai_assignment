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

  const url = "https://myfirstapi-data.vercel.app";

  const getProduct = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setProducts(res.data.products);

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
    <Container fluid>
      <Row>
        <Col>
          <div>
            <h2 className="mains-heading ml-2"> All Products</h2>
          </div>
          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
              type="search"
              placeholder="Please Enter the product Like:T-shirt,watch etc"
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
                  <h3> No Products Found</h3>
                  <p> Search something else</p>
                </div>
              </div>
            ) : (
              filteredProducts.map((item, index) => {
                const { image, price, title } = item;

                return (
                  <LazyLoad key={index}>
                    <div className="product-container">
                      <img src={image} alt="" className="map-image" />
                      <div className="card-body">
                        <h5 className="card-title text-center pt-2">
                          {title.substr(0, 20)}
                        </h5>

                        <p className="text-center price pt-2">{`₹ ${price}`}</p>
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
