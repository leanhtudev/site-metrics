<template>
  <container style="border: gray 1px solid; margin-bottom: 8px">
    <heading level="h4">{{ title }}</heading>
    <grid columns=" 1fr 1fr 1fr">
      <Metric
        class="abc1"
        :title="item"
        :currentValue="currentData[item]"
        :prevValue="prevData[item]"
        v-for="(item, i) in ids"
        :key="i"
      />
    </grid>
  </container>
</template>

<script>
import Metric from "./Metric.vue";
export default {
  components: { Metric },
  name: "Section",
  props: {
    title: {
      type: String,
    },
    ids: {},
    currentData: {},
    prevData: {},
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@nosto/design-system/dist/system/all.scss";
</style>
