import React, { useState, useEffect } from 'react';

import DevItem from './devItem';

const DevListModal = () => {
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDevs();

    // eslint-disable-next-line
  }, []);

  const getDevs = async () => {
    setLoading(true);
    const res = await fetch('/Developers');
    const data = await res.json();
    setDevs(data);
    console.log(data);
    console.log(devs);
    setLoading(false);
  };
  // teal accent-4

  return (
    <div id="dev-list-modal" className="modal pink darken-2" style={{  borderRadius: '10px'}}>
      <div className="modal-content  ">
        <h5 className="grey-text text-lighten-2" style={{ marginTop: '0px' }}>
          {' '}
          <strong>Participants</strong>
        </h5>
        <ul className="collection">
          {!loading &&
            devs !== null &&
            devs.map((dev) => <DevItem dev={dev} key={dev.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default DevListModal;
