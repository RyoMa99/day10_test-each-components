<template>
  <div>
    <input v-model="username">
    <div
      v-if="error"
      class="error"
    >
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  username = ''

  get error (): string {
    return this.username.trim().length < 7
      ? 'Please enter a longer username'
      : ''
  }
}
</script>

<style lang="scss" scoped>

</style>
