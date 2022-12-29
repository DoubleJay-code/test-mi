<template>
  <div class="wrapper">
    <CardItem v-for="card of appStore.cards" :key="card.id" :card="card" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAppStore } from './store/appStore';
import CardItem from './components/CardItem.vue';

const appStore = useAppStore();

onMounted(() => {
  appStore.getArray();
});
</script>

<style lang="scss">
.wrapper {
  width: 90vw;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
