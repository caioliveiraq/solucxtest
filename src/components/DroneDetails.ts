import {Vue, Component} from 'vue-property-decorator';
import WithRender from './DroneDetails.html';
import Task from '@/types/Task.ts';
import DataService from '@/components/DataService';

@WithRender
@Component
export default class DroneDetails extends Vue {
    // String id drone
    public idDrone: string = '0';
    public tasks: Task[] = [
      { id: 0, image: '', name: '', address: '', battery: 0, max_speed: 0.0, average_speed: 0.0, status: '', fly: 0},
    ];
    public created() {
      // Get drone id of param router
      this.idDrone = this.$route.params.id;

      DataService.get(this.idDrone)
      .then((response) => {
      this.tasks = [];
      this.tasks = response.data;
      })
      .catch((e) => {
      alert(e);
      });
    }
}
