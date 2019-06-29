<template>
 <div class="audio-player">
  <button type="button" class="songName" @click="playSong">{{ songName }}</button>
  <audio class="audio"
    controls
    @ended="finishPlay"
    @play="audioPlay"
    ref="audioPayer">
    <source :src="`/songs/${fileName}.mp3`" type="audio/mpeg">
  </audio>

  
  <!-- <input
  ref="playerProgress"
  class="audioProgress"
  :value="currentPercent"
  type="range"
  :max="100"> -->
 </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  props: {
    fileName: {
      type: String,
      required: true
    },
    songName: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      currentTime: "00:00",
      songTime: "00.00",
      currentPercent: 0
    }
  },

  methods: {

    playSong() {
      this.$refs.audioPayer.play()
    },

    finishPlay() {
      this.$emit('finishPlayer')
    },

    audioPlay() {
      this.$emit('playSong')
    },

    pauseSong() {
      const player = this.$refs.audioPayer
      player.pause()
      player.currentTime = 0
    },

    // initProgressBar() {
    //   const player = this.$refs.audioPayer

    //   const progressbar = this.$refs.playerProgress
    //   progressbar.addEventListener("click", seek);


    //   function seek(event) {
    //     var percent = event.offsetX / this.offsetWidth;
    //     player.currentTime = percent * player.duration;
    //     progressbar.value = percent / 100;
    //   }
    // },

    // formatTime(seconds) {
    //   let minutes = Math.floor(seconds / 60);
    //   minutes = (minutes >= 10) ? minutes : "0" + minutes;
    //   seconds = Math.floor(seconds % 60);
    //   seconds = (seconds >= 10) ? seconds : "0" + seconds;
    //   return minutes + ":" + seconds;
    // },
  
    // learnProgress() {
    //   this.currentTime = this.formatTime(this.$refs.audioPayer.currentTime)
    //   this.currentPercent = (this.$refs.audioPayer.currentTime * 100 ) / this.$refs.audioPayer.duration
    // }
  },
  
  mounted() {
    // this.songTime =  this.formatTime(this.$refs.audioPayer.duration)
    // this.currentPercent = this.$refs.audioPayer.currentTime
    // this.initProgressBar()
    const player = this.$refs.audioPayer
    player.addEventListener('play', () => {
      this.$emit('audioplay')
    })
  }
}
</script>

<style lang="scss" scoped>
  .audio-player {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  
  .songName {
    cursor: pointer;
    height: max-content;
    font-size: .9em;
    font-weight: bold;
    max-width: 40%;
    &:hover {
      opacity: .6;
    }
  }
  .audio {
    // display: none;
  }

  @media(max-width: 768px) {
    .audio-player {
      flex-direction: column;
    }

    .audio {
      padding: 10px;
    }
    
    .songName {
      max-width: 100%;
    }
  }
</style>
