import React from "react";

function Login() {
  return (
    <div className='container bg-danger p-3 fs-4'>
        <h2 className="text-center">LOGIN FORM</h2>
        <form className="row g-3 mt-4 needs-validation bg-danger">
  <div className="col-md-6">
    <label className="form-label">User name</label>
    <input type="text" className="form-control" required />
    <div className="valid-feedback">
      Enter valid Email or uname!
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom02" className="form-label">Password</label>
    <input type="password" className="form-control" required />
    <div className="valid-feedback">
      Enter valid password!
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12 text-center p-3 bg-warning">
    <button className="btn btn-primary" type="submit">Log-in</button>
  </div>
</form>
 </div>
     
  );
}

export default Login;