function searchalgorithm(){
    fetch("database.json")
        .then((response) => response.json())
        .then((data) => displayData(data));
}

function displayData(d){
    console.log(d)
}