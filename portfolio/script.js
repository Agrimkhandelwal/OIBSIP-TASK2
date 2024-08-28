let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {

    navbar.classList.toggle('active');
}
navbar.onclick =()=> {

    navbar.classList.toggle('.navbar');
    navbar.classList.toggle('active');
    

}
var typed=new typed(".auto-type",{
    String: ["programmer","web developer","student"],
    typeSpeed:150,
    backSpeed:150,
    looped:true
})