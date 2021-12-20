import { useState } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import login from "../Assets/Images/login.png"
import { TextField } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useHistory } from "react-router-dom";

export default function LoginForm() {

    var hist = useHistory()

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [tok, setTok] = useState()

    const handleSubmit = async e => {

        e.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": name,
        "password": pass
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:3001/api/user/login/", requestOptions)
        .then(response => response.text())
        .then(result => {
            setTok(result)
            console.log(result)
        })
        .catch(error => console.log('error', error));

        hist.push('/vendor')
    }

    localStorage.setItem('token', tok)

    return (

        <div className="w-screen h-max flex flex-row align-center">            
            <div className="p-8"> <img src={login} alt="login"/> </div>
            <form className="flex flex-col px-20 pt-20 bg-gray-100 rounded-md" style={{backgroundColor: '#FECACA'}} onSubmit={handleSubmit}>
                <div className="text-center pt-5 text-black text-xl"> <p className="font-sans font-bold"> Welcome Back </p> </div>
                <div className="p-5">
                    <br/>
                    <div className="flex flex-row justify-around items-center">
                        <MailOutlineIcon sx={{color: '#1b3358'}} fontSize="large"/>
                        <TextField label="Email" sx={{width:'250px', backgroundColor:'white'}} onChange={e=>setName(e.target.value)}/>
                    </div>
                </div>
                <div className="p-5">
                    <br/>
                    <div className="flex flex-row justify-around items-center">
                        <VisibilityOutlinedIcon sx={{color: '#1b3358'}} fontSize="large"/>
                        <TextField label="Password" sx={{width:'250px', backgroundColor:'white'}} id="password" onChange={e=>setPass(e.target.value)}/>
                    </div> 
                </div>
                <center> <button type="submit"  className="rounded-md px-8 text-lg py-2 w-max font-sans"> Submit </button> </center>
            </form>
        </div>
    )
}