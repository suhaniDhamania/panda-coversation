const response1=document.querySelector("#response1");
const response2=document.querySelector("#response2");
const text=document.querySelector("#text");
const gif1=document.querySelector("#gif1");


response1.addEventListener("click",()=>{
gif1.src="love.gif";
text.innerText="Awwwe Baby So Cute❤️❤️";
text.style.color="Red";
});

response2.addEventListener("click",()=>{
    gif1.src="tenor no.gif";
    text.innerText="uhhh,You Not Love Me😡😡😡.";
    text.style.color="#004369";
    });