<script setup>
import IconLink from '../IconLink.vue'
import Button from '../Button.vue'
import Title from '../../components/Title.vue';

import { ref, onMounted } from 'vue';

const about = ref([]);
const socialMedia = ref([]);

onMounted(async () => {
  const aboutResponse = await fetch('/about.json');
  about.value = await aboutResponse.json();
  const smResponse = await fetch('/socialmedia.json');
  socialMedia.value = await smResponse.json();
});

</script>

<template>
  <Title></Title>
<!-- Container for the entire grid -->
  <div class="container-fluid">

<!-- Left Area: CONTACT, LINKS -->
    <div class="row mb-5">
      <br>
      <hr>
      <div class="col-lg-4">
        <h6 class="style-pixel-bold">Contact Me</h6>
        <div class="container w-auto mx-auto">
          <Button label="ryan.alex.davis at gmail" href="mailto:ryan.alex.davis@gmail.com"/>
        </div>
          <br><br>
          <h6 class="style-pixel-bold">Social Media</h6>
            <div class="container">
              <table>
                <tr class="icon" v-for="(socialMedia, index) in socialMedia" :key="index">
                  <td>
                    <IconLink
                    :link="socialMedia.url"
                    :iconClass="socialMedia.icon">
                    </IconLink>
                  </td>
                  <td class="link-style">
                    <a :href=socialMedia.url>{{ index }}</a>
                  </td>
                </tr>
              </table>
            </div>
          <br><br>
          <!-- AFFILIATIONS -->
          <h6 class="style-pixel-bold">Affiliations</h6>
            <div class="container">
                <table>
                  <tr class="icon" v-for="(aff, index) in about.aff" :key="index">
                    <td>
                      <IconLink
                      :link="aff.url"
                      :iconClass="aff.icon">
                      </IconLink>
                    </td>
                    <td class="link-style">
                      <a :href=aff.url>{{ index }}</a>
                    </td>
                  </tr>
                </table>
            </div>
            <br><br>
          <!-- WEBSITE CREDITS -->
          <h6 class="style-pixel-bold">Website</h6>
            <div class="container">
              <span class="">This website was heavily inspired by <a href="https://www.olenashmahalo.com/">Olena Shmahalo's portfolio website</a>. I ended up teaching myself a lot about Vue 3, Bootstrap 4, and HTML/CSS/JS attempting to mimic a lot of the layout properties I liked.</span>
            </div>
            <br><br>
        </div>
        <div class="col-lg-7">
          <!-- BIO -->
          <h6 class="style-pixel-bold">Bio</h6>
          <span class="section-text" v-html="about.bio"></span>
          <hr>
          <!-- RECOGNITION -->
          <h6 class="style-pixel-bold">Recognition</h6>
          <span v-for="(accomplishment, index) in about.accomplishments" :key="index">
            <span class="section-text link-style" v-html="accomplishment"></span>
            <br v-if="index < about.accomplishments.length - 1" />
          </span>
          <hr>
          <!-- NOW -->
          <h6 class="style-pixel-bold">Now</h6>
          <span v-for="(curr, index) in about.now" :key="index">
            <span class="section-text" v-html="curr"></span>
            <br v-if="index < about.accomplishments.length - 1" />
          </span>
        </div>
      </div>
  </div>
</template>

<style scoped>
  button {
    font-size: 12px !important;
  }
  
  .section-text {
    text-align: left;
  }

  .section-link {
    text-align: left;
  }

  .section-icon {
    text-align: right;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  td {
    text-align: left;
  }

  a {
    color: black;
    padding: 0;
    margin: 0;
  }

  .link-style:link {
    background: linear-gradient(to left, rgba(255,255,255,0) 50%, #ffb100 50%) 100% 98% / 220% 100% no-repeat;
    color: #000;
    cursor: pointer !important;
    cursor: pointer;
    padding: 2px 5px;
    transition: all .35s ease-in-out;
  }

  .link-style:hover {
    background-position: 0 98%;
    color: #000;
    outline: none;
    transition: all .5s ease-in-out;
  }

</style>
