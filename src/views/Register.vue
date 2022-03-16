<template>
    <div>
        <b-alert v-model="showErrorMessage" variant="danger" dismissible>Hay errores en el formulario</b-alert>
        <div class=" row justify-content-center align-items-center">
            <b-form @submit="onSubmit" 
            class=" m-5 p-5 col-8 border text-left"
            >
                <h3 class="text-center">Registro</h3>
                <FormInput
                    :inputValue="name"
                    :name="'Nombre'"
                    @input="name = $event"
                    @validation="validation.name  = $event"
                    :inputType="'text'" 
                />
                <b-form-text class="text-center">
                    Tiene que tener más de cinco letras
                </b-form-text>
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
               <b-form-text class="text-center">
                   La contraseña debe tener letras y números, un  mínimo 4 carácteres y un máxima de 8. 
                </b-form-text>
                <b-form-group class="m-4">
                    <label for="text-password">Confirm Password</label>
                    <b-form-input 
                        v-model="confirmPassword"
                        :state="passwordValidation"
                        type="password" 
                    />
                </b-form-group>
                <b-form-invalid-feedback 
                    :state="passwordValidation"
                    class="text-center"
                >
                    La contraseña no coincide
                </b-form-invalid-feedback>
                <b-form-group class="m-4">
                    <b-form-select 
                        v-model="selected" 
                        :options="options"
                        required
                    />
                </b-form-group>
                <div class="d-flex justify-content-center">
                     <b-button  @click="openLogin"
                        variant="light"
                        class="m-4 col-6"
                     >
                        Login
                    </b-button>
                    <b-button 
                        variant="outline-primary"
                        type="submit" 
                        value="Submit"
                        class="m-4 col-4 text-center"
                    >
                        Registrar
                    </b-button>
                </div> 
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
            selected: null,
            options: [
                { value: null, text:'Organization Type'},
                { value: 'Empresa publica', text: 'Empresa pública'},
                { value: 'ONG o empresa del tercer sector', text: 'ONG o empresa del tercer sector'},
                { value: 'Empresa privada', text: 'Empresa privada'},
                { value: 'Otros', text: 'Otros'},
            ],
            validation: {
                name: null,
                email: null,
                password: null,
                selected: null,
            },
            showErrorMessage: false,
        }
    },
    computed: {
      passwordValidation() {
        if (this.confirmPassword.length === 0) {
            return null;
        }
        return this.password === this.confirmPassword
      },
    },
    methods: {
      onSubmit(event){
        event.preventDefault()
        this.registerNewUser();
      },
      openLogin(){
          this.$router.push({path: 'login'})
      },
      registerNewUser(){
        if(this.validation.name === true && 
            this.validation.email === true && 
            this.validation.password === true && 
            this.passwordValidation === true
            ) 
        {
            const newUser = {
                name: this.name,
                email: this.email,
                password: this.password,
                organization : this.selected
            }
            this.$store.dispatch("setNewUser", newUser);
            this.$router.push({path: 'login'})
        } else {
            this.showErrorMessage = true
        } 
        },
    },
}
</script>