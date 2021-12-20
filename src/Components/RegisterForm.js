import { useState } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { TextField } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { useHistory } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RegisterForm() {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [conPass, setConfPass] = useState('')
    const [cont, setCont] = useState(9833447698)
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')    
    const [role, setRole] = useState('')
    const [loc, setLoc] = useState('')

    const hist = useHistory()

    const handleSubmit = async e => {

        e.preventDefault()

        pass === conPass? setConfPass(pass) : alert('Password do not match')

        var myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
    
        var raw = JSON.stringify({
            "name": name,
            "email": email,
            "password": conPass,
            "contact": cont,
            "role": role,
            "location": loc
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
    
        console.log(raw)
        
        fetch("http://localhost:3001/api/user/register/", requestOptions)
            .then(response => response.text())
            .then(result => {
                setToken(result)
                console.log(result)
            }
            )
            .catch(error => console.log('hey', error));
        
        localStorage.setItem('tok', token)

        if(role==='vendor') {
            hist.push('/vendor')
        }
        else if(role==='client') {
            hist.push('/product/raw')
        }
    }

    function handleChange(e) {
        setRole(e.target.value)
        console.log(typeof(e.target.value))
    }

    return (
        
        <div className="w-max h-max flex flex-row align-center">
            <form className="flex flex-col px-20 py-4 bg-white rounded-md mt-20" style={{marginLeft:'400px'}} onSubmit={handleSubmit}>
                <div className="text-center font-sans font-bold pt-3 text-black text-xl"> Register page  </div>
                <div className="grid grid-rows-4 grid-flow-col">
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <PersonOutlineOutlinedIcon sx={{color: '#E33E5A', padding:'5px'}} fontSize="large"/>
                            <TextField label="Username" sx={{width:'250px'}} onChange={e=>setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <VisibilityOutlinedIcon sx={{color: '#E33E5A', padding:'5px'}} fontSize="large"/>
                            <TextField label="Password" sx={{width:'250px'}} onChange={e=>setPass(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <LocalPhoneOutlinedIcon sx={{color: '#E33E5A', padding:'5px'}} fontSize="large"/>
                            <TextField label="Contact" sx={{width:'250px'}} onChange={e=>setCont(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <MailOutlineIcon sx={{color: '#E33E5A', padding:'5px'}} fontSize="large"/>
                            <TextField label="Email" sx={{width:'250px'}} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <PersonAddAlt1OutlinedIcon sx={{color: '#E33E5A', padding:'5px'}} fontSize="large"/>
                            {/* <TextField label="Role" sx={{width:'250px'}} onChange={e=>setRole(e.target.value)}/> */}
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={role}
                                    label="Role"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value="client">client</MenuItem>
                                    <MenuItem value="vendor">vendor</MenuItem>
                                    </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <VisibilityOutlinedIcon sx={{color: '#E33E5A', padding:'5px'}} fontSize="large"/>
                            <TextField label="Confirm Password" sx={{width:'250px'}} onChange={e=>setConfPass(e.target.value)}/>
                        </div>
                    </div>     
                    <div className="p-5">
                        <br/>
                        <div className="flex flex-row justify-around items-center">
                            <LocationOnOutlinedIcon sx={{color: '#E33E5A', padding:'5px'}} fontSize="large"/>
                            <TextField label="Location" sx={{width:'250px', border:'#E33E5A'}} onChange={e=>setLoc(e.target.value)}/>
                        </div>
                    </div>
                </div>
            <button type="submit" className="rounded-md px-4 py-1 my-3 bg-red-200 w-max hover:bg-red-500"> Submit </button>
            </form>
        </div>
    )
}