(function () {
  "Uso privado"  
  const misimagenes = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  let iterarimagen = 0;
  document.getElementById("imgsiguiente").onclick = siguientefoto;
  function siguientefoto() {
    iterarimagen++;
    if (iterarimagen > misimagenes.length - 1) {
      iterarimagen = 0;
    }
    document.getElementById("imagen").src = misimagenes[iterarimagen];
  }

  document.getElementById("imganterior").onclick = anteriorfoto;
  function anteriorfoto() {
    iterarimagen--;
    if (iterarimagen < 0) {
      iterarimagen = misimagenes.length - 1;
    }
    document.getElementById("imagen").src = misimagenes[iterarimagen];
  }
})();
