<template>
  <container style="border: #eff3f6 1px solid; margin-bottom: 8px">
    <heading level="h4">{{ title }}</heading>
    <heading level="h2">{{ currentValue }}</heading>
    <stack justify-content="flex-start" align-items="center">
      <input-label>({{ prevValue }})</input-label>
      <text-style :variation="changeVariation">{{ compareValue }}%</text-style>
    </stack>
  </container>
</template>

<script>
export default {
  name: "Metric",
  props: {
    title: {
      type: String,
    },
    currentValue: {
      type: Number,
    },
    prevValue: {
      type: Number,
    },
  },
  computed: {
    compareValue() {
      return this.calculatePercentage(this.currentValue, this.prevValue);
    },
    changeVariation() {
      if (this.currentValue - this.prevValue >= 0) {
        return "positive";
      }
      return "negative";
    },
  },
  methods: {
    calculatePercentage(currentValue, prevValue) {
      return (((currentValue - prevValue) / currentValue) * 100).toFixed(2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@nosto/design-system/dist/system/all.scss";
</style>
