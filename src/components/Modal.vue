<template>
<div class="container">
  <form class="contact-form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="to_name" v-model="serviceName">

    <label>Email</label>
    <input type="email" name="email" >

    <label>Phone</label>
    <input type="number" name="phone">

    <label>Message</label>
    <textarea name="message" ></textarea>

    <input type="submit" value="Send">
  </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: 'ContactUs',
  data() {
    return {
      to_name: '',
      email: '',
      message: '',
      serviceName: ''
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
      this.name = ''
      this.email = ''
      this.message = ''
      this.phone = ''
    },
  }
}

</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
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