<template>
  <section>
    <h1 class="jap-text">
      日本語
    </h1>
    <div>
      <input type="text" v-model="word"/>
      <button v-on:click="lookupWord">Lookup!</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      jisho_api: 'http://localhost:8083/api/v1',
      word: 'house'
    }
  },
  methods: {
    lookupWord: function () {
      console.log('Lookup Word', this.word)
      this.$http.get(this.jisho_api + '/search/words?keyword=' + this.word).then(data => {
        console.log('Response', data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,h2{
  font-weight: normal;
}

.kanji{
  position: relative;
  display: inline-block;
}
.furigana{
  position: absolute;
  bottom:-0.8rem;
  font-size: 0.8rem;
  left: 0;
}
</style>
