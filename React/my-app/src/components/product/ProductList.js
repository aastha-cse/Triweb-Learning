import ProductItem from "./ProductItem";

function ProductList(props){
    return <div>
        {props.products.map((item)=>{
            return <ProductItem item={item}/>
        })}
        
        </div>
}

export default ProductList;