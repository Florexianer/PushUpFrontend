<template>
  <div id="first">
    <div class="sizeChart">
      <canvas id="pMin" style="width:100%;max-width:700px"></canvas>
    </div>
    <div class="sizeChart" id="marginTop">
      <canvas id="pSession" style="width:100%;max-width:700px;height: 300px"></canvas>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Charts",

  data() {
    return {
      workouts: null,
    }
  },
  async created() {
    const workouts = (await axios.get(this.$store.state.server + '/workoutGet/index.php?username=Florian')).data

    const pushUps = workouts.map(item => item.pushUpCount)
    const length = workouts.map(item => {
      const msMinute = 60 * 1000
      const msDay = 60 * 60 * 24 * 1000
      const a = item.start
      const b = item.end

      return (((b - a) % msDay) / msMinute)
    })
    const date = workouts.map(item => {

      let date = new Date(item.start*1)
      const month = date.getUTCMonth() + 1; //months from 1-12
      const day = date.getUTCDate();
      const year = date.getUTCFullYear();
      return year + "/" + month + "/" + day

    })



    let data = []

    for(let i = 0; i<pushUps.length; i++) {
      data.push((pushUps[i]/length[i]))
    }

    new Chart(document.getElementById("pMin"), {
      type: 'line',
      data: {
        labels: date,
        datasets: [{
          data: data,
          label: "Push ups",
          borderColor: "#101012",
          fill: true
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Push ups / min'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    })

    new Chart(document.getElementById("pSession"), {
      type: 'line',
      data: {
        labels: date,
        datasets: [{
          data: pushUps,
          label: "Push ups",
          borderColor: "#101012",
          fill: true
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Push ups / Session'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    })
  },

  mounted() {
  }
}
</script>

<style scoped>

#marginTop {
  margin-top: 50px;
}

.sizeChart {
  height: 300px;
}

#first {
  margin-top: 20%;
  position: absolute;
  width: 100%;
}
</style>