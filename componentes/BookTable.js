export const BookTable = {
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

                    <tr v-for="book in bookData" v-bind:id="book.id">
                        <td> {{book.name}} </td>
                        <td> {{book.author}} </td>
                        <td> {{book.genre}} </td>
                        <td> {{book.stock}} </td>
                        <td> {{book.lend}} </td>
                        <td v-if="userIsAdmin">
                            <a href="#" v-on:click="editBook(book.id)" class="bg-success btn"><img src="/assets/icons/lapiz.png" alt="edit"></a>
                            <a href="#" v-on:click="deleteBook(book.id)" class="bg-danger btn"><img src="/assets/icons/x.png" alt="edit"></a>
                        </td>
                    </tr>
                
                </tbody>
        </table>
    `,
    methods: {
        editBook(id){
            // Abre la página con la info de un libro. Para poder modificar sus atributos.
            alert("edit" + " " + id)
        },
        deleteBook(id){
            // Hace un fetch DELETE para eliminar un libro.
            alert("Delete" + " " + id)
        }
    }
};