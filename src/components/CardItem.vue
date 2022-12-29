<template>
  <div class="card">
    <h2 class="card__title">{{ card?.title }}</h2>
    <p class="card__text">
      {{ card?.text }}
    </p>
    <img class="card__btn" src="../sourse/Star.svg" alt="favorites" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
  name: 'CardItem',
  props: {
    card: Object,
  },
});
</script>

<style lang="scss" scoped>
.card {
  max-width: 25vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid black;
  border-radius: 20px;
  margin-bottom: 20px;
  .card__title {
    font-size: 24px;
    margin-bottom: 15px;
  }
  .card__text {
    font-size: 14px;
    line-height: 20px;
    flex: 1 1 auto;
  }
  .card__btn {
    width: 60px;
    align-self: flex-end;
    padding: 10px;
    background-color: lightblue;
    border-radius: 50%;
  }
}
</style>
