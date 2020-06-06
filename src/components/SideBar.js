import React from 'react';
import logo from '../images/logo.svg';
import mechanic from '../images/mechanic.jpg';

const SideBar = (props) => {
  const illustration_style = {backgroundImage: `url(${mechanic})`};

  return(
    <div className="sidebar">
      <div className="illustration" style={illustration_style}></div>
      <img className="logo" src={logo} alt="logo" />
      <h1>Vladi's Garage</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
      {props.children}
    </div>
  )
}

export default SideBar;
