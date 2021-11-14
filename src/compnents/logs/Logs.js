import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logAction';
import { BackgroundColor } from 'chalk';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div style={{ margin: '0px', padding: '0px', borderRadius: '10px',  }}>
      <ul className="collection    orange accent-4
" style={{ borderRadius: '10px' }}>
        <li className="collection-header">
          <h4 className="center white-text text-darken-1">Tasks</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center ">No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
