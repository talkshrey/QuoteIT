import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

    export default function ProfileForm() {

    const [prof, setProf] = useState('')

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI4YTY3MTkwNDJhNDAyODZjMWM0ZmMiLCJpYXQiOjE2Mzk0OTExODUsImV4cCI6MTY3MTAyNzE4NX0.JGIySmdQlFJl_E-VnGGHYKkTnYP7oavsVpTl9DtPWmU");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(()=> {
        fetch("https://stormy-ravine-56780.herokuapp.com/api/user/me", requestOptions)
        .then(response => response.json())
        .then(result => setProf(result.data))
        .catch(error => console.log('error', error));
        // eslint-disable-next-line
    },[])

    return (
        <div>
            <h3> Profile </h3>
            <div>{prof._id}</div>
            <div>{prof.name}</div>
            <div>{prof.email}</div>
            <div>{prof.contact}</div>
            <div>{prof.role}</div>

            <Link to={`/update/${prof._id}`}> <button className="px-4 py-2 bg-red-200 rounded-md"> Update </button> </Link>
            
        </div>
    )
}