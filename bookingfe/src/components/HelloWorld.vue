<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row">
      <div class="col">
        <div class="hello">
          <select v-model="name" multiple class="form-control">
            <option disabled selected value="">Please select a service</option>
            <option
              v-for="existingUserName in existingUserNames"
              v-bind:serviceName="existingUserName.serviceName"
              :key="existingUserName.serviceName"
            >
              {{ existingUserName.serviceName }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <span>{{ name }}</span>
  </div>
</template>

<script>
import axios from "axios";
//import Datepicker from "vuejs-datepicker";
//import DatePicker from "@/components/DatePicer.vue"
//import DatePicker from './DatePicker.vue';

export default {
  name: "HelloWorld",

  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      name: [],
      //date: new Date,
      existingUserNames: [],
    };
  },

  beforeMount() {
    this.getAllServices();
  },

  methods: {
    async getAllServices() {
      //let newName = this.existingUserName.serviceName;
      const getAll = await axios({
        url: `${this.apiURL}api/serviceName`,
        method: "GET",
      });
      this.existingUserNames = getAll.data.allNames;
      //this.$emit('helloWorld', {serviceName: newName})
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
