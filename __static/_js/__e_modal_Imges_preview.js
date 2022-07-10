

import  {magnificPopup_Imges} from './__e_img_privew_index.js'
const  _elements_query=[
'.cont',//__perant
'div.box_img>a'//Img
]


$(document.body).on('click','.a_ref_css_5326743_img_54338864327',function(e){
e.stopImmediatePropagation()


const Div_Images=$(_elements_query[0]).find(_elements_query[1])
const newArrray=[];

$(Div_Images).each(function(){
newArrray.unshift($(this).find('img').attr('src')) 
})


if(newArrray.length>0){



$('.div_ref_css_h_img_543387533987411>div.mfp-container>div.mfp-content').addClass('div_ref_css_is_mfp-content_e_53378633')
$('.div_ref_css_h_img_543387533987411>div.mfp-container>div.mfp-preloader').remove()

$('.div_ref_css_h_img_543387533987411>div.mfp-container').addClass('mfp-container_i_h_nHH').append(`
<div class='div_i_p_r_cII_5334874324872'>



<div class='div_r_n_r_t_t_i_dr_543587432482_LL'>
<img src='./web-img/__prev.svg' class='img_ref_css_5644698532295_NP' alt='Prev'>
</div>



<div class='div_r_n_r_t_t_i_dr_543587432482_RR'>
<img src='./web-img/___next.svg' class='img_ref_css_5644698532295_NP' alt='Next'>
</div>


<div class='div_ref_css_PP_643257411HH_II'></div>


</div>


`)



const Imges_Message=newArrray;


if(!Imges_Message.length){
return false;
}else{


for(let i of Imges_Message){
//LOOP
const Img=`
<a class="a_ref_css_i_n_a_57864338926AA">
<img src='${i}' class=" img_ref_css_5_4_5448875322_HH">
</a>
`
$('.div_ref_css_h_img_543387533987411>div.mfp-container>.div_i_p_r_cII_5334874324872>.div_ref_css_PP_643257411HH_II').append(Img)
}





const __Element=$(`.div_ref_css_h_img_543387533987411>div.mfp-container>.div_i_p_r_cII_5334874324872>.div_ref_css_PP_643257411HH_II>a>img[src='${$(this).find('img').attr('src')}']`).first().parent()




const Last_Element_index=$(__Element).parent().find('a').last().index()
const Element_Index=$(__Element).index()


if(Element_Index==Last_Element_index && Imges_Message.length > 6 ){

const position_left_lg=$(__Element).parent().find('a').last().prev().prev().prev().prev().prev().prev().position().left;
const position_left_md=$(__Element).parent().find('a').last().prev().prev().prev().position().left;
const position_left_sm=$(__Element).parent().find('a').last().prev().position().left;



if($(window).width() == 1024){
$(`.div_ref_css_h_img_543387533987411>div.mfp-container>.div_i_p_r_cII_5334874324872>.div_ref_css_PP_643257411HH_II>a>img[src='${$(this).find('img').attr('src')}']`).parent().closest('.div_ref_css_PP_643257411HH_II').animate({
left:`-${ position_left_md - 7}px`

},800)



}else if($(window).width() < 501){

$(`.div_ref_css_h_img_543387533987411>div.mfp-container>.div_i_p_r_cII_5334874324872>.div_ref_css_PP_643257411HH_II>a>img[src='${$(this).find('img').attr('src')}']`).parent().closest('.div_ref_css_PP_643257411HH_II').animate({
left:`-${ position_left_sm - 7}px`

},800)




}else{


$(`.div_ref_css_h_img_543387533987411>div.mfp-container>.div_i_p_r_cII_5334874324872>.div_ref_css_PP_643257411HH_II>a>img[src='${$(this).find('img').attr('src')}']`).parent().closest('.div_ref_css_PP_643257411HH_II').animate({
left:`-${ position_left_lg - 7}px`

},800)    

}




}else{

const position_left=$(`.div_ref_css_h_img_543387533987411>div.mfp-container>.div_i_p_r_cII_5334874324872>.div_ref_css_PP_643257411HH_II>a>img[src='${$(this).find('img').attr('src')}']`).parent().position().left;
$(`.div_ref_css_h_img_543387533987411>div.mfp-container>.div_i_p_r_cII_5334874324872>.div_ref_css_PP_643257411HH_II>a>img[src='${$(this).find('img').attr('src')}']`).parent().closest('.div_ref_css_PP_643257411HH_II').animate({
left:`-${ position_left - 7}px`

},800)


}











$(`.div_ref_css_h_img_543387533987411>div.mfp-container>.div_i_p_r_cII_5334874324872>.div_ref_css_PP_643257411HH_II>a>img[src='${$(this).find('img').attr('src')}']`).first().addClass('img_ref_css_5_4_5448875322_TT')
$(`.div_ref_css_h_img_543387533987411>div.mfp-container>.div_i_p_r_cII_5334874324872>.div_ref_css_PP_643257411HH_II>a>img[src='${$(this).find('img').attr('src')}']`).first().parent().addClass('____active1')

}







}
})

// Toggel Calss A and Img
$(document.body).on('click','.a_ref_css_i_n_a_57864338926AA',function(e){
e.preventDefault()
$(this).parent().find('a').each(function(){
$(this).find('img').removeClass('img_ref_css_5_4_5448875322_TT')
$(this).removeClass('____active1')
})
$(this).find('img').addClass('img_ref_css_5_4_5448875322_TT')
$(this).addClass('____active1')

const Img_src=$(this).find('img').attr('src')
const Find_IMG_FF=$(this).closest('.div_i_p_r_cII_5334874324872').prev().find('div.mfp-figure>figure>img')
$(Find_IMG_FF).addClass('mfp-img-ref-h974330ß9638')
.prop({
src:Img_src
})




const NewArray=[]
const A_Active=$(this);
const A_index=$(A_Active).index();
const All_Imges_length=$(A_Active).parent().find('a').length;



const Element_Stop_Left=$(A_Active).parent().find('a').last().prev().prev().prev().prev().prev().prev().index()
$(A_Active).parent().find('a').each(function(){
NewArray.push({index:$(this).index(),__p:$(this).position().left})
})





if($(window).width() == 1024){
if(A_index==0){
$(A_Active).parent().animate({
left:`10px`
})
}else if(A_index >  Element_Stop_Left && All_Imges_length > 6){
$(A_Active).parent().animate({
left:`-${NewArray.filter((x)=>x.index==Element_Stop_Left)[0].__p + 165}px`
})
}else{
$(A_Active).parent().animate({
left:`-${NewArray.filter((x)=>x.index==A_index)[0].__p  -7}px`
})
}
}else if($(window).width() < 501){


if(A_index==0){
$(A_Active).parent().animate({
left:`10px`
})
}else if(A_index >  Element_Stop_Left && All_Imges_length > 6){
$(A_Active).parent().animate({
left:`-${NewArray.filter((x)=>x.index==A_index)[0].__p - 7}px`
})

}else{
$(A_Active).parent().animate({
left:`-${NewArray.filter((x)=>x.index==A_index)[0].__p - 7}px`
})
}



}else{
if(A_index==0){
$(A_Active).parent().animate({
left:`10px`
})
}else if(A_index >  Element_Stop_Left && All_Imges_length > 6){
$(A_Active).parent().animate({
left:`-${NewArray.filter((x)=>x.index==Element_Stop_Left)[0].__p - 7}px`
})
}else{
$(A_Active).parent().animate({
left:`-${NewArray.filter((x)=>x.index==A_index)[0].__p - 7}px`
})
}




}










})
//FIXME: Next And Pref 
$(document.body).on('click','.div_r_n_r_t_t_i_dr_543587432482_LL',function(e){
let  A_Active=$(this).parent().find('.div_ref_css_PP_643257411HH_II>a.____active1')[0] || undefined
if(A_Active !==undefined ){
$(A_Active).prev('a').trigger('click')
}







})

$(document.body).on('click','.div_r_n_r_t_t_i_dr_543587432482_RR',function(e){
let  A_Active=$(this).parent().find('.div_ref_css_PP_643257411HH_II>a.____active1')[0] || undefined
if(A_Active !==undefined ){
$(A_Active).next('a').trigger('click')
}






})

$(document.body).on('keyup',function(e){
if(e.which==37){
$(document.body).find('.div_r_n_r_t_t_i_dr_543587432482_LL').trigger('click')



}else if(e.which==39){
$(document.body).find('.div_r_n_r_t_t_i_dr_543587432482_RR').trigger('click')
}else{
return false;
}



})



