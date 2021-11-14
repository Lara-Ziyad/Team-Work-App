import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logAction';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <div style = {{display:"flex", justifyContent:"center"}}>
    <nav style={{ margin: '10px 0px 10px 0', width:"67%" , borderRadius: '10px', backgroundImage:'linear-gradient(to bottom left,   #c8288a , #d81b67' }}>
      <div className="nav-wrapper ">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Tasks.."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav></div>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
