
<template>
  <section id="contact" class="contact-section">
    <v-container>
      <!-- Header -->
      <v-row class="justify-center mb-12">
        <v-col cols="12" md="8" class="text-center">
          <h6 class="subtitle">Contact</h6>
          <h2 class="title">Get In Touch With Us</h2>
          <p class="description">We're here to help and answer any questions you might have</p>
        </v-col>
      </v-row>

      <!-- Contact Information -->
      <v-row justify="center" class="mb-16">
        <v-col cols="12" sm="4" class="text-center">
          <div class="contact-item">
            <v-icon size="40" class="contact-icon">mdi-map-marker</v-icon>
            <h5 class="contact-label">Our Address</h5>
            <p class="contact-detail">1234 Street Name, City, Country</p>
          </div>
        </v-col>
        
        <v-col cols="12" sm="4" class="text-center">
          <div class="contact-item">
            <v-icon size="40" class="contact-icon">mdi-phone</v-icon>
            <h5 class="contact-label">Call Us</h5>
            <p class="contact-detail">+123 4567 890</p>
          </div>
        </v-col>
        
        <v-col cols="12" sm="4" class="text-center">
          <div class="contact-item">
            <v-icon size="40" class="contact-icon">mdi-email</v-icon>
            <h5 class="contact-label">Email Us</h5>
            <p class="contact-detail">info@example.com</p>
          </div>
        </v-col>
      </v-row>

      <!-- Contact Form & Map -->
      <v-row class="align-start">
        <!-- Contact Form -->
        <v-col cols="12" lg="6" class="pr-lg-8">
          <v-form ref="contactForm" @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.name"
                  label="Your Name"
                  required
                  outlined
                  class="form-field"
                  hide-details
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.email"
                  label="Your Email"
                  type="email"
                  required
                  outlined
                  class="form-field"
                  hide-details
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.subject"
                  label="Subject"
                  required
                  outlined
                  class="form-field"
                  hide-details
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.message"
                  label="Message"
                  rows="4"
                  outlined
                  class="form-field"
                  hide-details
                />
              </v-col>
              <v-col cols="12">
                <v-btn 
                  type="submit" 
                  color="primary" 
                  class="send-btn"
                  large
                  block
                >
                  Send Message
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>

        <!-- Map -->
        <v-col cols="12" lg="6">
          <div class="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
              class="map-frame"
              allowfullscreen
              loading="lazy"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const contactForm = ref(null);

function submitForm() {
  console.log("Form submitted", form.value);
  form.value = { name: "", email: "", subject: "", message: "" };
  contactForm.value.reset?.();
}
</script>

<style scoped>
.contact-section {
  background: #111;
  color: #fff;
  padding: 100px 0;
}

.subtitle {
  color: #cda45e;
  font-size: 0.9rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.description {
  color: #aaa;
  font-size: 1.1rem;
  line-height: 1.6;
}

.contact-item {
  padding: 2rem 1rem;
}

.contact-icon {
  color: #cda45e;
  margin-bottom: 1rem;
}

.contact-label {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}

.contact-detail {
  color: #aaa;
  line-height: 1.6;
}

.form-field {
  background: #1b1b1b;
  border-radius: 8px;
}

.form-field :deep(.v-input__control) {
  color: #fff;
}

.form-field :deep(.v-label) {
  color: #aaa;
}

.form-field :deep(.v-input__slot) {
  background: #1b1b1b !important;
}

.send-btn {
  background: #cda45e !important;
  color: #111 !important;
  font-weight: 600;
  font-size: 1rem;
  height: 50px;
  border-radius: 8px;
  text-transform: none;
}

.send-btn:hover {
  background: #b08c4a !important;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

.map-container {
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #cda45e;
}

.map-frame {
  width: 100%;
  height: 100%;
  border: none;
}

/* Responsive */
@media (max-width: 1263px) {
  .contact-section {
    padding: 80px 0;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .contact-item {
    padding: 1.5rem 0.5rem;
  }
}
</style>