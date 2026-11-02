const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting)

    {entrada.target.classList.add('aparecer'); }});
}, {threshold: 0.1});

const elementosVentana = document.querySelectorAll('.ventana, .advertencia, .ventanaL').forEach((el) => {
    observador.observe(el);
});

function togglewin(id){
   const el = document.getElementById(id);
   if(el){
      el.style.display = (el.style.display===none||el.style.display==='')? 'block':'none';
   }
}
