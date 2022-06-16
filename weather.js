const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem("apiKey",EncryptStringAES("3ee3ae18c0990b250806b50911aa52c6"))


form.addEventListener("submit",() => {
    e.prevenDefault()
    getWeathenDataFromApi();
})



const getWeathenDataFromApi = ()=> {
    alert("http request sended");
}