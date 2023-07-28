import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// table info componentes
// import App from './App';
//full stack website components
// import Regf from "./component/Regf";
// import Login from "./component/Login";
// import Aboutus from "./component/Aboutus";
// import Servises from "./component/Servises";
// import Contactus from "./component/Contactus";

// import Formvalidation from "./component/Formvalidation";
import Form from "./Myforms/Form";
// import Navbarcomp from "./Myrouter/Navbarcomp";
// import Calsi from "./mycalculation/Calsi";
// import Mainparent from "./propscomponent/Main_parent";
// import Calculation from "./mycalculation/Calculation ";

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    {/* <App /> */}
    {/* <Regf/>
    <Login/>
    <Aboutus/>
    <Servises/>
    <Contactus/> */}

    {/* <Calculation/>  */}
    {/* <Formvalidation/> */}

    <Form />
    {/* <Calsi /> */}

    {/* <Mainparent /> */}
    {/* <Navbarcomp /> */}
      
  </>
);

reportWebVitals();
