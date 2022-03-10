<template>
    <div>
        <b-form-group class="m-4">
            <label>{{nombre}}</label>
            <b-form-input
                v-model="input"
                required
                :state="validationState"
                :type="inputType"
            >
                {{valor}}
            </b-form-input>
        </b-form-group>
    </div>  
</template>
<script>
    export default {
    data(){
        return{
            input: '',
            validationState: null,
        } 
    },
    watch: {
        input(value) {
            this.validationState = this.validate(value);
            this.$emit('input', value);
        }
    },
    created() {
        this.input = this.valor
    },
    props:{
        nombre: String,
        valor: [String, Number],
        inputType: String,
    },
    methods: {
        validateName(value) {
            return value.length > 5 ? true :false;
        },
        validateEmail(value){
            //eslint-disable-next-line
            let regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
            return regEx.test(value) ? true : false;    
        },
        validatePassword(value) {
            let regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/
            return regEx.test(value) ? true : false;
        },
        validateConfirmPassword(value) {
            return value === this.validatePassword ? true : false;
        },
        validate(value) {
            if (value == "") {
                return null;
            }
            switch (this.nombre){
                case "Nombre":
                    return this.validateName(value);
                case "Email":
                    return this.validateEmail(value);
                case "Password":
                    return this.validatePassword(value);
                case "Confirm Password":
                    return this.validateConfirmPassword(value);
                default:
            }
        },
    },
}
</script>