export const slideIn = {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(el)
        }
      })
    })

    observer.observe(el)
  },
}
