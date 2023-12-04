import { Routes, Route, Navigate, Link, NavLink } from "react-router-dom";
import SignIn from "../users/SignIn";
import SignUp from "../users/SignUp";
import Account from "../users/Account";
import UserTable from "../users/Table";

function Project() {
  return (
    <div className="row w-100">
      <div className="col-2">
        <div className="list-group">
          <NavLink
            className={({ isActive, isPending }) =>
              `list-group-item ${isActive && "active"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              `list-group-item ${isActive && "active"}`
            }
            to="/project/signin"
          >
            SignIn
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              `list-group-item ${isActive && "active"}`
            }
            to="/project/signup"
          >
            SignUp
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              `list-group-item ${isActive && "active"}`
            }
            to="/project/account"
          >
            Account
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              `list-group-item ${isActive && "active"}`
            }
            to="/project/admin/users"
          >
            Users
          </NavLink>
        </div>
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  );
}

export default Project;
