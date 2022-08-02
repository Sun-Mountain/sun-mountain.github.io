<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><a href="https://fearless.tech/">Fearless</a> Software Engineer</h2>
    <div>
      <h3>Selected Writings</h3>
      <p>
        <a href="https://dev.to/nikacodes/basic-color-theory-for-web-developers-15a0">Basic Color Theory for Web Developers</a>
      </p>
      <p>
        <a href="https://technical.ly/software-development/nicole-zonnenberg-software-career/">How I Got Here: From a chocolate factory to a software firm</a>
      </p>
      <p>
        <a href="https://fearless.tech/blog/2020/09/07/what-is-tech-debt">What is Tech Debt?</a>
      </p>
    </div>
    <div>
      <h3>Awards</h3>
      <p>
        <a href="https://technical.ly/software-development/reallist-engineers-20200-influential-technologists/">Techincal.ly RealLIST Engineer (2020)</a>
      </p>
      <p>
        <a href="https://fearless.tech/blog/2021/02/22/celebrating-the-fearless-value-award-winners">Fearless Open Dialogue Award (2021)</a>
      </p>
    </div>
  </div>
  <div>
    <h3>Links</h3>
    <p>
      <a href="https://github.com/Sun-Mountain" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/nzonnenberg/" target="_blank">LinkedIn</a> | <a href="https://twitter.com/NikaCodes" target="_blank">Twitter</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f91580;
}
</style>
