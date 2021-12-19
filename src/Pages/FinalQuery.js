import Query from "../Components/Query";
import Header2 from "../Components/Header2";

export default function FinalQuery(props) {
    return (
        <div>
            <Header2/>
            <Query cat={props.cat}/>
        </div>
    )
}