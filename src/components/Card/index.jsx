import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  product, toggleModal, getDataModal
}) => {
  const handleShowModal = (ev, data) => {
    ev.preventDefault();
    getDataModal(data);
    toggleModal(true);
  };

  const showErrorModal = () => {
    getDataModal(null);
    toggleModal(true);
  };

  return (
    <div className="max-w-sm shadow-md hover:shadow-xl rounded overflow-hidden flex justify-center flex-col">
      <img className="object-cover max-w-sm md:max-w-lg w-3/5 block m-auto" src={product.img} alt={product.name} />
      <div className="p-4 text-gray-800">
        <h3 className="font-bold uppercase text-sm">{product.name}</h3>
        <p className="text-sm overflow-ellipsis overflow-hidden py-4 text-justify leading-4">{product.description}</p>
        <span className="font-bold text-lg block">
          s/.
          {product.price}
        </span>
      </div>
      <div className="pb-4 px-4 pt-2 flex justify-around items-center">
        <a className="w-1/2 text-xs text-gray-500" href="//#" onClick={(event) => { handleShowModal(event, product); }}>Vista previa</a>
        <button className="w-1/2 text-sm bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full py-2 px-2 md:px-10 font-semibold outline-none" type="button" onClick={showErrorModal}>Agregar</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
  toggleModal: PropTypes.func,
  getDataModal: PropTypes.func
};

Card.defaultProps = {
  product: [],
  toggleModal: () => { },
  getDataModal: () => { }
};
export default Card;
