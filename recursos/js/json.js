let jsonReq = new XMLHttpRequest();

    jsonReq.onload = function (){ 
        if (this.readyState === 4 && this.status === 200){
            leerDetalles (this);
        } else
            console.log ('Error al cargar los datos');
    };

    jsonReq.open ('GET', 'http://localhost:5500/detalleCateg.json', true);
    jsonReq.responseType = 'json'; 
    jsonReq.send();

function leerDetalles (jsonObj){
    let valoresJson = jsonObj.response;

    let listaDetalles = valoresJson.detalles;

    let tagListado = document.getElementById ('listaJSON');

    tagListado.innerHTML = '';
    listaDetalles.forEach(element => {
        let tagCategoria = document.createElement('h3');
        let tagProducto = document.createElement('h4');
        let tagDisponible = document.createElement('span');
        let tagTemporada = document.createElement('p');
        let tagDescripcion = document.createElement('p');
        let tagEnter = document.createElement('br');

        tagCategoria.innerHTML = element.categoria;
        tagProducto.innerHTML = element.producto;
        tagDisponible.innerHTML = element.disponible; 
        tagTemporada.innerHTML = element.temporada;
        tagDescripcion.innerHTML = element.descripcion;
             
        tagListado.appendChild(tagCategoria);
        tagListado.appendChild(tagProducto);
        tagListado.appendChild(tagDisponible); 
        tagListado.appendChild(tagTemporada);     
        tagListado.appendChild(tagDescripcion);    
        tagListado.appendChild(tagEnter);
    });
}