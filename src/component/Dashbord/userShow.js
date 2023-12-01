import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../Forms/Form";

export default function UserShow() {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

    const id = window.location.pathname.split("/").slice(-1)[0]

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
        .then(response => response.json())
        .then((data) => {
            setEmail(data[0].email)
            setName(data[0].name)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])



    return (

      <Form  button= "Update" name= {name} email= {email} endPoint = {`user/update/${id}`} />

    )
}