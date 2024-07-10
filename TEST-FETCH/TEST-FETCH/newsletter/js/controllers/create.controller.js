import { clientServices } from "../client-service.js";

//OBTENIENDO LAS SECTION DE LAS DISTINTAS CATEGORIAS    
const latestNews = document.querySelector(".lastest__news");
const sportsNews = document.querySelector(".sports__news");
const politicsNews = document.querySelector(".politics__news");

clientServices
  .fetchNews()
  .then((data) => {
    // OBTENIENDO LAS 5 ULTIMAS NOTICIAS
    const getrecentNews = data.slice(-5);
    getrecentNews.forEach((noticia) => {
      createNews(
        noticia.imagen,
        noticia.id,
        noticia.titulo,
        noticia.categoria,
        latestNews  
      );
    });

    // OBTENIENDO LAS NOTICIAS DE CATEGORIA DEPORTES
    const getsportNews = data.forEach((noticia) => {
      if ("Diversos" === noticia.categoria) {
        createNews(
          noticia.imagen,
          noticia.id,
          noticia.titulo,
          noticia.categoria,
          sportsNews    
        );
      }
    });

     // OBTENIENDO LAS NOTICIAS DE CATEGORIA DEPORTES
     const getpolitcsNews = data.forEach((noticia) => {
      if ("Diversos" === noticia.categoria) {
        createNews(
          noticia.imagen,
          noticia.id,
          noticia.titulo,
          noticia.categoria,
          politicsNews    
        );
      }
    });

    

  })
  .catch((error) => {
    console.error("Error al obtener noticias:", error);
  });


//  FUNCION PARA CREAR Y MOSTRAR NOTICIAS EN EL INICIO

const createNews = (imagen, id, titulo, categoria, container) => {
  const newsElement = `<article class="noticia">
      <a href="#${id}" class="noticia__container">
        <img class="noticia__img" src="${imagen}" alt="noticia">
      </a>
      <div class="noticia__info">
        <span class="noticia__categoria">${categoria}</span>
        <h3 class="noticia__titulo">${titulo}</h3>
      </div>
    </article>
`;

  // Crear un contenedor temporal
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = newsElement;
  // Agregar el primer hijo del contenedor temporal a latestNews1
  container.appendChild(tempContainer.firstElementChild);
};
