const active_slide_one = (option1, option2) => {
  let slides_one = document.getElementById('zine-slide-one')
  let slides_two = document.getElementById('zine-slide-two')
  let text_one = document.getElementById('zine-slide-one-text')
  let text_two = document.getElementById('zine-slide-two-text')
  slides_one.classList[option1]("transition-offscreen")
  slides_two.classList[option1]("transition-offscreen")
  text_one.classList[option1]("hidden")
  text_two.classList[option2]("hidden")
}

const active_slide_two = (option1, option2) => {
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

const active_slide_three = (option1, option2) => {
  let slides_one = document.getElementById('zine-slide-one')
  let slides_two = document.getElementById('zine-slide-two')
  let slides_three = document.getElementById('zine-slide-three')
  let image_two = document.getElementById('zine-image-two')
  let image_three = document.getElementById('zine-image-three')
  slides_one.classList[option1]("transition-offscreen-2")
  slides_two.classList[option1]("transition-offscreen-2")
  slides_three.classList[option1]("transition-offscreen-3", "active")
  image_two.classList[option1]("hidden")
  image_three.classList[option2]("hidden")
}

document.getElementById("zine-button-three").addEventListener("click", () => {
  active_slide_three('add', 'remove')
});

document.getElementById("zine-button-two").addEventListener("click", () => {
  let slides_three = document.getElementById('zine-slide-three')
  if (slides_three.classList.contains('active')) {
    active_slide_three('remove', 'add')
    active_slide_two('add', 'remove')
  } else {
    active_slide_two('add', 'remove')
  }
});

document.getElementById("zine-button-one").addEventListener("click", () => {
  let slides_three = document.getElementById('zine-slide-three')
  if (slides_three.classList.contains('active')) {
    active_slide_two('remove', 'add')
    active_slide_three('remove', 'add')
  } else {
    active_slide_one('remove', 'add')
  }
});