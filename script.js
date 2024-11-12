const result = document.getElementById('result');
const buttons = 

document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      result.value = '';
    } else if (button.textContent === '=') {
      result.value = eval(result.value);
    } else {
      result.value += button.textContent;
    }
  });
});