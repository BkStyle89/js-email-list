/* https://flynn.boolean.careers/exercises/api/random/mail */
console.log("test");
const listUlEl =document.querySelector(".list-group")
const refreshButtonEl=document.querySelector(".refresh")

console.log(listUlEl);


let mail =[]
function refreshMails(){
for(let i=0; i< 10;i++){
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(mails =>{
        let multipleMails = mails.response
   listUlEl.innerHTML += `<li> ${multipleMails} </li>`
   mail.push(multipleMails)  
}
)}
}
console.log(mail);

refreshMails()

refreshButtonEl.addEventListener("click",function(){
    refreshMails()
})


















//test


/* const listEl=document.getElementById("list") */
/* console.log(listLiEl); */
/* console.log(multipleMails); */
/* listEl.innerText=multipleMails */
/* listEl.innerHTML= mail */

/* for(let i=0; i<mail.length;i++){
const email = mail.length[i]
console.log(email);
listLiEl.innerHTML=email
} */
