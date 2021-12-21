import { useHistory } from "react-router-dom"

export default function Query() {

    var hist = useHistory()

    var key = localStorage.getItem('tok')
    var model_name = sessionStorage.getItem('model')
    var sub_cat = sessionStorage.getItem('sub')
    var cat = sessionStorage.getItem('cat')

    const handleSubmit = async e => {
        e.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${key}`);
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            "productName": "name",
            "productCategory": cat,
            "productSubCategory": sub_cat,
            "productModel": model_name
        }),
        redirect: 'follow'
        };
    
        await fetch("http://localhost:3001/api/query/new", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        hist.push('../')
    }

    console.log(key)

    return (
        <div className="flex flex-col grow items-center">
            <div className="px-5 py-10 text-4xl text-white text-bold"> CHECKOUT </div>
            <div className="bg-white rounded-md px-8 py-10 text-center" style={{height:'400px', width:'500px', backgroundImage:'linear-gradient(#F5796D, #FECACA)'}}>
                <p> After posting this query, the vendor will be notified </p>
                <form className="flex flex-col text-lg" onSubmit={handleSubmit}>
                    <b> Category</b> {cat} 
                    <b> Sub-Category </b> {sub_cat}
                    <b> Model </b> {model_name}
                    <button className="px-5 py-2 text-white rounded-md align-center mt-24" style={{backgroundColor:'#1A1B2F'}}> Submit query </button>
                </form>
            </div>       
        </div>
    )
}