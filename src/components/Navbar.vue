<template>
  <div>
    <b-navbar class="mt-2">
      <b-button variant="info " v-if="this.$store.state.isAdmin === true">
        <router-link :to="{ name: 'Admin' }" class="text-white">Admin</router-link>
      </b-button>
      <b-button size="lg">
        <router-link :to="{ name: 'ProjectsPage' }" class="text-white">Projects</router-link>
      </b-button>
      <!-- Right aligned nav items -->
      <router-link
        :to="{ name: 'CreateProjectPage' }"
        class="btn btn-info ml-auto btn-lg"
        >Create Project</router-link
      >
      <b-button variant=" ml-auto" size="lg border" v-if="this.$store.state.isLogged === true"> 
        {{ this.$store.state.userLogged.name}} 
      </b-button>
      <b-button variant=" ml-auto" size="lg border" v-else>
        <router-link :to="{ name: 'FormLogin' }">
          Login
        </router-link>
      </b-button>
    </b-navbar>
  </div>
</template>
