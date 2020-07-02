import React from 'react';
import Header from './headerComponent/Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { Router, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <header className="jumbotron">
      <div className="row">
          <div className="col-md-3" id="ministry">
            <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Central_Board_of_Indirect_Taxes_and_Customs_Logo.png" alt="	Ministry" height="100px" width="100px"/>
          </div>

          <div className="col-md-5" id="heading">
            <h1>GST Chain</h1>
            <h2>No More Tax Evasion</h2>
          </div>
          <div className="col-md-3" >
            <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Central_Board_of_Indirect_Taxes_and_Customs_Logo.png" alt="	Ministry" height="100px" width="100px"/>
          </div>
        </div>
    </header>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to ='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Language</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Help</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Forms</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Contact Us</a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="./Login.js">Login</a> */}
                  <Link to ='/login' className="nav-link">Login</Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
      </nav>

      <footer>
      <div className="row">
          <div className="col-md-3">
            <div>
              <button type="button" class="btn btn-warning"><Link to ='/bill'>Pay Tax</Link></button>
            </div>
            <div>
              <button type="button" class="btn btn-warning"><Link to ='/tax' >File Tax Return</Link></button>
            </div>
            <div>
              <button type="button" class="btn btn-warning"><a href="">Other Services</a></button>
            </div>
          </div>
          <div className="col-md-9">
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi accusantium similique sequi, porro esse aliquid amet provident atque harum voluptatum. Consectetur minus non error assumenda quo aliquid, magni amet deserunt totam, sunt fugiat autem voluptatem accusantium est voluptates nulla rem fugit consequatur commodi. Ipsa laboriosam dolore sunt mollitia quidem facere!</p>
          </div>
      </div>
      </footer>
      </div>
  );
}

export default Home;
