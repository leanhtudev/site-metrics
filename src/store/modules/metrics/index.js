import metricsMutations from './mutations.js';
import metricsActions from './actions.js';
import metricsGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: metricsMutations,
  actions: metricsActions,
  getters: metricsGetters,
};
