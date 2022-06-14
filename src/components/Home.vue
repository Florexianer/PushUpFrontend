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
    <div id="headline">
      Start a Session:
    </div>
    <div class="timer">
      <div id="center">
        <div v-if="start">
          {{ timer.min }}:{{ timer.sec === 0 ? '00' : timer.sec / 10 < 1 ? '0' + timer.sec : timer.sec }}
        </div>
        <div v-else>
          0:00
        </div>
      </div>
      <br>
      <div id="flex">
        <md-button class="md-raised md-icon-button big black" id="buttonZ" @click="count" v-if="!continueTimer">
          <md-icon class="white">play_arrow</md-icon>
        </md-button>
        <md-button class="md-raised md-primary md-icon-button big black" @click="stop" v-if="continueTimer">
          <md-icon class="white">stop</md-icon>
        </md-button>
      </div>
    </div>
    <router-link
        to="/charts"
        class="center"
    >
      <md-button class="md-raised md-primary black">
        Show Charts
      </md-button>
    </router-link>
    <div id="overlay" v-if="this.end" @click.self="closeOverlay">
      <div id="whiteBg">
        <div id="centerOv">
          Nice Job!
        </div>
        <div id="ovItem1">Time: {{
            timer.min
          }}:{{ timer.sec === 0 ? '00' : timer.sec / 10 < 1 ? '0' + timer.sec : timer.sec }}
        </div>
        <div class="ovItem">
          <label for="pushUpCount">Push Ups made:</label>
          <input v-model="pushUpsMade" type="number" min="1" name="pushUpCount" id="pushUpCount"/>
        </div>
        <div v-if="invalid" style="color: #f44336">
          You have to enter a number
        </div>
        <div id="flexOL">
          <md-button class="md-raised md-primary md-icon-button black" @click="save">
            <md-icon class="white">save</md-icon>
          </md-button>
          <md-button class="md-raised md-accent md-icon-button red" @click="closeOverlay">
            <md-icon class="white">close</md-icon>
          </md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      time: null,
      start: null,
      end: null,
      timer: {
        min: null,
        sec: null,
      },
      continueTimer: false,
      pushUpsMade: null,
      invalid: false,
    }
  },
  created() {
    const msSec = 1000
    const msMinute = 60 * 1000
    const msDay = 60 * 60 * 24 * 1000
    const a = new Date(2012, 2, 12, 23, 59, 60)
    const b = new Date(2012, 2, 12, 23, 60, 54);

    console.log(Math.floor((b - a) / msDay) + ' full days between'); // 364
    console.log(Math.floor(((b - a) % msDay) / msMinute) + ' full minutes between'); // 0
    console.log(Math.floor(((b - a) % msDay % msMinute) / msSec) + ' full seconds between'); // 0
  },

  methods: {
    count() {
      this.start = Date.now() - 1000
      this.continueTimer = true
      this.loop()
    },

    loop() {
      if (this.continueTimer) {

        setTimeout(this.loop, 1000)
        const msSec = 1000
        const msMinute = 60 * 1000
        const msDay = 60 * 60 * 24 * 1000
        const a = this.start
        const b = Date.now()

        this.timer.min = Math.floor(((b - a) % msDay) / msMinute)
        this.timer.sec = Math.floor(((b - a) % msDay % msMinute) / msSec)
      }
    },
    stop() {
      this.end = Date.now()
      this.continueTimer = false
      this.invalid = false
    },
    closeOverlay() {
      this.end = null
      this.timer.min = null
      this.timer.sec = null
      this.start = null
    },
    save() {

      const component = this

      if (this.pushUpsMade > 0) {

        axios.post('http://localhost/PushUp/workout/index.php', {
          start: this.start,
          end: this.end,
          pushUps: this.pushUpsMade,
          username: 'Florian'
        })
            .then(function (response) {
              if (response.data === 'suc') {
                this.invalid = false
                component.closeOverlay()
              } else {
                alert('There was an error connecting with the database')
              }
            }).catch(function (error) {
          console.log(error);
        });
        this.closeOverlay()
      } else {
        this.invalid = true
      }
    }
  }
}
</script>

<style scoped>

#headline {
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.red {
  color: #f44336;
}

.black {
  background-color: #101012 !important;
}

.big {
  width: 70px;
  height: 70px;
}

.white {
  color: #fff !important;
}

#flexOL {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  width: 90%;
  bottom: 0;
  margin-bottom: 40px;
  padding-right: 10%;
  padding-left: 10%;
}

#pushUpCount {
  margin-left: 20px;
  width: 40px;
}

.ovItem {
  margin-top: 20px;
  font-size: 1.3em;
  font-weight: bold;
}

#ovItem1 {
  margin-top: 30px;
  font-size: 1.3em;
  font-weight: bold;
}

#centerOv {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 2em;
  font-weight: bold;
}

#center {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
}

.center {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#whiteBg {
  background-color: white;
  position: absolute;
  width: 90%;
  height: 35%;
  top: 50%;
  left: 50%;
  padding-left: 20px;
  padding-right: 20px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}

#overlay {
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 3; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}

#buttonZ {
  z-index: 1 !important;
}


.timer {
  margin: 20px;
  border: solid;
  padding: 10px;
}

#flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 30px;
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