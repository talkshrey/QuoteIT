import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function FinalVendor() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [tax, setTax] = useState('')

    const handleSubmit = async e => {

        e.preventDefault()
        // var key2 = localStorage.getItem('tok')
        var key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJlMTgyNzU0MmIzZDYyNzdlOGM3NDQiLCJpYXQiOjE2Mzk5NDI4OTYsImV4cCI6MTY3MTQ3ODg5Nn0.e6TZ1vBSHWrfLTjQdDmGsVlpjtyVgnC-WACas6CX_0M'
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${key}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "rawPrice": price,
            "afterTaxPrice": tax,
            "quotedToName": name,
            "quotedToEmail": email,
            "quoteOf": model
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/quotation/new/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [color3, setColor3] = useState('')
    const [color4, setColor4] = useState('')
    const [color5, setColor5] = useState('')
    const [color6, setColor6] = useState('')

    function colorChange1() {
        setColor1('#FECACA')
    }

    function colorChange2() {
        setColor2('#FECACA')
    }

    function colorChange3() {
        setColor3('#FECACA')
    }

    function colorChange4() {
        setColor4('#FECACA')
    }

    function colorChange5() {
        setColor5('#FECACA')
    }

    function colorChange6() {
        setColor6('#FECACA')
    }
    return (
        <div className='flex flex-row'>
            <div className="text-white grid grid-rows-3 grid-flow-col gap-4 p-10 w-6/12">
                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color1 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Username 1
                            </Typography>
                            <Typography variant="h5" component="div">
                                User Contact 1
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Cement 1
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange1} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color2 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Username 2
                            </Typography>
                            <Typography variant="h5" component="div">
                                User Contact 2
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Cement 2
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange2} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color2 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Username 3
                            </Typography>
                            <Typography variant="h5" component="div">
                                User Contact 3
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Cement 1
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange3} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color2 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Username 4
                            </Typography>
                            <Typography variant="h5" component="div">
                                User Contact 4
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Cement 2
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange2} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color4 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Username 5
                            </Typography>
                            <Typography variant="h5" component="div">
                                User Contact 5
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Cement 3
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange5} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color5 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Username 6
                            </Typography>
                            <Typography variant="h5" component="div">
                                User Contact 6
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Cement 2
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange6} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>

                    </Card>
                </div>

            </div>
            <div className='bg-white p-10'>
                <form onSubmit={handleSubmit} className='flex flex-col justify-around p-5 h-max w-max'>
                    <div className='p-5'>
                        <label>
                            Client Name
                        </label>
                        <br/>
                        <input onChange={e => setName(e.target.value)} placeholder='Name' />
                    </div>
                    <div className='p-5'>
                        <label>
                            Client Email
                        </label>
                        <br/>
                        <input onChange={e => setEmail(e.target.value)} placeholder='Email' />
                    </div>
                    <div className='p-5'>
                        <label>
                            Model
                        </label>
                        <br/>
                        <input onChange={e => setModel(e.target.value)} placeholder='Model' />
                    </div>
                    <div className='p-5'>
                        <label>
                            Raw Price
                        </label>
                        <br/>
                        <input onChange={e => setPrice(e.target.value)} placeholder='Price' />
                    </div>
                    <div className='p-5'>
                        <label>
                            Price after tax
                        </label>
                        <br/>
                        <input onChange={e => setTax(e.target.value)} placeholder='Tax' />
                    </div>
                    <button type='submit'> Submit </button>
                </form>
            </div>
        </div>
    )
}