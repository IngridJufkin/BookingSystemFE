<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row">
      <div class="hello">
        <hello-world class="my-3" @get-available="getAvailableServicesByName">
         <date-picker class="my-3" @get-date="getAvailableServicesByName">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import HelloWorld from './HelloWorld.vue';
import DatePicker from "../components/DatePicker.vue";

export default {
  components: {
    HelloWorld,
    DatePicker,
  },

  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      serviceName: "",
      existingServiceNames: [],
      columns: [
        {
          title: "Available Service Times",
          serviceTimes: [],
        },
      ],
    };
  },

  computed: mapState({
    name: (state) => state.name,
    nameAlias: "name",
  }),

  async created() {
    await this.getAllServices();
  },

  methods: {
async getAvailableServicesByName() {
      let storeName = this.$store.state.name;
      let storeDate = this.$store.state.date;
        console.log("OLEN ALGUSES storeName:" + storeName);
      const getOrdersByDate = await axios({
        //http://localhost:3001/API/serviceOrder/2021-05-07/Massage/0
        url: `${this.apiURL}api/serviceOrder/${storeDate}/${storeName}/0`, //get tasks By Name
        method: "GET",
      });
      // eslint-disable-next-line no-console
      console.log("storeName:" + storeName);
      this.existingUserNames = getOrdersByDate.data.result;
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
  height: 282px;
}
</style>
