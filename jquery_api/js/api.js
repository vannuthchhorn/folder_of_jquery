$(document).ready( () =>{
    requestAPI();
});

// request api
var requestAPI = () =>{
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipe(data),
        error: () => getError(),
        
    })
}

// get url api

var getUrl = () =>{
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

// get data 
var getRecipe  = (myData) => {
    myData.recipes.forEach( item => {
       getIngrediant(item.ingredients);
    });
}
// get error 

var getError = () =>{}

// get ingrediant
var getIngrediant = (ing)=>{
    ing.forEach(item =>{
        computeHTML(item);
    })
}

// compute html 

var computeHTML = (item) =>{
    var result = "";
    result+=`
        <tr>
            <td><img src="${item.iconUrl}" width="100"></td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.unit}</td>
        </tr>
    `;
    printOut(result);
}

// print out html
 
var printOut = (out) =>{
    $('#ingredients').append(out);
}