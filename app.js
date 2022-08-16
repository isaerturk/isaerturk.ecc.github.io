
const mon = document.querySelector(".mon");
mon.addEventListener("click",()=>{
    if (mon.classList.contains("bar")){
      mon.classList.remove("bar");
      mon.classList.add("barActive");
    }
    else{
      mon.classList.remove("barActive");
      mon.classList.add("bar")
    }
})
const wed = document.querySelector(".wed");
wed.addEventListener("click",()=>{
    if (wed.classList.contains("bar")){
      wed.classList.remove("bar");
      wed.classList.add("barActive");
    }
    else{
      wed.classList.remove("barActive");
      wed.classList.add("bar")
    }
})
const tue = document.querySelector(".tue");
tue.addEventListener("click",()=>{
    if (tue.classList.contains("bar")){
      tue.classList.remove("bar");
      tue.classList.add("barActive");
    }
    else{
      tue.classList.remove("barActive");
      tue.classList.add("bar")
    }
})
const thu = document.querySelector(".thu");
thu.addEventListener("click",()=>{
    if (thu.classList.contains("bar")){
      thu.classList.remove("bar");
      thu.classList.add("barActive");
    }
    else{
      thu.classList.remove("barActive");
      thu.classList.add("bar")
    }
})
const fri = document.querySelector(".fri");
fri.addEventListener("click",()=>{
    if (fri.classList.contains("bar")){
      fri.classList.remove("bar");
      fri.classList.add("barActive");
    }
    else{
      fri.classList.remove("barActive");
      fri.classList.add("bar")
    }
})
const sat = document.querySelector(".sat");
sat.addEventListener("click",()=>{
    if (sat.classList.contains("bar")){
      sat.classList.remove("bar");
      sat.classList.add("barActive");
    }
    else{
      sat.classList.remove("barActive");
      sat.classList.add("bar")
    }
})
const sun = document.querySelector(".sun");
sun.addEventListener("click",()=>{
    if (sun.classList.contains("bar")){
      sun.classList.remove("bar");
      sun.classList.add("barActive");
    }
    else{
      sun.classList.remove("barActive");
      sun.classList.add("bar")
    }
})



function getCurrency() {
  fetch("data.json")
  .then(response => response.json())
    .then(data => zort(data))
    .catch(err => console.log(err))
}




