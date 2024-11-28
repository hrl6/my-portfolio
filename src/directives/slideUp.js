export const slideUp = {
  mounted(el) {
    // console.log('Slide-up directive mounted')
    el.classList.add('slide-up-element')

    // initial state
    el.style.transform = 'translateY(50px)'
    el.style.opacity = '0'
    el.style.transition = 'all 1000ms ease-out'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log('Intersection observed:', entry.isIntersecting)
          if (entry.isIntersecting) {
            el.style.transform = 'translateY(0)'
            el.style.opacity = '1'
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(el)
  },
}
