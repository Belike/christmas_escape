<template>
    <div class="card">
      <div class="card-image">
        <img :src="imageUrl" :alt="imageTitle" />
        <h3 class="image-title">{{ imageTitle }}</h3>
      </div>
      <div class="card-content">
        <h4 class="date"> {{ date }}</h4>
        <h2 class="blog-title">{{ blogTitle }}</h2>
        <p class="blog-text">{{ blogText }}</p>
      </div>
    </div>
  </template>
  
  <style>
  .card {
    width: 50%;
    max-width: 380px;
    margin: 20px auto;
    background-color: #eee;
    border-radius: 10px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 3px rgba(0,0,0,0.15);
  }
  
  .card-image {
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .card-image img {
    width: 100%;
    height: 250px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .image-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 20px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 1.5em;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  .card-content {
    padding: 50px;
  }
  
  .blog-title {
    margin: 0;
    font-size: 2em;
    font-weight: bold;
  }
  
  .blog-text {
    font-size: 1.1em;
    line-height: 1.5;
  }
  </style>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      imageUrl: {
        type: String,
        required: true
      },
      imageTitle: {
        type: String,
        required: true
      },
      blogTitle: {
        type: String,
        required: true
      },
      blogText: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      }
    }
  }
  </script>
  