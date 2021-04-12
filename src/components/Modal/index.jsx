import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  state, data, toggleModal, getDataModal
}) => {
  const showModal = () => {
    getDataModal(null);
    toggleModal(true);
  };

  const closeModal = () => {
    toggleModal(false);
  };

  return state ? (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-96 md:w-full m-auto p-8">
        <button type="button" className="absolute top-0 right-4" onClick={closeModal}>x</button>
        {data !== null && Object.keys(data).length > 0 ? (
          <div>
            <div className="flex pb-4 text-gray-800 items-center">
              <img className="m-auto w-1/4" src={data.img} alt="" />
              <div className="w-3/4 pl-4">
                <h3 className="font-bold uppercase pb-1 text-sm leading-4">{data.name}</h3>
                <p className="pb-2 text-xs leading-4">{data.description}</p>
                <span className="font-bold uppercase text-sm">
                  s/.
                  {data.price}
                </span>
              </div>
            </div>
            <div className="text-xs text-gray-800">
              <h4 className="font-bold pb-1">Info extra</h4>
              <p className="leading-4">{data.more}</p>
              <div className="pt-4 flex justify-center">
                <button className="w-1/2 text-sm bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full py-2 px-2 md:px-10 font-semibold outline-none" type="button" onClick={showModal}>Agregar</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm min-w-full w-52" role="alert">
            <strong className="font-bold">Lo sentimos!</strong>
            <span className="block sm:inline"> Hemos tenido problemas al agregar tu producto</span>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  state: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
  toggleModal: PropTypes.func,
  getDataModal: PropTypes.func
};

Modal.defaultProps = {
  state: false,
  data: [],
  toggleModal: () => { },
  getDataModal: () => { }
};
export default Modal;
