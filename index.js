const {createApp} = Vue;


class Book {
    /**
     * @param {String} author - Autor del libro
     */
    constructor (name, author, genre, stock, lend, img) {

        this.name = name;
        this.author = author;
        this.genre = genre;
        this.stock = stock;
        this.lend = lend;
        this.img = img;
    }
}


const BookTable = {
    props: ["bookData", "userIsAdmin"],
    template:`
        <table class="container mt-3">
                <thead>
                    <tr class="bg-dark text-white">
                        <th> Nombre </th>
                        <th> Autor </th>
                        <th> Género </th>
                        <th> Stock </th>
                        <th> Prestados </th>
                        <th v-if="userIsAdmin"> Acciones </th>
                    </tr>
                </thead>

                <tbody class="bg-light">

                    <tr v-for="book in bookData">
                        <td> {{book.name}} </td>
                        <td> {{book.author}} </td>
                        <td> {{book.genre}} </td>
                        <td> {{book.stock}} </td>
                        <td> {{book.lend}} </td>
                        <td v-if="userIsAdmin">
                            <a href="" class="bg-success btn"><img src="/assets/icons/lapiz.png" alt="edit"></a>
                            <a href="" class="bg-danger btn"><img src="/assets/icons/x.png" alt="edit"></a>
                        </td>
                    </tr>
                
                </tbody>
        </table>
    `
};

createApp({
    components: {
        "book-table": BookTable
    },
    data(){
        return {
            books: [{
                name:"Brazales de duelo", 
                author:"Brandon Sanderson", 
                genre:"Ficcion", 
                stock:2, 
                lend: 0, 
                img: ""
            }, {
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