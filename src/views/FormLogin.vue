<template>
  <div>
    <b-alert v-model="showErrorMessage" variant="danger"
      >{{ this.getErrorMessage }}</b-alert
    >
    <b-alert v-model="showSuccessMessage" variant="success"
      >Acceso correcto!</b-alert
    >
    <div class="row justify-content-center align-items-center">
      <b-form @submit="onSubmit" class="m-5 p-5 col-8 text-left border">
        <h3 class="text-center">Login</h3>
        <FormInput
          :inputValue="login.email"
          :name="'E-mail'"
          @input="login.email = $event"
          :inputType="'email'"
        />
        <b-form-group class="m-4">
          <label for="text-password">Password</label>
          <b-form-input v-model="login.password" type="password" />
        </b-form-group>
        <div class="d-flex justify-content-center">
          <b-button @click="openRegister" variant="light" class="m-4 col-6">
            ¿No tines cuenta? Regístrate!
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
import { mapGetters } from 'vuex'
import FormInput from "@/components/FormInput.vue";
export default {
  name: "Formlogin",
  components: {
    FormInput,
  },
  data() {
    return {
      login: { email: "", password: "" },
      verified: false,
      showErrorMessage: false,
      showSuccessMessage: false,
    };
  },
  computed: {
    ...mapGetters([
      'getErrorMessage',
      'getIsLogged'
    ]), 
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.attemptLogin();
    },
    openRegister() {
      this.$router.push({ path: "Register" });
    },
    async attemptLogin() {
      await this.$store.dispatch("logIn", this.login)
       if(this.getIsLogged === true ) {
        this.showSuccessMessage = true
        this.verified = true
        this.$router.push({ path: "my-account" })
       } else {
        this.showErrorMessage = true
        return getErrorMessage;
       }
    },
  },
};
</script>
