
var ulDOM = document.querySelector("#list")
var liDOM = document.querySelector("li")

// local storage dan listeye getirme
if (localStorage.getItem("ulDOMic")) {

    ulDOM.innerHTML = localStorage.getItem("ulDOMic")
}
// kaydet butonu ile localStorage kayıt

function LOCAL_STORAGE() {
    let ulDOMic = document.querySelector("ul")
    localStorage.setItem("ulDOMic", ulDOMic.innerHTML)

}
// listeyi tamamne silme
function deleteListAll() {
    var e = confirm("hepsini silmek istediğini onayla")
    if (e) {
        ulDOM.innerHTML = ""
        liDOM.innerHTML = ""
        localStorage.setItem("ulDOMic", "");

        // butonlara ihtiyaç kalmadı kaldır
        let saveBTN = document.getElementById("save")
        saveBTN.classList.toggle("d-none")
        let deleteListAllbtn = document.getElementById("deleteList");
        deleteListAllbtn.classList.toggle("d-none")
    }
}



function newElement() {


    let input = document.querySelector('#task');
    let liDOM = document.createElement("li");
    liDOM.innerHTML = localStorage.getItem("liDOM");
    if (input.value) {
        liDOM.innerHTML = input.value;
        ulDOM.appendChild(liDOM);
        input.value = ""
        document.querySelector(".success").classList.remove("hide")
        document.querySelector(".success").classList.add("show")
        document.querySelector(".error").classList.add("hide")
        var close = document.getElementsByClassName("close")
        close[0].onclick = function () {
            document.querySelector(".success").classList.remove("show")


        }

        // kaydet ve sil butonları tekrar aktif
        let saveBTN = document.getElementById("save")
        let deleteListAllbtn = document.getElementById("deleteList");


        if (saveBTN.classList.contains("d-none") && deleteListAllbtn.classList.contains("d-none")) {
            saveBTN.classList.remove("d-none");
            deleteListAllbtn.classList.remove("d-none");
        }

        //span oluşturma ve onclik verme
        let span = document.createElement("span");
        let text = document.createTextNode("\u00D7")
        span.className = "btn btn-outline-dark"
        span.appendChild(text)
        liDOM.appendChild(span)
        span.onclick = function () {
            let li = this.parentElement;
            li.remove();
        }
        // hata mesajı 
    } else if (input.value == "" || input.value == null) {

        document.querySelector(".error").classList.remove("hide")
        document.querySelector(".error").classList.add("show")
        var close = document.getElementsByClassName("close")

        close[1].onclick = function () {
            document.querySelector(".error").classList.remove("show")


        }


    }
}
// checked class ekleme
ulDOM.addEventListener('click', function (item) {
    item.target.classList.toggle("checked")
})
//hazır oluşmuş spanlara özel silme fonksiyonu yapmak zorunda kaldım sebebini anlayamadım
var span = document.getElementsByClassName("btn-outline-dark");
// liste elemanlarını silme
for (var i = 0; i < span.length; i++) {
    span[i].addEventListener('click', function () {
        let li = this.parentElement;
        li.remove();
    })
}

