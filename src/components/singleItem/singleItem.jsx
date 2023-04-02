import "./singleItem.css";
import { useDispatch} from "react-redux";
import { addCartAction } from "../../redux/actions/action";

export default function SingleItem(props){
    const dispatch = useDispatch();
    return(
        <div className="SingleItem">
            <div className="si-photo">
                <img src={props.photo} alt="product"></img>
            </div>
            <div className="si-info">
                <p className="sii-title">{props.title}</p>
                <p className="sii-desc">{props.desc}</p>
                <p className="sii-price">${props.price}</p>
                <button onClick={()=>dispatch(addCartAction(props.id, props.title, props.price, props.photo))}>Add to Cart</button>
            </div>
        </div>
    );
}