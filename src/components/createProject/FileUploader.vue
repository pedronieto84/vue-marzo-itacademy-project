<template>
  <div class="uploader-container">
    <b-form-group label="Files:" label-cols-sm="2">
      <b-form-file id="file1" accept=".pdf"></b-form-file>
      <b-form-file id="file2" accept=".pdf"></b-form-file>
    </b-form-group>
    <b-button type="submit">Publish Project</b-button>
  </div>
</template>
<script>
export default {
  name: "FileUploader",
};
</script>
<style scoped>
</style>