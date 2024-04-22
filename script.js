document.addEventListener('DOMContentLoaded', () => {
  const ob = new IntersectionObserver((event) => {
    document.querySelector('nav').classList.toggle('solid', !event[0].isIntersecting)
  }, {
    threshold: 0.9
  })
  ob.observe(document.getElementById('hero'));
})
