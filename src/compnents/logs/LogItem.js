import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logAction';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted' });
  };

  return (
    <li className="collection-item  orange accent-3
    ">
      <div style={{ margin: '1rem' }}>
        <a
          onClick={() => setCurrent(log)}
          style={{ fontSize: '1.5rem', borderRadius: '5px',padding: '0.2rem'}}
          href="#edit-log-modal"
          className={`modal-trigger grey-text text-lighten-5 ${
            log.attention && ' grey-text text-lighten-5  teal lighten-2 '
          }`}
        >
          {log.message}
        </a>
        <br />
        <div style={{ marginTop:'.5rem'}}>
        <span className="grey-text text-lighten-3" style={{ fontSize: '1.2rem',marginTop:'8rem'}}>
          last updated by{' '}
          <span className=" amber-text ">
            <strong>{log.dev}</strong>
          </span>{' '}
          on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
          </span></div>
        <div style={{ marginBottom:'2rem'}}>
        <a href="#!" className="secondary-content" style={{ marginBottom:'5rem'}}>
          <i className="material-icons grey-text" onClick={onDelete}>
            delete
          </i>
        </a></div>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
