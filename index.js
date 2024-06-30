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

b1 = new Book("Brazales de duelo", "Brandon Sanderson", "Ficcion", 2, 0, "")
b2 = new Book("Imperio Final", "Brandon Sanderson", "Ficcion", 1, 1, "")


const BookRow = {
    props: ["bookData"],
    template:`
        <tr class="text-white">
                    <td> {{bookData.name}} </td>
                    <td> {{bookData.author}} </td>
                    <td> {{bookData.genre}} </td>
                    <td> {{bookData.stock}} </td>
                    <td> {{bookData.lend}} </td>
                    <td v-if="userIsAdmin">
                        <a href="" class="bg-success btn"><img src="/assets/icons/lapiz.png" alt="edit"></a>
                        <a href="" class="bg-danger btn"><img src="/assets/icons/x.png" alt="edit"></a>
                    </td>
        </tr>
    `
};

createApp({
    components: {
        "row": BookRow
    },
    data(){
        return {
            books: [],
            userIsAdmin: true
        }
    },
    created(){
        this.books = [b1, b2]
    }
}).mount("#app")