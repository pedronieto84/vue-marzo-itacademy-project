<template>
    <div>
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>Hay errores en el formulario</b-alert>
        <div class=" row justify-content-center align-items-center">
            <b-form @submit="onSubmit" 
            class=" m-5 p-5 col-6 border "
            >
                <h3>Registro</h3>
                <FormInput
                    :inputValue="name"
                    :name="'Nombre'"
                    @input="name = $event"
                    @validation="validation.name  = $event"
                    :inputType="'text'" 
                />
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
                <FormInput
                    :inputValue="confirmPassword"
                    :name="'Confirm Password'"
                    @input="confirmPassword = $event"
                    :inputType="'password'" 
                    :state="validationPassword"
                />
                <b-form-invalid-feedback 
                    :state="validationPassword"
                >
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
import FormInput from '@/components/FormInput.vue'
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
            validation: {
                name: null,
                email: null,
                password: null
            },
            showDismissibleAlert: false
        }
    },
    computed: {
      validationPassword() {
        return this.password === this.confirmPassword
      },
    },
    methods: {
      onSubmit(event){
        event.preventDefault()
        this.registerNewUser();
      },
      registerNewUser(){
        if(this.validation.name === true && 
            this.validation.email === true && 
            this.validation.password === true && 
            this.validationPassword === true) 
        {
            const newUser = {
                name: this.name,
                email: this.email,
                password: this.password,
            }
            this.$router.push({path: 'form-login'})
            console.log(newUser);
            return true
        } else {
            this.showDismissibleAlert = true
        } 
        },
    },
}
</script>