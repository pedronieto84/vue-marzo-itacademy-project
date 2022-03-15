<template>

    <div>
        <b-form-group class="m-4">
            <label>{{name}}</label>
            <b-form-input
                v-model="input"
                required
                :state="validationState"
                :type="inputType"
            >
                {{inputValue}}
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
        },
        validationState() {
            this.$emit('validation', this.validationState);
        }
    },
    created() {
        this.input = this.inputValue
    },
    props:{
        name: String,
        inputValue: [String, Number],
        inputType: String,
    },
    methods: {
        validateName(value) {
            return value.length > 5 ? true :false;
        },
        validateEmail(value){
            let regEx = /\S+@\S+\.\S+/
            return regEx.test(value) ? true : false;    
        },
        validatePassword(value) {
            let regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/
            return regEx.test(value) ? true : false;
        },
        validate(value) {
            if (value == "") {
                return null;
            }
            switch (this.name){
                case "Nombre":
                    return this.validateName(value);
                case "E-mail":
                    return this.validateEmail(value);
                case "Password":
                    return this.validatePassword(value);
                case "Confirm Password":
                    return this.validatePassword(value);
                default:
            }
        },
    },
}
</script>
