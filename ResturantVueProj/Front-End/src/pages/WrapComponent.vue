<template>
  <v-app>
    <Header />
    <v-main>
      <AboutSec />
      <MenuSec />
      <SpecialSec />
     <BookForm />
     <chefs />
     <GallerySec />
     <contact-sec />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Header from './Header.vue';
import AboutSec from '../components/AboutSec.vue';
import MenuSec from '../components/MenuSec.vue';
import SpecialSec from '../components/SpecialSec.vue';
import BookForm from '../components/BookForm.vue';
import Chefs from '../components/Chefs.vue';
import GallerySec from '../components/GallerySec.vue';
import ContactSec from '../components/ContactSec.vue';
import Footer from '../components/Footer.vue';
</script>

