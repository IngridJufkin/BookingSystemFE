<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
        <div class="hello">
          <datepicker
            :inline="true"
            class="block text-sm font-medium text-gray-700 p-1"
            placeholder="Select Date"
            v-model="form.date"
          ></datepicker>
        </div>

     <!-- <span>{{ form.date }}</span> -->
  </div>
</template>

<script>

import Datepicker from "vuejs-datepicker";

export default {

  data() {
    return {
      form: {
        date: new Date,
      },
    };
  },

  components: {
    Datepicker
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
