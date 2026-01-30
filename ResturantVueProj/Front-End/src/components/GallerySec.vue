<template>
  <section id="gallery" class="gallery-section">
    <v-container fluid class="pa-0">
      <!-- Header -->
      <div class="section-header mb-10">
        <h6 class="section-subtitle">Gallery</h6>
        <h2 class="section-title">Some photos from Our Restaurant</h2>
        <div class="divider"></div>
      </div>

      <!-- Gallery Grid -->
      <v-row no-gutters>
        <v-col
          v-for="(image, index) in galleryImages"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          class="gallery-col"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              elevation="0"
              class="gallery-card"
              @click="openImage(index)"
            >
              <v-img :src="image" aspect-ratio="1" cover class="gallery-image">
                <div v-if="isHovering" class="overlay">
                  <v-icon size="40" color="white">mdi-magnify</v-icon>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <!-- Image Modal -->
      <v-dialog
        v-model="showModal"
        max-width="900"
        class="gallery-dialog"
        @click:outside="closeModal"
        transition="none"
      >
        <v-card class="modal-card" ref="modalCard">
          <v-img
            :src="galleryImages[selectedIndex]"
            aspect-ratio="1"
            cover
          ></v-img>

          <!-- Navigation Arrows -->
          <v-btn icon class="nav-btn prev-btn" @click.stop="prevImage">
            <v-icon size="40" color="white">mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn icon class="nav-btn next-btn" @click.stop="nextImage">
            <v-icon size="40" color="white">mdi-chevron-right</v-icon>
          </v-btn>

          <!-- Close Button -->
          <v-btn icon class="close-btn" @click="closeModal">
            <v-icon size="30" color="white">mdi-close</v-icon>
          </v-btn>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { gsap } from 'gsap'

const galleryImages = [
  'https://images.unsplash.com/photo-1673825333083-ada9f6c51f42?auto=format&fit=crop&w=1200&q=80',
  'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=1200',
  'https://images.unsplash.com/photo-1743275532237-b27b83be864c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1743148509625-9dad6e80ea6c?auto=format&fit=crop&w=1200&q=80',
  'https://plus.unsplash.com/premium_photo-1661880019417-20142c2a133b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1685858562774-50c3bc8e7659?auto=format&fit=crop&w=1200&q=80',
  'https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1743793056164-67c6ce029d34?auto=format&fit=crop&w=1200&q=80'
]

const showModal = ref(false)
const selectedIndex = ref(0)
const modalCard = ref(null)

const openImage = async (index) => {
  selectedIndex.value = index
  showModal.value = true
  await nextTick()
  gsap.fromTo(
    modalCard.value,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }
  )
}

const closeModal = () => {
  gsap.to(modalCard.value, {
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
    onComplete: () => (showModal.value = false)
  })
}

const nextImage = () => {
  selectedIndex.value = (selectedIndex.value + 1) % galleryImages.length
}

const prevImage = () => {
  selectedIndex.value =
    (selectedIndex.value - 1 + galleryImages.length) % galleryImages.length
}
</script>

<style scoped>
.gallery-section {
  background-color: #0c0b09;
  color: white;
  padding: 100px 0;
  overflow: hidden;
}

/* Header */
.section-header {
  text-align: left;
  margin-left: 60px;
}

.section-subtitle {
  color: #cda45e;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
}

.divider {
  width: 80px;
  height: 2px;
  background-color: #cda45e;
  margin: 15px 0 30px;
}

/* Gallery */
.gallery-col {
  padding: 0 !important;
}

.gallery-card {
  cursor: pointer;
  overflow: hidden;
  border-radius: 0;
}

.gallery-image {
  height: 100%;
  transition: transform 0.6s ease, filter 0.4s ease;
}

.gallery-card:hover .gallery-image {
  transform: scale(1.15);
  filter: brightness(70%);
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.35);
}

/* Modal */
.gallery-dialog {
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-card {
  position: relative;
  border-radius: 10px;
  background: transparent !important;
  box-shadow: none;
  overflow: hidden;
}

/* Buttons */
.close-btn,
.nav-btn {
  position: absolute;
  background: none !important;
  box-shadow: none !important;
}

.close-btn {
  top: 15px;
  right: 15px;
  z-index: 10;
}

.prev-btn {
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 10;
}

.next-btn {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 10;
}

.close-btn:hover,
.nav-btn:hover {
  opacity: 0.7;
}
</style>
