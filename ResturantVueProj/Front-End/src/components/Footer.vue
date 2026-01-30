<template>
  <v-footer color="grey-darken-4" class="footer">
    <v-container class="pa-6 pa-md-10 container">
      <!-- Main Content -->
      <v-row class="mb-6 email-expand" dense>
        <!-- Brand & Contact Info -->
        <v-col cols="12" md="3" class="footer-brand">
          <h3 class="brand-name mb-4">Restaurantly</h3>
          <div class="contact-info mb-4">
            <p class="text-body-2 mb-2">A10 8 Adam Street<br />New York, NY 535022</p>
            <div class="contact-item d-flex align-center mb-2">
              <v-icon color="#c9ab81" size="18" class="mr-2">mdi-phone</v-icon>
              <span class="text-body-2">+1 5589 55488 55</span>
            </div>
            <div class="contact-item d-flex align-center mb-2">
              <v-icon color="#c9ab81" size="18" class="mr-2">mdi-email</v-icon>
              <span class="text-body-2">info@example.com</span>
            </div>
          </div>
          
          <div class="social-icons">
            <v-btn icon variant="flat" color="grey-darken-3" size="small" class="mr-2">
              <v-icon color="white" size="20">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon variant="flat" color="grey-darken-3" size="small" class="mr-2">
              <v-icon color="white" size="20">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon variant="flat" color="grey-darken-3" size="small">
              <v-icon color="white" size="20">mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Useful Links -->
        <v-col cols="12" md="3">
          <h4 class="section-title mb-4">Useful Links</h4>
          <v-list density="compact" class="pa-0 transparent">
            <v-list-item v-for="(link, index) in usefulLinks" :key="index" class="pa-0 mb-1">
              <template v-slot:prepend>
                <v-icon color="#c9ab81" size="14" class="mr-2">mdi-chevron-right</v-icon>
              </template>
              <v-list-item-title>
                <a :href="link.href" class="footer-link">{{ link.text }}</a>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Our Services -->
        <v-col cols="12" md="3">
          <h4 class="section-title mb-4">Our Services</h4>
          <v-list density="compact" class="pa-0 transparent">
            <v-list-item v-for="(service, index) in services" :key="index" class="pa-0 mb-1">
              <template v-slot:prepend>
                <v-icon color="#c9ab81" size="14" class="mr-2">mdi-chevron-right</v-icon>
              </template>
              <v-list-item-title>
                <a :href="service.href" class="footer-link">{{ service.text }}</a>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Newsletter -->
        <v-col cols="12" md="3">
          <h4 class="section-title mb-4">Our Newsletter</h4>
          <p class="text-body-2 mb-4">Subscribe to our newsletter and receive the latest news about our products and services!</p>
         <v-form @submit.prevent="subscribe">
  <v-row class="d-flex" dense>
    <!-- Email input -->
    <v-col cols="8" class="pa-0">
      <v-text-field
        v-model="email"
        placeholder="Your email"
        variant="outlined"
        density="comfortable"
        hide-details
        style="background-color:#333; color:#fff; height:50px;  width:100%;"
        class="flex-grow-1"
      ></v-text-field>
    </v-col>

    <!-- Subscribe button -->
    <v-col cols="4" class="pa-0">
      <v-btn
        color="#c9ab81"
        type="submit"
        class="subscribe-btn"
        style="height:50px;  border-radius:0 6px 6px 0; font-weight:600;"
      >
        Subscribe
      </v-btn>
    </v-col>
  </v-row>
</v-form>

        </v-col>
      </v-row>

      <!-- Copyright -->
      <v-row class="copyright-row" dense>
        <v-col cols="12" class="text-center pa-0">
          <div class="copyright">
            © Copyright <a href="#" class="copyright-link">Restaurantly</a>. All Rights Reserved<br />
            Designed by <a href="#" class="copyright-link">Focus Webtech</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      usefulLinks: [
        { text: 'Home', href: '#' },
        { text: 'About us', href: '#' },
        { text: 'Services', href: '#' },
        { text: 'Terms of service', href: '#' },
        { text: 'Privacy policy', href: '#' },
      ],
      services: [
        { text: 'Web Design', href: '#' },
        { text: 'Web Development', href: '#' },
        { text: 'Product Management', href: '#' },
        { text: 'Marketing', href: '#' },
        { text: 'Graphic Design', href: '#' },
      ],
    };
  },
  methods: {
    subscribe() {
      if (this.email) {
        alert(`Thank you for subscribing with: ${this.email}`);
        this.email = '';
      }
    },
  },
};
</script>

<style scoped>
.footer {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
/* .container{
  width: 100%;
} */
.brand-name {
  color: #c9ab81;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
}

.contact-info {
  color: #ccc;
}

.contact-item span {
  color: #ddd;
}

.social-icons .v-btn {
  transition: all 0.3s ease;
  border-radius: 50%;
}

.social-icons .v-btn:hover {
  background-color: #c9ab81 !important;
  transform: translateY(-3px);
}

.section-title {
  color: #c9ab81;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 8px;
  border-bottom: 2px solid #333;
}

.footer-link {
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 14px;
  display: block;
}

.footer-link:hover {
  color: #c9ab81;
  padding-left: 5px;
}

.v-list-item {
  min-height: 32px !important;
}

.transparent {
  background-color: transparent !important;
}

.newsletter-form{
  width: 100%;
}

.newsletter-form .v-text-field :deep(.v-field) {
  border-radius: 4px 0 0 4px;
}

.newsletter-form .v-text-field :deep(.v-field__input) {
  color: #fff;
  padding: 8px 12px;
}

.subscribe-btn {
  border-radius: 0 4px 4px 0 !important;
  font-weight: 600;
  color: #000;
  text-transform: none;
  min-width: 100px;
}

.copyright-row {
  border-top: 1px solid #333;
  padding-top: 20px;
  margin-top: 10px;
}

.copyright {
  color: #aaa;
  font-size: 14px;
  line-height: 1.6;
}

.copyright-link {
  color: #c9ab81;
  text-decoration: none;
  font-weight: 600;
}

.copyright-link:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .footer .container {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .footer-brand {
    margin-bottom: 30px;
  }
  
  .section-title {
    margin-top: 20px;
  }
}

@media (max-width: 600px) {
  .newsletter-form .d-flex {
    flex-direction: column;
  }
  
  .newsletter-form .v-text-field {
    margin-right: 0 !important;
    margin-bottom: 10px;
  }
  
  .subscribe-btn {
    border-radius: 4px !important;
    width: 100%;
  }
}
</style>