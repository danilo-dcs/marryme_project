<template>
  <v-form ref="registerForm" lazy-validation>
    <v-col cols="11" class="mx-auto">
      <v-text-field
        v-model="name"
        class="mb-4"
        prepend-inner-icon="mdi-account-box"
        label="Nome:"
        :rules="formRules.name"
        rounded
        outlined
        color="blue"
      >
      </v-text-field>

      <v-text-field
        v-model="email"
        class="mb-4"
        prepend-inner-icon="mdi-at"
        label="E-mail:"
        :rules="formRules.email"
        rounded
        outlined
        color="blue"
      >
      </v-text-field>

      <v-text-field
        v-model="cpf"
        class="mb-4"
        prepend-inner-icon="mdi-card-account-details"
        label="Cpf:"
        :rules="formRules.cpf"
        rounded
        counter="11"
        outlined
        color="blue"
      >
      </v-text-field>

      <v-text-field
        v-model="password"
        prepend-inner-icon="mdi-lock"
        label="Senha:"
        :rules="formRules.password"
        :type="showPass ? 'text' : 'password'"
        @click:append="showPass = !showPass"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        rounded
        outlined
        color="blue"
      >
      </v-text-field>

      <v-text-field
        v-model="passwordConfirm"
        prepend-inner-icon="mdi-lock"
        label="Confirme a senha:"
        :rules="formRules.password"
        :type="showPassConf ? 'text' : 'password'"
        @click:append="showPassConf = !showPassConf"
        :append-icon="showPassConf ? 'mdi-eye' : 'mdi-eye-off'"
        rounded
        outlined
        color="blue"
      >
      </v-text-field>
    </v-col>

    <v-row justify="center" class="mb-2">
      <v-btn @click="submitForm" color="blue" class="white--text">
        Cadastrar
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import cpf from "../../scripts/cpf.js";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    email: "",
    password: "",
    passwordConfirm: "",
    cpf: "",
    name: "",

    showPass: false,
    showPassConf: false,
    formRules: {
      name: [(text) => !!text || "Digite um nome"],
      cpf: [
        (text) => !!text || "Digite um Cpf",
        (text) => (text && cpf.validation(text)) || "Digite um Cpf válido",
      ],
      email: [
        (text) => !!text || "Digite um email",
        (text) => /.+@.+\..+/.test(text) || "Digite um email válido",
      ],
      password: [(text) => !!text || "Digite uma senha"],
    },
  }),

  computed:{

  },

  methods: {
    ...mapMutations("login", ["SET_DIALOG_MODE"]),

    submitForm() {
      if (this.$refs.registerForm.validate()) {
        if (this.password == this.passwordConfirm) {
          alert("Cadastro Realizado");
          this.SET_DIALOG_MODE("login");
        } else {
          alert("Confirme a senha corretamente");
        }
      } else {
        alert("Preencha os campos corretamente");
      }
    },
  },
};
</script>

<style>
</style>