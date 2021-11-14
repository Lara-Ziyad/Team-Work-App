import React, { useState } from 'react';
// import DevSelectOptions from '../devs/SelectOptions';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logAction';
import { connect } from 'react-redux';
import M from 'materialize-css';
const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [dev, setDev] = useState('');

  const onSubmit = () => {
    if (message === '' || dev === '') {
      M.toast({ html: 'Please enter a message and developer' });
    } else {
      const newLog = {
        message,
        attention,
        dev,
        date: new Date(),
      };

      addLog(newLog);

      M.toast({ html: `Log added by ${dev}` });

      // Clear Fields
      setMessage('');
      setDev('');
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal  teal lighten-1" style={{  borderRadius: '10px'}}>
      <div className="modal-content grey-text text-lighten-4 " >
        <h4>Enter System Log</h4>
        <div className="row">
          <div >
            <input
              className="grey-text text-lighten-2"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active grey-text text-lighten-3">
              Log Task
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="dev"
              value={dev}
              className="browser-default  "
              onChange={(e) => setDev(e.target.value)}
            >
              <option value="" disabled>
                Select Developer
              </option>
              <option value="Lara Ziyad">Lara Ziayad</option>
              <option value="Simon Kamper">Simon Kamper</option>
              <option value="Layla Shrouf">Layla Shrouf</option>
              {/* <DevSelectOptions /> */}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in grey-text text-lighten-2"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span className="grey-text text-lighten-3">Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer  orange accent-4">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close orange accent-3 waves-effect waves-light btn "
          style={{  borderRadius: '5px', marginRight: ' 5px '}}
        >
          Enter
        </a>
      </div>
    </div>
  );
  
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddLogModal);
