<template>
  <div class="hello">
    <h1>{{ dataProps }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    dataProps: String,
  },
};
</script>

<style lang="scss" scoped>
$white-color: #fff;
$bg: #aeaeae;
.hello {
  h1 {
    margin-top: 30px;
    color: $bg;
  }
}
</style>
