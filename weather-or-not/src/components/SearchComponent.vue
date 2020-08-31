<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ApiService } from '../services/api';
import { BehaviorSubject, Subscription } from "rxjs";

@Options({
  props: {
    msg: String
  }
})
export default class SearchComponent extends Vue {

created(): void{
  console.log("on search weather component created")
  const weatherData: BehaviorSubject<Subscription> = new ApiService().dataSubject
  weatherData.subscribe(message => {
    console.log("weatherDataMessage:", message)
  })
  
  }
}
</script>