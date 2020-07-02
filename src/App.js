// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import Bill from './Bill';

// function App() {
//   return (
//       <div id="main">
//         <header className="jumbotron header">
//           <div className="row">
//             <div className="col-md-3" id="ministry">
//                 <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Central_Board_of_Indirect_Taxes_and_Customs_Logo.png" alt="Ministry" height="100px" width="100px"/>
//             </div>

//             <div className="col-md-5" id="heading">
//                 <h1>GST Chain</h1>
//                 <h2>No More Tax Evasion</h2>
//             </div>
//             <div className="col-md-3" >
//                 <img src="../assets/Central_Board_of_Indirect_Taxes_and_Customs_Logo.png" alt="Ministry" height="100px" width="100px" />
//             </div>

//           </div>
//         </header>

//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//             </button>
          
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav mr-auto">
//                 <li className="nav-item">
//                   <a className="nav-link" href="./index.html">Home</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Services</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">Language</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">Help</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">Forms</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">About Us</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">Contact Us</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link btn " href="./login.html">Login</a>
//                 </li>
//               </ul>

//               <form className="form-inline my-2 my-lg-0">
//                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//               </form>

//             </div>
//         </nav>

//         <div className="row">
//             <div className="col-md-3">
//               <div>
//                 <button type="button" className="btn btn-warning"><a href="<Bill/>">Pay Tax</a></button>
//               </div>
//               <div>
//                 <button type="button" className="btn btn-warning"><a href="../public/tax_return.html">File Tax Returns</a></button>
//               </div>
//             </div>

//             <div className="col-md-9">
//               <h1>Body </h1>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi accusantium similique sequi, porro esse aliquid amet provident atque harum voluptatum. Consectetur minus non error assumenda quo aliquid, magni amet deserunt totam, sunt fugiat autem voluptatem accusantium est voluptates nulla rem fugit consequatur commodi. Ipsa laboriosam dolore sunt mollitia quidem facere!</p>
//             </div>

//         </div>

//       </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Bill from './Component/Bill'
import Tax from './Component/Tax'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Link, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <switch>
        <div className="App">
          <div id="main">
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/bill" component={Bill}/>
            <Route exact path="/tax" component={Tax}/>
          </div>
        </div>
      </switch>
    </main>
  );
}

export default App;
