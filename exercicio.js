[...document.getElementsByClassName('resposta')].forEach(elem=>{
   const {correct} = elem.dataset;
   const [textarea, p] = elem.children;
  
   elem.addEventListener('input', ev=>{
    const resp = textarea.value;
    if (resp === '') {
      p.innerText = '';
    } else if (resp === correct) {
      p.innerText = 'Acertou!';
    } else {
      p.innerText = 'Tente de novo!';
    }
   });
});