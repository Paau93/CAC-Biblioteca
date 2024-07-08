export const Cards = {
    props: ['books'],
    template: `
      <div class="container">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col" v-for="book in books" :key="book.id">
            <div class="card h-100">
              <img class="card-img-top" :src="book.imagen" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ book.nombre }}</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Autor:</strong> {{ book.autor }}</li>
                  <li class="list-group-item"><strong>Género:</strong> {{ book.genero }}</li>
                  <li class="list-group-item"><strong>Stock:</strong> {{ book.stock }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
};