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
            bImage: ""
        }
    },
    methods: {
        onSubmit(event){
            // Aquí hay que hacer un fetch POST que agrege el libro a la base de datos.
            
           let data = {"nombre": this.bTitle, "autor": this.bAuthor, "genero": this.bGenre,
            "stock": this.bStock, "prestados": 0, "imagen": this.bImage
           }
            console.log("Data: " + JSON.stringify(data))
            
            fetch("https://cacbooks.pythonanywhere.com/libros", {method: "POST", headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
               }, body: JSON.stringify(data)})
                .then(response => {
                    console.log(response)
                    return response.json()})
                .then(data => {
                    console.log(data)
                    alert("Libro agregado correctamente. Id: " + data.id)
                })
                .catch(reason => {
                    alert("Error sending the info, error: " + reason)
                })
            this.resetValues();
        },
        resetValues(){
            this.bTitle = "";
            this.bAuthor = "";
            this.bStock = "";
            this.bImage = "";
            this.bGenre = "undefined";
        }
    }
}).mount("#app");