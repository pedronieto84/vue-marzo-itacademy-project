<template>
    <div>
        <b-alert v-model="showSuccessMessage" variant="success">Acceso correcto!</b-alert>
        <b-alert v-model="showErrorMessage" variant="danger" dismissible>Usuario no encontrado</b-alert>
         <div   class=" row justify-content-center align-items-center">
            <b-form @submit="onSubmit" 
            class=" m-5 p-5 col-8 text-left border "
            >
                <h3 class="text-center">Login</h3>
                <FormInput
                    :inputValue="email"
                    :name="'E-mail'"
                    @input="email = $event"
                    @validation="validation.email  = $event"
                    :inputType="'email'" 
                />
                <b-form-group class="m-4">
                    <label for="text-password">Password</label>
                    <b-form-input 
                        v-model="password"
                        type="password" 
                    />
                </b-form-group>
                <div class="d-flex justify-content-center">
                     <b-button  @click="openRegister"
                        variant="light"
                        class="m-4 col-6"
                     >
                        ¿No tines cuenta?  Regístrate!
                    </b-button>
                    <b-button 
                        variant="outline-primary"
                        type="submit" 
                        value="Submit"
                        class="m-4 col-4 text-center"
                    >
                        Entrar
                    </b-button>
                </div> 
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
            verified: false,
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
            this.verified = true
            this. showSuccessMessage = true 
        } else{
            this.showErrorMessage = true
        }
      }
    }
}
</script>
