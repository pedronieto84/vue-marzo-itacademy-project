<template>
  <div class="template-card">
    <b-card
      class="project-card"
      header="Projecte"
      border-variant="primary"
      
      header-text-variant="white"
      :title="title"
    >
      <b-card-text class="short">{{ shortDescription }}</b-card-text>
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
.template-card {
  z-index: -1;
  transform: scale(1);
  transition: all 200ms ease-in-out;
}
.template-card:hover {
  transform: scale(1.1);
  z-index: 2;
}
.project-card {
  max-width: 12rem;
  height: 15rem;
  margin-top: 0.5rem;
  overflow: hidden;
}
.card-header{
  background-color: hsl(188, 78%, 33%) !important;
}
</style>
