<template>
  <div class="container mt-5">
    <b-form
      @input="showButtons = true"
      @submit.prevent="onSubmit"
      class="my-data-form"
    >
      <form-input
        :inputValue="user.company"
        :name="'Nombre'"
        :inputType="'text'"
        @input="user.company = $event"
      />
      <form-input
        :inputValue="user.email"
        :name="'Email'"
        :inputType="'email'"
        @input="user.email = $event"
      />
      <form-input
        :inputValue="user.password"
        :name="'Password'"
        :inputType="'password'"
        @input="user.password = $event"
      />
      <b-form-group class="m-4">
        <label>Type Of Institution</label>
        <b-form-select
          v-model="user.orgType"
          :options="orgTypes"
        ></b-form-select>
      </b-form-group>

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
      user: {
        // TODO: Use getCurrentUser getter and **set new user onSubmit()**
        company: "Company",
        email: "email@ail.ail",
        password: "password123",
        orgType: "ONG o empreses del 3er sector",
      },
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getCurrentUser; // It still doesn't return anything...
    },
  },
  methods: {
    onSubmit() {
      return;
    },
    onCancel() {
      this.user = {
        company: "Company",
        email: "email@ail.ail",
        password: "password123",
        orgType: "ONG",
      };
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
