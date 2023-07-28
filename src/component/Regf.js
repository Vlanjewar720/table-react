import React from "react";

function Regf() {
  return (
    <div className='container bg-warning p-3 fs-4'>
        <h2 className="text-center">REGISTRATION FORM</h2>
        <form className="row g-3 mt-4 needs-validation bg-danger text-dark fw-bold">
  <div className="col-md-6">
    <label className="form-label">First name</label>
    <input type="text" className="form-control" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control"  required />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom02" className="form-label">Password</label>
    <input type="password" className="form-control" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">Conform Password</label>
    <input type="password" className="form-control" required />
    <div className="invalid-feedback">
      Please provide a valid password.
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">Mobile No</label>
    <input type="number" className="form-control" required />
    <div className="invalid-feedback">
      Please provide a valid Number.
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">Address</label>
    <input type="text" className="form-control" required />
    <div className="invalid-feedback">
      Please provide a valid address.
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" required />
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">State</label>
    <input type="text" className="form-control" required />
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required />
    <div className="invalid-feedback">
      Please provide a valid zip.
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
    <button className="btn btn-primary" type="submit">Register</button>
  </div>
</form>
 </div>
     
  );
}

export default Regf;