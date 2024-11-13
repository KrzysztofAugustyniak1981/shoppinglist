let i = 0;

// Pobieramy aktualną listę zakupów z localStorage
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Funkcja dodająca składniki do listy
function addIngredients() {
    i++;
    let ingredients = document.getElementById("ingredients").value;
    
    document.getElementById("list").innerHTML += '<div id="' + i + '" class="list-item">' + ingredients + '   &nbsp' + '<i class="fas fa-times delete-icon" onclick="remove(' + i + ')"></i></div>';
    
    // Dodajemy składnik do listy zakupów i zapisujemy do localStorage
    if (ingredients !== "") {
        shoppingList.push({ name: ingredients, deleted: false });
        saveListToLocalStorage();
        document.getElementById("ingredients").value = ""; // Czyszczenie pola tekstowego po dodaniu
    }
}

// Funkcja usuwająca składnik z listy
function remove(i) {
    let item = document.getElementById(i);
    let index = parseInt(i) - 1;
    if (!item) return; // Sprawdzamy, czy element istnieje

    // Oznacz składnik jako usunięty lub przywróć go
    shoppingList[index].deleted = !shoppingList[index].deleted;

    // Aktualizacja widoku listy
    updateList();
    // Zapisanie listy w localStorage
    saveListToLocalStorage();
}

// Funkcja aktualizująca widok listy
function updateList() {
    let listContainer = document.getElementById("list");
    listContainer.innerHTML = ""; // Wyczyszczenie aktualnego widoku listy

    shoppingList.forEach((item, index) => {
        if (!item.deleted) {
            let listItem = document.createElement("div");
            listItem.classList.add("border", "bg-light", "p-2", "mb-2", "list-item");

            listItem.innerHTML = `<span>${item.name}</span> <i class="fas fa-times delete-icon" onclick="remove(${index + 1})"></i>`;
            if (item.deleted) {
                listItem.classList.add("deleted");
            }
            listItem.addEventListener("click", () => toggleDeletedStatus(listItem, index));

            listContainer.appendChild(listItem);
        }
    });
}

// Funkcja zmieniająca status usunięcia składnika po kliknięciu na element listy
function toggleDeletedStatus(listItem, index) {
    if (shoppingList[index].deleted) {
        listItem.classList.remove("deleted");
    } else {
        listItem.classList.add("deleted");
    }
    shoppingList[index].deleted = !shoppingList[index].deleted;

    // Zapisanie listy w localStorage
    saveListToLocalStorage();
}

// Funkcja zapisująca listę zakupów do localStorage
function saveListToLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// Wywołujemy funkcję aktualizującą widok listy po załadowaniu strony
window.addEventListener('load', () => {
    updateList();
});

// Funkcja dodająca składniki do listy po naciśnięciu Enter
document.getElementById("ingredients").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addIngredients();
    }
});

document.getElementById("myBtn").onclick = function() {shopsList()};

function shopsList() {
    document.getElementById("myDropdown").classList.toggle("show");
  };

function addNewShop() {
    
}

