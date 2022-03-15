<template>
  <div>
    <b-navbar class="mt-2">
      <b-button-group size="lg">
        <b-button variant="info ">Admin</b-button>
        <b-button>Projects</b-button>
      </b-button-group>
      <!-- Right aligned nav items -->
      <router-link
        :to="{ name: 'CreateProjectPage' }"
        class="btn btn-info ml-auto btn-lg"
        >Create Project</router-link
      >
      <b-button variant=" ml-auto" size="lg border">
        <router-link :to="{ name: 'FormLogin' }">Login</router-link>
      </b-button>
    </b-navbar>
  </div>
</template>