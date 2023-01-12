<template>
  <section class="Home">
    <div class="baris-akarsu">
      <div class="message">
        <p> Seni Her Zaman Bıraktığın Güzellikle Anacağız ...</p>
      </div>
      <img src="/pictures/kapak.webp" class="baris-akarsu-photo" alt="Barış Akarsu">
    </div>
    <div class="menu">
      <routerLink class="menu-item" :to="{ name: 'Songs' }">
        <h5>Şarkılar</h5>
      </routerLink>
      <routerLink class="menu-item" to="/">
        <h5>Röportajlar</h5>
      </routerLink>
      <routerLink class="menu-item" to="/">
        <h5>Fotoğraflar</h5>
      </routerLink>
      <routerLink class="menu-item" to="/">
        <h5>Videolar</h5>
      </routerLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .Home {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .baris-akarsu {
      height: 100vh;
      position: relative;
      .message {
        position: absolute;
        z-index: 999;
        left:0;
        bottom: 0;
        font-weight: bold;
        font-size: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 100%;
        background: rgba(#000, .2);
        padding: 20px 60px;
        font-family: 'Pacifico', cursive;
        text-align: center;
      }
      &-photo {
        height: inherit;
        max-width: 100%;
        filter: grayscale(100%);
        object-fit: cover;
      }
    }

    .menu {
      flex-shrink: 0;
      min-height: 100vh;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      grid-gap: 20px;
      padding: 20px;

      &-item {
        background: $fm;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        h5 {
          opacity: .7;
          font-size: 3.2em;
          font-weight: 500;
        }
        &:hover {
          opacity: .6;
        }
      }
    }
  }

  @media screen and (max-width: 768px){
    .Home {
      display: block;
      
      .baris-akarsu {
        height: initial;
        .message {
          font-size: 22px;
          padding: 10px;
        }
        &-photo {
         object-fit: contain;
         width: 100%;
        }
      }
    }
  }
</style>
