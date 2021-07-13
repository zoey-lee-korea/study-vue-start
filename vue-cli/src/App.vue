<template>
  <div>
      <app-header></app-header>
      <app-header 
        v-bind:propsdata="name"
        v-on:appFunction="realAppFunction"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
// 위 코드는 사실상 var AppHeader = { template : <h1>Header</h1> } 와 동일하다

export default {
    data : function() {
        return {
            name : 'zoey'
        }
    },
    components : {
        'app-header' : AppHeader
    },
    methods : {
        realAppFunction : function() {
            console.log('app function performed')
        }
    }
}
</script>

<style>

</style>