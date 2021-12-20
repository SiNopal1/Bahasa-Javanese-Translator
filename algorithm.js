function searchalgorithm(){
    var k = (document.getElementById("typed").value).toLowerCase();
    var kataIndo = k.split(" ");
    var kataJawa = [];
    var outputJawa = "";

    console.log(kataIndo);
    document.getElementById("penjelasan").innerHTML = "Mencari arti dari <span>" + k + "</span>";
    
    // bikin database
    for(var i = 0; i < kataIndo.length; i++){
        switch(kataIndo[i]){
            case "kamu":
                kataJawa.push("sampeyan")
                break;
            case "saya" :
                kataJawa.push("kula")
                break;
            default :
                kataJawa.push(kataIndo[i])
        }
    }

    console.log(outputJawa)

    for(var i = 0; i < kataJawa.length; i++){
        console.log(outputJawa)
        outputJawa += kataJawa[i];
        outputJawa += " ";
    }
    
    document.getElementById("translate").innerHTML = outputJawa;
}