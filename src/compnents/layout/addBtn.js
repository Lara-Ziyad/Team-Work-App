import React from 'react';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large modal-trigger waves-effect waves-light  "
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#dev-list-modal"
            className="btn-floating  pink darken-1 modal-trigger waves-effect waves-light "
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a
            href="#add-dev-modal"
            className="btn-floating amber modal-trigger waves-effect waves-light "
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
