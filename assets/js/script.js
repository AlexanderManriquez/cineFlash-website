$(document).ready(function () {
  // Objetos para almacenar la información de las sucursales
  const sucursales = {
    Parral: {
      nombre: "Sucursal Parral",
      img: "./assets/img/fachada-cine.jpg",
      direccion: "Av. Libertad 1234, Parral",
      telefono: "+56 9 1234 5678",
      horario: "Lunes a Domingo, 10:00 - 22:00",
    },
    Retiro: {
      nombre: "Sucursal Retiro",
      img: "./assets/img/fachada-cine.jpg",
      direccion: "Calle Central 4321, Retiro",
      telefono: "+56 9 8765 4321",
      horario: "Lunes a Sábado, 11:00 - 21:00",
    },
    Linares: {
      nombre: "Sucursal Linares",
      img: "./assets/img/fachada-cine.jpg",
      direccion: "Av. Independencia 5678, Linares",
      telefono: "+56 9 2468 1357",
      horario: "Todos los días, 12:00 - 23:00",
    },
  };
  // Función para mostrar la sucursales según la selección del usuario
  $("#sucursal-select").on("change", function () {
    const seleccion = $(this).val();
    if (sucursales[seleccion]) {
      const data = sucursales[seleccion];
      $("#sucursal-nombre").text(data.nombre);
      $("#sucursal-img").attr("src", data.img).attr("alt", data.nombre);
      $("#sucursal-direccion").text("Dirección: " + data.direccion);
      $("#sucursal-telefono").text("Teléfono: " + data.telefono);
      $("#sucursal-horario").text("Horario: " + data.horario);
    }
  });

  // Validaciones de formulario para reserva de entradas para películas
  $("#reservationForm").on("submit", function (e) {
    e.preventDefault();

    let nombre = $("#nombre").val().trim();
    let email = $("#email").val().trim();
    let cantidad = parseInt($("#cantidad").val());
    let pelicula = $("#movie").val().trim();
    let fecha = $("#date").val();
    let hora = $("#time").val();
    let tarjeta = $("#card-number").val().trim();
    let titular = $("#card-name").val().trim();
    let cvv = parseInt($("#secret-number").val());
    console.log(`CVV: ${cvv}`);

    // Expresiones regulares
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexTarjeta = /^\d{16}$/;
    let regexCVV = /^\d{3}$/;

    // Validaciones
    if (nombre === "" || !regexNombre.test(nombre)) {
      alert("Ingresa un nombre válido (solo letras).");
      return;
    }

    if (email === "" || !regexEmail.test(email)) {
      alert("Ingresa un email válido.");
      return;
    }

    if (isNaN(cantidad) || cantidad <= 0) {
      alert("La cantidad de entradas debe ser un número mayor que 0.");
      return;
    }

    if (pelicula === "") {
      alert("Por favor ingresa el nombre de la película.");
      return;
    }

    if (fecha === "") {
      alert("Por favor ingresa la fecha en que deseas ver la película.");
      return;
    }
    if (hora === "") {
      alert("Por favor ingresa la hora de la función.");
      return;
    }

    if (!regexTarjeta.test(tarjeta)) {
      alert("El número de tarjeta debe tener exactamente 16 dígitos.");
      return;
    }

    if (titular === "") {
      alert("Ingresa el nombre del titular de la tarjeta.");
      return;
    }

    if (!regexCVV.test(cvv)) {
      alert("El CVV debe tener exactamente 3 dígitos.");
      return;
    }

    alert(`¡Reserva confirmada con éxito! Comprobante enviado a ${email}.`);
    this.reset();
  });
  // Validaciones de formulario para reserva de comida
  $("#foodReservationForm").on("submit", function (e) {
    e.preventDefault();

    let nombre = $("#food-name").val().trim();
    let email = $("#food-email").val().trim();
    let tarjeta = $("#food-card-number").val().trim();
    let titular = $("#food-card-name").val().trim();
    let cvv = parseInt($("#cvv").val());

    // Expresiones regulares
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexTarjeta = /^\d{16}$/;
    let regexCVV = /^\d{3}$/;

    // Validaciones
    if (nombre === "" || !regexNombre.test(nombre)) {
      alert("Ingresa un nombre válido (solo letras).");
      return;
    }

    if (email === "" || !regexEmail.test(email)) {
      alert("Ingresa un email válido.");
      return;
    }

    if (!regexTarjeta.test(tarjeta)) {
      alert("El número de tarjeta debe tener exactamente 16 dígitos.");
      return;
    }

    if (titular === "") {
      alert("Ingresa el nombre del titular de la tarjeta.");
      return;
    }

    if (!regexCVV.test(cvv)) {
      alert("El CVV debe tener exactamente 3 dígitos.");
      return;
    }

    alert(`¡Reserva confirmada con éxito! Comprobante enviado a ${email}.`);
    this.reset();
  });
});
