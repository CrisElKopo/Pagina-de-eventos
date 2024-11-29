function toggleInput(value){
   const PQuantityInput = document.getElementsByClassName("PQuantity")[0];

   const elementos = document.querySelectorAll('.inputPersona');

   const cambiarDisplay = (value) => {
    elementos.forEach(elemento => {
        elemento.style.display = value;
   })
}

   if(value === false){
       PQuantityInput.classList.add("hidden")
       cambiarDisplay("none")
   } else {
       PQuantityInput.classList.remove("hidden")
        cambiarDisplay("block")
   }

}

