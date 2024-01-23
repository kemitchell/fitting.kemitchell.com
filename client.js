// Create links to all <h3>s in a new <nav> above <footer>.
document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('h3')
  const nav = document.createElement('nav')

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

  nav.appendChild(p)
  nav.appendChild(links)
  const footer = document.querySelector('footer')
  document.body.insertBefore(nav, footer)
})
