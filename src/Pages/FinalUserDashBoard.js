import { useState, useEffect } from "react";
import Header2 from "../Components/Header2";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function FinalUserDashBoard() {

    var key = localStorage.getItem('token')
    const [quote, setQuote] = useState([{ 0: 'hello' }, { 1: 'world' }])

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${key}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("http://localhost:3001/api/user/client/dashboard", requestOptions)
            .then(response => response.json())
            .then(result => {
                setQuote(result.data)
                console.log(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])



    return (
        <div>
            <Header2 />
            <div className="text-white"> Dash Board </div>
            <div className="grid grid-rows-3 grid-flow-col gap-5 hover:scale-125">
            {quote.map((items)=> 
                <Card sx={{ maxWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {items.companyName}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {items.quoteOf}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {items.quotedToEmail}
                        </Typography>
                        <Typography variant="body2">
                            {items.quotedToName}
                            <br />
                        </Typography>
                        <Typography variant="body2">
                            {items.vendorContact}
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
                )}
            </div>
        </div>
    )
}