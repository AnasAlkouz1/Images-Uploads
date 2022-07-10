




const __text=`
Hmmm… can't reach this pagelocalhost refused to connect. 
Try: Checking the connection Checking the proxy and the firewall ERR_CONNECTION_REFUSED
`

const __input=document.querySelector('.i657864323753')
const __perant=document.querySelector('.cont')
const __btn=document.getElementsByClassName('__d_578533774225')[0]

__input.addEventListener('change',(e)=>{
const __files=__input.files
if(__files.length > 1){
document.querySelector('.i657864323752').value=`${__files.length}-Image`;
}else{
document.querySelector('.i657864323752').value=__files[0].name;
}


})

__btn.addEventListener('click',(e)=>{
const __filess=__input.files;
for(let __files of __filess){
let __fs=new FileReader();
__fs.onload=(x)=>{
const __new_element=`
<div class='box_img'>
<div class='re86587533873'>x</div>
<a class="image-popup-no-margins a_ref_css_5326743_img_54338864327" href="${x.target.result}">
<img src='${x.target.result}' class='img_cc'/>
</a>
<div class='txt'>${__text}<div>
</div>
`
$('.cont').append(__new_element)
document.querySelector('.i657864323752').value='';
const __e=document.querySelector('.cont')
__e.scrollIntoView({behavior:'smooth',block:'end'})
magnificPopup_Imges()

}
__fs.readAsDataURL(__files)
}


})






function magnificPopup_Imges(){


$(document.body).find('.a_ref_css_5326743_img_54338864327').magnificPopup({
type: 'image',
closeBtnInside: false,
closeOnBgClick:false,
fixedContentPos: true,
mainClass: 'mfp-no-margins  div_ref_css_h_img_543387533987411', // class to remove default margin from left and right side
image:{verticalFit:true},



zoom:{
enabled:true,
duration:300
}

});
}







