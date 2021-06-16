<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row">
   

      <div class="hello">
        <select v-model="serviceName" class="form-control" @change="getAvailableServicesByName(), $store.commit('setName', serviceName)">
          <option disabled selected value="">Please select a service</option>
          <option v-for="existingServiceName in existingServiceNames" :key="existingServiceName.serviceName">
            {{ existingServiceName.serviceName }}
          </option>
        </select>
      </div>
    </div>

    <span>NAME {{ name }} NAME </span><br />
    <span>SERVICENAME {{ serviceName }} SERVICENAME </span>

    <!-- <button class="bg-green-400 px-4 py-2 rounded" @click="getAllServices(), $store.commit('setName', serviceName)">Vali teenus</button> -->
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      serviceName: "",
      existingServiceNames: [],
    };
  },

  computed: mapState({
    name: (state) => state.name,
    nameAlias: "name",
  }),

  // beforeMount() {
  //   this.getAllServices();
  //   //this.$store.state.name;
  // },

  async created() {
    await this.getAllServices();
  },

  methods: {
    async getAllServices() {
      let newName = this.name; //store name
      const getAll = await axios({
        url: `${this.apiURL}api/serviceName`,
        method: "GET",
      });
      this.existingServiceNames = getAll.data.allNames;
      //this.$emit('helloWorld', {serviceName: newName})
      console.log(newName);
    },
  },

//--------------------------------------FN----------
  //  async getAvailableServicesByName() {
  
  //   },

//--------------------------------------FN----------


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
