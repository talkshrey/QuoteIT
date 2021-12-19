import { useState } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { TextField } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function RegisterForm() {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [conPass, setConfPass] = useState('')
    const [cont, setCont] = useState(9833447698)
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')    
    const [role, setRole] = useState('')
    const [loc, setLoc] = useState('')

    const handleSubmit = async e => {

        e.preventDefault()

        pass === conPass? setConfPass(pass) : alert('Password do not match')

        var myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
    
        var raw = JSON.stringify({
            "name": name,
            "email": email,
            "password": conPass,
            "contact":cont,
            "role":role,
            "location":loc
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    
        console.log(JSON.stringify(raw))
        
        fetch("http://localhost:3001/api/user/register/", requestOptions)
            .then(response => response.text())
            .then(result => {
                setToken(result)
                console.log(result)
            }
            )
            .catch(error => console.log('error', error));
        
        localStorage.setItem('token', JSON.stringify(token))
    }

    return (
        
        <div className="w-max h-max flex flex-row align-center">
            <form className="flex flex-col px-20 py-4 bg-gray-100 rounded-md" onSubmit={handleSubmit}>
                <div className="text-center pt-3 text-black text-xl"> <b> Register page </b> </div>
                <div className="grid grid-rows-4 grid-flow-col">
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <PersonOutlineOutlinedIcon sx={{color: '#E33E5A'}} fontSize="large"/>
                            <TextField label="Username" sx={{width:'250px'}} onChange={e=>setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <VisibilityOutlinedIcon sx={{color: '#E33E5A'}} fontSize="large"/>
                            <TextField label="Password" sx={{width:'250px'}} onChange={e=>setPass(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <LocalPhoneOutlinedIcon sx={{color: '#E33E5A'}} fontSize="large"/>
                            <TextField label="Contact" sx={{width:'250px'}} onChange={e=>setCont(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <MailOutlineIcon sx={{color: '#E33E5A'}} fontSize="large"/>
                            <TextField label="Email" sx={{width:'250px'}} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <VisibilityOutlinedIcon sx={{color: '#E33E5A'}} fontSize="large"/>
                            <TextField label="Confirm Password" sx={{width:'250px'}} onChange={e=>setConfPass(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <MailOutlineIcon sx={{color: '#E33E5A'}} fontSize="large"/>
                            <TextField label="Role" sx={{width:'250px'}} onChange={e=>setRole(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <MailOutlineIcon sx={{color: '#E33E5A'}} fontSize="large"/>
                            <TextField label="Location" sx={{width:'250px'}} onChange={e=>setLoc(e.target.value)}/>
                        </div>
                    </div>
                </div>
            <button type="submit" className="rounded-md px-4 py-1 my-3 bg-red-200 w-max hover:bg-red-500"> Submit </button>
            </form>
        </div>
    )
}