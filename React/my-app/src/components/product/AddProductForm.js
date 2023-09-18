import Styles from './AddProductForm.module.css';
import CustomWrapper from '../layouts/Wrapper.js';

function AddProductForm(){
    return <CustomWrapper>
        <form className={Styles.form}>
            <div className={Styles.groups}>
                <label htmlFor="product_name">Enter Product Name:</label>
                <input type="text" placeholder="product_name"/>
            </div>
            <div className={Styles.groups}>
                <label htmlFor="image">Enter Product Image:</label>
                <input type="text" placeholder="image"/>
            </div>
            <div className={Styles.groups}>
                <label htmlFor="price">Enter Product Price:</label>
                <input type="text" placeholder="price"/>
            </div>
            <div className={Styles.groups}>
                <label htmlFor="description">Enter Product Description:</label>
                <textarea rows="5" id="description"/>
            </div>
            <div className={Styles.btn}>
                <button>Submit</button>
            </div>
        </form>
    </CustomWrapper>
}

export default AddProductForm;