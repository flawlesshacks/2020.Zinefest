document.getElementById("zine-button-two").addEventListener("click", ()=>{
  let slides_one = document.querySelector('.zine-slide-one')
  let slides_two = document.querySelector('.zine-slide-two')
  let text_one = document.querySelector('#zine-slide-one-text')
  let text_two = document.querySelector('#zine-slide-two-text')
  slides_one.classList.add("transition-offscreen")
  slides_two.classList.add("transition-offscreen")
  text_one.classList.add("hidden")
  text_two.classList.remove("hidden")
});

document.getElementById("zine-button-one").addEventListener("click", ()=>{
  let slides_one = document.querySelector('.zine-slide-one')
  let slides_two = document.querySelector('.zine-slide-two')
  let text_one = document.querySelector('#zine-slide-one-text')
  let text_two = document.querySelector('#zine-slide-two-text')
  slides_one.classList.remove("transition-offscreen")
  slides_two.classList.remove("transition-offscreen")
  text_one.classList.remove("hidden")
  text_two.classList.add("hidden")
});