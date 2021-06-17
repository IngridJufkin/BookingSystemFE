<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="hello">
      <datepicker
        @input="getAvailableServicesByName(),$store.commit('setDate', date)"
        :inline="true"
        class="block text-sm font-medium text-gray-700 p-1"
        placeholder="Select Date"
        v-model="date"
      ></datepicker>
    </div>
    <span>DATE :{{ moment(date).format("DD.MM.YYYY") }}</span
    ><br />
    <span>STORE : {{ moment(serviceDate).format("DD.MM.YYYY") }}</span>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { mapState } from "vuex";
import moment from "moment";
//import axios from "axios";

export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      date: new Date(),
    };
  },

  computed: mapState({
    serviceDate: (state) => state.date,
    nameAlias: "date",
  }),

  components: {
    Datepicker,
  },

  methods: {
    moment,

    getAvailableServicesByName() {
      //   let storeName = this.$store.state.name;
      //   let storeDate = this.$store.state.date;
      //   const getOrdersByDate = await axios({
      //     //http://localhost:3001/API/serviceOrder/2021-05-07/Massage/0
      //     url: `${this.apiURL}api/serviceOrder/${storeDate}/${storeName}/0`, //get tasks By Name
      //     method: "GET",
      //   });
      //   // eslint-disable-next-line no-console
      //   console.log("storeName:" + storeName);
      //   this.existingUserNames = getOrdersByDate.data.result;

      //emitile annan kaasa nime, kus välja kutsun
      this.$emit("get-date");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.border-gray {
  border-bottom: 1px solid rgba(55, 65, 81, 0.3);
  border-radius: 0;
}
.hello {
  margin: 0px;
  justify-content: center;
  display: flex;
}
</style>
