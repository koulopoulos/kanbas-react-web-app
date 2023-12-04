import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  const save = async () => {
    await client.updateUser(account);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="w-50 d-flex flex-column gap-1">
      <h1>Account</h1>
      {account && (
        <>
          <div className="d-flex flex-column gap-1">
            <input
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
              type="password"
              placeholder="Password"
              className="form-control"
            />
            <input
              value={account.firstName}
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
              placeholder="First name"
              className="form-control"
            />
            <input
              value={account.lastName}
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
              placeholder="Last name"
              className="form-control"
            />
            <input
              value={account.dob}
              onChange={(e) => setAccount({ ...account, dob: e.target.value })}
              className="form-control"
              type="date"
            />
            <input
              value={account.email}
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
              type="email"
              placeholder="email"
              className="form-control"
            />
            <select
              onChange={(e) => setAccount({ ...account, role: e.target.value })}
              className="form-select"
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <button onClick={save} className="btn btn-primary w-100">
            Save
          </button>
          <button onClick={signout} className="btn btn-danger w-100">
            Signout
          </button>
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </>
      )}
    </div>
  );
}
export default Account;
