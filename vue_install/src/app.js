const MyNameApp = {
    data() {
        return {
            name: "",
            //age: 0,
            input_name: "",
            //input_age: 0
        }
    },

    methods:{
        submitForm(e) {
            e.preventDefault();

            console.log(this.input_name)
            //console.log(this.age)

            this.name = this.input_name
            //this.age = this.input_age

        }
    }
}

Vue.createApp(MyNameApp).mount("#app");