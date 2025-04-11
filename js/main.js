const main = document.getElementsByTagName("main").item(0);
const urlMain = "https://fakestoreapi.com/products/";

// const fetchingData = () => {
//   return new Promise((resolve, reject) => {
//     if (urlMain == null) {
//       reject(new error("Data is empty"));
//     } // null
//     setTimeout(() => {
//       resolve(urlMain);
//     }, 2000);
//   });
// };

// const fetchingUrl = async () => {
//   try {
//     const get = await fetchingData();
//   } catch (error) {
//     console.error("catch", error);
//     main.insertAdjacentHTML(
//       "beforeend",
//       `
//             <div class="alert alert-danger" role="alert">
//             ${error.message}
//             </div>
//         `
//     );
//   }
// }; // Con funcion async/await
// fetchingUrl();

const getData = () => {
  const options = { method: "GET" };
  fetch(urlMain, options)
    .then((response) => {
      console.log(urlMain);
      console.log(response);
      response.json().then((res) => {
        createCards(res);
      });
    })
    .catch((error) => {
      console.error("catch", error);
      main.insertAdjacentHTML(
        "beforeend",
        `
            <div class="alert alert-danger" role="alert">
            ${error.message}
            </div>
        `
      );
    });
}; // getData
getData();

const createCards = (productos) => {
  productos.forEach((prod) => {
    const firstModal = `modalDetails-${prod.id}`;
    const secondModal = `modalAdded-${prod.id}`;

    main.insertAdjacentHTML(
      "beforeend",
      `
          <div class="col-md mb-4 d-flex justify-content-center">
            <div class="card" style="width: 15rem; heigth: auto; padding: 1rem; text-align: center; color: rgba(245, 245, 245, 0.918); background: rgba(223, 223, 223, 0.15)">
              <img src="${prod.image}" class="card-img-top rounded" alt="${prod.title}">
              <div class="card-body">
                <p class="card-title"><strong>${prod.title}</strong></p>
                <p class="card-text">${prod.category}</p>
  
                <!-- Modal 1 -->
                <div class="modal fade" id="${firstModal}" aria-hidden="true" aria-labelledby="${firstModal}-label" tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="${firstModal}-label">${prod.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="description">
                          <strong>Product description:</strong>
                          <p>${prod.description}</p>
                        </div>
                        <div class="price">
                          <strong>PRICE:</strong>
                          <h4><strong>$</strong>${prod.price}</h4>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button class="btn btn-success" data-bs-target="#${secondModal}" data-bs-toggle="modal">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
  
                <!-- Modal 2 -->
                <div class="modal fade" id="${secondModal}" aria-hidden="true" aria-labelledby="${secondModal}-label" tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="${secondModal}-label">Product added!</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div> 
                      <div class="modal-body">
                        <div class="img-modal">
                          <img src="https://media1.tenor.com/m/wYnhRBcwIGAAAAAC/cwif-cwif-buy.gif" class="card-img-top" alt="${prod.title}">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <!-- Botón para abrir el primer modal -->
                <button class="btn btn-outline-light mt-2" data-bs-target="#${firstModal}" data-bs-toggle="modal">See details</button>
              </div>
            </div>
          </div>
        `
    );
  });
}; // CreateCards
