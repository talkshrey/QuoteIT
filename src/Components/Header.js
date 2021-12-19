import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex direction-row-reverse justify-end pr-24 items-around w-full bg-black-500">
            <div> <Link to="/" className="text-white px-2 text-lg"> Home </Link> </div>
            <div> <Link to="/login" className="text-white px-2 text-lg"> Sign In </Link> </div>
            <div> <Link to="/register" className="text-white px-2 text-lg"> Sign Up </Link> </div>
        </div>
    )
}