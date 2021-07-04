<template>
  <div><MyButton /></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MyButton from '@/components/MyButton/index.vue'

@Component({
  components: {
    MyButton
  }
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
