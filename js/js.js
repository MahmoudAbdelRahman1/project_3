var  arrayImg = Array.from(document.querySelectorAll('.box_img img')),
        imgLiner = arrayImg,
        plas = 1;
//
var   arrayBut = Array.from(document.querySelectorAll('.img_but button')),
         butLiner = arrayBut.length,
         buTton = document.getElementById('butJs');
//
act();
//

function act(){
    removAct();
    arrayBut[plas-1].classList.add('actbut');
    arrayImg[plas-1].classList.add('actimg');
    
};
//
function removAct(){
    arrayBut.forEach(function(button){
        button.classList.remove("actbut");
    },
    arrayImg.forEach(function(img){
        img.classList.remove('actimg')
    })
    );
}
var boxInfo = document.getElementById('boxInfojs'),
    icon = document.getElementById('iconTop'),
    butTop = document.getElementById('topJs');

    butTop.onmousemove = function(){
        boxInfo.classList.add('actinfo');
        butTop.classList.add('beforbut');
        icon.classList.add('iconleft');
    }
//

