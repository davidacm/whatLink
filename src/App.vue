<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
              <button @click="install" v-if="deferredPrompt">
                Instalar app
                </button>
                <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      deferredPrompt: null,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    async install() {
      this.deferredPrompt.prompt();
    },
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
