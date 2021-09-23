<template>
  <container style="border: gray 1px solid; margin-bottom: 8px">
    <stack justify-content="space-between" align-items="center">
      <heading level="h4">GraphView</heading>
      <tag icon="price">1 Mar, 2021 - 31 Mar, 2021</tag></stack
    >

    <stack justify-content="space-between" align-items="center">
      <v-select
        :options="[{ label: 'Visits', code: 'visits' }]"
        v-model="selectedMetric"
      ></v-select>
      <div></div>
    </stack>

    <line-chart
      ref="first"
      subheading="Visits"
      y-axis-title="Sales (€)"
      :categories="categories"
      :series="series"
    />
  </container>
</template>

<script>
import { visit_march } from "../../../api/index";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  name: "GraphView",
  components: { vSelect },
  data() {
    return {
      selectedMetric: { label: "Visits", code: "visits" },
      categories: this.getCategories(visit_march),
      series: [
        {
          name: "Visits",
          data: this.getSeries(visit_march),
        },
      ],
    };
  },
  methods: {
    getCategories(data) {
      return Object.keys(data);
    },
    getSeries(data) {
      return Object.values(data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@nosto/design-system/dist/system/all.scss";
@import "vue-select/src/scss/vue-select.scss";

.abc {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  & > .container {
    widows: 20rem;
  }
}
</style>
