<template>
  <div class="template-card">
    <b-card
      header="Projecte"
      header-tag="projecte"
      footer="Footer Projecte"
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

<style></style>
