<template>
        <b-form-file
        id="file1"
        placeholder="drag and drop a file"
        accept=".pdf"
        v-model="fileUp"
      >
</template>

<script>
export default {
    data(){
        return{
            fileUp: null,
        }
    }
}
</script>

<style>

</style>