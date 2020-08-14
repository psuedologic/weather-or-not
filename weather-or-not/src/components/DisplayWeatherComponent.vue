<template>
  <div>{{setup()}}</div>
  <div>{{temperature}}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { ApiService } from '../services/api';

@Options({
  props: {
    msg: String
  }
})
export default class DisplayWeatherComponent extends Vue {
  
  @Prop() private temperatureLow!: number;

  get temperature(): number {
    return this.temperatureLow;
  }

  created() {
    console.log("On display weather component creation")

    this.myFunc();
    this.myFunc2();
  }

myFunc(): void {
      console.log('Hello world');
      // return "Hello Vue";
  }
myFunc2(): void {
    console.log( "This is the Api key: " ,new ApiService().API_KEY);
  }
}
</script>