<template>
  <div class="hello">
    <label for="fieldPhone">Número de teléfono</label>
    <input type="text" v-model="phone" id="fieldPhone">
    <a :href="'https://wa.me/506' +phone">{{phone}}</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      phone: ""
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
