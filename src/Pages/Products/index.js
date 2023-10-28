import styles from './product.module.css'
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';




const Products = () => {

    return (
        <>
            <div className={styles.all}>
                <h1 >Create a New Products</h1>

                <form className={styles.form} action='http://13.232.235.170/api/addProduct' method='POST'>
                    <div className={styles.general}>
                    <h2 >General</h2>
                    <label className={styles.label}>Name</label>
                    <input type="text" placeholder="Product Name" className={styles.input}></input>
                    <label className={styles.label}>Price</label>
                    <input type="text" className={styles.input} placeholder='Price in INR'></input>
                    <label className={styles.label}>Weight</label>
                    <input type="text" placeholder='Weight' className={styles.input}></input>
                    <label  className={styles.label} >Quantity:</label>
                  <input className={styles.input} type="number" placeholder='qty' id="qty" name="qty" required/>
                  <label className={styles.label} for="description">Description:</label>
        <textarea placeholder='description' className={styles.input} id="description" name="description" required></textarea>
      
                    <label className={styles.label}>Category</label>
                    <input className={styles.input} list="category" placeholder='category'></input>
                    

                    <datalist id="category">
                        <option>Phone</option>
                        <option>Laptop</option>
                        <option>Accessiors</option>
                       
                    </datalist>
                    
                    <label className={styles.label} for="status">Status:</label>
        <input className={styles.input} type="checkbox" id="status" name="status" value="true"/>

        <label className={styles.label} for="visibility">Visibility:</label>
        <input className={styles.input} type="checkbox" id="visibility" name="visibility" value="true"/>
      
        <label className={styles.label} for="stockAvailable">Stock Available:</label>
        <input className={styles.input} type="checkbox" id="stockAvailable" name="stockAvailable" value="true"/>
        <label className={styles.label} for="urlKey">URL Key:</label>
        <input className={styles.input} type="text" id="urlKey" name="urlKey" required/>
      
        <label className={styles.label} for="metaTitle">Meta Title:</label>
        <input className={styles.input} type="text" id="metaTitle" name="metaTitle" required/>
      
        <label className={styles.label} for="metaKeyWords">Meta Keywords:</label>
        <input className={styles.input} type="text" id="metaKeyWords" name="metaKeyWords" required/>
      
        <label className={styles.label} for="metaDescription">Meta Description:</label>
        <textarea className={styles.input} id="metaDescription" name="metaDescription" required></textarea>
        <button className={styles.button} type="submit">Submit</button>


        
        
      
                    </div>


                    




                </form>

            </div>
        </>
    );
}

export default Products;