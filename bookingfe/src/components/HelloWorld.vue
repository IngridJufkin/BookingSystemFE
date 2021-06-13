<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row">
      <div class="col">
        <h1>{{ msg }}</h1>

        <div class="hello">
         
          <select v-model="form.name" multiple class="form-control">
            <option disabled selected value="">Please select a service</option>
            <option v-for="existingUserName in existingUserNames" :value="existingUserName" :key="existingUserName.serviceName">
              {{ existingUserName.serviceName }}
            </option>
          </select>

          <datepicker
            :inline="true"
            class="block text-sm font-medium text-gray-700 p-1"
            placeholder="Select Date"
            v-model="form.date"
          ></datepicker>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Datepicker from "vuejs-datepicker";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      form: {
        name: "",
        date: new Date,
      },
      existingUserNames: [],
    };
  },

  components: {
    Datepicker,
  },

  beforeMount() {
    this.getAllServices();
  },

  methods: {
    async getAllServices() {
      const getAll = await axios({
        url: `${this.apiURL}api/serviceName`,
        method: "GET",
      });
      this.existingUserNames = getAll.data.allNames;
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
  margin: 40px;
  justify-content: center;
  display: flex;
}
</style>
