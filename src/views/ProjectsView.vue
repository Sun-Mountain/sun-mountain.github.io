<script>
import myProjects from '../assets/data/projects.json';

export default {
  data() {
  	return {
	    projects: myProjects
  	}
	}
}
</script>

<template>
	<ul class="cards-container">
    <li v-for="(project) in projects" class="card">
		  <div class="img-container">
        <img :src="project.logo" width="100px" height="120px" alt="">
      </div>
      <div class="proj-about">
        <div class="description">
          <h3>
            {{ project.name }}
          </h3>
          <div>
            {{ project.description }}
          </div>
        </div>
        <div class="links">
          <a :href="project.githubLink" target="_blank" aria-label="Github link for lettuce meet repository">
            <font-awesome-icon icon="fa-solid fa-code" />
          </a>
          <a v-if="project.isLive && !project.isPortfolio" :href="project.liveLink" target="_blank">
            <font-awesome-icon icon="fa-solid fa-link" />
          </a>
          <font-awesome-icon v-if="!project.isLive" icon="fa-solid fa-link" />
        </div>
      </div>
		</li>
  </ul>
</template>

<!-- <template>
  <div class="cards-container">
    <div class="card">
      <div class="img-container">
        <img src="../assets/img/sheep.svg" alt="Personal Portfolio">
      </div>
      <div class="proj-about">
        <div class="description">
          <h3>
            Personal Portfolio
          </h3>
          <div>
            Luckily you don't have to go anywhere, because you are already here! But if you're interested in looking inside, check out the github link below. 
          </div>
        </div>
        <div class="links">
          <a href="https://github.com/Sun-Mountain/Sun-Mountain.github.io" target="_blank" aria-label="Github link for portfolio repository">
            <font-awesome-icon icon="fa-solid fa-code" />
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="img-container">
        <img src="../assets/img/lettuce.png" alt="Lettuce Meet">
      </div>
      <div class="proj-about">
        <div class="description">
          <h3>
            Lettuce Meet
          </h3>
          <div>
            What started as a joke during a bootcamp immersive became an attempt at an application to organize get togethers with friends outside of existing applications.
          </div>
        </div>
        <div class="links">
          <a href="https://github.com/Sun-Mountain/lettuceMeetApp" target="_blank" aria-label="Github link for lettuce meet repository">
            <font-awesome-icon icon="fa-solid fa-code" />
          </a>
          <a href="https://www.lettucemeet.app/" target="_blank">
            <font-awesome-icon icon="fa-solid fa-link" />
          </a>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="img-container">
        <img src="../assets/img/rooster.svg" alt="Student Rooster">
      </div>
      <div class="proj-about">
        <div class="description">
          <h3>
            Student Rooster
          </h3>
          <div>
            Half coding exercise/half attempt to solve a problem for a dance school. The purpose of which is to keep track of what classes students have taken.
          </div>
        </div>
        <div class="links">
          <a href="https://github.com/Sun-Mountain/student-rooster" target="_blank" aria-label="Github link for student rooster repository">
            <font-awesome-icon icon="fa-solid fa-code" />
          </a>
            <font-awesome-icon icon="fa-solid fa-link" />
        </div>
      </div>
    </div>
  </div>
</template> -->
