<template>
  <div id="parent">
    <div id="push-up-bkg">
      <div id="grey">
        <div id="motivation">
          Track your<br>
          Progress <br>
          now
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

#buttonDiv {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.column {
  float: left;
  width: 50%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

button {
  background-color: #f44336; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.8em;

  transform: translate(0, -50%);
}

#parent {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}

#push-up-bkg {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  height: 50%;
  background-image: url('../data/img/dark_pushup_close.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

#grey {
  background-color: black;
  opacity: 0.6;
  width: 100%;
  height: 100%;
}

#motivation {
  z-index: 10;
  color: white;
  font-size: 3em;
  line-height: 1.4em;
  text-align: center;
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>