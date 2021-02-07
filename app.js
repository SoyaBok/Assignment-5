const mealName = document.getElementById('input').value
const searchMeal = mealName => {
     
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch (url)
    .then (res => res.json())
    .then (data => displayMeal(data))}


const displayMeal = Object => {
    const main = document.getElementById('main')
    let ArrMeal = Object.meals
    
    for(i=0; i<ArrMeal.length; i++){
        let meal = ArrMeal[i]; 
         
        const mealDiv = document.createElement('div');
        mealDiv.className= 'meal-card';
        const info = `
           <img onclick="displayIngredients('${meal.strMeal}');pageChange()" src= "${meal.strMealThumb}">
           <h4 onclick="displayIngredients('${meal.strMeal}');pageChange()">${meal.strMeal}</h4>
           
           `
             mealDiv.innerHTML= info;
            main.appendChild(mealDiv);
        
    }}
    
    const displayIngredients = name => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        fetch (url)
    .then (res => res.json())
    .then (data => renderCountryInfo(data) )
    }
    
    const renderCountryInfo = Object => {
        let ArrIng = Object.meals[0];
        
       const parentIngred = document.getElementById("parent-ingredient");
       
       const ingredInfo = `
       <img src= "${ArrIng.strMealThumb}">
        <ul>
        <li>${ArrIng.strMeasure1} ${ArrIng.strIngredient1}</li>
        <li>${ArrIng.strMeasure2} ${ArrIng.strIngredient2}</li>
        <li>${ArrIng.strMeasure3} ${ArrIng.strIngredient3}</li>
        <li>${ArrIng.strMeasure4} ${ArrIng.strIngredient4}</li>
        <li>${ArrIng.strMeasure5} ${ArrIng.strIngredient5}</li>
        <li>${ArrIng.strMeasure6} ${ArrIng.strIngredient6}</li>
        <li>${ArrIng.strMeasure7} ${ArrIng.strIngredient7}</li>
        <li>${ArrIng.strMeasure8} ${ArrIng.strIngredient8}</li>
        <li>${ArrIng.strMeasure9} ${ArrIng.strIngredient9}</li>
        <li>${ArrIng.strMeasure10} ${ArrIng.strIngredient10}</li>
        <li>${ArrIng.strMeasure11} ${ArrIng.strIngredient11}</li>
        <li>${ArrIng.strMeasure12} ${ArrIng.strIngredient12}</li>
        <li>${ArrIng.strMeasure13} ${ArrIng.strIngredient13}</li>
        <li>${ArrIng.strMeasure14} ${ArrIng.strIngredient14}</li>
        <li>${ArrIng.strMeasure15} ${ArrIng.strIngredient15}</li>
        <li>${ArrIng.strMeasure16} ${ArrIng.strIngredient16}</li>
        <li>${ArrIng.strMeasure17} ${ArrIng.strIngredient17}</li>
        <li>${ArrIng.strMeasure18} ${ArrIng.strIngredient18}</li>
        <li>${ArrIng.strMeasure19} ${ArrIng.strIngredient19}</li>
        <li>${ArrIng.strMeasure20} ${ArrIng.strIngredient20}</li>
        </ul>
        `
       
        parentIngred.innerHTML = ingredInfo;
        
        
    }
    
    function pageChange(){
        document.getElementById('search-box').style.display="none"
        document.getElementById('parent-main').style.display="none"
        document.getElementById('parent-ingredient').style.display="display"
    }