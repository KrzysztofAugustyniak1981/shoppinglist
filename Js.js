
let i = 0;

function addIngredients() {
    i++;
    let ingredients = document.getElementById("ingredients").value;
    
    document.getElementById("list").innerHTML += '<div id="' +i+ '"><br><input type="checkbox">'+'  &nbsp' + ingredients + '   &nbsp' + '<button class="btn border border-primary no-print" type="button" onclick="remove(' +i+ ')">usuń</button></div>';
    
}

function remove(i){
    let x = document.getElementById(i);
    x.remove();
}
