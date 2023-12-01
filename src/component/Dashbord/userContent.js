import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserContent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/user/show")
        .then(response => response.json())
        .then((data) => {
            setUsers(data)
        })
    }, [])

   const deleteUser =  async(id) => {
       await axios.delete (`http://127.0.0.1:8000/api/user/delete/${id}`
       , {
           headers: {
               'Content-Type': 'application/json',
              'Authorization' : `Bearer + token`
           }
       }
       )
       window.location.reload();
    }

  return (
    <div>
      <div className="container">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">User</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                    <>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    <FontAwesomeIcon icon={faTrash} className="me-3" style={{color:"red" , cursor:"pointer"}} onClick={() => deleteUser(user.id)} />
                    <Link to={`${user.id}`}>
                    <FontAwesomeIcon icon={faEdit} style={{color:"blue" , cursor:"pointer"}} />
                    </Link>
                    </td>
                    </>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
