<template>
  <div class="container mt-5">
    <b-form
      @input="showButtons = true"
      @submit.prevent="onSubmit"
      class="my-data-form"
    >
      <form-input
        :inputValue="user.name"
        :name="'Nombre'"
        :inputType="'text'"
        @input="user.company = $event"
        @validation="validation.name = $event"
      />
      <form-input
        :inputValue="user.email"
        :name="'Email'"
        :inputType="'email'"
        @input="user.email = $event"
        @validation="validation.email = $event"
      />
      <form-input
        :inputValue="user.password"
        :name="'Password'"
        :inputType="'password'"
        @input="user.password = $event"
        @validation="validation.password = $event"
      />
      <form-input
        :inputValue="user.password"
        :name="'Confirm Password'"
        :inputType="'password'"
        @input="confirmPassword = $event"
        :state="validationPassword"
      />
      <b-form-group class="m-4">
        <label>Type Of Institution</label>
        <b-form-select
          v-model="user.typeOfInstitution"
          :options="orgTypes"
        ></b-form-select>
      </b-form-group>

      <b-form-invalid-feedback :state="validationPassword">
        La contraseña no coincide
      </b-form-invalid-feedback>

      <div v-if="showButtons" class="buttons-container mr-4">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="button" variant="outline-secondary" @click="onCancel"
          >Cancel</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
export default {
  components: {
    FormInput,
  },
  data() {
    return {
      orgTypes: [
        "Empresa Pública",
        "ONG o empreses del 3er sector",
        "Empresa Privada",
        "Altres",
      ],
      showButtons: false,
      pwdChange: false,
      validation: {
        name: null,
        email: null,
        password: null,
      },
      confirmPassword: "",
      showDismissibleAlert: false,
    };
  },
  computed: {
    validationPassword() {
      return this.user.password === this.confirmPassword;
    },
    user() {
      return this.$store.getters.getCurrentUser;
    },
  },
  methods: {
    onSubmit() {
      return;
    },
    onCancel() {
      location.reload(); // ugly but it works for now
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  border: 2px solid #666;
  border-radius: 5px;
  margin-bottom: 3rem;
}
.my-data-form {
  margin: 4rem;
  text-align: left;
}
.my-data-form input {
  margin-bottom: 3rem;
}
.buttons-container {
  margin-top: 4rem;
  display: flex;
  justify-content: right;
  gap: 2rem;
}
</style>
