<template>
  <div class="uploader-container">
    <b-form-group label="Files:" label-cols-sm="2">
      <b-row>
        <b-col>
          <b-form-file
            id="file1"
            placeholder="drag and drop a file"
            accept=".pdf"
            v-model="fileUp1"
            ref="refFile1"
            >
          </b-form-file>
          <b-icon icon="plus-circle-fill"></b-icon>
        </b-col>
      </b-row>
    </b-form-group>
    <v-row>
      <b-col>
        <b-button class="outline" variant="outline" @click="updateFiles"
          >SendFiles</b-button
        >
      </b-col>
    </v-row>
    <v-row>
      <b-col>
        <b-button
          type="submit"
          @click="$store.dispatch('setNewProject', $router)"
          >Publish Project</b-button
        >
      </b-col>
    </v-row>
  </div>
</template>
<script>
import store from "@/store";
export default {
  name: "FileUploader",
  data() {
    return {
      fileUp1: null,
      fileUp2: null,
    };
  },
  watch: {
    fileUp1: function () {
      store.commit("updateFile", this.fileUp1);
      console.log(this.fileUp1);
      console.log(this.$refs.refFile1.files);
    },
    fileUp2: function () {
      store.commit("updateFile", this.fileUp2);
    },
  },
};
</script>
<style scoped></style>
