<template>
    <div>
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>Usuario no encontrado</b-alert>
         <div class=" row justify-content-center align-items-center">
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
            validation: {
                email: null,
                password: null
            },
            showDismissibleAlert: false
        }
    },
}
</script>
