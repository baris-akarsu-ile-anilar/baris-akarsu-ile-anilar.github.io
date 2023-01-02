<template>
  <section class="albumsPage">
    <div class="albumsPageContent">
      <h2 class="mobile-title">Albümler</h2>
      <div class="albums">
        <h2 class="title">Albümler</h2>
        <div class="albums-item"
        :class="{ 'isSelected' : selectedAlbum === album }"
        v-for="album in albums"
        :key="album.albumName">

          <button @click="setAlbum(album)">
            <img :src="album.albumPhoto" :alt="album.albumName" class="albumPhoto">
            <span> {{ album.albumName }} </span>
          </button>

        </div>

      </div>


      <div class="songs">
        <button class="playerAlbum" @click="allSongPlay">
          <span v-if="togglePlayer">Durdur</span>
          <span v-else>Listeyi Çal</span>
        </button>
        <div class="selectedAlbum">
          <div class="song"
            v-for="(song, index) in selectedAlbum.songs"
            :key="song.fileName">
            <audio-player
              class="customplayer"
              @audioplay="playSong(index)"
              @finishPlayer="setNextSong"
              ref="audioPayer"
              :class="{ 'playing': songIndex === index }"
              @playSong="songIndex = index"
              :fileName="song.fileName"
              :songName="song.name"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

import { songs } from './songs'

import AudioPlayer from '@/components/audio-player.vue'

export default {
  name: 'Songs',

  data() {
    return {
      albums: {
        ...songs
      },
      selectedAlbum: {},
      songIndex: null,
      togglePlayer: false
    }
  },

  components: {
    AudioPlayer
  },

  methods: {
    setAlbum(album) {
      this.selectedAlbum = album
      this.togglePlayer= false
      this.songIndex = null
    },
    allSongPlay() {
      this.togglePlayer = !this.togglePlayer
      this.songIndex = 0
      this.$refs.audioPayer[this.songIndex].playSong()
      if (!this.togglePlayer) {
        this.$refs.audioPayer.forEach(audio => {
        audio.pauseSong()
      })
      }
    },
    setNextSong() {
      if (!this.togglePlayer) return
      this.songIndex +=1
      this.$refs.audioPayer[this.songIndex].playSong()
    },
    playSong(currentIndex) {
      this.$refs.audioPayer.forEach((audio, index) => {
        if (currentIndex === index) return
        audio.pauseSong()
      })
    }
  },
  beforeMount() {
    this.selectedAlbum = this.albums[0]
  }
}
</script>

<style lang="scss">
  .customplayer {
    &.playing {
      .songName {
        color: $green;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .playerAlbum {
    width: 100%;
    padding: 10px;
    min-height: 50px;
    border-radius: 25px;
    background: $green;
    color: $white;
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 50px;
    &:hover {
      background: $white;
      color: $green;
    }
  }
  .albumsPage {

    .mobile-title {
      display: none;
    }

    &Content {
      display: flex;
      .albums {
        max-width: 25%;
        height: 100vh;
        border-right: 1px solid rgba($light-gray, .2);
        position: fixed;
        top: 0;
        z-index: 999;

        .title {
          text-align: center;
          font-size: 1.8em;
          padding-top: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba($light-gray, .6);
          font-weight: 600;
        }
        &-item {
          overflow-x: auto;
          overflow-y: hidden;
          height: calc((100vh / 3) - 30px);
          span {
            font-weight: 500;
          }
          &.isSelected {
            background: $green;
            color: $gray;
          }
          &:not(:last-child) {
            border-bottom: 1px solid rgba($light-gray, .2);
          }

          button {
            font-size: 20px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            height: inherit;
            padding: 20px;
            
            .albumPhoto {
              max-width: 200px;
              margin-bottom: 10px;
            }

          }
        }

      }

      .songs {
        max-width: 75%;
        padding: 20px;
        flex: 1;
        margin-left: 25%;

        .selectedAlbum {
          img {
            max-width: 200px;
            max-height: 200px;
          }
          &Info {
            margin-left: 30px;
            margin-right: 30px;

            .name {
              font-weight: 500;
              font-size: 2.5em;
            }
          }

          .song {
            display: flex;
            justify-content: space-between;
            min-height: 80px;
            margin-bottom: 10px;
            align-items: center;
            border-bottom: 1px solid rgba($light-gray, .2);

            p {
              margin-right: 30px;
            }
            
            audio {
              height: 40px;
            }
          }
        }

      }
    }
  }

  @media(max-width: 768px) {
    .albumsPage {
      .mobile-title {
        display: flex;
        padding-top: 30px;
        padding-bottom: 30px;
        justify-content: center;
      }

      &Content {
        flex-direction: column;
        .albums {
          max-width: 100%;
          height: initial;
          position: static;
          overflow-x: auto;
          display: flex;
          .title {
            display: none;
          }
          &-item {
            width: 33.33%;
            min-width: 200px;
            overflow: hidden;
            flex-shrink: 0;
            height: initial;
            border: 1px solid rgba($light-gray, .2);
            padding-left: 15px;
            padding-right: 15px;
            display: flex;

            .albumPhoto {
              max-width: 170px !important;
            }
          }
        }
        .songs {
          max-width: 100%;
          margin-left: 0;
        }
      } 
   }
 }
</style>