import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import logoSquare from '../images/logo_square.svg';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {fetchCars: fetchCars},
    dispatch
  )
}

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    if (this.props.cars.length === 0) {
      return [
        <SideBar key="sidebar" garage={this.props.garage}>
          <Link to="/cars/new">Add a car</Link>
        </SideBar>,
        <div className="no-car" key="nocar">No car yet</div>
      ];
    }
    return [
      <SideBar key="sidebar" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </SideBar>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              <Link to={`/cars/${car.id}`} key={car.id} />
              <img className="car-logo" src={logoSquare} />
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
}

const mapStateToProps = (state) => {
  return{
    cars: state.cars
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
