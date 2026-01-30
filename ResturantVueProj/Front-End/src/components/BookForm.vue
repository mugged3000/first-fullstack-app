<template>
  <section id="book-table" class="book-section">
    <v-container>
      <!-- Section Header -->
      <div class="section-header mb-10">
        <h6 class="section-subtitle">Reservation</h6>
        <h2 class="section-title">Book a Table</h2>
        <div class="divider"></div>
      </div>

      <!-- Reservation Form -->
      <v-form @submit.prevent="submitForm" ref="formRef" class="reservation-form">
        <v-row dense>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.name"
              label="Your Name"
              variant="outlined"
              hide-details
              required
              class="input-dark"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.email"
              label="Your Email"
              variant="outlined"
              hide-details
              required
              class="input-dark"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.phone"
              label="Your Phone"
              variant="outlined"
              hide-details
              required
              class="input-dark"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.date"
              label="Date"
              type="date"
              variant="outlined"
              hide-details
              class="input-dark"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.time"
              label="Time"
              type="time"
              variant="outlined"
              hide-details
              class="input-dark"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="form.people"
              label="# of people"
              type="number"
              variant="outlined"
              hide-details
              class="input-dark"
            />
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="form.message"
              label="Message"
              variant="outlined"
              hide-details
              rows="4"
              class="input-dark"
            />
          </v-col>

          <v-col cols="12" class="text-center mt-4">
            <v-btn
              color="#cda45e"
              class="text-white px-10 py-5 book-btn"
              size="large"
              rounded
              type="submit"
            >
              Book a Table
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  people: "",
  message: "",
});

const formRef = ref(null);

const submitForm = () => {
  if (formRef.value?.validate()) {
    alert("Table booked successfully!");
  }
};
</script>

<style scoped>
.book-section {
  background-color: #0c0b09;
  color: white;
  padding: 100px 0;
}

/* Header aligned to left */
.section-header {
  text-align: left;
}

.section-subtitle {
  color: #cda45e;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 10px;
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

/* Dark inputs */
.input-dark .v-field {
  background-color: transparent !important;
  border: 1px solid #444 !important;
  color: white !important;
}

.input-dark input,
.input-dark textarea {
  color: white !important;
}

.input-dark .v-label {
  color: #aaa !important;
}

.input-dark .v-field__outline {
  border-color: #555 !important;
}

/* Button */
.book-btn {
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.3s;
}

.book-btn:hover {
  background: linear-gradient(135deg, #d4b15d, #cda45e);
}
</style>
