<template>
  <div class="container mt-5">
    <b-form @submit.prevent="onSubmit" class="my-data-form">
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
      <div>(Aquí falta el select per al tipus d'organització)</div>

      <div class="buttons-container">
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
      user: {
        company: "Company",
        email: "email@ail.ail",
        password: "password123",
        orgType: "ONG",
      },
    };
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
  display: flex;
  gap: 2rem;
}
</style>
