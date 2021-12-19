import { Link } from "react-router-dom"

export default function Header2() {

    return (
            <div className="flex direction-row-reverse justify-end pr-24 items-around bg-black-500">
                <div> <Link to="/product/appliances" className="text-white px-2 text-lg"> Appliances </Link> </div>
                <div> <Link to="/product/fashion" className="text-white px-2 text-lg"> Fashion </Link> </div>
                <div> <Link to="/product/raw" className="text-white px-2 text-lg"> Raw </Link> </div>
                <div> <Link to="/product/cars" className="text-white px-2 text-lg"> Cars </Link> </div>
                <div> <Link to="../userDash" className="text-white px-2 text-lg"> Dashboard </Link> </div>
            </div>
    )
}