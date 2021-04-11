<template>
  <div>
    <h2>Hello, {{name}} ！</h2>
  </div>
</template>

<script>
export default {
  name:'Test',
  props:{
    name: {
      type: String,
      default: 'Test'
    }
  }
}
</script>