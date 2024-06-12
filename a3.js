const bar =document.getElementsByClassName('mobile')
const nav =document.getElementsByClassName('menu')
if (bar){
    bar.addEventListner('click'()=>{
        nav.classlist.add('active')
    })
}