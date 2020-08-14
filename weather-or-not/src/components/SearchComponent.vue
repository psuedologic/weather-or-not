<template>
  <div>{{setup()}}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class SearchComponent extends Vue {

setup(): void{

  }
}
</script>