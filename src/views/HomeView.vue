<template>
  <div class="main-content">
    <h3>Selected Writings</h3>
    <a href="https://dev.to/nikacodes/basic-color-theory-for-web-developers-15a0">Basic Color Theory for Web Developers</a>
    <a href="https://technical.ly/software-development/nicole-zonnenberg-software-career/">How I Got Here: From a chocolate factory to a software firm</a>
    <a href="https://fearless.tech/blog/2020/09/07/what-is-tech-debt">What is Tech Debt?</a>
    <h3>Awards</h3>
    <a href="https://technical.ly/software-development/reallist-engineers-20200-influential-technologists/">Techincal.ly RealLIST Engineer (2020)</a>
    <a href="https://fearless.tech/blog/2021/02/22/celebrating-the-fearless-value-award-winners">Fearless Open Dialogue Award (2021)</a>
  </div>
  <div class="main-content projects">
    <h3>Personal Projects</h3>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="../assets/img/lettuce.png" alt="Lettuce Meet" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h1>Lettuce Meet</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .flip-card {
    background-color: #FFF;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #FFF;
    color: black;
  }

  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }
</style>