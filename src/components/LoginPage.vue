<template>
  <div>
    <form @submit.prevent="login">
      <label for="passphrase">Enter passphrase:</label>
      <input v-model="passphrase" type="password" id="passphrase" />
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passphrase: '',
      loginAttempts: 3
    }
  },
  methods: {
    login() {
      // Add code here to check if the passphrase is correct
      // and forward to the application if it is

      // For example:
      if(this.loginAttempts == 0){
        this.$router.push('/fail')
      }else if (this.passphrase === 'test') {
        this.$router.push('/app')
      } else {
        this.loginAttempts--;
        alert('Deine Eingabe war töricht, du hast ' + this.loginAttempts + ' weitere Versuche')
      }
    }
  }
}
</script>
