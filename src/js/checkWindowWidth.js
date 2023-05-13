export const checkWindowWidths = (func) => {
  const windowWidth = window.innerWidth

  return func(windowWidth)
}