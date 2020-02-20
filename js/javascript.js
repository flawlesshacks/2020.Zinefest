const isActive = (slide) => {
  let slides_one = document.getElementById(`zine-slide-one`)
  let slides_two = document.getElementById('zine-slide-two')
  let slides_three = document.getElementById('zine-slide-three')
  if (slide === "zine-slide-one") {
    slides_one.classList.add("active")
    slides_two.classList.remove("active")
    slides_three.classList.remove("active")
  }
  if (slide === "zine-slide-two") {
    slides_one.classList.remove("active")
    slides_two.classList.add("active")
    slides_three.classList.remove("active")
  }
  if (slide === "zine-slide-three") {
    slides_one.classList.remove("active")
    slides_two.classList.remove("active")
    slides_three.classList.add("active")
  }
}

const toggle_slide_one = (option1, option2) => {
  let slides_one = document.getElementById('zine-slide-one')
  let slides_two = document.getElementById('zine-slide-two')
  let text_one = document.getElementById('zine-slide-one-text')
  let text_two = document.getElementById('zine-slide-two-text')
  slides_one.classList[option1]("transition-offscreen")
  slides_two.classList[option1]("transition-offscreen")
  text_one.classList[option1]("hidden")
  text_two.classList[option2]("hidden")
}

const toggle_slide_two = (option1, option2) => {
  let slides_one = document.getElementById('zine-slide-one')
  let slides_two = document.getElementById('zine-slide-two')
  let slides_three = document.getElementById('zine-slide-three')
  let text_one = document.getElementById('zine-slide-one-text')
  let text_two = document.getElementById('zine-slide-two-text')
  slides_one.classList[option1]("transition-offscreen")
  slides_two.classList[option1]("transition-offscreen")
  slides_three.classList[option1]("transition-offscreen-2")
  text_one.classList[option1]("hidden")
  text_two.classList[option2]("hidden")
}

const toggle_slide_three = (option1, option2) => {
  let slides_one = document.getElementById('zine-slide-one')
  let slides_two = document.getElementById('zine-slide-two')
  let slides_three = document.getElementById('zine-slide-three')
  let image_two = document.getElementById('zine-image-two')
  let image_three = document.getElementById('zine-image-three')
  slides_one.classList[option1]("transition-offscreen-2")
  slides_two.classList[option1]("transition-offscreen-2")
  slides_three.classList[option1]("transition-offscreen-3")
  image_two.classList[option1]("hidden")
  image_three.classList[option2]("hidden")
}

document.getElementById("zine-button-three").addEventListener("click", () => {
  toggle_slide_three('add', 'remove')
  isActive("zine-slide-three")
});

document.getElementById("zine-button-two").addEventListener("click", () => {
  let slides_three = document.getElementById('zine-slide-three')
  if (slides_three.classList.contains('active')) {
    toggle_slide_three('remove', 'add')
    toggle_slide_two('add', 'remove')
  } else {
    toggle_slide_two('add', 'remove')
  }
  isActive("zine-slide-two")
});

document.getElementById("zine-button-one").addEventListener("click", () => {
  let slides_three = document.getElementById('zine-slide-three')
  if (slides_three.classList.contains('active')) {
    toggle_slide_two('remove', 'add')
    toggle_slide_three('remove', 'add')
  } else {
    toggle_slide_one('remove', 'add')
  }
  isActive("zine-slide-one")
});