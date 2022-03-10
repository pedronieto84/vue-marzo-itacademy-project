<template>
  <div class="container mt-5">
    <b-form @submit.prevent="onSubmit" class="my-data-form">
      <form-input
        :valor="user.company"
        :nombre="'Nombre'"
        :inputType="'text'"
        @input="handleNameInput"
      />
      <form-input
        :valor="user.email"
        :nombre="'Email'"
        :inputType="'email'"
        @input="handleEmailInput"
      />
      <form-input
        :valor="user.password"
        :nombre="'Password'"
        :inputType="'password'"
        @input="handlePasswordInput"
      />

      <div class="buttons-container" v-if="showButtons">
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
      showButtons: false,
      user: {
        company: "Company",
        email: "email@ail.ail",
        password: "password123",
        orgType: "ONG",
      },
    };
  },
  methods: {
    handleNameInput() {
      this.user.company = $event;
      this.showButtons = true;
    },
    handleEmailInput() {
      this.user.email = $event;
      this.showButtons = true;
    },
    handlePasswordInput() {
      this.user.password = $event;
      this.showButtons = true;
    },
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
      this.showButtons = false;
      return;
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
