import { BookTable } from "./componentes/BookTable.js"
import { Navegacion } from "./componentes/Navegacion.js";
import { Cards } from "./componentes/Cards.js";

const {createApp} = Vue;


createApp({
    components: {
        "book-table": BookTable,
        "navegacion": Navegacion,
        "tarjetas": Cards
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
        
        if ("isAdmin" in localStorage) {
            if (localStorage.getItem("isAdmin") == "0"){
                this.userIsAdmin = false
            } else {
                this.userIsAdmin = true
            }
            
        }
    }
}).mount("#app")