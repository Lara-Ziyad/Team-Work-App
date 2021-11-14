import React, { useState } from 'react';
// import DevSelectOptions from '../devs/DevSelectOptions';
// import PropTypes from 'prop-types';
// import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
//  import M from 'materialize-css';
const AddDevModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");
  const [dev, setDev] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a First name and Last name' });
    } else {
      console.log(firstName, lastName);
    }
    // Clear Fields
    setFirstName('');
    setLastName('');

    //       const newLog = {
    //         firstName,
    //         attention,
    //         dev,
    //         date: new Date()
    //

    //   addLog(newLog);

    //   M.toast({ html: `Log added by ${dev}` });

    // }
  };

  return (
    <div id="add-dev-modal" className="modal  pink darken-2" style={{  borderRadius: '10px'}}>
      <div className="modal-content grey-text text-lighten-2">
        <h4>New Participant</h4>
        <div className="row">
          <div className="input-field ">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active ">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer deep-purple darken-2" >
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn"
          style={{  borderRadius: '5px', marginRight: ' 5px '}}
        >
          Enter
        </a>
      </div>
    </div>
  );
};
export default AddDevModal;

// AddLogModal.propTypes = {
//   addLog: PropTypes.func.isRequired
// };
