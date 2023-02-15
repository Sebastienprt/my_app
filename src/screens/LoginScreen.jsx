import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";

function LoginScreen(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());
        const body = JSON.stringify(jsonData);
        fetch("http://localhost:5000/login", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body,
        }).then(resp => resp.json()).then(json => console.log(json)).catch(err => console.log(err));
    };
  return (
   <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input 
          type="email" 
          name="email"
          className="form-control" 
          id="email" />
        </div>
        <div class="mb-3">
          <label htmlFor="pincode" className="form-label">
            Pin code
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      </>
  );
}

export default LoginScreen;
