import { useState } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { TextField } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useHistory } from "react-router-dom";
import login from '../Assets/Images/login.png'

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

        <div className="w-screen h-max flex flex-row justify-center align-center">            
            <div className="flex flex-row mt-20">
                <div className="p-8 w-96 h-96 rounded-l-md bg-white">
                    <img src={login} alt="login"/>
                </div>
            <form className="flex flex-col px-20 py-20 rounded-r-md" style={{backgroundColor: '#F5796D'}} onSubmit={handleSubmit}>
                <div className="text-center pt-3 text-2xl"> <p className="font-sans font-bold" style={{color:'#1A1B2F'}}> Welcome Back </p> </div>
                <div className="p-5">
                    <br/>
                    <div className="flex flex-row justify-around items-center">
                        <MailOutlineIcon sx={{color: '#1b3358', padding:'5px', marginRight:'10px'}} fontSize="large"/>
                        <TextField label="Email" className="rounded-md" sx={{width:'250px', backgroundColor:'white'}} onChange={e=>setName(e.target.value)}/>
                    </div>
                </div>
                <div className="p-5">
                    <br/>
                    <div className="flex flex-row justify-around items-center">
                        <VisibilityOutlinedIcon sx={{color: '#1b3358', padding:'5px', marginRight:'10px'}} fontSize="large"/>
                        <TextField label="Password" type="password" className="rounded-md" sx={{width:'250px', backgroundColor:'white'}} id="password" onChange={e=>setPass(e.target.value)}/>
                    </div> 
                </div>
                <center> <button type="submit" style={{backgroundColor:'#1A1B2F'}} className="rounded-md px-8 text-lg text-white py-2 w-max font-sans"> Submit </button> </center>
            </form>
            </div>        
        </div>
    )
}