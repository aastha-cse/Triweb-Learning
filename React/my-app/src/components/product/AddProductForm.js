import Styles from './AddProductForm.module.css';

function AddProductForm(){
    return <div>
        <form className={Styles.form}>
            <div className={Styles.groups}>
                <label>Enter Product Name:</label>
                <input type="text" placeholder="product_name"/>
            </div>
            <div className={Styles.groups}>
                <label>Enter Product Image:</label>
                <input type="text" placeholder="image"/>
            </div>
            <div className={Styles.groups}>
                <label>Enter Product Price:</label>
                <input type="text" placeholder="price"/>
            </div>
            <div className={Styles.groups}>
                <label>Enter Product Description:</label>
                <textarea rows="5" id="description"/>
            </div>
            <div className={Styles.btn}>
                <button>Submit</button>
            </div>
        </form>
    </div>
}

export default AddProductForm;