import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { deleteDev } from '../../actions/devActions';
// import M from 'materialize-css/dist/js/materialize.min.js';

const DevItem = ({ dev }) => {
  // { dev { id, firstName, lastName }, deleteDev }

  //   const onDelete = () => {
  //     deleteDev(id);
  //     M.toast({ html: 'Developer deleted' });
  //   };

  return (
    <li className="collection-item deep-purple darken-2 grey-text text-lighten-2">
      <div>
        {dev.firstName} {dev.lastName}
        <a
          href="#!"
          className="secondary-content"
          //   onClick={onDelete}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

DevItem.propTypes = {
  dev: PropTypes.object.isRequired,
  //   deleteDev: PropTypes.func.isRequired
};

export default DevItem;
