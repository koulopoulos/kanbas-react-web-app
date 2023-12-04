import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="w-50 d-flex flex-column align-items-start gap-1">
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
        placeholder="username"
        className="form-control"
      />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
        placeholder="password"
        className="form-control"
      />
      <button onClick={signup} className="btn btn-primary">
        Signup
      </button>
    </div>
  );
}

export default SignUp;
