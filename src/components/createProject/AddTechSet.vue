<template>
  <div class="techset-container">
    <div>
      <label for="tags-basic">Add Technology desired:</label>
      <b-form-tags
        input-id="tags-basic"
        v-model="frameworks"
        :tag-validator="validator"
      ></b-form-tags>
      <div class="available-frameworks">
        <h4>Available Frameworks</h4>
        <h5 v-for="tag in validTags" :key="tag">{{ tag }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddTechSet",
  computed: {
    frameworks: {
      get() {
        return this.$store.state.newProject.frameworks;
      },
      set(newFrameworks) {
        this.$store.commit("updateFrameworks", newFrameworks);
      },
    },
  },
  data() {
    return {
      validTags: [
        "react",
        "vue",
        "php",
        "node",
        "typescript",
        "python",
        "css",
        "bootstrap",
      ],
    };
  },
  methods: {
    validator(tag) {
      return this.validTags.includes(tag);
    },
  },
};
</script>
<style scoped>
.techset-container {
  display: flex;
  justify-content: center;
  margin: 30px;
}
.available-frameworks {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px;
  width: 500px;
  border-radius: 20px;
  background: lightblue;
}
</style>