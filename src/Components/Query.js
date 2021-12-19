import { useState } from "react"
import { TextField } from "@mui/material";

export default function Query() {

    const [name, setName] = useState('')
    const [cat, setCat] = useState('')    
    const [sub, setSub] = useState('')
    const [model, setModel] = useState('')

    var key = localStorage.getItem('token')


    const handleSubmit = async e => {
        e.preventDefault()

        setCat(document.getElementById("prod-cat"))
        setName(document.getElementById("prod-name"))
        setModel(document.getElementById("prod-model"))
        setSub(document.getElementById("prod-subcat"))

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${key}`);
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
        "productName": name,
        "productCategory": cat,
        "productSubCategory": sub,
        "productModel": model
        });
    
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    
        await fetch("http://localhost:3001/api/query/new", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
    }

    console.log(key)

    return (
        <div className="flex flex-col items-center">
            <div className="px-5 py-10 text-lg text-white"> Checkout </div>
            <div>
                <form className="h-96 w-max flex flex-col bg-white rounded-md p-5" onSubmit={handleSubmit}>
                    <TextField label="Product Name" sx={{width:'250px', padding:'3px'}} id="prod-name"/>
                    <TextField label="Product Category" sx={{width:'250px', padding:'3px'}} id="prod-cat"/>
                    <TextField label="Product Sub Category" sx={{width:'250px', padding:'3px'}} id="prod-subcat"/>
                    <TextField label="Product Model" sx={{width:'250px', padding:'3px'}} id="prod-model"/>
                    <button className="bg-red-200 px-5 py-2 rounded-md align-center"> Submit query </button>
                </form>
            </div>       
        </div>
    )
}