<template>
  <b-form-input
    type="number"
    placeholder="Bid in Euro"
    v-model="bid"
    class="bid"
  ></b-form-input>
</template>
<script>
export default {
  name: "Bid",
  computed: {
    bid: {
      get() {
        return this.$store.state.newProject.bid;
      },
      set(newBid) {
        this.$store.commit("updateBid", newBid);
      },
    },
  },
};
</script>