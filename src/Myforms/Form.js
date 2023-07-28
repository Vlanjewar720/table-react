import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
// import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
        name:'',
      email: '',
      password: '',
      formErrors: {name: '' ,email: '', password: ''},
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    
    switch(fieldName) {
        case 'name':
            nameValid = value.match(/([a-zA-Z])/i);
            fieldValidationErrors.name = nameValid ? '' : ' is invalid ';
            break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid:this.state.nameValid && this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm fs-5 border-3 border border-danger p-4 rounded-5 shadow" style={{width: '500px',margin: 'auto',background: 'yellow'}}>
        <h2 className='text-center'>Sign up</h2>
        <div className="panel panel-default p-3 text-danger" >
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="email">Full name</label>
          <input type="text" required className="form-control mb-3" name="name" placeholder="full name" value={this.state.name} onChange={this.handleUserInput}  />
          
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control mb-3" name="email" placeholder="Email" value={this.state.email} onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}` } >
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control mb-3" name="password" placeholder="Password" value={this.state.password} onChange={this.handleUserInput}  />
        </div>
        <button type="submit" className="btn btn-primary text-center" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}

export default Form;