import ProductItem from "./ProductItem";
import Styles from './ProductList.module.css';

function ProductList(props){
    return <div className={Styles.list}>
        {props.products.map((item)=>{
            return <ProductItem item={item}/>
        })}
        
        </div>
}

export default ProductList;