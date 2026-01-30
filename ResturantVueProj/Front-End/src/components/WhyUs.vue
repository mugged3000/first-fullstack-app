<template>
  <section  class="why-us">
    <v-container>
      <div class="section-title">
        <h2>Why choose <span>Our Restaurant</span></h2>
        <p>Experience the difference that makes us the preferred choice for fine dining</p>
      </div>

      <v-row class="features-row">
        <v-col
          v-for="(feature, index) in features"
          :key="index"
          cols="12"
          md="4"
          class="feature-col"
        >
          <div 
            class="feature-card"
            :class="`card-${index + 1}`"
            :ref="el => featureCardsRef[index] = el"
          >
            <span class="feature-number">0{{ index + 1 }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const featureCardsRef = ref([])

const features = ref([
  {
    title: 'Expert Chefs',
    description: 'Our master chefs bring decades of international experience and passion to every dish they create.'
  },
  {
    title: 'Fresh Ingredients',
    description: 'We source only the finest seasonal ingredients from local farms and trusted suppliers.'
  },
  {
    title: 'Award Winning',
    description: 'Recognized for excellence in cuisine, service, and overall dining experience.'
  }
])

onMounted(() => {
  // Ensure section is visible immediately
  gsap.set('.why-us', { opacity: 1, visibility: 'visible' })
  gsap.set('.feature-card', { opacity: 1, y: 0, scale: 1 })

  // Animate section title
  gsap.from('.section-title h2', {
    scrollTrigger: {
      trigger: '.why-us',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.section-title p', {
    scrollTrigger: {
      trigger: '.why-us',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'power2.out'
  })

  // Animate feature cards with proper initialization
  featureCardsRef.value.forEach((card, index) => {
    if (card) {
      // Set initial visible state
      gsap.set(card, { opacity: 1, y: 0, scale: 1 })
      
      // Animate from hidden state
      gsap.fromTo(card, 
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'back.out(1.7)'
        }
      )

      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          y: -10,
          boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
          ease: 'power2.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
          ease: 'power2.out'
        })
      })
    }
  })
})
</script>

<style scoped>
.why-us {
  padding: 80px 0;
  background: #fafafa;
  opacity: 1 !important;
  visibility: visible !important;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  opacity: 1 !important;
  transform: none !important;
}

.section-title h2 span {
  color: #cda45e;
}

.section-title p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 1 !important;
  transform: none !important;
}

.features-row {
  margin-top: 40px;
}

.feature-col {
  display: flex;
  justify-content: center;
}

.feature-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  max-width: 350px;
  width: 100%;
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #cda45e;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-number {
  font-size: 3rem;
  font-weight: 900;
  color: #f0f0f0;
  position: absolute;
  top: 10px;
  right: 20px;
  font-family: 'Playfair Display', serif;
  line-height: 1;
  z-index: 1;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

/* Individual card styling */
.card-1 {
  border-top: 4px solid #cda45e;
}

.card-2 {
  border-top: 4px solid #d4af37;
}

.card-3 {
  border-top: 4px solid #b8941f;
}

@media (max-width: 960px) {
  .feature-card {
    margin-bottom: 30px;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
}
</style>