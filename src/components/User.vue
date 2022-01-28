<template>
  <div class="user">
    <div class="user__block">
      <div class="user__avatar">
        <img
          v-if="user.avatar"
          class="user__img"
          :src="user.avatar"
          alt="avatar"
        />
      </div>
    </div>

    <div class="user__mainInf">
      <div class="user__name user__field">
        {{ getFullname ? getFullname + " " : ""
        }}{{ user.gender ? "(" + user.gender + ")" : "" }}
      </div>
      <div class="user__field">
        <div class="user__infType">Date of birth:&nbsp;</div>
        <div class="user__infValue">{{ user.date_of_birth }}</div>
      </div>
      <div class="user__contacts">
        <span class="bold">CONTACTS</span>
        <div class="user__field">
          <div class="user__infType">Phone number:&nbsp;</div>
          <a :href="'tel:' + user.phone_number" class="user__infValue">{{
            user.phone_number
          }}</a>
        </div>
        <div class="user__field">
          <div class="user__infType">E-mail:&nbsp;</div>
          <a :href="'mailto:' + user.email" class="user__infValue">{{
            user.email
          }}</a>
        </div>
        <div class="user__field">
          <div class="user__infType">Address: &nbsp;</div>
          <div class="user__infValue">
            {{
              user.address
                ? user.address.country +
                  ", " +
                  user.address.city +
                  ", " +
                  user.address.state
                : ""
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["user"],
  computed: {
    getFullname() {
      if (this.user.first_name || this.user.last_name) {
        return this.user.first_name + " " + this.user.last_name;
      } else {
        return "";
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.user {
  font-weight: bold;
  font-size: 30px;
  display: flex;
  padding: 30px 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 576px) {
         font-size: 25px;
         padding: 15px 5px;

      }
  .user__block {
    width: 50%;
    min-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .user__contacts {
    margin-top: 30px;
    @media (max-width: 576px) {
          margin-top: 20px;
      }
  }
  .user__mainInf {
    padding: 0 0 0 30px;
    @media (max-width: 768px) {
    padding: 0 5px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 576px) {
         padding: 0;
      }
    .user__name {
      font-weight: 900;
      font-size: 35px;
      @media (max-width: 576px) {
         font-size: 25px;
      }
    }
    .user__field {
      display: flex;
      align-items: flex-start;
      margin: 5px 0;
      @media (max-width: 992px) {
        flex-wrap: wrap;
        margin: 12px 0;
      }
      @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
      }
       @media (max-width: 576px) {
          margin: 3px 0;
      }
      
      .user__infType {
        white-space: nowrap;
      }
      .user__infValue {
        text-align: left;
        @media (max-width: 576px) {
          text-align: center;
      }
      }
      
    }
  }
  .user__avatar {
    width: 300px;
    height: 300px;
    overflow: hidden;
    object-fit: fill;
    border: 0px solid rgb(252, 168, 12);
    border-radius: 50%;
    background-color: rgb(252, 168, 12);
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
    .user__img {
      widows: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .bold {
    font-size: 35px;
    @media (max-width: 576px) {
         font-size: 25px;
      }
  }
}
</style>