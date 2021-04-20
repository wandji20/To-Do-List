export default function displayFooter(){
  const container = document.getElementById('content');
  const footer = container.appendChild(document.createElement('footer'));
  footer.setAttribute('class', 'bg-dark')
  const authors = footer.appendChild(document.createElement('p'))
  authors.setAttribute('class','text-center text-light my-auto')
  authors.innerHTML = 'Copyright 2021  Wandji && Necmi'
}
