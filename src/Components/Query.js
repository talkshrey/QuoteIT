import { useState } from "react"
import { TextField } from "@mui/material";

export default function Query(props) {

    const [name, setName] = useState('')
    const [cat, setCat] = useState('')    
    const [sub, setSub] = useState('')
    const [model, setModel] = useState('')


    const handleSubmit = async e => {
        e.preventDefault()

        setCat(document.getElementById("prod-cat"))
        setName(document.getElementById("prod-name"))
        setModel(document.getElementById("prod-model"))
        setSub(document.getElementById("prod-subcat"))

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJlM2IyYmRjMjg0NzE3OTJkNGU3OWMiLCJpYXQiOjE2Mzk4NTY5MzksImV4cCI6MTY3MTM5MjkzOX0.EEiMifKbD0MF9_c6oW7OOIK40xX51tsSHHnCgdVFbow");
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
        "productName": "bosch",
        "productCategory": "appliance",
        "productSubCategory": "fridge",
        "productModel": "model_a"
        });
    
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    
        await fetch("http://localhost:3001/api/query/new", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <div className="flex flex-col items-center">
            <div className="px-5 py-10 text-lg text-white"> Checkout </div>
            <div>
                <form className="h-96 w-96 bg-white rounded-md p-5" onSubmit={handleSubmit}>
                    <TextField label="Product Name" sx={{width:'250px', padding:'3px'}} id="prod-name" value="bosch"/>
                    <TextField label="Product Category" sx={{width:'250px', padding:'3px'}} id="prod-cat" value={props.cat}/>
                    <TextField label="Product Sub Category" sx={{width:'250px', padding:'3px'}} id="prod-subcat" value="fridge"/>
                    <TextField label="Product Model" sx={{width:'250px', padding:'3px'}} id="prod-model" value="test"/>
                    <button className="bg-red-200 px-5 py-2 rounded-md align-center"> Submit query </button>
                </form>
            </div>       
        </div>
    )
}