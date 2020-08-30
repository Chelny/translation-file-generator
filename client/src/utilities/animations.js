const animations = {
  scrollToElement: (element) => {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}

export default animations
