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
    <div id="buttonDiv">
      <button>
        Upload your
        <br>Transformation
      </button>
    </div>
    <div class="row" v-for="transformation in transformations">
      <div class="column">
      <img :src="imgUrl(transformation.before)">
      </div>
        <div class="column">
      <img :src="imgUrl(transformation.after)">
        </div>
    </div>
  </div>
</template>

<script>
import Transformation from "@/components/Transformation";

var images = require.context('../data/img/transformations/', false, /\.png$|\.jpg$/)

export default {
  name: "Home",
  components: {Transformation},

  data () {
    return {
      transformations: {
        1: {
          before: 'before1.png',
          after: 'after1.png'
        },
        2: {
          before: 'before2.png',
          after: 'after2.png'
        }
      }
    }
  },

  methods: {
    imgUrl (path) {
      return images('./' + path)
    }
  }
}
</script>

<style scoped>
html, body {
  margin:0;
  padding:0;
}

* {
  box-sizing: border-box;
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
  margin: 4px 2px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#parent {
  margin:0;
  padding:0;
  position: absolute;
  width: 100%;
  height: 100%;
}

#push-up-bkg {
  margin:0;
  padding:0;
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