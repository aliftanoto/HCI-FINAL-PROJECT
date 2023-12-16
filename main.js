const appId = "af8a2c00";
const appKey = "f2aec9065519a0124170d6551e5e0c3a";
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}`;
const mealResult = document.querySelector("#meal-result")
const searchRecipe = document.querySelector('#searchRecipe')
const searchBtn = document.getElementById('searchBtn')




searchRecipe.addEventListener('keyup',(e) =>{
    
    if (e.keyCode === 13){
        const inputVal = searchRecipe.value;    
        loadRecipes(inputVal);
        
    }


});

searchBtn.addEventListener('click', () => {
    const inputVal = searchRecipe.value;
    loadRecipes(inputVal);
  
});



function loadRecipes(searchRecipe) {
    const url = baseUrl + `&q=${searchRecipe}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => renderRecipes(data.hits))      
        .catch((error) => console.log(error));
}

// loadRecipes();

const renderRecipes = (recipeList = []) => {
  
   mealResult.innerHTML = ''
      
    const bootstrapHTMLStr = `
        <div class="container py-5">
        <h2 class="text-center mt-5">Your Search Result:</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5" id="mealResult">
            </div>
        </div>
    `;
    

    mealResult.insertAdjacentHTML('beforeend', bootstrapHTMLStr);

    
    const rowElement = document.getElementById('mealResult');

    // not found
    if (recipeList.length === 0){
        const notFoundHTMLStr = `
         <p>Sorry, We did not find any recipes</p>       
        `
        rowElement.insertAdjacentHTML('beforeend', notFoundHTMLStr);
        rowElement.classList.add('notFound')
       
    }
        recipeList.forEach(recipeObj => {
            const { label: recipeTitle, image: recipeImage, ingredientLines: recipeIngredientLines, mealType: recipeMealType  } = recipeObj.recipe;
            const cardHTMLStr = `
            <div class="col">
                <div class="card">
                    <img src="${recipeImage}" >
                        <div class="card-body">
                            <h5 class="card-title text-start mb-3">${recipeTitle}</h5>
                             <p>Ingredients:</p>
                                <div class= " card-text>
                                    <ul class="ingredient-lines list-group list-group-flush">
                                    ${recipeIngredientLines.map((ingredient) => `<li>${ingredient}</li>`).join('')}
                                 </ul>
                                 <h5 class ="mt-3 fs-5">Meal Type: ${recipeMealType}</h5>
                         </div>
                     </div>
                <div>
            </div>
            `;
            
            
            rowElement.insertAdjacentHTML('beforeend', cardHTMLStr);
            rowElement.classList.remove('notFound')
            
          
            
            
        });
            

    document.getElementById('searchBtn').addEventListener('click', function() {
            rowElement.scrollIntoView({behavior: "smooth"})
     
      });
};

    // function loadRecommendation(type = 'chicken'){
    //     const rUrl = baseUrl + `&q=${type}`;
    //     fetch(rUrl)
    //         .then((res) => res.json())
    //         .then((data) => renderRecipes(data.hits))
    //         .catch((error) => console.log(error));
    // }


    // const rBootStrapHTMLStr = `
    // <div class="container py-5">
    // <h2 class="text-center mt-5">Today's Recommendation:</h2>
    //     <div class="row row-cols-1 row-cols-md-3 g-4 py-5" id="mealRecommendation">
    //     </div>
    // </div>
    // `;

    
  

$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.sticky').addClass('stickyadd')
        } else {
            $('.sticky').removeClass('stickyadd')
        }
    });


});

 

    
var typed = new Typed(".element", {
    strings: ["Find Your Meal!! "],
    smartBackspace: false,
    typeSpeed: 100,
    backSpeed: 100,
    loop: false,
    showCursor: false,
    startDelay: 1000,



});