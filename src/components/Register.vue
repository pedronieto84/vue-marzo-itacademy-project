<template>
    <div>
        <div class=" row justify-content-center align-items-center">
            <b-form @submit="onSubmit" 
            class=" m-5 p-5 col-6 border "
            >
                <FormInput
                    :valor="nombre"
                    :nombre="'Nombre'"
                    @input="nombre = $event"
                    :inputType="'text'" 
                />
                <FormInput
                    :valor="email"
                    :nombre="'E-mail'"
                    @input="email = $event"
                    :inputType="'email'" 
                />
                <FormInput
                    :valor="password"
                    :nombre="'Password'"
                    @input="password = $event"
                    :inputType="'password'" 
                />
                <FormInput
                    :valor="confirmPassword"
                    :nombre="'Confirm Password'"
                    @input="password = $event"
                    :inputType="'password'" 
                />
                <b-button 
                    variant="outline-primary"
                    type="submit" 
                    value="Submit"
                >
                    Registrar
                </b-button>
        </b-form>
        </div>  
    </div>
</template>
<script>
import FormInput from './FormInput.vue'
export default {
    name: 'Register',
    components: {
        FormInput
    },
    data(){
        return {
            nombre: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
      onSubmit(event){
        event.preventDefault()
        this.crearNuevoUsuario();
      },
      crearNuevoUsuario(){
        const nuevoUsuario = {
          nombre: this.nombre,
          apellidos: this.apellidos,
          email: this.email,
          password: this.password,
        }
        console.log(nuevoUsuario)
      }
    },
}


</script>
