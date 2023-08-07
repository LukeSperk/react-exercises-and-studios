import React from 'react';
import styles from './Description.module.css';

class RecipeDescription extends React.Component {
    render(){
        return(
          <div> 
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
          </div>)}
}

function RecipeAuthor() {
    let authorLink = "https://marisamoore.com/about-marisa/";
    let authorPhoto = "https://marisamoore.com/wp-content/uploads/2021/01/Marisa-Moore-in-the-Kitchen-1.jpg";
    let authorName = "Marisa Moore";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
} 

export default RecipeDescription;