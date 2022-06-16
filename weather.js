const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

localStorage.setItem("apiKey",EncryptStringAES("3ee3ae18c0990b250806b50911aa52c6"))


form.addEventListener("submit", async() => {
    e.prevenDefault()
    getWeathenDataFromApi();
})



const getWeathenDataFromApi = ()=> {
    // alert("http request gone");
    // input.value = "";
    let tokenKey =DecryptStringAES(localStorage.getItem("apiKey"));
    // console.log(apikey);
    let inputVal = input.value;
    let unitType = "metric";
    let lang = "tr";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${tokenKey}&units=${unitType}&lang=${lang}&`;
  

     try {
        // const response = await fetch(url).then(response =>response.json());
        const response = await axios();
        const{name,main,sys,weather}=response.data;
        let iconUrl =`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
     } catch (error) {
        
     }
    form.reset();

}