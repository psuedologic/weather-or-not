<template>
  <div>{{myFunc()}}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class DisplayWeatherComponent extends Vue {
  msg!: string;
  // console.log("hello display");
  t: number = 2 + 2;
  /*msg!: string*/

  
  myFunc(): string {
      console.log('Hello world');
      return "Hello Vue";
  }
}
</script>