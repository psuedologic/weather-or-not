<template>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class DisplayWeatherComponent extends Vue {
  msg!: string
}
</script>