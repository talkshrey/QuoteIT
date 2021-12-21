import { useState, useEffect } from "react";
import Header2 from "../Components/Header2";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function FinalUserDashBoard() {

    var arr = { 'companyName': 'none', 'rawPrice': 'none', 'afterTaxPrice': 'none', 'vendorContact': 'none', 'quoteOf': 'none' }

    var key = localStorage.getItem('tok')
    var key2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJlM2IyYmRjMjg0NzE3OTJkNGU3OWMiLCJpYXQiOjE2Mzk4NjcwNDcsImV4cCI6MTY3MTQwMzA0N30.gAYUoakAHMKKltkWlVYikGrcReNmeSAC8U7TRUTmkhg'
    const [quote, setQuote] = useState([arr])

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
            .catch(error => {
                console.log('error', error)
                setQuote([arr])
            });
    }, [])



    return (
        <div className="text-center">
            <Header2 />
            <div className="text-white"> Dash Board </div>
            <div className="grid grid-rows-3 grid-flow-col ml-24 mt-8 gap-5 hover:scale-125">
            {quote.map((items)=> 
                <Card sx={{ maxWidth: 275 }} style={{backgroundImage: 'linear-gradient(to right, #F5796D, #FECACA)'}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} component="div">
                           Quoted Price:  {items.rawPrice}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                           Price after tax: {items.afterTaxPrice}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                           Company Name: {items.companyName}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} component="div">
                           Vendor Name: {items.quoteOf}
                        </Typography>
                        <Typography variant="body2">
                          Vendor Contact:  {items.vendorContact}
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
                )}
            </div>
        </div>
    )
}