<template>
<div class="container">
  <div>
    <message v-if="!isHidden" msg="You are welcome to book a service !" />
       <div v-if="isHidden">{{ infoText }}</div>
       
    <ul>
      <li>
        <modal v-if="isHidden" />
      </li>

      <li>
        <date-picker
          v-if="!isHidden"
          @date-added="getAllFreeServices($event)"
        />
      </li>
    </ul>
    <ul>
      <li>
        <hello-world
          v-if="!isHidden"
          @name-added="getAllFreeServices($event)"
        />
      </li>
      <ul>
        <li>
          <p
            class="text-gray-700 font-semibold font-sans tracking-wide text-sm"
          >
            <!-- {{ $moment(serviceDate).format("DD.MM.YYYY") }} {{ name }} -->
          </p>
        </li>
      </ul>

      <ul v-if="!isHidden">
        <li>
          <div
            v-for="freeServiceTime in freeServiceTimes"
            :key="freeServiceTime.id"
          >
            {{ freeServiceTime.serviceTime }}
            {{ freeServiceTime._id }}
            {{ freeServiceTime.status }}

            <button
              @click="
                chooseService(
                  freeServiceTime.serviceTime,
                  freeServiceTime.serviceName,
                  serviceDate
                ); $store.commit('setID', freeServiceTime._id);
                $store.commit('setTime',  freeServiceTime.serviceTime)
              "
            >
              Next to booking
            </button>

            <p></p>
          </div>
        </li>
      </ul>
      
      <button
        v-if="isHidden"
        class="add-todo bg-green-400 px-4 py-2 rounded"
        @click="bookNewTime(), getAllFreeServices()"
      >
        Book more services or change selected time
      </button>

  
      <br />
    </ul>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";
import DatePicker from "@/components/DatePicker.vue";
import Message from "@/components/Message.vue";
import Modal from "@/components/Modal.vue";
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "Home",
  components: {
    HelloWorld,
    DatePicker,
    Message,
    Modal,
  },
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      serviceName: "",
      existingServiceNames: [],
      freeServiceTimes: [],
      isHidden: false,
      infoText: "",
      freeServiceID: "",
    };
  },
  computed: mapState({
    name: (state) => state.name,
    nameAlias: "name",
    serviceDate: (state) => state.date,
    dateAlias: "serviceDate",
    serviceID: (state) => state.id,
    IDAlias: "serviceID",
    serviceTime: (state) => state.time,
    timeAlias: "serviceTime",
  }),
  async created() {
    await this.getAllDistinctServices();
  },
  methods: {
    async getAllDistinctServices() {
      console.log("Home getAllDistinctServices funktsioon algas");
      const getAll = await axios({
        url: "http://localhost:3001/api/serviceName",
        method: "GET",
      });
      this.existingServiceNames = getAll.data;
    },

    async bookService() {
      // console.log("OLEN SIIN")
      // let serviceID = freeServideId;
      // console.log("ID: " + serviceID);
      // console.log("Status: " + status);
      // let statusBooked = 1;
      // console.log("statusBooked " + statusBooked);
      // status = statusBooked;
      // console.log("STATUS = STATUSBOOKED " + status);
      // this.status = status;
      // console.log("this.status " + this.status);
      //let formatedServiceDate = moment(serviceDate).format("DD.MM.YYYY");
      const body = {
        body: { status: 1 },
      };
      axios({
        url: `http://localhost:3001/API/serviceOrder/${this.$store.state.id}`,
        body: { body },
        method: "PATCH",
        data: this.status,
      });
      (this.isHidden = true)
       // (this.infoText = `You have booked a time for ${serviceName}. We are waiting you ${formatedServiceDate} at ${serviceTime}`);
    },

    async getAllFreeServices() {
      console.log("Home getAllFreeServices funktsioon algas");
      let storeName = this.$store.state.name;
      console.log("Home " + storeName);
      let storeDate = moment(this.$store.state.date).format("YYYY-MM-DD");
      console.log("Home storeDate" + storeDate);
      const getAll = await axios({
        url: `http://localhost:3001/api/serviceOrder/${storeDate}/${storeName}/0`,
        method: "GET",
      });
      const FreeTimes = getAll.data.getOrdersByDate;
      this.freeServiceTimes = FreeTimes;
      console.log("Home LIST " + FreeTimes);
      this.isHidden = false;
    },

    chooseService(serviceTime,serviceName, serviceDate)  {
        //let serviceID = freeServideId;
      //console.log("ID: " + serviceID);
      // console.log("Status: " + status);
      // let statusBooked = 1;
      // console.log("statusBooked " + statusBooked);
      // status = statusBooked;
      // console.log("STATUS = STATUSBOOKED " + status);
      // this.status = status;
      // console.log("this.status " + this.status);
      let formatedServiceDate = moment(serviceDate).format("DD.MM.YYYY");
    
      (this.isHidden = true),
      (this.infoText = `Your booking: ${serviceName} on ${formatedServiceDate} at ${serviceTime}`);
    },

    bookNewTime() {
      this.isHidden = false;
      this.$store.state.name = "Manicure";
      this.$store.state.date = new Date();
    },

    async addName() {
      this.$emit("name-added", {
        userName: this.userName,
      });
    },
  },
};
</script>
<style scoped>
.home {
  width: 800px;
  margin: 1em auto;
}
.column-width {
  min-width: 320px;
  width: 320px;
}
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
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

button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 60%;
}

</style>
