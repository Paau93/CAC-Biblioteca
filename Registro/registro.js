const { createApp } = Vue;

createApp({
    
    data() {
        return {
            type: 0, //login=0 - registro=1
            form: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        registro() {
            console.log(this.form);
        }

    },
    computed: {
        titulo() {
            return (this.type==0)?'Iniciar Sesión':'Registrarse';
        }
    }
}).mount('#app')
