<template>
  <div>{{setup()}}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ApiService } from '../services/api';

@Options({
  props: {
    msg: String
  }
})
export default class DisplayWeatherComponent extends Vue {
  t: number = 2 + 2;

  setup(): void{
    console.log("This merely exists to run setup on the component");
    this.myFunc();
    this.myFunc2();
  }
  
  myFunc(): void {
      console.log('Hello world '+this.t);
      // return "Hello Vue";
  }
  myFunc2(): void {
    console.log( "This is the Api key: " ,new ApiService().API_KEY);
  }
}
</script>