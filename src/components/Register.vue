<template>
    <div>
        <b-form @submit="onSubmit" class="col-8">
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
            <button>click</button>
        </b-form>
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
    }
}


</script>
