import { useState, useEffect } from "react";
import Header2 from "../Components/Header2";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function FinalUserDashBoard() {

    const [quote, setQuote] = useState({ 1: 'hello' })

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJlM2IyYmRjMjg0NzE3OTJkNGU3OWMiLCJpYXQiOjE2Mzk4NjcwNDcsImV4cCI6MTY3MTQwMzA0N30.gAYUoakAHMKKltkWlVYikGrcReNmeSAC8U7TRUTmkhg");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    useEffect(()=> {
        fetch("http://localhost:3001/api/user/client/dashboard", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })

    return (
        <div>
            <Header2 />
            <p className="text-white"> Dash Board </p>
            <div className="">
                <Card sx={{ maxWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            benevolent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}