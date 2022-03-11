<template>
  <div class="template-card">
    <b-card
      class="project-card"
      header="Projecte"
      border-variant="primary"
      header-bg-variant="primary"
      header-text-variant="white"
      :title="title"
    >
      <b-card-text>{{ shortDescription }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["title", "shortDescription"],
};
</script>

<style scopped>
.project-card {
  max-width: 12rem;
  height: 15rem;
  margin-top: 0.5rem;
}
</style>
