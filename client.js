document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('h3')
  const footer = document.createElement('footer')

  const p = document.createElement('p')
  p.appendChild(document.createTextNode('You can link right to any of the sections above:'))

  const links = document.createElement('ol')
  for (const heading of headings) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = `#${heading.id}`
    a.appendChild(document.createTextNode(heading.innerText))
    li.appendChild(a)
    links.appendChild(li)
  }

  footer.appendChild(p)
  footer.appendChild(links)
  document.body.appendChild(footer)
})
