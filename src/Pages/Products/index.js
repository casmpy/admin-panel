import styles from './product.module.css'
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';




const Products = () => {

    return (
        <>
            <div className={styles.all}>
                <h1 >Create a New Products</h1>
                <h3>General</h3>

                <form className={styles.form}>
                    <label className={styles.label}>Name</label>
                    <input type="text" placeholder="Product Name" className={styles.input}></input>
                    <label className={styles.label}>Price</label>
                    <input type="text" className={styles.input} placeholder='Price (INR)'></input>
                    <label className={styles.label}>Weight</label>
                    <input type="text" placeholder='Weight' className={styles.input}></input>
                    <label className={styles.label}>Category</label>
                    <input className={styles.input} list="category" placeholder='category'></input>

                    <datalist id="category">
                        <option>Phone</option>
                        <option>Laptop</option>
                        <option>Accessiors</option>
                       
                    </datalist>




                </form>

            </div>
        </>
    );
}

export default Products;