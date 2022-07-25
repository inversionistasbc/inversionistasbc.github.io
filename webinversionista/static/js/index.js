const item=document.querySelectorAll('.item');
const link=document.querySelectorAll('#inversiones');
const img=document.querySelectorAll('.img');
const opacity=document.querySelectorAll('#contenedores');

link.forEach((cadalink , i)=>{
    link[i].addEventListener('click',()=>{
        if(item[i].classList.contains('itemactivo')){
            item[i].classList.remove('itemactivo');
            img[i].classList.remove('itemimgactivo');
            opacity[i].classList.remove('contenedoresactivo');
        }else{
            item.forEach((cadabloque,i)=>{
                item[i].classList.remove('itemactivo');
                img[i].classList.remove('itemimgactivo');
                opacity[i].classList.remove('contenedoresactivo');
            })
            item[i].classList.toggle('itemactivo');
            img[i].classList.toggle('itemimgactivo');
            opacity[i].classList.toggle('contenedoresactivo');
        }
        
    })
})

let data = [
    {"contrasena":"Eduardo2022@"}]

    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
            storepass;
        }
    });

    var formElement = document.getElementById('btnconfirm');
    formElement.addEventListener('click', storepass);

    
   
    function storepass(e) {
             var pass = document.getElementById('contra').value;
        var info = data.find(a => a.contrasena === pass);
        if (info == null || info === undefined){
                window.localStorage.setItem("consultainver", null);
        }else {
                window.localStorage.setItem("consultainver", JSON.stringify(info));
        }
   }

