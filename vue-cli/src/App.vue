<template>
  <div>
      <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
// 위 코드는 사실상 var AppHeader = { template : <h1>Header</h1> } 와 동일하다

export default {
    components : {
        'app-header' : AppHeader
    }
}
</script>

<style>

</style>