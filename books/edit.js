import { Navegacion } from "/componentes/Navegacion.js";

const {createApp} = Vue;

createApp({
    components: {
        "navegacion": Navegacion
    },
    data(){
        return {
            bTitle: "",
            bAuthor: "",
            bStock: "",
            bGenre: "undefined",
            bImage: "",
            bLend: "",
            bId: 0
        }
    },
    created(){
        let searchQuery = window.location.search;
        let data = new URLSearchParams(searchQuery)
        
        this.bId = data.get("id")
        fetch("https://cacbooks.pythonanywhere.com/libros/" + data.get("id"))
            .then(response => {return response.json()})
            .then(data => {
                this.bTitle = data.nombre;
                this.bAuthor = data.autor;
                this.bGenre = data.genero;
                this.bStock = data.stock;
                this.bImage = data.imagen;
                this.bLend = data.prestados;
            })
    },
    methods: {
        onSubmit(event){
            // Aquí hay que hacer un fetch PUT que actualize el libro a la base de datos.
            
           let data = {
            "nombre": this.bTitle, 
            "autor": this.bAuthor, 
            "genero": this.bGenre,
            "stock": this.bStock, 
            "prestados": this.bLend, 
            "imagen": this.bImage
           }
            
            fetch("https://cacbooks.pythonanywhere.com/libros/" + this.bId.toString(), {method: "PUT", headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
               }, body: JSON.stringify(data)})
                .then(response => {
                    return response.json()})
                .then(data => {
                    alert("Libro actualizado correctamente. Id: " + data.id)
                    window.location = "/index.html"
                })
                .catch(reason => {
                    alert("Error sending the info, error: " + reason)
                });
        }
    }
}).mount("#app");