<template>
    <div class="card">
      <img class="giant-picture" src="images/grinch.jpg" alt="Picture" />
      <div class="text-overlay">
        <p>Ich habe gewonnen!</p>
      </div>
    </div>
  </template>
  
<style>
  html,
  body {
    height: 100%;
  }
  .card {
    position: relative;
    width: 380px;
    margin: 0 auto;
    height: 740px;
  }
  .giant-picture {
    display: block;
    width: 100%;
    height: 100%;
  }
  .text-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
  }
</style>