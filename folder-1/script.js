const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  })
})

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.background = 'red';
  })
})
