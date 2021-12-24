// Bismillaahirrahmaanirrahiim


function searchalgorithm(){
    var k = (document.getElementById("typed").value).toLowerCase();
    var kataIndo = k.split(" ");
    var kataJawa = [];
    var outputJawa = "";

    console.log(kataIndo);
    document.getElementById("penjelasan").innerHTML = "Mencari arti dari <span>" + k + "</span>";
    
    function p(javaneseWord){
        kataJawa.push(javaneseWord)
    }

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
            case "perintah" : p("dhawuh"); break;
            case "pelana" : p("kambil"); break;
            case "merah" : p("abrit"); break;
            case "berat" : p("awrat"); break;
            case "berdiri" : p("jumeneng"); break;
            case "dingin" : p("asrep"); break;
            case "hadap" : p("ajeng"); break;
            case "adik" : p("rayi"); break;
            case "jual" : p("tebih"); break;
            case "sabung" : p("aben"); break;
            case "menyabung" : p("aben"); break;
            case "mandi" : p("siram"); break;
            case "agama" : p("agami"); break;
            case "cepat" : p("enggal"); break;
            case "barusan" : p("saweg"); break;
            case "jangan" : p("sampun"); break;
            case "ricecooker" : p("ambeng"); break;
            case "nilai" : p("aos"); break;
            case "harga" : p("aos"); break;
            case "martabat" : p("aos"); break;
            case "maju" : p("ajeng"); break;
            case "banyak" : p("kathah"); break;
            case "suruh" : p("dhawuh"); break;
            case "ampun" : p("aksami"); break;
            case "maaf" : p("aksami"); break;
            case "maafkan" : p("aksami"); break;
            case "saya" : p("kula"); break;
            case "mengaku" : p("aken"); break;
            case "akui" : p("aken"); break;
            case "buruk" : p("awon"); break;
            case "jelek" : p("awon"); break;
            case "halangan" : p("pambengan"); break;
            case "hutan" : p("wana"); break;
            case "cincin" : p("sesupe"); break;
            case "pindah" : p("pindhah"); break;
            case "alis" : p("imba"); break;
            case "karena" : p("amargi"); break;
            case "bau" : p("ganda"); break;
            case "cium" : p("aras"); break;
            case "lebar" : p("wiyar"); break;
            case "ambil" : p("mendhet"); break;
            case "minta" : p("nuwun"); break;
            case "singgah" : p("pinarak"); break;
            case "ada" : p("wonten"); break;
            case "anak" : p("putra"); break;
            case "percaya" : p("pitados"); break;
            case "sulit" : p("awrat"); break;
            case "asalkan" : p("sauger"); break;
            case "pergi" : p("tindhak"); break;
            case "menggembala" : p("angen"); break;
            case "ani-ani" : p("pugut"); break;
            case "muda" : p("enem"); break;
            case "antara" : p("antawis"); break;
            case "ikut" : p("dherek"); break;
            case "baru" : p("enggal"); break;
            case "apa" : p("punapa"); break;
            case "baik" : p("sae"); break;
            case "bagus" : p("sae"); break;
            case "maaf" : p("ngapunten"); break;
            case "maksud" : p("angkah"); break;
            case "tujuan" : p("angkah"); break;
            case "pakai" : p("agem"); break;
            case "nama" : p("asma"); break;
            case "jrang" : p("awis"); break;
            case "mau" : p("kersa"); break;
            case "makna" : p("artos"); break;
            case "rendah" : p("andhap"); break;
            case "anjing" : p("segawon"); break;
            case "hati" : p("penggalih"); break;
            case "tersendawa" : p("segu"); break;
            case "beri" : p("unjuk"); break;
            case "badan" : p("salira"); break;
            case "tubuh" : p("salira"); break;
            case "siang" : p("siyang"); break;
            case "beri" : p("maringi"); break;
            case "barangkali" : p("mbok menawi"); break;
            case "marilah" : p("sumangga"); break;
            case "lantas" : p("lajeng"); break;
            case "kemudian" : p("lajeng"); break;
            case "hanya" : p("kenawon"); break;
            case "akan" : p("badhe"); break;
            case "nampan" : p("panadhahan"); break;
            case "tembakau" : p("sata"); break;
            case "pokok" : p("baken"); break;
            case "kembali" : p("kondur"); break;
            case "tulang" : p("tosan"); break;
            case "dibelenggu" : p("dipunbesta"); break;
            case "sangat" : p("sanget"); break;
            case "tidak-menurut" : p("banggi"); break;
            case "pinggang" : p("wangkingans"); break;
            case "banjir" : p("bena"); break;
            case "lalu" : p("lajeng"); break;
            case "habis-itu" : p("lajeng"); break;
            case "setelah-itu" : p("lajeng"); break;
            case "bantal" : p("kajang"); break;
            case "mandi" : p("siram"); break;
            case "bersama" : p("sareng"); break;
            case "sulung" : p("pambayun"); break;
            case "batu-bata" : p("banon"); break;
            case "batik" : p("serat"); break;
            case "dahi" : p("palarapan"); break;
            case "batin" : p("batos"); break;
            case "hamba" : p("abdi"); break;
            case "pembantu" : p("abdi"); break;
            case "itik" : p("kambangan"); break;
            case "bebek" : p("kambangan"); break;
            case "beda" : p("benten"); break;
            case "biarlah" : p("kersanipun"); break;
            case "besuk" : p("benjing"); break;
            case "besok" : p("benjing"); break;
            case "jarik" : p("nyamping"); break;
            case "bab" : p("bobotan"); break;
            case "buang-air-besar" : p("bobotan"); break;
            case "baik" : p("sae"); break;
            case "pipa-rokok" : p("watangan"); break;
            case "benar" : p("kasinggihan"); break;
            case "betul" : p("kasinggihan"); break;
            case "malam" : p("dalu"); break;
            case "beras" : p("wos"); break;
            case "dapat" : p("saged"); break;
            case "bisa" : p("saged"); break;
            case "dulu" : p("rumiyin"); break;
            case "ibu" : p("ibu"); break;
            case "wawratipun" : p("wawratipun"); break;
            case "anak" : p("lare"); break;
            case "suami" : p("garwa"); break;
            case "istri" : p("garwa"); break;
            case "bokong" : p("pocong"); break;
            case "benang" : p("benang"); break;
            case "bedak" : p("konyoh"); break;
            case "kumis" : p("rawis"); break;
            case "selesai" : p("bibar"); break;
            case "rusak" : p("bibrah"); break;
            case "budi" : p("penggalih"); break;
            case "pikiran" : p("penggalih"); break;
            case "akal" : p("penggalih"); break;
            case "berangkat" : p("bidhal"); break;
            case "buka" : p("bikak"); break;
            case "gembira" : p("rena"); break;
            case "belakang" : p("wingking"); break;
            case "buru" : p("bujeng"); break;
            case "buruh" : p("berah"); break;
            case "pekerja" : p("berah"); break;
            case "raksasa" : p("danawa"); break;
            case "butuh" : p("betah"); break;
            case "buang" : p("bucal"); break;
            case "selesai" : p("rampung"); break;
            case "berbicara" : p("ngandika"); break;
            case "ngomong" : p("ngandika"); break;
            case "mulut" : p("tutuk"); break;
            case "cangkir" : p("tuwung"); break;
            case "cerita" : p("cariyos"); break;
            case "omongan" : p("ngendikan"); break;
            case "disiapkan" : p("caosaken"); break;
            case "babi-hutan" : p("andhapan"); break;
            case "bercebok" : p("cawik"); break;
            case "dekat" : p("celak"); break;
            case "dipegang" : p("dipunasta"); break;
            case "cebok" : p("cawik"); break;
            case "pendek" : p("andhap"); break;
            case "rendah" : p("andhap"); break;
            case "tengkuk" : p("griwa"); break;
            case "cepat" : p("enggal"); break;
            case "kecil" : p("alit"); break;
            case "coba" : p("cobi"); break;
            case "cerita" : p("criyos"); break;
            case "lepas-baju" : p("lukar"); break;
            case "shirtless" : p("lukar"); break;
            case "cukup" : p("cekap"); break;
            case "bercukur" : p("pangkas"); break;
            case "setubuh" : p("saresmi"); break;
            case "sunting" : p("sangsangan"); break;
            case "cukur" : p("pangkas"); break;
            case "ya" : p("inggih"); break;
            case "iya" : p("inggih"); break;
            case "betul" : p("yektos"); break;
            case "jikalau" : p("bilih"); break;
            case "jika" : p("bilih"); break;
            case "kalau" : p("bilih"); break;
            case "tambahan" : p("wewahan"); break;
            case "bertambah" : p("wetah"); break;
            case "utuh" : p("wetah"); break;
            case "gajadi" : p("sande"); break;
            case "tidak-jadi" : p("sande"); break;
            case "bungsu" : p("waruju"); break;
            case "buluh" : p("welah"); break;
            case "bambu" : p("welah"); break;
            case "pelajaran" : p("wucalan"); break;
            case "bisul" : p("untar"); break;
            case "pusar" : p("nabi"); break;
            case "lepas-pakaian" : p("lukar"); break;
            case "orang" : p("priyantun"); break;
            case "cuci-tangan" : p("wijik"); break;
            case "mencuci-tangan" : p("wijik"); break;
            case "cuci-kaki" : p("wijik"); break;
            case "mencuci-kaki" : p("wijik"); break;
            case "sudah" : p("sampun"); break;
            case "malu" : p("lingsem"); break;
            case "hitungan" : p("wicalan"); break;
            case "bilangan" : p("wicalan"); break;
            case "hitung" : p("wical"); break;
            case "penting" : p("wigatos"); break;
            case "bicara" : p("ngendika"); break;
            case "hari-kelahiran" : p("wedalan"); break;
            case "hari-lahir" : p("wedalan"); break;
            case "terungkap" : p("kewiyos"); break;
            case "perut" : p("padharan"); break;
            case "besi" : p("tosan"); break;
            case "tau" : p("uninga"); break;
            case "melihat" : p("priksa"); break;
            case "berita" : p("wertos"); break;
            case "kabar" : p("wartos"); break;
            case "malam" : p("dalu"); break;
            case "waktu" : p("wekdal"); break;
            case "kambing" : p("menda"); break;
            case "cat-kain" : p("celep"); break;
            case "diberi" : p("dipunsukani"); break;
            case "minuman" : p("unjukan"); break;
            case "wayang" : p("ringgit"); break;
            case "waktu" : p("wanci"); break;
            case "batuk" : p("cekoh"); break;
            case "batu" : p("sela"); break;
            case "antara" : p("watawis"); break;
            case "kira-kira" : p("watawis"); break;
            case "waspada" : p("wasapaos"); break;
            case "kedai" : p("wande"); break;
            case "warung" : p("wande"); break;
            case "warna" : p("warni"); break;
            case "jenis" : p("warni"); break;
            case "warisan" : p("pusaka"); break;
            case "kenyang" : p("tuwuk"); break;
            case "sembuh" : p("waluya"); break;
            case "sarung-keris" : p("sarungan"); break;
            case "nasehat" : p("wantos"); break;
            case "nasehat-keras" : p("wantos-wantos"); break;
            case "berani" : p("wantun"); break;
            case "belanda" : p("walandi"); break;
            case "baca" : p("waos"); break;
            case "bacaan" : p("waosan"); break;
            case "rahasia" : p("wados"); break;
            case "putri" : p("putri"); break;
            case "perempuan" : p("wanita"); break;
            case "saja" : p("kemawon"); break;
            case "bersin" : p("sigra"); break;
            case "baja" : p("waos"); break;
            case "belanda" : p("walandi"); break;
            case "berani" : p("wantun"); break;
            case "kencing" : p("toyan"); break;
            case "garam" : p("sarem"); break;
            case "usus" : p("jaringan"); break;
            case "atau" : p("utawi"); break;
            case "pinjam" : p("ngampil"); break;
            case "utama" : p("utami"); break;
            case "hidup" : p("sugeng"); break;
            case "upama" : p("upami"); break;
            case "pelihara" : p("upakawis"); break;
            case "gigi" : p("waja"); break;
            case "bunyi" : p("ungel"); break;
            case "suara" : p("ungel"); break;
            case "belakang" : p("pengker"); break;
            case "naik" : p("inggah (nitih)"); break;
            case "pipis" : p("toyan"); break;
            case "memelihara" : p("upakawisaken"); break;
            case "meningkat" : p("mindhak"); break;
            case "panggil" : p("atur"); break;
            case "umur" : p("yuswa"); break;
            case "ingus" : p("gadhing"); break;
            case "umbel" : p("gadhing"); break;
            case "pulang" : p("kondur"); break;
            case "undangan" : p("atur"); break;
            case "raut" : p("pasuryan"); break;
            case "ular" : p("sawer"); break;
            case "janji" : p("punagi"); break;
            case "sumpah" : p("punagi"); break;
            case "perjanjian" : p("punagi"); break;
            case "menjanjikan" : p("punagiaken"); break;
            case "pergelangan" : p("pagelangan"); break;
            case "juga" : p("ugi"); break;
            case "turun" : p("mandhap"); break;
            case "melepas" : p("lukar"); break;
            case "hujan" : p("jawah"); break;
            case "kira-kira" : p("udakawis"); break;
            case "tumbuh" : p("tewah"); break;
            case "tua" : p("yuswa"); break;
            case "berkata" : p("paring priksa"); break;
            case "ditumbuk" : p("dipungentang"); break;
            case "asal-keturunan" : p("tedhakan"); break;
            case "asal-usul-keturunan" : p("tedhakan"); break;
            case "keturunan" : p("tedhak"); break;
            case "tidur" : p("sare"); break;
            case "tiduran" : p("sareyan"); break;
            case "lebih" : p("tirah"); break;
            case "tunggu" : p("tengga"); break;
            case "kendaraan" : p("titihan"); break;
            case "tunggal" : p("tungil"); break;
            case "rugi" : p("tuni"); break;
            case "tidak-sampai" : p("tuni"); break;
            case "tombak" : p("watangan"); break;
            case "kutu" : p("itik"); break;
            case "tulisan" : p("seratan"); break;
            case "tulis" : p("serat"); break;
            case "beli" : p("tumbas [mundhut]"); break;
            case "memberitahu" : p("paring priksa"); break;
            case "terasi" : p("traos"); break;
            case "pertunjukan" : p("tetingalan"); break;
            case "menonton" : p("priksa"); break;
            case "tonton" : p("priksa"); break;
            case "lihat" : p("priksa"); break;
            case "tekun" : p("tlatos"); break;
            case "meninggal" : p("tilar"); break;
            case "berkunjung" : p("tinjo"); break;
            case "menjenguk" : p("sowan"); break;
            case "jatuh" : p("dhawah"); break;
            case "sesepuh" : p("sesepuh"); break;
            case "tetua" : p("sesepuh"); break;
            case "berkenalan" : p("tetepangan"); break;
            case "kenalan" : p("tetepangan"); break;
            case "perkenalkan" : p("tetepangan"); break;
            case "kenalin" : p("tetepangan"); break;
            case "khitan" : p("supit"); break;
            case "sunat" : p("supit"); break;
            case "terus" : p("lajeng"); break;
            case "kenal" : p("tepang"); break;
            case "berteman" : p("tepang"); break;
            case "senyatanya" : p("estu [yektos]"); break;
            case "sebenarnya" : p("estu [yektos]"); break;
            case "temu" : p("panggih"); break;
            case "pertemuan" : p("pepanggihan"); break;
            case "sungguh" : p("estu [yektos]"); break;
            case "benar" : p("estu [yektos]"); break;
            case "tembaga" : p("tembagi"); break;
            case "tongkat" : p("lantaran"); break;
            case "tiba" : p("dumugi"); break;
            case "sampai" : p("dumugi"); break;
            case "ladang" : p("tegil"); break;
            case "tebu" : p("rosan"); break;
            case "menawari-dagangan" : p("tawi"); break;
            case "pernah" : p("nate"); break;
            case "luka" : p("labet"); break;
            case "ditanya" : p("dipuntantun"); break;
            case "kain-batik-perempuan" : p("nyamping"); break;
            case "bedak-perut" : p("raketan"); break;
            case "tangis" : p("pamuwun"); break;
            case "bangun" : p("wungu"); break;
            case "tanggung-tanggung" : p("tangel"); break;
            case "tangguh" : p("tanggen"); break;
            case "tetangga" : p("tanggi"); break;
            case "tangan" : p("asta"); break;
            case "tanam" : p("tanem"); break;
            case "tanda-tangan" : p("tapak-asta"); break;
            case "memperoleh" : p("tampi"); break;
            case "obat" : p("usada"); break;
            case "tali" : p("tangsul"); break;
            case "bertanya" : p("mundhut priksa"); break;
            case "tahi" : p("tinja"); break;
            case "tinja" : p("tinja"); break;
            case "tai" : p("tinja"); break;
            case "eek" : p("tinja"); break;
            case "sabuk" : p("paningset"); break;
            case "sanggup" : p("saget"); break;
            case "sekarang" : p("sakmenika"); break;
            case "sajian" : p("caosan"); break;
            case "diberikan-saja" : p("dipunsaosaken"); break;
            case "kasih-aja" : p("dipunsaosaken"); break;
            case "diberikan" : p("dipunsaosaken"); break;
            case "asalnya" : p("saking"); break;
            case "salah" : p("lepat"); break;
            case "ganti-pakaian" : p("santun [gantos]"); break;
            case "ganti" : p("santun [gantos]"); break;
            case "ganti-baju" : p("santun [gantos]"); break;
            case "sambung" : p("sambet"); break;
            case "segala-sesuatu" : p("samukawis"); break;
            case "ditompang" : p("sanggi"); break;
            case "ditopang" : p("sanggi"); break;
            case "ditanggung" : p("sanggi"); break;
            case "siapa" : p("sinten"); break;
            case "lembu" : p("lembu"); break;
            case "sapi" : p("lembu"); break;
            case "disapih" : p("dipunpegeng"); break;
            case "disarak" : p("dipunpegeng"); break;
            case "serba" : p("sarwi"); break;
            case "bulan" : p("wulan"); break;
            case "sawah" : p("sabin"); break;
            case "menghadap" : p("sowan"); break;
            case "berbeda" : p("sanes"); break;
            case "ditaruh" : p("paringaken"); break;
            case "diletakkan" : p("paringaken"); break;
            case "sendok" : p("lantaran"); break;
            case "satu" : p("satunggal"); break;
            case "sebar" : p("dhawah"); break;
            case "nama" : p("sebatan"); break;
            case "mengatakan" : p("sebat"); break;
            case "menyebut" : p("sebat"); break;
            case "sebut" : p("sebat"); break;
            case "sebentar" : p("sakedhap"); break;
            case "bentar" : p("sakedhap"); break;
            case "cukup" : p("cekap"); break;
            case "kecukupan" : p("cekapan"); break;
            case "nasi" : p("sekul"); break;
            case "laut" : p("seganten"); break;
            case "dari" : p("saking"); break;
            case "dua-puluh-lima" : p("selangkung"); break;
            case "sekian" : p("semanten"); break;
            case "menangguhkan" : p("semagos"); break;
            case "menyembelih" : p("pragat"); break;
            case "" : p(""); break;
            case "" : p(""); break;
            case "" : p(""); break;
            case "" : p(""); break;
            case "" : p(""); break;
            
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