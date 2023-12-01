
import React, {   useContext, useEffect, useState } from "react";
import {User} from '../context/context'
import axios from "axios";
export default function Form(props) {

    const [email, setEmail] = useState(props.email);
    const [name, setName] = useState(props.name);
    const [pass, setPassword] = useState("");
    const [passR, setRpassword] = useState("");
    // const [error, setError] = useState(false);
    // const [Flag, setFlag] = useState(true);
    // const [emailError, setEmailError] = useState(false);

    const UserShow = useContext(User)
    console.log(UserShow)


    useEffect(() => {
        setEmail(props.email)
        setName(props.name)
    }, [props])

    const submit = async (e) => {
      try {

          let data = await axios
          .post(`http://127.0.0.1:8000/api/${props.endPoint}`, {
            name: name,
            email: email,
            password: pass,
            password_confirmation: passR,
          })
          const token = data.data.data.token
          const userDetails = data.data.data.user

          UserShow.setAuth({token, userDetails})
          window.location.pathname = "/Dashbord/users"
          console.log(data)
        } catch (error) {
          console.log(error);
        }
    }
    return (
        <div>
        <div className="Father">
          <div className="container">
            <div className="Form" style={{ paddingTop: "30px",  paddingBottom: "40px" }}>
              <form onSubmit={submit}>
                <div className="form-group">
                  <label className="email" htmlFor="email">Name</label>
                  <input
                    type="name"
                    className="form-control"
                    id=""
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {/* {name === ""  && error &&  <p className="error">Name is required</p>} */}
                </div>
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
                  {/* {pass.length <= 8  && error &&  <p className="error">password must be at least 8 characters</p>} */}
                </div>
                <div className="form-group">
                  <label className="email" htmlFor="email">reapeat password</label>
                  <input
                    type="password"
                    className="form-control"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder=" reapeat Password"
                    value={passR}
                    onChange={(e) => setRpassword(e.target.value)}
                  />
                  {/* {pass !== passR && error &&  <p className="error">password dosn't match</p>} */}
                </div>
              </form>
            </div>
              <button onClick={submit} type="submit" className="btn-1 ">
                {props.button}
              </button>
            </div>
          </div>
        </div>
    )
}