document.getElementById("zine-button-three").addEventListener("click", () => {
  let slides_one = document.getElementById('zine-slide-one')
  let slides_two = document.getElementById('zine-slide-two')
  let slides_three = document.getElementById('zine-slide-three')
  let image_two = document.getElementById('zine-image-two')
  let image_three = document.getElementById('zine-image-three')
  slides_one.classList.add("transition-offscreen-2")
  slides_two.classList.add("transition-offscreen-2")
  slides_three.classList.add("transition-offscreen-3", "active")
  image_two.classList.add("hidden")
  image_three.classList.remove("hidden")
});

document.getElementById("zine-button-two").addEventListener("click", () => {
  let slides_one = document.getElementById('zine-slide-one')
  let slides_two = document.getElementById('zine-slide-two')
  let slides_three = document.getElementById('zine-slide-three')
  let text_one = document.getElementById('zine-slide-one-text')
  let text_two = document.getElementById('zine-slide-two-text')
  let image_two = document.getElementById('zine-image-two')
  let image_three = document.getElementById('zine-image-three')
  if (slides_three.classList.contains('active')) {
    slides_one.classList.remove("transition-offscreen-2")
    slides_two.classList.remove("transition-offscreen-2")
    slides_three.classList.remove("transition-offscreen-3", "active")
    image_two.classList.remove("hidden")
    image_three.classList.add("hidden")
  } else {
    slides_one.classList.add("transition-offscreen")
    slides_two.classList.add("transition-offscreen")
    slides_three.classList.add("transition-offscreen-2")
    text_one.classList.add("hidden")
    text_two.classList.remove("hidden")
  }
});

document.getElementById("zine-button-one").addEventListener("click", () => {
  let slides_one = document.getElementById('zine-slide-one')
  let slides_two = document.getElementById('zine-slide-two')
  let slides_three = document.getElementById('zine-slide-three')
  let text_one = document.getElementById('zine-slide-one-text')
  let text_two = document.getElementById('zine-slide-two-text')
  let image_two = document.getElementById('zine-image-two')
  let image_three = document.getElementById('zine-image-three')
  if (slides_three.classList.contains('active')) {
    slides_one.classList.remove("transition-offscreen")
    slides_two.classList.remove("transition-offscreen")
    slides_three.classList.remove("transition-offscreen-2")
    slides_one.classList.remove("transition-offscreen-2")
    slides_two.classList.remove("transition-offscreen-2")
    slides_three.classList.remove("transition-offscreen-3", "active")
    text_one.classList.remove("hidden")
    text_two.classList.add("hidden")
    image_two.classList.remove("hidden")
    image_three.classList.add("hidden")
  } else {
    let text_one = document.getElementById('zine-slide-one-text')
    let text_two = document.getElementById('zine-slide-two-text')
    slides_one.classList.remove("transition-offscreen")
    slides_two.classList.remove("transition-offscreen")
    text_one.classList.remove("hidden")
    text_two.classList.add("hidden")
  }
});