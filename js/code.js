// Change bg color
function changeColor() {
    var choice = document.getElementById("mySelect");
    document.getElementById("colorList").style.backgroundColor = choice.options[choice.selectedIndex].value;
}

// List with check on items added
var txtField;

//The input
function createItem(){
    txtField = document.getElementById("item").value;
}

//Vérifier si est vide
function isEmpty(){
    var isEmpty = true;
    if(document.getElementById("item").value === ""){
        alert("Add a item to a List");
        document.getElementById("item").focus();
        return isEmpty;
    }
    return false;
}

//Verify if the element already exists
function itsDoubled(){
    var list = document.getElementById("listUl");
    var elemAdded = list.getElementsByTagName("li");
    
    for (var i = 0; i < elemAdded.length; i++) {
        console.log("Begginig of for at itsDoubled fonction: "); 
        console.log(elemAdded[i]);  
        if(txtField.toUpperCase() === elemAdded[i].textContent.toUpperCase()){
            console.log("test of true");
            alert("Item already exists. Try another one.");
            return true;
        }       
    }
    console.log("test of false");
    return false;
}

function addList(){  
        var listUl = document.getElementById("listUl");
        var item = document.getElementById("item");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item.value));
        listUl.appendChild(li);
        item.focus();
        console.log("End of addList: ");
        console.log(li);
}

function clearInput(){
    var clearBtn = document.getElementById("item");
    if(clearBtn){
        clearBtn.value= "";
   }
}

//Function called on the HTML
function addItem(){
    if(!isEmpty()){
        createItem();
        if(!itsDoubled()){
            addList();
            clearInput();
        }
        
    }
}