function busqueda(roomSearch, inMeter, endMeters) {

    if ( isNaN(roomSearch) || isNaN(inMeter) || isNaN(endMeters)) {
      alert("faltan campos por rellenar");
    } else if (inMeter > endMeters) {
      alert("el campo desde no puede ser mayor del campo hasta");
    } else {
      //función de filtrar
  
      let html = ""; // Despliega las propiedades en el Templates según filtro.
      let count = 0; // Muestra la cantidad de propiedades según filtro.
  
  
      for (let filtro of propiedadesJSON) {
        if (
          filtro.rooms >= roomSearch &&
          filtro.m >= inMeter &&
          filtro.m <= endMeters
        ) {
          count++;
          // a continuación se muestra el Template.
          html += `<section id="Propiedades">
        
            <div class="propiedades">
              <div class="propiedad">
                <div class="img" style="background-image: url('${filtro.src}')"></div>
                <section>
                    <h5>${filtro.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${filtro.rooms}</p>
                        <p>Metros: ${filtro.m}</p>
                    </div>
                    <p class="my-3">${filtro.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
              </div>
          </div>
        </section>`;
        }
      }
  
      document.querySelector(".propiedades").innerHTML = html;
      document.querySelector("#numDisplay").innerHTML = "Total: " + count;
    }
  }
  
  
  busqueda(-Infinity, -Infinity, Infinity);
  
  
  document.querySelector("#search").addEventListener("click", () => {
  let cantCuartos = parseInt(document.querySelector("#numRooms").value);
  let minMts = parseInt(document.querySelector("#fromMeters").value);
  let maxMts = parseInt(document.querySelector("#uptoMeters").value);
  busqueda(cantCuartos, minMts, maxMts);
  });
  