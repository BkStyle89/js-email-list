/* https://flynn.boolean.careers/exercises/api/random/mail */
console.log("test");


for(let i=0; i< 10;i++){
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(mails =>{
        let multipleMails = mails.response
        console.log(multipleMails);
   
    
}
)}
