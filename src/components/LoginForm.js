import React, { useState } from "react";

export default function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", pass: "" });

  const handleChange = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="card mt-3 container-sm">
      <article className="card-body">
        <h4 className="card-title mb-4 mt-1">S'authentifier</h4>
        <form onSubmit={handleChange}>
          {error !== "" ? (
            <div className="form-group">
              <p>{error}</p>
            </div>
          ) : (
            ""
          )}
          <div className="form-group">
            <label>Utilisateur</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={details.pass}
              onChange={(e) => setDetails({ ...details, pass: e.target.value })}
            />
          </div>
          <div className="form-group">
            <div className="checkbox">
              <label>
                {" "}
                <input type="checkbox" /> Sauver mot de passe{" "}
              </label>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Ok
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}
