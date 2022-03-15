<template>
  <b-row class="form-row">
    <b-col class="d-flex align-items-center">
      <b-form-file
        placeholder="drag and drop a file"
        accept=".pdf"
        v-model="fileUp"
      >
      </b-form-file>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "FileInput",
  props: ["inputFile"],
  data() {
    return {
      fileUp: null,
    };
  },
  watch: {
    fileUp: function () {
      this.$emit("click", this.fileUp);
    },
  },
};
</script>

<style></style>
