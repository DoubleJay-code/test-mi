<template>
  <div class="card">
    <h2 class="card__title">
      {{ card.title }}
    </h2>
    <p class="card__text">
      {{ card.text }}
    </p>
    <img
      @click="appStore.favoriteCard(card)"
      class="card__btn"
      :class="{ active: card.flag }"
      src="../sourse/Star.svg"
      alt="favorites"
    />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '../store/appStore';

const appStore = useAppStore();
const props = defineProps({
  card: {
    type: Object,
    required: true,
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
  .active {
    background-color: lightcoral;
  }
}
</style>
