<template>
    <div>
        <b-alert v-model="showSuccessMessage" variant="success">Acceso correcto!</b-alert>
        <b-alert v-model="showErrorMessage" variant="danger" dismissible>Usuario no encontrado</b-alert>
         <div   class=" row justify-content-center align-items-center">
            <b-form @submit="onSubmit" 
            class=" m-5 p-5 col-6 border "
            >
                <h3>Login</h3>
                <FormInput
                    :inputValue="email"
                    :name="'E-mail'"
                    @input="email = $event"
                    @validation="validation.email  = $event"
                    :inputType="'email'" 
                />
                <FormInput
                    :inputValue="password"
                    :name="'Password'"
                    @input="password = $event"
                    @validation="validation.password  = $event"
                    :inputType="'password'" 
                />
                <b-button 
                    variant="outline-primary"
                    type="submit" 
                    value="Submit"
                >
                    Entrar
                </b-button>
                <b-button  @click="openRegister">
                  ¿No tines cuenta?  Regístrate!
                </b-button>
            </b-form>
         </div>
    </div>
</template>
<script>
import FormInput from '@/components/FormInput.vue'
export default {
    name:'Formlogin',
    components: {
        FormInput
    },
    data(){
        return {
            email: '',
            password: '',
            showErrorMessage: false,
            showSuccessMessage: false,
        }
    },
    methods: {
        onSubmit(event){
        event.preventDefault()
        this.foundRegisteredUser();
      },
      openRegister(){
          this.$router.push({path: 'Register'})
      },
      foundRegisteredUser() {
        if(this.$store.state.users.find(
            user => user.email === this.email && user.password === this.password)
        ) {
            this.validation.email = true
            this. showSuccessMessage = true 
        } else{
            this.showErrorMessage = true
        }
      }
    }
}
</script>
