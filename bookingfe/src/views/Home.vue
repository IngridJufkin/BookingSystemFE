<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row">
      <HelloWorld2 msg="We welcome you in our booking system!" />

      <div class="col">
        <div class="hello">
          <HelloWorld />
          <DatePicker />
        </div>
        <!-- <hello-world class="my-3" @service-name="getAvailableServicesByName" /> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld2 from "@/components/HelloWorld2.vue";
import DatePicker from "../components/DatePicker.vue";
//import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld,
    DatePicker,
    HelloWorld2,
  },

  // methods: {
  //   //--------------------------------------FN----------
  //   async getAvailableServicesByName() {
  //     let storeName = this.$store.state.name;
  //     let storeDate = this.$store.state.date;
  //     const getTasksName = await axios({
  //       //http://localhost:3001/API/serviceOrder/2021-05-07/Massage/0
  //       url: `${this.apiURL}api/serviceOrder/${storeDate}/${storeName}/0`, //get tasks By Name
  //       method: "GET",
  //     });
  //     // eslint-disable-next-line no-console
  //     console.log("storeName:" + storeName);
  //     this.isHidden = true;
  //     this.existingUserNames = getTasksName.data.allNames;
  //   },
  // },

  // //--------------------------------------FN----------
};
</script>

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
