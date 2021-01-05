const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML = 'Eshaans Portfolio'
  excerpt.innerHTML =
    'Hi, I am Eshaan and I am 16 years old with a lot of potential'
  profile_img.innerHTML =
    '<img src="" alt="https://www.google.com/search?q=eshaan+gulia&rlz=1C1CHBF_enUS845US845&sxsrf=ALeKk02F3CtCLvmifEOoP1ohgYneA1zO-w:1609193555244&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj2tfCR2fHtAhVEaq0KHbZIBsoQ_AUoAXoECBQQAw&biw=1279&bih=588#imgrc=XgzonxrzHbKw0M" />'
  name.innerHTML = 'Eshaan Gulia'
  date.innerHTML = 'May 11, 2004'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}