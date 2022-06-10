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
    <div class="timer">
      <div>
        {{time}}
      </div>
      <br>
      <md-button class="md-raised md-primary">Time</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      time: null,
      start: null,
      end: null,
    }
  },
  created() {

    const msMinute = 60 * 1000
        const msDay = 60 * 60 * 24 * 1000
      const  a = new Date(2012, 2, 12, 23, 59, 59)
    const    b = new Date(2012, 2, 12, 23, 60, 59);

    console.log(Math.floor((b - a) / msDay) + ' full days between'); // 364
    console.log(Math.floor(((b - a) % msDay) / msMinute) + ' full minutes between'); // 0

  }
}
</script>

<style scoped>

.timer {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
}

button {
  background-color: #f44336; /* Green */
  border: none;
  color: white;
  text-align: center;
  display: inline-block;
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