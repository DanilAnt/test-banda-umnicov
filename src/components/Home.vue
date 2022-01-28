<template>
  <div class="home">
   <User :user="user"/>
   <Beer :beer="beer"/>
   <div v-if="isPending" class="home__mask">
     <div class="mask__content">
       <div class="mask__gif">
  <img src="../assets/mask_gif.gif" alt="">
       </div>
       <div class="mask__text">
         SEARCING BEER...
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import {mapGetters}  from 'vuex';
import User from '../components/User.vue';
import Beer from '../components/Beer.vue';
export default {
  name: "Home",
  components: {User, Beer},
  computed: {
    ...mapGetters({
      // проксирует `this.doneCount` в `store.getters.doneTodosCount`
      user: "GET_USER",
      beer: "GET_BEER",
      isPending: "GET_PENDING_STATUS",
    }),
  },
  mounted() {
    this.$store.dispatch("LOAD_USER");
    this.$store.dispatch("LOAD_BEER");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home__mask{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items:center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  .mask__content{
    display: flex;
    flex-direction: column;
  align-items:center;
  justify-content: center;
  }
  .mask__text{
    font-size: 30px;
    color: #3f3115;
  }
  .mask__gif{
    display: flex;
    width: 80%;
    height: 80%;
    max-width: 300px;
    max-height: 300px;
    margin-bottom: 15px;
    img{
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
