window.onload = function () {
    const contenedor = document.getElementById("artworks");
  
    fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=10")
      .then(res => res.json())
      .then(info => {
        const obras = info.data;
        const url = info.config.iiif_url;
  
        obras.forEach(obra => {
          if (!obra.image_id) return;
  
          const imagenId = obra.image_id;
          const tamaño = "full/843,/0/default.jpg";
          const imagen = `${url}/${imagenId}/${tamaño}`;
          
  
          const caja = document.createElement("div");
          caja.className = "box";
  
          caja.innerHTML = `
            <div class="image">
              <img src="${imagen}" alt="${obra.title}">
              <div class="icons">
                <a href="./login.html" class="car-btn">Comprar</a>
              </div>
            </div>
            <div class="content">
              <h3>${obra.title}</h3>
              <div class="price">${obra.artist_title || "Artista desconocido"}</div>
            </div>
          `;
  
          contenedor.appendChild(caja);
        });
      });
  };
  

  const boton = document.getElementById('leer');
  const contenedor = document.getElementById('contenedornosotros');
  
  boton.addEventListener('click', function() {
    if (contenedor.style.display === 'none') {
      contenedor.style.display = 'block';
    } else {
      contenedor.style.display = 'none';
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const mensajeContainer = document.getElementById("form-mensaje");
  
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      
  
      if (!nombre || !email || !telefono) {
        Mensaje("Por favor, completa todos los campos.", "error");
        return;
      }
  
      Mensaje("¡Mensaje enviado con éxito!", "valido");
      form.reset();
    });
  
    function Mensaje(text, type) {
      mensajeContainer.textContent = text;
      mensajeContainer.className = `form-mensaje ${type}`;
  
    
      setTimeout(() => {
        mensajeContainer.textContent = "";
        mensajeContainer.className = "form-mensaje";
      }, 2000);
    }
  });

  