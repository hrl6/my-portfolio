export const slideIn = {
  mounted(el) {
    console.log('Slide-in directive mounted')
    el.classList.add('slide-in-element')

    el.parentElement.style.overflow = 'hidden'

    // initial state
    el.style.transform = 'translateX(50px)'
    el.style.opacity = '0'
    el.style.transition = 'all 1000ms ease-out'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersection observed:', entry.isIntersecting)
          if (entry.isIntersecting) {
            el.style.transform = 'translateX(0)'
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
