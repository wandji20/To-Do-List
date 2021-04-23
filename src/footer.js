export default function displayFooter() {
  const container = document.getElementById('content');
  const footer = container.appendChild(document.createElement('footer'));
  footer.setAttribute('class', 'bg-dark');
  const author = footer.appendChild(document.createElement('p'));
  author.setAttribute('class', 'text-center text-light my-auto');
  author.innerHTML = 'Copyright 2021  Wandji';
}
