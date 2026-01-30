<template>
  <section  class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to <span>Restaurantly</span></h1>
        <h2 class="hero-subtitle">Delivering great food for more than 18 years!</h2>
        <div class="hero-buttons">
          <v-btn class="menu-btn" @click="scrollToMenu">
            Our Menu
          </v-btn>
          <v-btn class="book-btn" variant="outlined" @click="scrollToBook">
            Book a Table
          </v-btn>
        </div>
      </div>
      <div class="hero-play-btn">
        <div class="play-icon-wrapper">
          <v-icon color="#cda45e" size="40">mdi-play</v-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const scrollToMenu = () => {
  const element = document.getElementById('menu')
  if (element) {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: element, offsetY: 80 },
      ease: "power2.inOut"
    })
  }
}

const scrollToBook = () => {
  const element = document.getElementById('book-table')
  if (element) {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: element, offsetY: 80 },
      ease: "power2.inOut"
    })
  }
}

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.from('.hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  })
  .from('.hero-subtitle', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: 'power2.out'
  }, '-=0.3')
  .from('.hero-buttons', {
    duration: 0.6,
    y: 20,
    opacity: 0,
    ease: 'power2.out'
  }, '-=0.2')
  .from('.hero-play-btn', {
    duration: 0.8,
    scale: 0,
    rotation: 180,
    ease: 'back.out(1.7)'
  }, '-=0.2')
})
</script>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') 
              center center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-content {
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

.hero-title span {
  color: #cda45e;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.menu-btn {
  background: #cda45e !important;
  color: white !important;
  padding: 12px 30px !important;
  font-weight: 600;
  border-radius: 50px !important;
}

.book-btn {
  border: 2px solid white !important;
  color: white !important;
  padding: 12px 30px !important;
  font-weight: 600;
  border-radius: 50px !important;
  background: transparent !important;
}

.hero-play-btn {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.play-icon-wrapper {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #cda45e;
  transition: all 0.3s ease;
}

.play-icon-wrapper:hover {
  background: #cda45e;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>