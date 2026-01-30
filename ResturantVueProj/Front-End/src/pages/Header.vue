
<template>
  <v-app-bar id="home"
    app
    fixed
    flat
    height="80"
    :class="{ 'nav-scrolled': scrolled }"
    class="main-navbar"
  >
    <v-container fluid class="px-0">
      <v-row align="center" class="px-4 mx-0">
        <!-- Logo -->
        <v-col cols="6" md="3" class="py-0">
          <h2 class="text-golden font-weight-bold m-0 logo-text">Restaurantly</h2>
        </v-col>

        <!-- Desktop Navigation - Show only on large screens (1025px and up) -->
        <v-col
          cols="6"
          md="6"
          class="justify-center d-none d-lg-flex py-0"
          ref="desktopNav"
        >
          <v-btn
            v-for="item in navItems"
            :key="item.id"
            variant="text"
            :color="activeSection === item.id ? '#cda45e' : 'white'"
            :class="['mx-2', 'nav-btn', { 'active-nav': activeSection === item.id }]"
            @click="scrollToSection(item.id)"
            size="large"
          >
            {{ item.name }}
          </v-btn>
        </v-col>

        <!-- CTA Button - Desktop - Show only on large screens (1025px and up) -->
        <v-col cols="6" md="3" class="d-none d-lg-flex justify-end py-0">
          <v-btn
            color="#cda45e"
            class="text-white font-weight-bold cta-btn"
            size="large"
            @click="scrollToSection('book-table')"
          >
            Book a Table
          </v-btn>
        </v-col>

        <!-- Mobile Menu Button - Show on iPad and smaller screens (below 1025px) -->
        <v-col cols="6" class="d-flex d-lg-none justify-end py-0">
          <v-btn
            @click="toggleMobileMenu"
            icon
            variant="text"
            :color="drawer ? '#cda45e' : 'white'"
            size="large"
            class="mobile-menu-btn"
          >
            <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
     
    </v-container>

    <!-- Mobile Navigation Drawer - For iPad and smaller screens -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      :width="drawerWidth"
      class="mobile-drawer"
      v-if="isMobileScreen"
    >
      <div class="drawer-content">
        <!-- Drawer Header -->
        <div class="drawer-header pa-4">
          <h3 class="text-golden mb-0">Restaurantly</h3>
          <v-btn
            @click="closeMobileMenu"
            icon
            variant="text"
            color="#cda45e"
            size="small"
            class="close-btn"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <!-- Navigation Items -->
        <v-list nav class="pa-4">
          <v-list-item
            v-for="item in navItems"
            :key="item.id"
            @click="handleMobileNavClick(item.id)"
            class="mobile-nav-item mb-2"
            :class="{ 'active-mobile-nav': activeSection === item.id }"
          >
            <v-list-item-title class="mobile-nav-text">
              {{ item.name }}
            </v-list-item-title>
            <v-icon 
              v-if="activeSection === item.id" 
              color="#cda45e" 
              size="20"
              class="ml-2"
            >
              mdi-chevron-right
            </v-icon>
          </v-list-item>
        </v-list>

        <!-- Mobile CTA Button -->
        <div class="mobile-cta pa-4">
          <v-btn
            color="#cda45e"
            class="text-white font-weight-bold mobile-cta-btn"
            size="large"
            block
            @click="handleMobileNavClick('menu')"
          >
            <v-icon left>mdi-calendar</v-icon>
            Book a Table
          </v-btn>
        </div>

        <!-- Contact Info -->
        <div class="contact-info pa-4">
          <div class="contact-item mb-3">
            <v-icon color="#cda45e" size="18" class="mr-2">mdi-phone</v-icon>
            <span class="text-white">+1 (555) 123-4567</span>
          </div>
          <div class="contact-item">
            <v-icon color="#cda45e" size="18" class="mr-2">mdi-clock</v-icon>
            <span class="text-white">Open: 11AM - 10PM</span>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- Overlay for clicking outside -->
    <div 
      v-if="drawer && isMobileScreen" 
      class="drawer-overlay"
      @click="closeMobileMenu"
        ></div>
    </v-app-bar>

    <!-- Spacer to prevent content from being hidden behind fixed navbar -->
    <div class="nav-spacer"></div>

    <Hero />
    <WhyUs />
    </template>

    <script setup>
    import { ref, onMounted, onUnmounted, nextTick, computed } from "vue";
    import { gsap } from "gsap";
    import ScrollToPlugin from "gsap/ScrollToPlugin";
    import Hero from "../components/Hero.vue";
    import WhyUs from "../components/WhyUs.vue";

    gsap.registerPlugin(ScrollToPlugin);

    // Reactive data
    const scrolled = ref(false);
    const drawer = ref(false);
    const activeSection = ref(sessionStorage.getItem('activeSection') || 'home');
    const screenWidth = ref(window.innerWidth);
    const desktopNav = ref(null);

    // Constants
    const navItems = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "menu", name: "Menu" },
    { id: "specials", name: "Specials" },
      { id: "chefs", name: "Chefs" },
      { id: "gallery", name: "Gallery" },
    { id: "contact", name: "Contact" },
    ];

    // Computed properties
    const isMobileScreen = computed(() => {
    return screenWidth.value < 1025;
    });

    const drawerWidth = computed(() => {
    if (!isMobileScreen.value) return 0;
    
    const width = screenWidth.value;
    if (width < 600) {
        return 280; // Small mobile
    } else if (width >= 768 && width <= 1024) {
        return width * 0.7; // iPad - 70% of screen width
    } else {
        return 400; // Larger mobile
    }
    });

    // Methods
    const handleResize = () => {
    screenWidth.value = window.innerWidth;
    // Close drawer if resizing to desktop
    if (!isMobileScreen.value) {
        drawer.value = false;
    }
    };

    const handleScroll = () => {
    scrolled.value = window.scrollY > 50;

    const scrollPosition = window.scrollY + window.innerHeight / 3; // dynamic midpoint for accuracy

    let foundSection = false;

    for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;

      // Check if current scroll is within the section range
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = item.id;
        sessionStorage.setItem('activeSection', item.id);
        foundSection = true;
        break;
      }
    }
  }

  // If no section is found (e.g., very top of page), set to "home"
  if (!foundSection) {
    activeSection.value = 'home';
    sessionStorage.setItem('activeSection', 'home');
  }
};


const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    activeSection.value = id;
    sessionStorage.setItem('activeSection', id);
    
    const offset = 80;
    const elementPosition = element.offsetTop - offset;
    
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: elementPosition, offsetY: 0 },
      ease: "power2.inOut",
    });
  }
};

const toggleMobileMenu = () => {
  if (isMobileScreen.value) {
    drawer.value = !drawer.value;
  }
};

const closeMobileMenu = () => {
  if (isMobileScreen.value) {
    drawer.value = false;
  }
};

const handleMobileNavClick = (sectionId) => {
  scrollToSection(sectionId);
  closeMobileMenu();
};

const handleClickOutside = (event) => {
  if (!isMobileScreen.value) return;
  
  // Close drawer if click is outside of drawer and hamburger button
  const drawerEl = document.querySelector('.mobile-drawer');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  
  if (drawer.value && 
      drawerEl && 
      !drawerEl.contains(event.target) && 
      menuBtn && 
      !menuBtn.contains(event.target)) {
    closeMobileMenu();
  }
};

const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && drawer.value && isMobileScreen.value) {
    closeMobileMenu();
  }
};

const checkUrlHash = () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && navItems.some(item => item.id === hash)) {
    activeSection.value = hash;
    sessionStorage.setItem('activeSection', hash);
    
    setTimeout(() => {
      scrollToSection(hash);
    }, 300);
  }
};

const initAnimations = async () => {
  await nextTick();
  const buttons = desktopNav.value?.querySelectorAll(".nav-btn");
  if (buttons?.length) {
    gsap.from(buttons, {
      duration: 0.8,
      y: -20,
      opacity: 0,
      stagger: 0.1,
      delay: 0.5,
    });
  }
};

// Lifecycle
onMounted(async () => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("hashchange", checkUrlHash);
  window.addEventListener("resize", handleResize);
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);

  await nextTick();
  checkUrlHash();
  handleScroll();
  initAnimations();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("hashchange", checkUrlHash);
  window.removeEventListener("resize", handleResize);
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscapeKey);
});
</script>

<style scoped>
@import './Header.css';
</style>

