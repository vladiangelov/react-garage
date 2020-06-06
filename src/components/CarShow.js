import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleCar } from '../actions/index';
import { Link } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {fetchSingleCar: fetchSingleCar},
    dispatch
  )
}

class CarShow extends Component {
  componentDidMount() {
    const idFromUrl = this.props.match.params.car;
    this.props.fetchSingleCar(idFromUrl);
  }

  render() {
    if (!this.props.car) {
      return (
          <Link to="/">Back to list</Link>
      );
    }
    return (
      <div>
        <p>Brand: {this.props.car.brand}</p>
        <p>Model: {this.props.car.model}</p>
        <p>Number Plate: {this.props.car.plate}</p>
        <p>Owner: {this.props.car.owner}</p>
        <p><Link to={"/"}> Back to cars </Link></p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const idFromUrl = parseInt(ownProps.match.params.car, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
