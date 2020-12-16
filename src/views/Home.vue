<template>
  <div>
    <DroneDelivery/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DroneDelivery from '@/components/DroneDelivery.ts';

@Component({
  components: {
    DroneDelivery,
  },
})
export default class Home extends Vue {
}
</script>

<style>

.text-default {
  color: #5298d3!important;
}

.input-default {
  color: #5298d3!important;
  border-color: #5298d3!important;
  background-color: #eff8fe!important;
}

.table-default {
  color: #5298d3!important;
}

.table-default, td{
  vertical-align: middle!important;
}

.bv-row {
  margin-top: 50px!important;
}

</style>