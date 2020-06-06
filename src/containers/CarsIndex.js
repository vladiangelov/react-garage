import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';
import { Link } from 'react-router-dom';

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
    const renderCars = this.props.cars.map((car) => {
      return (
        <div key={car.id}>
          <Link to={`/cars/${car.id}`}>
            <p>{car.brand} {car.model} - Owner: {car.owner}</p>
          </Link>
        </div>
      )
    })
    return (
      <div>
        {renderCars}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    cars: state.cars
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
