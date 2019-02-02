<template>
  <div>
    <v-container grid-list-xs>
      <v-layout column wrap align-center style="height: 100vh">
        <v-flex xs5 style="margin-top: 5vh">
          <img src="https://avatars0.githubusercontent.com/u/30410316?s=460&v=4" width="250vh" style="border-radius: 50%" alt="">
        </v-flex>
        <v-flex xs2>
          <h1 >Hi there! I'm Taqi</h1>
          <h1 class="font-weight-light">I'm a Fullstack Web Developer</h1>
        </v-flex>
        <v-flex xs2>
          <v-layout row wrap>
            <v-btn href="https://www.instagram.com/taqi.mp3/" small outline color="black">Instagram</v-btn>
            <v-btn href="https://github.com/taqiabdulaziz" small outline color="indigo">Github</v-btn>
            <v-btn href="https://www.linkedin.com/in/muhammad-taqi-a-92002589/" small outline color="blue">LinkedIn</v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    HelloWorld
  }
};
</script>
