<template>
  <div class="wrapper">
    <CardItem v-for="card of appStore.cards" :key="card.id" :card="card" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from './store/appStore';
import CardItem from './components/CardItem.vue';

const appStore = useAppStore();

export default defineComponent({
  /* data() {
    return {
      appStore: useAppStore(),
    };
  }, */
  name: 'App',
  components: { CardItem },
  mounted() {
    appStore.getArray();
  },
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
