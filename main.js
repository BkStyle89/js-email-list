/* https://flynn.boolean.careers/exercises/api/random/mail */
console.log("test");

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then(mails =>{
    console.log(mails.response);
}
