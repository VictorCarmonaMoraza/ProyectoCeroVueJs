const app = Vue.createApp({
    // template:`
    // <h1>Hola Mundo</h1>
    // <p>{{ 1 + 1}}</p>
    // <p>{{ '1' + '1'}}</p>
    // <p>{{ true}}</p>
    // <p>{{ [1,2,3,4,5,6]}}</p>
    // <p>{{ {a:1,b:2} }}</p>
    // <p>{{ [ {}, {}, {}, [] ] }}</p>
    // <p>{{ true ? 'Activo':'Inactivo' }}</p>
    // <p>Desde app.js</p>
    // `

    data(){
        return{
            quote: 'Betis',
            message:'Victor Developer',
            author:'Bruce Wayne'
        }
    },
    methods:{
        changeQuote(event){
            console.log('Hola Victor desde metodo',event)
            this.author= 'Pedro'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }


})

app.mount('#myApp')