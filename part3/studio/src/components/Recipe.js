const RecipeAuthor = () => {
   let authorLink = "https://thesuburbansoapbox.com/about/";
   let authorPhoto = "https://thesuburbansoapbox.com/wp-content/uploads/2021/02/nFMviV_w-e1614300721197-scaled-340x485.jpeg";
   let authorName = "Kellie";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Kellie's Website</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
   "4 cups all-purpose flour",
   "1 cup whole milk",
   "2 eggs, lightly beaten",
   "1/4 cup sour cream",
   "5 large russet potatoes, peeled and quartered"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Polish Potato Pierogi</h1>
            <p>Tender dumplings filled with cheesy potato filling then topped with buttery sautéed onions, this is the comfort food of my childhood. The Best Potato and cheese Pierogi recipe is passed down from my grandfather and made completely from scratch is easier to make than you think.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://thesuburbansoapbox.com/wp-content/uploads/2021/09/Polish-Pierogies-3.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}