<template>
    <nav class="navbar sticky-top navbar-expand-xl">
            <router-link class="nav-link style-pixel-bold" to="/">Ryan Davis</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon custom-toggler"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item navlink-spacer">
                    <router-link class="nav-link style-pixel" to="/">Projects</router-link>
                </li>
                <!-- <li class="nav-item navlink-spacer">
                    <router-link class="nav-link style-pixel" to="/resume">Resume</router-link>
                </li> -->
                <li class="nav-item navlink-spacer">
                    <router-link class="nav-link style-pixel" to="/about">About/Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
  
<script setup>
</script>
  
<style scoped>
    .navbar {
        padding: 1em 20px;
        background-color: black;
    }
    .navlink-spacer {
        padding: 0 1em;
    }

    span, .nav-link {
        color: white;
    }

    .nav-link:hover {
        color: black;
    }

    .custom-toggler {
        background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    }
</style>