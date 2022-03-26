
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Products.css";


const Products = (props) => {
   const {name,price,picture} = props.data;
    return (
        <div className="col-md-4 card">
        <img src={picture} alt="" className="card-img-top" height="200" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price: {price} tk</p>
            <div onClick={() => props.handleClick(props.data)} className="add d-flex justify-content-between bg-primary mx-2 p-5 py-1 text-white rounded align-items-center">
            <div >Add to cart</div>
             <FontAwesomeIcon icon={faCartShopping} className="" />
            </div>
        </div>
        </div>
    );
};

export default Products;