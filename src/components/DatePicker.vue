<template>
  <div>
    <datepicker
      :inline="true"
      placeholder="Select Date"
      v-model="date"
      :disabledDates="disabledDates"
      @input="
        $store.commit('setDate', date);
        addDate();
      "
    ></datepicker>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import { mapState } from "vuex";

export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      date: new Date(),
      disabledDates: {
          to: new Date(Date.now() - 8640000)
        }
    };
  },
  components: {
    Datepicker,
  },
  computed: mapState({
    serviceDate: (state) => state.date,
    dateAlias: "",
  }),
  methods: {
    async addDate() {
      console.log("DatePicker addDate funktsioon algas");
      this.$emit("date-added");
    },
  },
};
</script>
<style scoped>
.border-gray {
  border-bottom: 1px solid rgba(55, 65, 81, 0.3);
  border-radius: 0;
}
</style>