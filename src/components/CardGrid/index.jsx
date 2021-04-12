import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/index';
import getProducts from '../../services/services';

const CardGrid = ({ toggleModal, getDataModal }) => {
  const [products, setProducts] = useState([]);

  const GetListProducts = async () => {
    const listProducts = [];
    const result = await getProducts();
    result.forEach((prod) => listProducts.push(prod.data()));
    setProducts(listProducts);
  };

  useEffect(() => {
    GetListProducts();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 px-6 md:px-0 pb-4">
      {products.length ? (
        products.map((product) => (
          <Card
            product={product}
            toggleModal={toggleModal}
            getDataModal={getDataModal}
          />
        ))
      ) : null}
    </div>
  );
};

CardGrid.propTypes = {
  toggleModal: PropTypes.func,
  getDataModal: PropTypes.func
};

CardGrid.defaultProps = {
  toggleModal: () => { },
  getDataModal: () => { }
};

export default CardGrid;
