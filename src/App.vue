<template>
  <div id="app" class="container">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img src="./assets/logo.png" />
      </div>
      <div class="navbar-item">
        <select id="fieldCode" v-model="code" class="select">
          <option v-for="k in countryCodes" :value="k.code" :key="k.code">
            {{ k.country }} ({{ k.code }})
          </option>
        </select>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12 is-parent">
        <div class="tile is-child box" v-if="deferredPrompt">
          <button class="button is-fullwidth" @click="install">
            Instalar app
          </button>
        </div>
        <div class="tile is-child box">
          <div class="field">
            <label class="label" for="fieldPhone">Número de teléfono</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="phone"
                id="fieldPhone"
              />
            </div>
          </div>
        </div>
        <div class="tile is-child box">
          <a
            class="button is-fullwidth is-success"
            :href="'https://api.whatsapp.com/send?phone=' + code + finalPhone"
            role="button"
            >Abrir (+{{ code }}) {{ finalPhone }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bulma/css/bulma.min.css";
import "./codes";
import codes from "./codes";

export default {
  name: "App",
  data() {
    return {
      deferredPrompt: null,
      phone: "",
      code: "506",
      countryCodes: codes,
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
    // check if a country code is saved in localStorage.
    let code = localStorage.getItem("cCode");
    if (code) this.code = code;
  },
  computed: {
    finalPhone() {
      return this.phone.replace(/[^\d]/g, "");
    },
  },
  watch: {
    code(v) {
      localStorage.setItem("cCode", v);
    },
  },
  methods: {
    async install() {
      this.deferredPrompt.prompt();
    },
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