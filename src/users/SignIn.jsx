import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };

  return (
    <div className="w-50 d-flex flex-column align-items-start gap-1">
      <h1>Signin</h1>
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        placeholder="username"
        className="form-control"
      />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        placeholder="password"
        className="form-control"
      />
      <button onClick={signin} className="btn btn-primary">
        {" "}
        Signin{" "}
      </button>
    </div>
  );
}

export default SignIn;
