export const fadeIn = {
  mounted(el) {
    // console.log('Fade-in directive mounted')
    el.classList.add('fade-in-element')

    el.style.opacity = '0'
    el.style.transition = 'opacity 1000ms ease-out'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
