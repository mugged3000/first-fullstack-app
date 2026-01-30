<template>
  <section id="about" class="about-section">
    <v-container>
      <!-- Header Section -->
      <div class="section-header text-center">
        <div class="section-subtitle">Our Story</div>
        <h2 class="section-title">About Restaurantly</h2>
        <div class="title-divider">
          <div class="divider-line"></div>
          <div class="divider-dot"></div>
          <div class="divider-line"></div>
        </div>
        <p class="section-description">
          Crafting unforgettable dining experiences since 1995
        </p>
      </div>

      <!-- Two Columns (Always side-by-side on desktop) -->
      <div class="about-row">
        <!-- Left: Image -->
        <div class="about-col image-col">
          <div class="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Restaurant Interior"
              class="about-main-img"
            />
            <div class="floating-badge">
              <div class="badge-content">
                <span class="years">28+</span>
                <span class="label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Text -->
        <div class="about-col text-col">
          <h3 class="content-title">
            Creating Culinary Masterpieces Since 1995
          </h3>

          <p>
            At <span class="highlight">Restaurantly</span>, we believe that every meal should be a journey of discovery. 
            Our passion for culinary excellence drives us to create dishes that not only satisfy 
            the palate but also tell a story of tradition, innovation, and dedication.
          </p>

          <p>
            Our master chefs combine <span class="highlight">time-honored techniques</span> with contemporary flair, 
            using only the finest locally-sourced ingredients to create dishes that are both 
            authentic and exciting.
          </p>

          <div class="features-grid">
            <div
              class="feature-item"
              v-for="feature in features"
              :key="feature.title"
            >
              <div class="feature-icon">{{ feature.icon }}</div>
              <div class="feature-text">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <div class="action-buttons">
            <v-btn color="#cda45e" size="large" class="primary-btn" rounded>
              <span class="btn-text">Our Story</span>
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>

            <v-btn variant="outlined" size="large" class="secondary-btn" rounded>
              <span class="btn-text">View Menu</span>
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  { icon: "🍽️", title: "Premium Ingredients", description: "Locally sourced, fresh produce" },
  { icon: "👨‍🍳", title: "Expert Chefs", description: "International culinary experience" },
  { icon: "⭐", title: "Award Winning", description: "Recognized excellence" },
  { icon: "🌱", title: "Sustainable", description: "Eco-friendly practices" },
]);
</script>

<style scoped>
.about-section {
  padding: 120px 0;
  background: linear-gradient(135deg, #0c0b09 0%, #1a1814 100%);
  color: white;
}

/* ✅ Force two equal columns side-by-side */
.about-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: nowrap; /* prevents stacking */
}

.about-col {
  flex: 0 0 50%; /* each takes 50% width */
  box-sizing: border-box;
}

/* Left column (image) */
.image-col {
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.about-main-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  transition: transform 1s ease;
}

.image-wrapper:hover .about-main-img {
  transform: scale(1.05);
}

/* Floating badge */
.floating-badge {
  position: absolute;
  top: 30px;
  right: 30px;
  background: linear-gradient(135deg, #cda45e, #b8941f);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(205, 164, 94, 0.3);
}

.badge-content {
  text-align: center;
  color: white;
}

.years {
  display: block;
  font-size: 2.2rem;
  font-weight: 700;
}

.label {
  font-size: 1rem;
  opacity: 0.9;
}

/* Right column (text) */
.text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-title {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 25px;
}

p {
  font-family: "Cormorant Garamond", serif;
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 20px;
}

.highlight {
  color: #cda45e;
}

/* Features grid */
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 30px 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border-left: 3px solid #cda45e;
}

/* Buttons */
.action-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.primary-btn {
  background: linear-gradient(135deg, #cda45e, #b8941f) !important;
  color: white !important;
}

.secondary-btn {
  border: 2px solid #cda45e !important;
  color: #cda45e !important;
  background: transparent !important;
}

/* Responsive: Stack only on small screens */
@media (max-width: 960px) {
  .about-row {
    flex-wrap: wrap;
  }
  .about-col {
    flex: 0 0 100%;
  }
  .image-col {
    margin-bottom: 40px;
  }
}
</style>
