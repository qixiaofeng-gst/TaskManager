import acorn from 'acorn'

const component = () => {
  const element = document.createElement('div')
  element.innerHTML = acorn.parse('1 + 1')
  return element
}

document.body.appendChild(component())
