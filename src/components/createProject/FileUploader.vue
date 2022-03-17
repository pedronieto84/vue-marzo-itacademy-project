<template>
  <div class="uploader-container">
    <b-row>
      <b-form-group
        id="form-group"
        text-variant="black"
        label="Files:"
        label-cols-sm="2"
        ref="fileform"
      >
        <file-input @click="addFile1" />
        <file-input @click="addFile2" />
      </b-form-group>
    </b-row>
    <b-row>
      <b-col>
        <b-button class="outline" variant="outline" @click="updateFiles"
          >SendFiles</b-button
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button @click="updateFiles">UploadFiles</b-button>
        <b-button type="submit" @click="submit($event)"
          >Publish Project</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>
<script>
import store from "@/store";
import FileInput from "@/components/createProject/FileInput.vue";
export default {
  components: { FileInput },
  name: "FileUploader",
  data() {
    return {
      inputFile: [],
    };
  },

  methods: {
    addFile1: function (payload) {
      this.inputFile[0] = payload;
    },
    addFile2: function (payload) {
      this.inputFile[1] = payload;
    },
    updateFiles: function () {
      if (this.inputFile.length > 0) {
        store.commit("updateFiles", this.inputFile);
      }
    },
    async submit(event) {
      event.preventDefault();
      await this.$store.dispatch("setNewProject");
      this.$store.errorMessage === ""
        ? this.$router.push({ name: "ProjectsPage" })
        : false;
    },
  },
};
</script>
<style scoped></style>
