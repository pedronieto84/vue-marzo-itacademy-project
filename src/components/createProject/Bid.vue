<template>
  <b-row>
    <b-col cols="6">
      <b-input-group>
        <b-form-input
          type="number"
          placeholder="Bid in €"
          v-model="bid"
          class="bid"
        />
        <b-input-group-prepend is-text>€</b-input-group-prepend>
      </b-input-group>
    </b-col>
  </b-row>
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
