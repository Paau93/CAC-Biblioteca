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
            if (this.type === 0) {
                // Login
                fetch("https://cacbooks.pythonanywhere.com/logins/" + this.form.email)
                    .then(response => {return response.json()})
                    .then(data => {
                        if (Object.keys(data).length != 0) {
                            // El mail existe
                            console.log(data)
                            if (data.password == this.form.password){
                                // Password es correcto
                                localStorage.setItem("auth", data.email)
                                localStorage.setItem("isAdmin", data.isAdmin)
                                location = "/index.html"
                            } else {
                                // Password incorrecto
                                alert("Wrong password")
                            }
                        } else {
                            // Mail no existe
                            alert("El mail no existe")
                        }
                    })
            } else {
                fetch("https://cacbooks.pythonanywhere.com/logins/" + this.form.email)
                    .then(response => {return response.json()})
                    .then(data => {

                        if (Object.keys(data).length != 0) {
                        
                            // El mail existe
                            alert("Este mail ya existe. Elije otro.")
                        
                        } else {
                        
                            // Mail no existe
                            fetch("https://cacbooks.pythonanywhere.com/logins", {method: "POST", headers: {
                                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
                               }, body: JSON.stringify({"email": this.form.email, "password": this.form.password, "isAdmin": 0})})
                                .then(response => {
                                    console.log(response)
                                    return response.json()})
                                .then(data => {
                                    console.log(data)
                                    alert("Email " + data.email + " creado exitosamente.")
                                    this.type = 0;
                                })
                                .catch(reason => {
                                    alert("Error sending the info, error: " + reason)
                                })

                        }
                    })
            }
        }

    },
    computed: {
        titulo() {
            return (this.type==0)?'Iniciar Sesión':'Registrarse';
        }
    }
}).mount('#app')
