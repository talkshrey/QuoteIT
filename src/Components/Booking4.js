import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";
import cement from "../Assets/Images/cement.png"
import Header2 from './Header2';
import plates from '../Assets/Images/plates.png'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Booking4(props) {

    const [open, setOpen] = useState(false)
    const [data, setData] = useState([0,1,2,3,4])
    const [raw, setRaw] = useState([{"cement":[0,1,2]}],[{"plates":[0,1,2]}])
    const closeModal = () => setOpen(false)

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
    
    useEffect(()=>{
        fetch("http://localhost:5000/category-web", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result[0]["category-name"])
        })
        .catch(error => console.log('error', error))
    }, [])

    useEffect(()=>{
        fetch("http://localhost:5000/sub-category-raw-materials", requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result)

        })
        .catch(error => console.log('error', error))
    }, [])

    useEffect(()=>{
        fetch("http://localhost:5000/raw_api", requestOptions)
        .then(response => response.json())
        .then(result => {
            setRaw(result)

        })
        .catch(error => console.log('error', error))
    }, [])

    return (
        <div className="text-white">
            <Header2/>
            <div className="p-12">
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item row={2} xs={4}>
                    <Item sx={{height:'185px'}}>
                        {data[0].subCatName}
                        <div className="flex flex-row items-center justify-around">
                            <img src={cement} alt="laptop" className="w-32"/>
                            <button type="button" className="px-5 py-3 bg-red-200 rounded-md" onClick={() => setOpen(o => !o)}> {data[0].subCatName} </button>
                            <Popup open={open} closeOnDocumentClick onClose={closeModal} position="right top">
                                <div className="w-max h-max bg-gradient-to-r from-red-200 to-blue-500 rounded-md p-5">
                                    <button className="rounded-full bg-white text-black px-2 text-3xl" onClick={closeModal}> &times; </button>
                                    <div className="flex flex-row justify-around">
                                        <Link to={`${raw[0].cement[0]}`}> <p> {raw[0].cement[0]}  </p> <img src={cement} alt="laptop" className="w-32"/> </Link>
                                        <Link to={`${raw[0].cement[1]}`}> <p> {raw[0].cement[1]}  </p> <img src={cement} alt="laptop" className="w-32"/> </Link>
                                        <Link to={`${raw[0].cement[2]}`}> <p> {raw[0].cement[2]}  </p> <img src={cement} alt="laptop" className="w-32"/> </Link>
                                    </div>
                                    <button/>
                                </div>
                            </Popup>
                        </div>
                    </Item>
                    <br/>
                        <Item sx={{height:'185px'}}>
                            {data[1].subCatName}
                            <div className="flex flex-row items-center justify-around">
                                <img src={plates} alt="laptop" className="w-32"/>
                                <button type="button" className="px-5 py-3 bg-red-200 rounded-md" onClick={() => setOpen(o => !o)}> {data[1].subCatName} </button>
                            </div>                
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item sx={{height:'400px'}}>{props.url}</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{height:'185px'}}>
                            {data[2].subCatName}
                            
                            <button type="button" className="px-5 py-3 bg-red-200 rounded-md" onClick={() => setOpen(o => !o)}> {data[1].subCatName} </button>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{height:'185px'}}>{data[3].subCatName}</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{height:'185px'}}>{data[4].subCatName}</Item>
                    </Grid>
                </Grid>
                </Box>
            </div>
        </div>
    )
}