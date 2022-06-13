<template>
  <div id="mid">
    <div class="row" id="first">
      <label for="before" class="column1">Before:</label>
      <input type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" id="before" class="column2">
    </div>
    <br>
    <div class="row">
      <label for="after" class="column1">After:</label>
      <input type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" id="after" class="column2">
    </div>
    {{ beforeImg }}
    <div id="center">
      <button @click="sendData">Upload</button>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Upload",
  data() {
    return {
      beforeImg: null,
      afterImg: null,
    }
  },

  methods: {
    async sendData() {
      let component = this
      const beforeInput = document.getElementById("before");
      const afterInput = document.getElementById("after");


      if (afterInput.files && afterInput.files[0] && beforeInput.files && beforeInput.files[0]) {

        let beforeInputFile = beforeInput.files;


        const reader = new FileReader();
        reader.readAsDataURL(beforeInputFile[0]);
        reader.onload = function (e) {
          component.beforeImg = e.target.result
        }

        let afterInputFile = afterInput.files;

        const reader2 = new FileReader();

        reader2.readAsDataURL(afterInputFile[0]);
        reader2.onload = function (e) {
          component.afterImg = e.target.result
          axios.post('http://localhost/PushUp/index.php', {
            before: component.beforeImg,
            after: component.afterImg,
            username: 'Florian'
          })
              .then(function (response) {
                console.log(response);
              }).catch(function (error) {
            console.log(error);
          });
        }
      } else {
        alert('You have to select both before and after picture')
      }


    },
  }
}
</script>

<style scoped>

input {
  font-family: 'Kdam Thmor Pro', sans-serif;
}

* {
  box-sizing: border-box;
}

.column1 {
  float: left;
  width: 30%;
  padding: 5px 5px 5px 20px;
}

.column2 {
  float: left;
  width: 70%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

#mid {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
}

.row {
  align-items: center;
  justify-content: center;
}



#center {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  background-color: #101012; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 1.8em;

  margin-top: 50px;
  left: 20%;
}
</style>