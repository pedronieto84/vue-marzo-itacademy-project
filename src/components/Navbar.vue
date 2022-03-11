<template>
  <b-row class="row-nav d-flex justify-content-around">
    <div class="container-fluid">
      <b-navbar toggleable="sm" class="mt-2" fill="true">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-col>
            <b-button-group size="lg">
              <div :class="{ active: isNotAdmin }">
                <b-button size="lg" variant="info">Admin</b-button>
              </div>
              <router-link :to="{ name: 'ProjectsPage' }"
                ><b-button size="lg">Projects</b-button></router-link
              >
            </b-button-group>
          </b-col>
          <!-- Right aligned nav items -->
          <b-col>
            <div :class="{ visible: isNotLogged }">
              <router-link :to="{ name: 'CreateProjectPage' }">
                <b-button variant="info ml-auto" size="lg">
                  Create Project
                </b-button>
              </router-link>
            </div>
          </b-col>
          <b-col>
            <b-button variant=" ml-auto" size="lg border" @click="goToPage">
              <b-icon icon="person-fill"></b-icon> {{ account }}
            </b-button>
          </b-col>
        </b-collapse>
      </b-navbar>
    </div>
  </b-row>
</template>
<script>
import store from "@/store";
export default {
  name: "Navbar",
  data() {
    return {
      account: "Login",
      isNotAdmin: true,
      isNotLogged: true,
    };
  },

  computed: {
    isLoggedStore: function () {
      return store.getters.getIsLogged;
    },
  },
  watch: {
    isLoggedStore: function () {
      if (this.isLoggedStore) {
        this.isNotLogged = false;
        this.account = store.getters.getUserLogged.name;
        if (!store.getters.getIsAdmin) {
          this.isNotAdmin = true;
        } else {
          this.isNotAdmin = false;
        }
      } else {
        this.isNotLogged = true;
        this.account = "Login";
        this.isNotAdmin = false;
      }
    },
  },
  methods: {
    goToPage: function () {
      if (
        this.$router.currentRoute.name !== "LoginForm" &&
        this.$router.currentRoute.name !== "MyAccountPage"
      ) {
        if (this.isNotLogged === true) {
          this.$router.push({ name: "LoginForm" });
        } else {
          this.$router.push({ name: "MyAccountPage" });
        }
      }
    },
  },
};
</script>
<style scoped>
.row-navbar {
  padding: 0;
  margin: 0;
}
.active {
  display: none;
}
.visible {
  display: none;
}
button:hover {
  cursor: pointer;
}
</style>
