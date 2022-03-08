<template>
  <div class="home container">
    <!-- The NavComponent goes Here -->
    <h1 class="text-center">Projects Page</h1>
    <article class="content">
      <router-link
        :to="{ name: 'ProjectDetailPage', params: { projectId: id } }"
      >
        <section class="project"></section>
      </router-link>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProjectsPage",
  data() {
    return {
      id: 1,
    };
  },
};
</script>
<style lang="sass" scoped>
.container
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
</style>
