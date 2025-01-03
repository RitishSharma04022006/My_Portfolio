//Responsive Navbar Js Code
let hamesburger=document.querySelector('#hamesburger');
let navcontent=document.querySelector('.nav-content');
let cross=document.querySelector('#cross');
let navcontentlinks=document.querySelectorAll('.nav-content .links');
console.log(navcontentlinks);

hamesburger.addEventListener('click',()=>{
        navcontent.style.left=`${0}%`;
        hamesburger.style.display='none';
        cross.style.display='inline-block';
});

cross.addEventListener('click',()=>{
    navcontent.style.left=`${-100}%`;
    cross.style.display='none';
    hamesburger.style.display='inline-block';
});

navcontentlinks.forEach((el)=>{
    el.addEventListener('click',()=>{
        navcontent.style.left=`${-100}%`;
        cross.style.display='none';
        hamesburger.style.display='inline-block';
    });
})

