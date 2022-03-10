<template>
    <div>
        <div class=" row justify-content-center align-items-center">
            <b-form @submit="onSubmit" 
            class=" m-5 p-5 col-6 border "
            >
                <FormInput
                    :inputValue="name"
                    :name="'Nombre'"
                    @input="name = $event"
                    :inputType="'text'" 
                />
                <FormInput
                    :inputValue="email"
                    :name="'E-mail'"
                    @input="email = $event"
                    :inputType="'email'" 
                />
                <FormInput
                    :inputValue="password"
                    :name="'Password'"
                    @input="password = $event"
                    :inputType="'password'" 
                />
                <FormInput
                    :inputValue="confirmPassword"
                    :name="'Confirm Password'"
                    @input="confimrPassword = $event"
                    :inputType="'password'" 
                    :state="validation"
                />
                <b-form-invalid-feedback :state="validation">
                    La contraseña no coincide
                </b-form-invalid-feedback>
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
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    computed: {
      validation() {
        return this.password === this.confirmPassword
      }
    },
    methods: {
      onSubmit(event){
        event.preventDefault()
        this.registerNewUser();
        this.checkPassword();
      },
      registerNewUser(){
        const newUser = {
          name: this.name,
          email: this.email,
          password: this.password,
        }
        console.log(newUser)
      },
      checkPassword() {
        //   debugger
          
      }
    },
}


</script>
