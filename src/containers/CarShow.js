import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleCar } from '../actions/index';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import logoSquare from '../images/logo_square.svg';

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
    const car = this.props.car;
    if (!car) {
      return (
        <SideBar key="SideBar" garage={this.props.garage}>
          <Link to="/">Back to list</Link>
        </SideBar>);
    }
    return [
      <SideBar key="SideBar" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </SideBar>,
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src={logoSquare} />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong> {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
          </button>
        </div>
      </div>
    ];
  }
}

const mapStateToProps = (state, ownProps) => {
  const idFromUrl = parseInt(ownProps.match.params.car, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
