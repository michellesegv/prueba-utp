import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import CardGrid from '../../components/CardGrid/index';
import Modal from '../../components/Modal/index';

const Store = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  useEffect(() => {
  }, []);

  const toggleModal = (state) => {
    setActiveModal(state);
  };

  const getDataModal = (data) => {
    setDataModal(data);
  };

  return (
    <div>
      <Header />
      <CardGrid toggleModal={toggleModal} getDataModal={getDataModal} />
      <Modal
        toggleModal={toggleModal}
        getDataModal={getDataModal}
        state={activeModal}
        data={dataModal}
      />
    </div>
  );
};

export default Store;
