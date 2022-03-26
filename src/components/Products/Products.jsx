
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Products.css";


const Products = (props) => {
   const {title} = props.data;
    return (
        <div className="col-md-4 card">
        <img src="https://picsum.photos/bike" alt="" className="card-img-top" height="200" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Some quick</p>
            <div onClick={() => props.handleClick(props.data)} className="add d-flex justify-content-between bg-primary px-5 py-1 text-white rounded align-items-center">
            <div >Add to cart</div>
             <FontAwesomeIcon icon={faCartShopping} className="" />
            </div>
        </div>
        </div>
    );
};

export default Products;