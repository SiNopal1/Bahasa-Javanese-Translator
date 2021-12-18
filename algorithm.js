function searchalgorithm(){
    var kata = document.getElementById("typed").value;
    document.getElementById("penjelasan").innerHTML = "Mencari arti dari <span>" + kata + "</span>";
    
    
    fetch("database.json")
        .then((response) => response.json())
        .then((data) => displayData(data));
    
}

function displayData(data){
    var d = JSON.parse(data);
    console.log("Hi!")
    document.getElementById("translate").innerHTML = d;
}