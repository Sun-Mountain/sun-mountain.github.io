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
  <h3>Selected Projects</h3>
    <div class="cards-container">
      <div v-for="(project) in projects" class="flip-card">
        <div class="flip-card-inner">
          <div id="flip-card-inner">
            <div :class="project.id+'-card flip-card-front'">
              <h4>{{ project.name }}</h4>
              <img :src="'/'+project.portfolio_logo" alt="">
            </div>
          </div>
          <div :class="project.id+'-card flip-card-back'">
            <div class="description-container">
              {{ project.description }}
            </div>
            <div class="language-container">
              <img v-for="(lang) in project.languages" :src="'https://img.shields.io/badge/'+lang.title+'-282C34?logo='+lang.logo+'&logoColor='+lang.logoColor" :alt="lang.title+' logo'" :title="lang.title" />
            </div>
            <a :href="project.githubLink" target="_blank">
              <font-awesome-icon icon="fa-solid fa-code" />&nbsp; Github Repo
            </a>
            <a v-show="project.isLive && !project.isPortfolio" :href="project.liveLink" target="_blank">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />&nbsp; Take a Look
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      Want to see more? Visit my <a href="https://github.com/Sun-Mountain" target="_blank">GitHub</a>.
    </div>
  <h3>Selected Writings</h3>
    <div class="link-list">
      <a v-for="(writing) in writings" :href="writing.url" target="_blank">{{ writing.title }}</a>
    </div>
  <h3>Awards</h3>
    <div class="link-list">
      <a v-for="(award) in awards" :href="award.url" target="_blank">{{ award.title }} ({{ award.year }})</a>
    </div>
</template>
