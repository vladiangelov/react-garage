import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  render() {
    const carsList = this.props.cars.map((car) => {
      return <p>{car.brand} {car.model} - Owner: {car.owner}</p>;
    })
    return (
      <div>
        {carsList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    cars: state.cars
  }
}

export default connect(mapStateToProps)(CarsIndex);
