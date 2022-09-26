const imgContainer =document.querySelector('.container');
const btnEl =document.querySelector('.btn');

let imgArray=[ ];
 imgArray.length= 6;

 function newPicture(){
    for(let x=0; x<imgArray.length; x++){
        let x =document.createElement('img');
       let y = Math.floor(Math.random() *3000)+6;
       
           imgContainer.appendChild(x);
           x.classList.add('card')
           x.src="https://picsum.photos/300?random="+y;
       }
       
 }
 newPicture();

 btnEl.addEventListener("click", newPicture)
