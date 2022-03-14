<template>
  <div class="mt-5 container">
    <div class="markers-flex">
      <div
        v-for="(view, index) in views"
        :key="index"
        class="page-marker"
        :class="{ active: view === selected }"
        @click="handleClick(view)"
      >
        <span class="marker-name">{{ view }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    views: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: this.views[0],
    };
  },
  methods: {
    handleClick(view) {
      this.selected = view;
      this.$emit("changeView", view);
    },
  },
};
</script>

<style>
.container {
  max-width: 900px;
}
.markers-flex {
  display: flex;
  justify-content: left;
  width: 300px;
  margin-left: 10vw;
}
.page-marker {
  width: 10rem;
  height: 2.7rem;
  background-color: #666;
  font-size: 1.3rem;
  position: relative;
  padding: 0.3rem 0 0 1.2rem;
  z-index: 100;
  color: #666;
}
.page-marker:after {
  content: "";
  width: calc(10rem - 5px);
  height: calc(2.7rem - 2px);
  background-color: #f5f5f5;
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: -2;
}
.active {
  color: white;
  z-index: 110;
}
.active:after {
  background-color: #005e85;
}
.marker-name {
  display: inline-block;
  width: 15ch;
  text-align: left;
}
.marker-name:hover {
  font-weight: bold;
  letter-spacing: -1px;
  cursor: pointer;
}

.page-marker {
  clip-path: polygon(
    0 0,
    80% 0%,
    100% 100%,
    0% 100%
  ); /* https://bennettfeely.com/clippy/ */
}
.page-marker:after {
  clip-path: polygon(0 0, 81% 0%, 100% 100%, 0% 100%);
}

.page-marker:last-of-type {
  transform: translateX(-1rem);
}
</style>
