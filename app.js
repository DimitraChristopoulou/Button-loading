const loadButton=document.getElementById('loadbutton');
const loader=document.getElementById('loader');
const demoForm= document.getElementById('my-form');

loadButton.addEventListener('click',() => {

    //disable the button
    //and prevent further clicks
    loadButton.disabled=true;
    loader.style.display='inline-block';

    setTimeout(() => {

        //restore the button state
        //after a operation is done
        loadButton.disabled=false;
        loader.style.display='none';
        demoForm.reset();
    },2000);
});