import { Link } from "react-router-dom"
import laptop from "../Assets/Images/laptop.png"
import Popup from "reactjs-popup";
import { useEffect, useState } from "react";

export default function Pops(props) {

    return (
        <div>
            <Popup open={props.o} closeOnDocumentClick onClose={props.c} position="right top">
                <div className="w-max h-max bg-gradient-to-r from-red-200 to-blue-500 rounded-md p-5">
                    <button className="rounded-full bg-white text-black px-2 text-3xl" onClick={props.c}> &times; </button>
                    <div className="flex flex-row justify-around">
                        <Link to="laptop1"> <p> Laptop 1 </p> <img src={laptop} alt="laptop" className="w-32"/> </Link>
                        <Link to="laptop2"> <p> Laptop 2 </p> <img src={laptop} alt="laptop" className="w-32"/> </Link>
                        <Link to="laptop3"> <p> Laptop 3 </p> <img src={laptop} alt="laptop" className="w-32"/> </Link>
                    </div>
                    <button/>
                </div>
            </Popup>
        </div>
    )
}