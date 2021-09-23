<template>
  <panel id="app" heading="Site metric">
    <tabs variation="underline">
      <tab title="March report">
        <MarchReport />
      </tab>
      <tab title="Detail">TODO</tab>
    </tabs>
  </panel>
</template>

<script>
import MarchReport from "./components/MarchReport.vue";
export default {
  name: "Home",
  components: { MarchReport },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@nosto/design-system/dist/system/all.scss";
.heading {
  margin-bottom: $space-medium;
}
</style>
