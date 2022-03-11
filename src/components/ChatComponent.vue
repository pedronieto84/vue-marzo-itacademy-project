<template>
  <div class="chat__content">
    <b-dropdown
      id="dropdown-drowup"
      dropup
      class="btn mr-4"
      variant="outline-primary"
      text="Chat"
    >
    <b-dropdown-item>May I help you?</b-dropdown-item>
    <b-dropdown-item class="chat__dropdown"></b-dropdown-item>
    <b-dropdown-item class="chat__dropdown"></b-dropdown-item>
    <b-dropdown-item class="chat__dropdown"></b-dropdown-item>
    <b-dropdown-item class="chat__dropdown">
      <b-input></b-input>
    </b-dropdown-item>
   
    

    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "ChatComponent",
};
</script>

<style scoped>
.chat__content {
  display: flex;
  justify-content: flex-end;
}
.chat__dropdown{
    height: 2rem;
}
</style>
