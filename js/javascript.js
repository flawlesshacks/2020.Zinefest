// ===== ZINE SECTION
// ==== Functions
// === Toggles 'Active' class on slides
const isActive = (slide) => {
  const slides_one = document.getElementById(`zine-slide-one`)
  const slides_two = document.getElementById('zine-slide-two')
  const slides_three = document.getElementById('zine-slide-three')
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

// === Toggles "add" or "remove" on slide one
const toggle_slide_one = (option1, option2) => {
  const slides_one = document.getElementById('zine-slide-one')
  const slides_two = document.getElementById('zine-slide-two')
  const text_one = document.getElementById('zine-slide-one-text')
  const text_two = document.getElementById('zine-slide-two-text')
  slides_one.classList[option1]("transition-offscreen")
  slides_two.classList[option1]("transition-offscreen")
  text_one.classList[option1]("hidden")
  text_two.classList[option2]("hidden")
}

// === Toggles "add" or "remove" on slide two
const toggle_slide_two = (option1, option2) => {
  const slides_one = document.getElementById('zine-slide-one')
  const slides_two = document.getElementById('zine-slide-two')
  const slides_three = document.getElementById('zine-slide-three')
  const text_one = document.getElementById('zine-slide-one-text')
  const text_two = document.getElementById('zine-slide-two-text')
  slides_one.classList[option1]("transition-offscreen")
  slides_two.classList[option1]("transition-offscreen")
  slides_three.classList[option1]("transition-offscreen-2")
  text_one.classList[option1]("hidden")
  text_two.classList[option2]("hidden")
}

// === Toggles "add" or "remove" on slide three
const toggle_slide_three = (option1, option2) => {
  const slides_one = document.getElementById('zine-slide-one')
  const slides_two = document.getElementById('zine-slide-two')
  const slides_three = document.getElementById('zine-slide-three')
  const image_two = document.getElementById('zine-image-two')
  const image_three = document.getElementById('zine-image-three')
  slides_one.classList[option1]("transition-offscreen-2")
  slides_two.classList[option1]("transition-offscreen-2")
  slides_three.classList[option1]("transition-offscreen-3")
  image_two.classList[option1]("hidden")
  image_three.classList[option2]("hidden")
}

// === Update Arrow
const updateArrow = (arrow, option) => {
  const arrowEle = document.getElementById(arrow)
  arrowEle.classList[option]('arrow-disabled')
}

// === Change to slide one
const handleButtonOne = () => {
  const slides_three = document.getElementById('zine-slide-three')
  if (slides_three.classList.contains('active')) {
    toggle_slide_three('remove', 'add')
  } else {
    toggle_slide_one('remove', 'add')
  }
  toggle_slide_two('remove', 'add')
  isActive("zine-slide-one")
  updateArrow('arrow-left', 'add')
  updateArrow('arrow-right', 'remove')
}

// === Change to slide two
const handleButtonTwo = () => {
  const slides_three = document.getElementById('zine-slide-three')
  if (slides_three.classList.contains('active'))
    toggle_slide_three('remove', 'add')
  toggle_slide_two('add', 'remove')
  isActive("zine-slide-two")
  updateArrow('arrow-left', 'remove')
  updateArrow('arrow-right', 'remove')
}

// === Change to slide three
const handleButtonThree = () => {
  toggle_slide_three('add', 'remove')
  isActive("zine-slide-three")
  updateArrow('arrow-left', 'remove')
  updateArrow('arrow-right', 'add')
}

// === Changes between slides depending on current active slide
handleArrow = (arrow) => {
  const slides_two = document.getElementById('zine-slide-two')
  const slides_three = document.getElementById('zine-slide-three')
  if (slides_three.classList.contains('active')) {
    handleButtonTwo()
  } else if (arrow === 'arrow-left') {
    if (slides_two.classList.contains('active')) {
      handleButtonOne()
    }
  } else {
    if (slides_two.classList.contains('active')) {
      handleButtonThree()
    } else {
      handleButtonTwo()
    }
  }
}


// ==== EVENT LISTENER
document.getElementById("zine-button-three").addEventListener("click", () => {
  handleButtonThree()
});

document.getElementById("zine-button-two").addEventListener("click", () => {
  handleButtonTwo()
});

document.getElementById("zine-button-one").addEventListener("click", () => {
  handleButtonOne()
});

document.getElementById("arrow-left").addEventListener("click", () => {
  handleArrow("arrow-left")
});

document.getElementById("arrow-right").addEventListener("click", () => {
  handleArrow("arrow-right")
});