<template>
  <div>
    <h1>Header</h1>
    <p>{{ propsdata }}</p>
    <button v-on:click="sendEvent">click</button>
  </div>
</template>

<script>
export default {
  props : [
    'propsdata'
  ],
  methods : {
    sendEvent : function() {
      this.$emit('appFunction')
    }
  }
}
</script>

<style>

</style>