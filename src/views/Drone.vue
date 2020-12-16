<template>
  <div>
    <DroneDetails/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DroneDetails from '@/components/DroneDetails.ts';

@Component({
  components: {
    DroneDetails,
  },
})
export default class Home extends Vue {
}
</script>

<style>
</style>