import {BookTable} from "./componentes/BookTable.js"
import { Navegacion } from "./componentes/Navegacion.js";

const {createApp} = Vue;


createApp({
    components: {
        "book-table": BookTable,
        "navegacion": Navegacion
    },
    data(){
        return {
            books: [{
                id: 0,
                name:"Brazales de duelo", 
                author:"Brandon Sanderson", 
                genre:"Ficcion", 
                stock:2, 
                lend: 0, 
                img: ""
            }, {
                id: 1,
                name:"Imperio Final",
                author:"Brandon Sanderson", 
                genre:"Ficcion", 
                stock:1, 
                lend: 1, 
                img: ""
            }],
            userIsAdmin: true
        }
    }
}).mount("#app")