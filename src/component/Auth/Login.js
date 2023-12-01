import React, { useState, useContext } from "react";
import axios from "axios";
import Header from "../Bar/Header";
import {User} from '../context/context'
// import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState();
  const [pass, setPassword] = useState("");
  const [error, setError] = useState(false);

  const UserShow = useContext(User)
  console.log(UserShow);

  // const Nav = useNavigate();

  const submit = async (e) => {
    let Flag = true;
    e.preventDefault();
    setError(true);

    if (email === "" || pass.length <= 8) {
      Flag = false;
    } else {
      Flag = true;
    }

    try {
      if (Flag) {
        let data = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: pass,

        });

        const token = data.data.data.token
        const userDetails = data.data.data.user

        UserShow.setAuth({token, userDetails})
        // Nav("/dashbord");

      }
    } catch (error) {
      console.log(error);
      // Handle other errors if needed
    }
  };
  return (
    <>
      <div>
        <Header />
        <div className="Father">
          <div className="container">
            <div className="Form" style={{ paddingTop: "30px",  paddingBottom: "40px" }}>
              <form onSubmit={submit}>
                <div className="form-group">
                  <label className="email"   htmlFor="email">Email :</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* {emailError === 422  && error &&  <p className="error">Email is tacken</p>} */}
                </div>
                <div className="form-group">
                  <label className="email" htmlFor="email">password</label>
                  <input
                    type="password"
                    className="form-control"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                    value={pass}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {pass.length <= 8  && error &&  <p className="error">password must be at least 8 characters</p>}
                </div>
              </form>
            </div>
              <button onClick={submit} type="submit" className="btn-1 ">
                login
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
