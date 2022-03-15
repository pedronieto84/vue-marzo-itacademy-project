<template>
  <b-row>
    <b-col cols="6">
      <b-input-group>
        <b-form-input
          type="number"
          id="bid-input"
          placeholder="Bid in €"
          v-model="bid"
          class="bid"
          min="0"
          :state="bidValid"
          aria-describedby="bid-input-help"
        />
        <b-input-group-prepend is-text>€</b-input-group-prepend>
        <b-form-invalid-feedback id="bid-input-feedback">
          Please make a bid in €
        </b-form-invalid-feedback>
      </b-input-group>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "Bid",
  props: {
    bidValid: Boolean,
  },
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
