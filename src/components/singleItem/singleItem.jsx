import "./singleItem.css";

export default function SingleItem(props){
    return(
        <div className="SingleItem">
            <div className="si-photo">
                <img src={props.photo} alt="product"></img>
            </div>
            <div className="si-info">
                <p className="sii-title">{props.title}</p>
                <p className="sii-desc">{props.desc}</p>
                <p className="sii-price">${props.price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}