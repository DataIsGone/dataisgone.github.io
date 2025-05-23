<script setup>
    import ProjNav from '../projects/ProjectNav.vue';
    import ExImage from '../projects/Image.vue';
    import ExVideoV from '../projects/VideoV.vue';
    import ExVideoY from '../projects/VideoY.vue';
    import Title from '../projects/AnchorTitle.vue';
    import Overview from '../projects/Overview.vue';

    import { ref, onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';

    import projImg from '/src/composables/importProjImages.js';
  
    const route = useRoute();
    const contents = ref({});
  
    onMounted(async () => {
        const response = await fetch('/projects.json');
        contents.value = await response.json();
    });
    
    const projId = route.query.projId;
    const currProj = computed(() => {
        return contents.value[projId] || { projTitle: 'Default Title', projContent: {} };
    });
</script>

<template>
    <!-- Individual Navigation Area -->
    <div class="section sticky-top title buf" id="navbar">
      <h1 class="style-pixel-bold">{{ currProj.projTitle }}</h1>
      <ProjNav></ProjNav>
    </div>

    <!-- Individual Project Overview -->
    <div class="section" id="Overview">
        <!-- <br><br><br><br><br><br><br><br> -->
        <Title secTitle="Overview"></Title>
        <Overview :content="currProj"></Overview>
    </div>

    <!-- Individual Content -->
    <div
        class="section"
        :id="projName"
        v-for="(projContent, projName) in currProj.projContent"
        :key="projName"
    >
        <!-- <br><br><br><br><br><br><br><br> -->
        <Title :secTitle="projName"></Title>
        <p class="section-text">{{ projContent.desc }}</p>
        <br>
        <div v-if="projContent.subdesc">
            <br><br>
            <div v-for="(sec, secIndex) in projContent.subdesc" :key="secIndex">
                <h4 class="style-pixel">{{ sec.title }}</h4>
                <span>{{ sec.desc }}</span>
                <br><br>
                <div class="row">
                    <div v-if="'video' in sec">
                        <div v-for="(video, vidIndex) in sec.video" :key="vidIndex">
                            <ExVideoV v-if="video[1] === 'vimeo'" :videoId="video[0]" :exDesc="video[2]"></ExVideoV>
                            <ExVideoY v-else :videoId="video[0]" :exDesc="video[2]"></ExVideoY>
                        </div>
                    </div>
                    <div v-else v-for="(img, imgIndex) in sec.img" :key="imgIndex" class="col-sm">
                        <ExImage :exImg="projImg[projId][img[0]]" :exDesc="img[1]"></ExImage>
                    </div>
                    <hr v-if="secIndex != (Object.keys(projContent.subdesc).length) - 1" class="short">
                </div>
                <br><br>
            </div>
        </div>
        <div v-else class="fluid-container">
            <div class="row">
                <div v-if="'video' in projContent">
                    <div v-for="(video, vidIndex) in projContent.video" :key="vidIndex">
                        <ExVideoV v-if="video[1] === 'vimeo'" :videoId="video[0]" :exDesc="video[2]"></ExVideoV>
                        <ExVideoY v-else :videoId="video[0]" :exDesc="video[2]"></ExVideoY>
                    </div>
                </div>
                <div v-else v-for="(img, imgIndex) in projContent.img" :key="imgIndex" class="col-sm">
                    <ExImage :exImg="projImg[projId][img[0]]" :exDesc="img[1]" :exThumb="projImg[projId][img[2]]"></ExImage>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .section {
        padding: 1em 5em;
    }

    .section-text {
        text-align: left;
        margin: 0 5em;
    }
    
    .title {
        background-color: white;
        padding: 2em 0;
    }

    .spacer {
        height: 5em;
    }

    hr.short {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
    }

@media screen and (max-width: 575px) {
    .section, .section-text {
        padding: 1em 0;
        margin: 0 1em;
    }

    #navbar {
        margin: 0;
    }
}
</style>