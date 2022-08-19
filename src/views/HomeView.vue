<script>
import awards from '../assets/data/awards.json';
import projects from '../assets/data/projects.json';
import writings from '../assets/data/writings.json';

export default {
  data() {
  	return {
	    awards: awards,
      projects: projects,
      writings: writings
  	}
	}
}
</script>

<template>
  <div class="home">
    <h1>Nicole Zonnenberg</h1>
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
    <h3>Selected Projects</h3>
      <div class="cards-container">
        <div v-for="(project) in projects" class="flip-card">
          <div class="flip-card-inner">
            <a href="#" id="flip-card-inner">
              <div :class="project.id+'-card flip-card-front'">
                <h4>{{ project.name }}</h4>
                <img :src="'/'+project.logo" alt="">
              </div>
            </a>
            <div :class="project.id+'-card flip-card-back'">
              <div class="description-container">
                {{ project.description }}
              </div>
              <a :href="project.githubLink" target="_blank">
                <font-awesome-icon icon="fa-solid fa-code" />
              </a>
              <a v-if="project.isLive && !project.isPortfolio" :href="project.liveLink" target="_blank">
                <font-awesome-icon icon="fa-solid fa-link" />
              </a>
              <font-awesome-icon v-if="!project.isLive" icon="fa-solid fa-link" class="icon" />
            </div>
          </div>
        </div>
      </div>
    <h3>Selected Writings</h3>
      <div class="link-list">
        <a v-for="(writing) in writings" :href="writing.url" target="_blank">{{ writing.title }}</a>
      </div>
    <h3>Awards</h3>
      <div class="link-list">
        <a v-for="(award) in awards" :href="award.url" target="_blank">{{ award.title }} ({{ award.year }})</a>
      </div>
  </div>
</template>
