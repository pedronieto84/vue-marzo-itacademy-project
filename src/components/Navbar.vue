<template>
  <div>
    <b-navbar class="mt-2">
      <b-button variant="info" v-if="this.$store.state.isAdmin === true">
        <router-link :to="{ name: 'Admin' }" class="text-white text-decoration-none">Admin</router-link>
      </b-button>
      <b-button size="lg">
        <router-link :to="{ name: 'ProjectsPage' }" class="text-white text-decoration-none">Projects</router-link>
      </b-button>
      <!-- Right aligned nav items -->
      <b-button class="btn btn-info ml-auto btn-lg" v-if="this.$store.state.isLogged === true">
        <router-link :to="{ name: 'CreateProjectPage' }" class="text-white text-decoration-none">
          Create Project
        </router-link>
      </b-button>
      <b-button variant=" ml-auto" size="lg border" v-if="this.$store.state.isLogged === true && this.$store.state.isAdmin === false"> 
        <router-link :to="{ name: 'MyAccountPage' }" class="text-decoration-none">{{ this.$store.state.userLogged.name}}</router-link> 
      </b-button>
      <b-button variant=" ml-auto" size="lg border" v-if="this.$store.state.isLogged === false">
        <router-link :to="{ name: 'FormLogin' }" class="text-decoration-none">
          Login
        </router-link>
      </b-button>
      <b-button  size="lg border" @click="logOut" v-if="this.$store.state.isLogged === true">
         Log out
      </b-button>
    </b-navbar>
  </div>
</template>
<script>
export default {
  methods: {
    logOut() {
      this.$store.state.isLogged = false
      this.$router.push({ path: "/" })
    }
  }
}
</script>
