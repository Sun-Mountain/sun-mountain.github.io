<script>
import awards from '../assets/data/awards.json';
import writings from '../assets/data/writings.json';

export default {
  data() {
  	return {
	    awards: awards,
      writings: writings
  	}
	}
}
</script>

<template>
  <div class="main-content">
    <div>
      <p>I am a software engineer that is passionate about accessibility, equity, and visibility in tech.</p>
    </div>
    <h3>Selected Writings</h3>
    <a v-for="(writing) in writings" :href="writing.url" target="_blank">{{ writing.title }}</a>
    <h3>Awards</h3>
    <a v-for="(award) in awards" :href="award.url" target="_blank">{{ award.title }} ({{ award.year }})</a>
  </div>
  <Projects/>
</template>