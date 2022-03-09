<template>
  <div class="container mt-5">
    <b-form @submit.prevent="onSubmit" class="my-data-form">
      <b-form-input
        id="input-1"
        v-model="user.company"
        type="text"
        @input="showButtons = true"
        placeholder="Name of company / institution / person"
        required
      ></b-form-input>
      <b-form-input
        id="input-2"
        v-model="user.email"
        type="email"
        @input="showButtons = true"
        placeholder="Enter email"
        required
      ></b-form-input>
      <b-form-input
        id="input-3"
        v-model="user.password"
        type="text"
        @input="showButtons = true"
        placeholder="Change Password"
        required
      ></b-form-input>
      <b-form-input
        id="input-4"
        v-model="user.orgType"
        type="text"
        @input="showButtons = true"
        placeholder="Organization Type"
        required
      ></b-form-input>

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
export default {
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
