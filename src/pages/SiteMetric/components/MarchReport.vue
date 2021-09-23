<template>
  <container>
    <Section
      title="TotalSales"
      :currentData="kpiMarch.totalSales"
      :prevData="kpiFebruary.totalSales"
      :ids="totalSalesIds"
    />
    <GraphView />
    <Section
      title="PotentialSales"
      :currentData="kpiMarch.potentialSales"
      :prevData="kpiFebruary.potentialSales"
      :ids="potentialSalesIds"
    />
    <Section
      title="SessionLifeCycle"
      :currentData="kpiMarch.sessionLifecycle"
      :prevData="kpiFebruary.sessionLifecycle"
      :ids="sessionLifecycleIds"
    />
  </container>
</template>

<script>
import GraphView from "./GraphView.vue";
import Section from "../../../shared/Section.vue";
import { kpiFebruary, kpiMarch } from "../../../api/index";
export default {
  name: "MarchReport",
  components: { Section, GraphView },
  data() {
    return {
      totalSalesIds: [
        "visits",
        "sales",
        "orders",
        "soldItems",
        "soldItemsThroughNosto",
      ],
      potentialSalesIds: ["carts", "cartTotalValue", "cartsAbandoned"],
      sessionLifecycleIds: [
        "totalPageViews",
        "totalProductViews",
        "averageSessionDuration",
      ],
      kpiFebruary,
      kpiMarch,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@nosto/design-system/dist/system/all.scss";
.heading {
  margin-bottom: $space-medium;
}
</style>
