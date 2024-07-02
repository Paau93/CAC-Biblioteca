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

            console.log(this.bTitle + " " + this.bAuthor);
            console.log(this.bStock + " " + this.bGenre);
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