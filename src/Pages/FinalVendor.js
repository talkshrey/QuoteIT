import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function FinalVendor() {

    var hist = useHistory()

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

        hist.push('../')
    }

    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [color3, setColor3] = useState('')
    const [color4, setColor4] = useState('')
    const [color5, setColor5] = useState('')
    const [color6, setColor6] = useState('')

    function colorChange1() {
        setColor1('#F5796D')
    }

    function colorChange2() {
        setColor2('#F5796D')
    }

    function colorChange3() {
        setColor3('#F5796D')
    }

    function colorChange4() {
        setColor4('#F5796D')
    }

    function colorChange5() {
        setColor5('#F5796D')
    }

    function colorChange6() {
        setColor6('#F5796D')
    }
    return (
        <div className='flex flex-row'>
            <div className="text-white grid grid-rows-3 grid-flow-col gap-4 p-10 w-6/12">
                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color1 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Shrey Parekh
                            </Typography>
                            <Typography variant="h5" component="div">
                                UltraTech
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                9833447698
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange1} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color3 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Lokita Varma
                            </Typography>
                            <Typography variant="h5" component="div">
                                UltraTech
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                7045141518
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange3} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color5 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Yash Shah
                            </Typography>
                            <Typography variant="h5" component="div">
                                ACC Cement
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                9326549053
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange5} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color2 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Priyambi Hiran
                            </Typography>
                            <Typography variant="h5" component="div">
                                ACC Cement
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                887925321
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
                                Ankit Gupta
                            </Typography>
                            <Typography variant="h5" component="div">
                                ACC Cement
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                9834539485
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange4} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275, backgroundColor: color6 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Manav Kamdar
                            </Typography>
                            <Typography variant="h5" component="div">
                                Ambuja Cement
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                9823349852
                            </Typography>
                            <Typography variant="body2">
                                <br />
                            </Typography>
                            <button onClick={colorChange6} className='py-2 px-5 border-2 border-black rounded-md'> Post Quotation </button>
                        </CardContent>

                    </Card>
                </div>

            </div>
            <form onSubmit={handleSubmit} style={{backgroundColor:'#F5796D', marginTop:'42px', width:'550px', height:'620px'}} className='flex flex-col rounded-md justify-around p-5 items-center'>
                <div className='p-5 flex flex-row'>
                    <label className='p-2'>
                        Client Name
                    </label>
                    <br/>
                    <input className='p-2 ml-10 border-2 border-black rounded-md' onChange={e => setName(e.target.value)} placeholder='Name' />
                </div>
                <div className='p-5 flex flex-row'>
                    <label className='p-2'>
                        Client Email
                    </label>
                    <br/>
                    <input className='p-2 ml-10 border-2 border-black rounded-md' onChange={e => setEmail(e.target.value)} placeholder='Email' />
                </div>
                <div className='p-5 flex flex-row'>
                    <label className='p-2'>
                        Model
                    </label>
                    <br/>
                    <input className='p-2 ml-20 border-2 border-black rounded-md' onChange={e => setModel(e.target.value)} placeholder='Model' />
                </div>
                <div className='p-5 flex flex-row'>
                    <label className='p-2'>
                        Raw Price
                    </label>
                    <br/>
                    <input className='p-2 ml-16 border-2 border-black rounded-md' onChange={e => setPrice(e.target.value)} placeholder='Price' />
                </div>
                <div className='p-5 flex flex-row'>
                    <label className='p-2'>
                        Price after tax
                    </label>
                    <br/>
                    <input className='p-2 ml-10 border-2 border-black rounded-md' onChange={e => setTax(e.target.value)} placeholder='Tax' />
                </div>
                <button type='submit' style={{backgroundColor:'#1A1B2F'}} className="rounded-md px-8 text-lg text-white py-2 w-max font-sans"> Submit </button>
            </form>
        </div>
    )
}