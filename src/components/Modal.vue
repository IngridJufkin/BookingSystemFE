<template>
<div class="container">
 <form class="contact-form"  v-if="!isHidden" @submit.prevent="sendEmail" @submit="bookService()">
    <label>Name</label>
    <input type="text" name="to_name">

    <label>Email</label>
    <input type="email" name="email" >

    <label>Phone</label>
    <input type="number" name="phone">

    <label>Booked service</label>
    <input type="text" name="serviceName" v-model="serviceName" readonly>
   
    <label>Service Date</label>
    <input type="text" name="serviceDate" v-model="serviceDate" readonly>
   
    <label>Service time</label>
    <input type="text" name="serviceTime" v-model="serviceTime" readonly>
   

    <label>Message</label>
    <textarea name="message" ></textarea>

    <input type="submit" value="Book">

  </form>

  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import axios from "axios";
import dayjs from 'dayjs';

export default {
  name: 'ContactUs',
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      to_name: '',
      email: '',
      message: '',
      serviceName: this.$store.state.name,
      serviceDate: dayjs(this.$store.state.date).format('DD.MM.YYYY'), 
      serviceTime: this.$store.state.time,
      isHidden: false,
    }
  },
  methods: {
   sendEmail(e) {
      try {
        emailjs.sendForm('service_rage1l9', 'template_40xn182', e.target, 'user_UMtJWKlNmcELqEKldoxSS')
      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.to_name = ''
      this.email = ''
      this.message = ''
      this.phone = ''
      this.name = ''
    },


    bookService() {
      axios({
        url: `${this.apiURL}api/serviceOrder/${this.$store.state.id}`,
        //url: `http://localhost:3001/API/serviceOrder/${this.$store.state.id}`,
        method: "PATCH",
        data: this.status,
      });
      (this.isHidden = true)
      //(this.infoText = `You have booked a time for ${serviceName}. We are waiting you ${formatedServiceDate} at ${serviceTime}`);
    },
  }
}

</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin: 0;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email],[type=number], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>