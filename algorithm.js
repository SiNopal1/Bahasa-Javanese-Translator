// Bismillaahirrahmaanirrahiim
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
                kataJawa.push("sampeyan [panjenengan]")
                break;
            case "saya" :
                kataJawa.push("kula")
                break;
            case "kami" :
                kataJawa.push("kito")
                break;
            case "dia" :
                kataJawa.push("piyambakipun")
                break;
            case "ini" :
                kataJawa.push("menika")
                break;
            case "itu" :
                kataJawa.push("niku")
                break;
            case "apa" :
                kataJawa.push("menapa")
                break;
            case "dimana" :
                kataJawa.push("wonten pundhi")
                break;
            case "siapa" :
                kataJawa.push("sinten")
                break;
            case "mengapa" :
                kataJawa.push("kadhosmenopo")
                break;
            case "bagaimana" :
                kataJawa.push("kadhospundhi")
                break;
            case "iya" :
                kataJawa.push("inggih")
                break;
            case "tidak" :
                kataJawa.push("mboten")
                break;
            case "barangkali" :
                kataJawa.push("menawi")
                break;
            case "satu" :
            case "1" :
                kataJawa.push("setunggal")
                break;
            case "dua" :
            case "2" :
                kataJawa.push("kalih")
                break;
            case "tiga" :
            case "3" :
                kataJawa.push("tiga")
                break;
            case "empat" :
            case "4" :
                kataJawa.push("sekawan")
                break;
            case "lima" :
            case "5" :
                kataJawa.push("gangsal")
                break;
            case "enam" :
            case "6" :
                kataJawa.push("enem")
                break;
            case "tujuh" :
            case "7" :
                kataJawa.push("pitu")
                break;
            case "delapan" :
            case "8" :
                kataJawa.push("wolu")
                break;
            case "sembilan" :
            case "9" :
                kataJawa.push("songo")
                break;
            case "sepuluh" :
            case "10" :
                kataJawa.push("sedoso")
                break;
            case "orang" :
                kataJawa.push("tiyang")
                break;
            case "laki-laki" :
            case "cowok" :
            case "pria" :
                kataJawa.push("kakong")
                break;
            case "perempuan" :
            case "cewek" :
            case "wanita" :
                kataJawa.push("estri")
                break;
            case "ayah" :
            case "papa" :
            case "bapak" :
                kataJawa.push("romo")
                break;
            case "anak" :
                kataJawa.push("putra")
                break;
            case "nama" :
                kataJawa.push("nami")
                break;
            case "uang" :
                kataJawa.push("artho")
                break;
            case "wc" :
            case "kamar-mandi" :
                kataJawa.push("(kamar) wingking")
                break;
            case "air" :
                kataJawa.push("toya")
                break;
            case "jalan" :
                kataJawa.push("mergi")
                break;
            case "kira-kira" :
                kataJawa.push("kinten-kinten")
                break;
            case "semua" :
                kataJawa.push("sedanten")
                break;
            case "kalau" :
            case "jika" :
            case "apabila" :
                kataJawa.push("menawi")
                break;
            case "lebih" :
                kataJawa.push("langkung")
                break;
            case "sangat" :
            case "sekali" :
            case "banget" :
                kataJawa.push("sanget")
                break;
            case "dari" :
                kataJawa.push("saking")
                break;
            case "ke" :
                kataJawa.push("dhateng")
                break;
            case "sekarang" :
                kataJawa.push("sakmeniko")
                break;
            case "baru" :
                kataJawa.push("enggal")
                break;
            case "tua" :
                kataJawa.push("sepuh")
                break;
            case "pendek" :
                kataJawa.push("cendak")
                break;
            case "murah" :
                kataJawa.push("mirah")
                break;
            case "mahal" :
                kataJawa.push("awis")
                break;
            case "panas" :
                kataJawa.push("benther")
                break;
            case "dingin" :
                kataJawa.push("asrep")
                break;
            case "kemarin" :
                kataJawa.push("kalawingi")
                break;
            case "sekarang" :
            case "hari-ini" :
                kataJawa.push("sakmenika")
                break;
            case "atas" :
                kataJawa.push("nginggil")
                break;
            case "bawah" :
                kataJawa.push("ngandhap")
                break;
            case "lapar" :
                kataJawa.push("luwe")
                break;
            case "bahagia" :
                kataJawa.push("rahayu")
                break;
            case "sakit" :
                kataJawa.push("gerah")
                break;
            case "maaf" :
                kataJawa.push("ngapunten")
                break;
            case "pagi" :
                kataJawa.push("injing")
                break;
            case "malam" :
                kataJawa.push("dalu")
                break;
            case "selamat" :
                kataJawa.push("sugeng")
                break;
            case "berapa" :
                kataJawa.push("pinten")
                break;
            case "silahkan" :
                kataJawa.push("monggopunaturi")
                break;
            case "makasih" :
            case "terimakasih" :
                kataJawa.push("maturnuwun")
                break;
            case "jalan" :
                kataJawa.push("tindak")
                break;
            case "belum" :
                kataJawa.push("dereng")
                break;
            case "karena" :
            case "tetapi" :
                kataJawa.push("amargi")
                break;
            case "disini" :
                kataJawa.push("wontenmriki")
                break;
            case "baik" :
                kataJawa.push("sae")
                break;
            case "jelek" :
                kataJawa.push("kirangsae")
                break;
            case "betul" :
                kataJawa.push("leres")
                break;
            case "cantik" :
            case "indah" :
                kataJawa.push("endah")
                break;
            case "besar" :
                kataJawa.push("ageng")
                break;
            case "kecil" :
                kataJawa.push("alit")
                break;
            case "banyak" :
                kataJawa.push("kathah")
                break;
            case "sedikit" :
                kataJawa.push("sakedhik")
                break;
            case "sama" :
                kataJawa.push("sami")
                break;
            case "bisa" :
                kataJawa.push("saget")
                break;
            case "punya" :
                kataJawa.push("kagungan")
                break;
            case "ada" :
                kataJawa.push("wonten")
                break;
            case "mau" :
                kataJawa.push("kersa")
                break;
            case "jangan" :
                kataJawa.push("ampun")
                break;
            case "pergi" :
                kataJawa.push("tindhak")
                break;
            case "datang" :
                kataJawa.push("rawuh")
                break;
            case "berjalan" :
                kataJawa.push("mlampah")
                break;
            case "bicara" :
                kataJawa.push("ngendika")
                break;
            case "bilang" :
                kataJawa.push("dawuh")
                break;
            case "lihat" :
                kataJawa.push("mrisani")
                break;
            case "mengerti" :
                kataJawa.push("ngertos")
                break;
            case "makan" :
                kataJawa.push("dhahar")
                break;
            case "minum" :
                kataJawa.push("ngunjuk")
                break;
            case "dengar" :
                kataJawa.push("miereng")
                break;
            case "tau" :
            case "paham" :
            case "ngerti" :
                kataJawa.push("ngertos")
                break;
            case "kasi" :
                kataJawa.push("paringi")
                break;
            case "suka" :
                kataJawa.push("remen")
                break;
            case "cinta" :
                kataJawa.push("tresna")
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