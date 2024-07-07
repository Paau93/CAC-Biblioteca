import { BookTable } from "./componentes/BookTable.js"
import { Navegacion } from "./componentes/Navegacion.js";

const {createApp} = Vue;


createApp({
    components: {
        "book-table": BookTable,
        "navegacion": Navegacion
    },
    data(){
        return {
            books: [],
            userIsAdmin: false
        }
    },
    created(){
        fetch("https://cacbooks.pythonanywhere.com/libros")
            .then(response => {return response.json()})
            .then(data => {
                this.books = data;
            })
    }
}).mount("#app")