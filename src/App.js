import React, {Fragment, useEffect} from 'react'
import './App.css';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import SearchBar from './compnents/layout/SearchBar'
import Logs from './compnents/logs/Logs'
import AddBtn from'./compnents/layout/addBtn'
import AddLogModal from './compnents/logs/addLogModel'
import EditLogModal from './compnents/logs/editLogModel'
import AddDevModal  from './compnents/devs/adddevModal'
import DevListModal from './compnents/devs/devListModal'
import store from'./store'
import { Provider } from 'react-redux';
const App = () => {
  useEffect(() => {
    //init materialized JS
    M.AutoInit()
  })
  return (
    <Provider store={store}>
    <div className=" " >
      < SearchBar />
    <div className="container"  >
   
        <div   >
          <AddBtn />
          <AddLogModal/>
          <EditLogModal />
          <AddDevModal />
          <DevListModal/>
              <Logs/>
      </div>
        </div></div>
    </Provider>
  );
}

export default App;
