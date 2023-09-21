import AddProductForm from "../components/product/AddProductForm";

function AddProduct(){
    function addProductHandler(newProduct){
        console.log("newProd",newProduct);
        fetch("http://localhost:3002/product",{
            method:"POST",
            body: JSON.stringify(newProduct),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    return <AddProductForm addProductHandler={addProductHandler}/>
}

export default AddProduct;