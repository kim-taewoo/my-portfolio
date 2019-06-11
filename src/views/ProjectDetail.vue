<template>
  <v-container fluid class="white pa-0">
    <v-layout align-center justify-center>
      <v-flex style="position:relative;">
        <v-img :src="require(`@/assets/pictures/${project.thumbnail}`)" aspect-ratio="2.2"></v-img>
        <div
          style="position:absolute;top:0;left:0;height:100%;width:100%;backgroundColor:black;opacity: 0.2;
  filter: alpha(opacity=30);"
        ></div>
        {{project.title}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["project"],
  created() {
    console.log(this.$route)
  }
};
</script>
