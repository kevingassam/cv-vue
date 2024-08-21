<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5 col-12 mx-auto">
        <div class="form-div">
          <div class="header-login"></div>
          <div class="text-center p-1">
            <h3>Connexion</h3>
          </div>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                class="form-control"
                v-model="email"
                placeholder="Entrer votre adresse email"
                required
              />
            </div>
            <div class="input-group mb-3">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                class="form-control"
                placeholder="Entrer votre mot de passe"
                v-model="password"
                required
              />
              <div class="input-group-append">
                <span
                  class="input-group-text cusor"
                  id="basic-addon2"
                  @click="togglePasswordVisibility"
                >
                  {{ showPassword ? "cacher" : "voir" }}
                </span>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">
                Se connecter
              </button>
            </div>
            <p class="forgot-password">
              <a href="#">Mot de passe oublié?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Login } from "@/axios"; // Importer les fonctions API

const showPassword = ref(false);
const email = ref("");
const password = ref("");

//show password when click ShowPassword
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

//Récupérer les données de connexion et les envoyer à l'API

const submitForm = async () => {
  try {
    const credentials = {
      email: email.value,
      password: password.value,
    };
    const result = await Login(credentials);
    console.log("Réponse de la connexion:", result);
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
  }
};
</script>
<style>
.header-login {
  background: url("/src/assets/login-illustration.jpg") no-repeat;
  background-size: cover;
  color: white;
  padding: 20px;
  text-align: center;
  height: 200px;
  border-radius: 10px;
}
.form-div {
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
}
.forgot-password {
  margin-top: 10px;
  text-align: center;
}
</style>
