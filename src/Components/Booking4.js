import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import cement from "../Assets/Images/cement.png"
import Header2 from './Header2';
import plates from '../Assets/Images/plates.png'
import wires from '../Assets/Images/wires.png'
import wood from '../Assets/Images/wood.png'
import raw from '../Assets/Images/raw.jpeg'
import CloseIcon from '@mui/icons-material/Close';
// import cloth from '../Assets/Images/cloth.png'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Booking4() {

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [data, setData] = useState([0, 1, 2, 3, 4])
    const closeModal = () => setOpen(false)
    const closeModal2 = () => setOpen2(false)
    const closeModal3 = () => setOpen3(false)
    const closeModal4 = () => setOpen4(false)

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    const hist = useHistory()

    useEffect(() => {
        fetch("https://glacial-harbor-01488.herokuapp.com/category-web", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result[0]["category-name"])
            })
            .catch(error => console.log('error', error))
            // eslint-disable-next-line
    }, [])

    useEffect(() => {
        fetch("https://glacial-harbor-01488.herokuapp.com/sub-category-raw-materials", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
            .catch(error => console.log('error', error))
            // eslint-disable-next-line
    }, [])

    async function buy(e) {
        sessionStorage.setItem('model', document.getElementById("model").innerHTML)
        sessionStorage.setItem('sub', document.getElementById("but").innerHTML)
        sessionStorage.setItem('cat', "Raw")
        console.log(e.target.value)
        hist.push('/query')
    }

    return (
        <div className="text-white">
            <Header2 />
            <div className="p-12">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item row={2} xs={4}>
                            <Item sx={{ height: '185px', backgroundImage: 'linear-gradient(to right, #F5796D, #FECACA)' }}>
                                {data[0].subCatName}
                                <div className="flex flex-row items-center justify-around">
                                    <img src={cement} alt="laptop" className="w-32" />
                                    <button type="button" id="but" className="px-5 py-3 bg-white rounded-md" onClick={() => setOpen(o => !o)}> {data[0].subCatName} </button>
                                    <Popup open={open} closeOnDocumentClick onClose={closeModal} position="right top">
                                        <div className="w-max h-max bg-gradient-to-r from-red-200 to-blue-500 rounded-md p-5">
                                            <button className="rounded-full bg-white text-black px-3 text-2xl" onClick={closeModal}> &times; </button>
                                            <div className="flex flex-row justify-around">
                                                <p id='model'> Cement 1 </p> <img src={cement} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                <p id='model'> Cement 2 </p> <img src={cement} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                <p id='model'> Cement 3 </p> <img src={cement} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                            </div>
                                        </div>
                                    </Popup>
                                </div>
                            </Item>
                            <br />
                            <Item sx={{ height: '185px', backgroundImage: 'linear-gradient(to right, #F5796D, #FECACA)' }}>
                                {data[1].subCatName}
                                <div className="flex flex-row items-center justify-around">
                                    <img src={plates} alt="laptop" className="w-32" />
                                    <button type="button" id="but" className="px-5 py-3 bg-white rounded-md" onClick={() => setOpen2(o => !o)}> {data[1].subCatName} </button>
                                    <Popup open={open2} closeOnDocumentClick onClose={closeModal2} position="right top">
                                        <div className="w-max h-max bg-gradient-to-r from-red-200 to-blue-500 rounded-md p-5">
                                            <CloseIcon onClick={closeModal2}/>
                                            {/* <button className="rounded-full bg-white text-black text-2xl" onClick={closeModal2}> &times; </button> */}
                                            <div className="flex flex-row justify-around">
                                                <p id='model'> Plate 1 </p> <img src={plates} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                <p id='model'> Plate 2 </p> <img src={plates} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                <p id='model'> Plate 3 </p> <img src={plates} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                            </div>
                                            <button />
                                        </div>
                                    </Popup>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item sx={{ height: '400px', backgroundImage: 'linear-gradient(#F5796D, #FECACA)' }}>
                                <p className='text-blue-1000 text-3xl font-bold'> Raw </p>
                                <img src={raw} alt='raw' className='w-6/12 ml-48' />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '185px', backgroundImage: 'linear-gradient(to right, #F5796D, #FECACA)' }}>
                                {data[2].subCatName}
                                <div className="flex flex-row items-center justify-around">
                                    <img src={wires} alt="laptop" className="w-32" />
                                    <button type="button" id="but" className="px-5 py-3 rounded-md bg-white" onClick={() => setOpen3(o => !o)}> {data[2].subCatName} </button>
                                    <Popup open={open3} closeOnDocumentClick onClose={closeModal3} position="right top">
                                        <div className="w-max h-max bg-gradient-to-r from-red-200 to-indigo-900 rounded-md p-5">
                                            <button className="rounded-full bg-white text-black px-2 text-3xl" onClick={closeModal3}> &times; </button>
                                            <div className="flex flex-row justify-around">
                                                <p id='model'> Wire 1 </p> <img src={wires} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                <p id='model'> Wire 2 </p> <img src={wires} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                <p id='model'> Wire 3 </p> <img src={wires} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                            </div>
                                            <button />
                                        </div>
                                    </Popup>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '185px', backgroundImage: 'linear-gradient(to right, #F5796D, #FECACA)' }}>
                                {data[3].subCatName}
                                <div className="flex flex-row items-center justify-around">
                                    <img src={wood} alt="laptop" className="w-32" />
                                    <button type="button" id="but" className="px-5 py-3 bg-white rounded-md" onClick={() => setOpen4(o => !o)}> {data[3].subCatName} </button>
                                    <Popup open={open4} closeOnDocumentClick onClose={closeModal4} position="right top">
                                        <div className="w-max h-max bg-gradient-to-r from-white to-blue-500 rounded-md p-5">
                                            <CloseIcon onClick={closeModal4}/>
                                            {/* <button className="rounded-full bg-white text-black text-2xl" onClick={closeModal4}> &times; </button> */}
                                            <div className="flex flex-row justify-around">
                                                <p id='model'> Wood 1 </p> <img src={wood} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                <p id='model'> Wood 2 </p> <img src={wood} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                <p id='model'> Wood 3 </p> <img src={wood} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                            </div>
                                            <button />
                                        </div>
                                    </Popup>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item sx={{ height: '185px', backgroundImage: 'linear-gradient(to right, #F5796D, #FECACA)' }}>
                                {data[4].subCatName}
                                    <div className="flex flex-row items-center justify-around">
                                        <img src={wood} alt="laptop" className="w-32" />
                                        <button type="button" id="but" className="px-5 py-3 bg-white rounded-md" onClick={() => setOpen4(o => !o)}> {data[4].subCatName} </button>
                                        <Popup open={open4} closeOnDocumentClick onClose={closeModal4} position="right top">
                                            <div className="w-max h-max bg-gradient-to-r from-white to-blue-500 rounded-md p-5">
                                                <CloseIcon onClick={closeModal4}/>
                                                {/* <button className="rounded-full bg-white text-black text-2xl" onClick={closeModal4}> &times; </button> */}
                                                <div className="flex flex-row justify-around">
                                                    <p id='model'> Wood 1 </p> <img src={wood} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                    <p id='model'> Wood 2 </p> <img src={wood} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                    <p id='model'> Wood 3 </p> <img src={wood} onClick={buy} style={{ cursor: 'pointer' }} alt="laptop" className="w-32" />
                                                </div>
                                                <button />
                                            </div>
                                        </Popup>
                                    </div>
                                </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}