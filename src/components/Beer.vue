<template>
  <div class="beer">
    <div class="beer__inner">
      <div class="beer__phrase">
        {{ getPhrase }}
      </div>
      <div @click="beerButtonClickHandler" class="beer__button">
        <div class="button__text">Another beer</div>

        <img class="beer__icon" src="../assets/reloadIcon.png" />
      </div>
    </div>

    <div class="beer__content">
      <div class="beer__info">
        <div class="beer__field">
          <div class="beer__infType">Brand:&nbsp;</div>
          <div class="beer__infValue">
            {{ beer.brand }}
          </div>
        </div>
        <div class="beer__field">
          <div class="beer__infType">Name:&nbsp;</div>
          <div class="beer__infValue">
            {{ beer.name }}
          </div>
        </div>
        <div class="beer__field">
          <div class="beer__infType">Style:&nbsp;</div>
          <div class="beer__infValue">
            {{ beer.style }}
          </div>
        </div>
        <div class="beer__field">
          <div class="beer__infType">Yeast:&nbsp;</div>
          <div class="beer__infValue">
            {{ beer.yeast }}
          </div>
        </div>
        <div class="beer__field">
          ibu: {{ beer.ibu }}, blg: {{ beer.blg }}, alcohol: {{ beer.alcohol }}
        </div>
      </div>
      <div class="beer__picture">
        <div class="img__container">
          <img v-if="beer.img" class="beer__img" :src="beer.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Beer",
  props: ["beer"],
  data() {
    return {
    selectedPhrase: "",
      phrases: [
        "HAVE A GOOD NIGHT!",
        "ПОДОЙДЁТ ДЛЯ РЫВКА",
        "CHOISE OF TRUE CONNOISSEURS",
        "YOU SURE? BETTER TRY AGAIN..",
        "HEAR THIS? Pshshs...",
        "GOOD IDEA FOR THUESDAY",
      ],
    };
  },
  computed: {
    getPhrase() {
      if (this.beer.id) {
        if (this.beer.alcohol.slice(0, this.beer.alcohol.length - 1) > 7) {
          return "OMG! REALY STRONG BEER!";
        } else {
          return this.phrases[Math.floor(Math.random() * this.phrases.length)];
        }
      } else {
        return "";
      }
    },
  },
  methods: {
      beerButtonClickHandler(){
          this.$store.dispatch("LOAD_BEER")
      }
  }
};
</script>

<style lang="scss">
.beer {
  .beer__inner {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 992px) {
        flex-direction: column;
        align-items:center;
      }
    .beer__phrase {
      display: flex;
      justify-content: center;
      margin-right: 20px;
      font-size: 35px;
      font-weight: bold;
      color:#fca80c;
      @media (max-width: 992px) {
          margin-right: 0;
          margin-bottom: 15px;
      }
    }
    .beer__button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: bold;
      padding: 5px 8px;
      border-radius: 5px;
      background-color: rgb(252, 168, 12);
      border: 2px solid white;
      transition: all 0.2s linear;
          width: fit-content;
      &:hover .beer__icon {
        transform: rotate(90deg);
      }
      &:hover {
        background-color: lighten($color: #fca80c, $amount: 10);
      }
      .beer__icon {
        width: 20px;
        height: 20px;
        margin-left: 7px;
        transition: all 0.2s linear;
      }
    }
  }
  .beer__content {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
flex-direction: column-reverse;
    }
    .beer__info {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding-left: 5px;
      @media (max-width: 768px) {
width: 100%;
padding-left: 0;
    }
      .beer__field {
        display: flex;
        justify-content: flex-end;
        padding-right: 15px;
        font-size: 25px;
        font-weight: bold;
        text-align: right;
        margin: 8px 0;
        @media (max-width: 992px) {
        flex-wrap: wrap;
      }
      @media (max-width: 768px) {
justify-content: center;
 text-align: center;
 padding-right: 0;
 padding: 0 5px;
    }
      }
      .beer__infValue {
        color: #fca80c;
      }
    }
    .beer__picture {
      display: flex;
      width: 50%;
      padding: 0 15px;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
       @media (max-width: 768px) {
width: 100%;
margin-bottom: 10px;
    }
      .img__container {
        height: 300px;
        width: 100%;
        max-width: 400px;
        
        .beer__img {
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          object-fit: cover;
          border: 2px solid white;
          background-color: white;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>