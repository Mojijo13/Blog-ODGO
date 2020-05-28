<template>
  <v-container id="news-box" fluid>
    <v-row justify="center" class="py-12">
      <v-col lg="8" md="10" cols="12">
        <div class="pa-12">
          <h1>Newsletter</h1>
          <h3>Recevoir directement les articles dans ma boîte mail</h3>
          <form class="mt-6">
            <v-row justify="center" no-gutters>
              <v-col sm="9" cols="8">
                <v-text-field
                  v-model="email"
                  required
                  flat
                  solo
                  height="48px"
                  background-color="#fcfcfc"
                  placeholder="Rentrer votre adresse email"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-col>
              <v-col sm="3" cols="4">
                <v-btn class="btn-submit" depressed @click="submit"
                  >S'inscrire</v-btn
                >
              </v-col>
            </v-row>
            <v-row>
              <p v-if="submitStatus === 'OK'">Merci pour votre inscription !</p>
              <p v-if="submitStatus === 'ERROR'">
                Adresse email invalide
              </p>
              <p v-if="submitStatus === 'PENDING'">Envoi en cours...</p>
            </v-row>
          </form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  validations: {
    email: { required, email }
  },
  data() {
    return {
      email: '',
      submitStatus: null
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.email = ''
      } else {
        this.submitStatus = 'PENDING'
        this.$postEmailSib(this.email)
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 1000)
        this.email = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-radius-root: 0px;

#news-box {
  text-align: center;
  background-color: $middle-grey !important;
}
.btn-submit {
  width: 100%;
  height: 48px !important;
  border-radius: 0px !important;
  background-color: $white !important;
  border-left: 1px solid $middle-grey !important;
}
.v-input {
  height: 48px !important;
  border-radius: $border-radius-root !important;
}
p {
  padding: 12px !important;
}
h3 {
  font-weight: 300 !important;
}
</style>
