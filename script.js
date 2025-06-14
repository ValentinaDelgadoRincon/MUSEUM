window.onload = function () {
    var contenedor = document.getElementById("artworks");
  
    fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=10")
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datos) {
        var obras = datos.data;
        var urlBase = datos.config.iiif_url;
  
        for (var i = 0; i < obras.length; i++) {
          var obra = obras[i];
  
          if (!obra.image_id) {
            continue;
          }
  
          var imagenId = obra.image_id;
          var tamano = "full/843,/0/default.jpg";
          var imagen = urlBase + "/" + imagenId + "/" + tamano;
  
          var tarjeta = document.createElement("div");
          tarjeta.className = "box";
  
          tarjeta.innerHTML =
            "<div class='image'>" +
              "<img src='" + imagen + "' alt='" + obra.title + "'>" +
              "<div class='icons'>" +
                "<a href='#' class='car-btn'>Ver obra</a>" +
              "</div>" +
            "</div>" +
            "<div class='content'>" +
              "<h3>" + obra.title + "</h3>" +
              "<div class='price'>" + (obra.artist_title || "Artista desconocido") + "</div>" +
            "</div>";
  
          contenedor.appendChild(tarjeta);
        }
      });
  };
  