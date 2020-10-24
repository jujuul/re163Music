<template>
  <div class="collect">
    <div v-for="(item, index) in collection" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collection: Array,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
</style>