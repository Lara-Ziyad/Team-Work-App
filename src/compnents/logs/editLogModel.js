import React, { useState, useEffect } from 'react';
// import DevSelectOptions from '../devs/DevSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editLog } from '../../actions/logAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ log: { current }, editLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [dev, setDev] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setDev(current.dev);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || dev === '') {
      M.toast({ html: 'Please enter a message and Developer' });
    } else {
      const updateLog = {
        id: current.id,
        message,
        attention,
        dev,
        date: new Date(),
      };
      editLog(updateLog);
      M.toast({ html: `Log updated by ${dev}` });
      setMessage('');
      setDev('');
      setAttention(false);
    }
  };

  return (
    <div
      id="edit-log-modal"
      className="modal  teal lighten-1 orange accent-3" style={{  borderRadius: '10px'}}>
   
      <div className="modal-content grey-text text-lighten-4 ">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field ">
            <input
              className="grey-text text-lighten-3 "
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
           
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="dev"
              value={dev}
              className="browser-default grey lighten-2 "
              onChange={(e) => setDev(e.target.value)}
            >
              <option value="" disabled>
                Select Developer
              </option>
              <option value="Lara Ziyad">Lara Ziayad</option>
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
                  className="filled-in "
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span  className="grey-text text-lighten-3 ">Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer teal lighten-1">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn orange accent-4"
          style={{  borderRadius: '5px', marginRight: ' 5px '}}
        >
          Enter
        </a>
      </div>
    </div>
  );
  const modalStyle = { width: '80%', height: '80%' };
};
EditLogModal.propTypes = {
  editLog: PropTypes.func.isRequired,
  log: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { editLog })(EditLogModal);
