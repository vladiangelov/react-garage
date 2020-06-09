import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions/index';
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';

class CarForm extends Component {

  onSubmit = (values) => {
    this.props.createCar(values, (post) => {
      this.props.history.push('/'); // Navigate after submit
      return post;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
        className="form-control"
        type={field.type}
        {...field.input}
        />
      </div>
    );
  }

  render() {
    return [
      <SideBar key="SideBar" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </SideBar>,
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
        label="Brand"
        name="brand"
        type="text"
        component={this.renderField}
        />
        <Field
        label="Model"
        name="model"
        type="text"
        component={this.renderField}
        />
        <Field
        label="Owner"
        name="owner"
        type="text"
        component={this.renderField}
        />
        <Field
        label="Plate"
        name="plate"
        type="text"
        component={this.renderField}
        />
        <button className="btn btn-primary" type="submit"
        disabled={this.props.pristine || this.props.submitting}>
        Create Car
        </button>
      </form>
    ];


  }

}

export default reduxForm({ form: 'newCarForm' })(
  connect(null, { createCar })(CarForm)
);
