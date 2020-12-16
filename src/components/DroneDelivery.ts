import {Vue, Component} from 'vue-property-decorator';
import WithRender from './DroneDelivery.html';
import FlyStatus from '@/types/FlyStatus.ts';
import DroneStatus from '@/types/DroneStatus.ts';
import Task from '@/types/Task.ts';
import DataService from '@/components/DataService';

@WithRender
@Component
export default class DroneDelivery extends Vue {
  // Filter fields
  public id: string = '';
  public name: string = '';
  public fly: string = '';
  public status: string = '';
  public pageCurrent: number = 1;
  // Data drone array
  public tasks: Task[] = [
    { id: 0, image: '', name: '', address: '', battery: 0, max_speed: 0.0, average_speed: 0.0, status: '', fly: 0},
  ];
  // Table const arrays
  public FlyStatus: FlyStatus[] = [
    { value: '', text: ''},
    { value: '1', text: 'going'},
    { value: '2', text: 'coming'},
  ];
  public DroneStatus: DroneStatus[] = [
    { value: '', text: ''},
    { value: 'charging', text: 'charging'},
    { value: 'success', text: 'success'},
    { value: 'flying', text: 'flying'},
    { value: 'repair', text: 'repair'},
    { value: 'failed', text: 'failed'},
    { value: 'offline', text: 'offline'},
  ];
  // Table functions
  public formatDecimal(value: number): string {
    const intNumber: number = Math.trunc(value);
    const strNumber: string = value.toString();
    const floatNumber: string = strNumber.substring(strNumber.length, 2);
    return '<span style="font-size: 25px;">' + intNumber + '</span><span style="font-size: 20px;">.' + floatNumber + '</span>m/h';
  }
  public colorStatus(value: string): string {
    switch (value) {
      case 'success':
        return 'success';
      case 'delay':
        return 'warning';
      case 'failed':
        return 'danger';
      case 'offline':
        return 'secondary';
      default:
        return 'primary';
    }
  }
  // Get tasks drone functions
  public getTasks(paginate: number): void {
    DataService.getAll(paginate)
    .then((response) => {
      this.tasks = [];
      this.tasks = response.data;
    })
    .catch((e) => {
      alert(e);
    });
  }
  public filterChange(paginate: number): void {
    DataService.getByFilter(this.id, this.name, this.status, this.fly, paginate)
    .then((response) => {
      this.tasks = [];
      this.tasks = response.data;
    })
    .catch((e) => {
      alert(e);
    });
  }
  // Pagination Functions
  public paginationChange(): void {
    if (this.id || this.name || this.fly || this.status) {
      this.filterChange(this.pageCurrent + 1);
    } else {
      this.getTasks(this.pageCurrent + 1);
    }
  }
  public created() {
    this.getTasks(this.pageCurrent);
  }
}
