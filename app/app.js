const obs = new IntersectionObserver((entrada) => {
   entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
         entrada.target.classList.add('aparecer');
      }
   })
}, { treshold: 0.1 });

const elementosVentana = document.querySelectorAll('.ventana, .advertencia').forEach((el) => { entrada.observe(el) });

function togglewin(id){
   const el = documentElementById(id);
   if(el){
      el.style.display = (el.style.display===none||el.style.display==='')? 'block':'none';
   }
}
