<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NavHeader from "./components/NavHeader.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="container"  v-if="!route.meta.hideMenu">
    <div class="row">
      <div class="col-12 card p-2 mb-3">
        <NavHeader />
      </div>
      <div class="col-sm-4">
        <div class="card p-2">
          <header>
            <img
              alt="Vue logo"
              class="logo"
              src="@/assets/logo.svg"
              width="125"
              height="125"
            />

            <div class="wrapper">
              <HelloWorld msg="You did it!" />

              <nav>
                <RouterLink to="/informations">
                  <Button class="w-100 btn-nav">Informations</Button>
                </RouterLink>
                <RouterLink to="/about">
                  <Button class="w-100 btn-nav">
                    Résumé
                  </Button>
                </RouterLink>
              </nav>
            </div>
          </header>
        </div>
        <div class="text-center p-2">
          <small>
           <i> @copyrith 2024 KG-code</i>
          </small>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="card p-2">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
  <div v-if="route.meta.hideMenu">
    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.btn-nav{
  border: none;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  text-align: left;
  margin: 2px;
  border-radius: 5px;
}
.btn-nav:hover{
  background-color: #ddd;
  color: black;
}



@media (min-width: 1024px) {




}
</style>
