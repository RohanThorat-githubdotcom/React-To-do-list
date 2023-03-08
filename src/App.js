import './App.css';
import React from 'react';
// import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import DynamicList from './components/DynamicList';


function App() {
  return (
   <React.Fragment>
      {/* <Register />  */}
      <DynamicList />
   </React.Fragment>
  );
}

export default App;
