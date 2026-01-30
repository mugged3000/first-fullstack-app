<template>
  <section id="chefs" class="chefs-section">
    <v-container>
      <div class="section-header text-center">
        <h6 class="section-subtitle">Chefs</h6>
        <h2 class="section-title">Our Master Chefs</h2>
        <div class="divider"></div>
      </div>

      <v-row>
        <v-col
          v-for="(chef, idx) in chefs"
          :key="idx"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <div class="chef-card">
            <v-img :src="chef.photo" class="chef-img" aspect-ratio="1" cover></v-img>
            <div class="chef-info">
              <h4 class="chef-name">{{ chef.name }}</h4>
              <span class="chef-role">{{ chef.role }}</span>
              <div class="chef-socials">
                <a v-for="(link, key) in chef.social" :key="key" :href="link" target="_blank">
                  <v-icon size="20">{{ socialIcons[key] }}</v-icon>
                </a>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const socialIcons = {
  facebook: 'mdi-facebook',
  twitter: 'mdi-twitter',
  instagram: 'mdi-instagram',
  tiktok: 'mdi-music-note'
}

const chefs = [
 
  {
    name: "Amina Diallo",
    role: "Pastry Chef",
    photo:    "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com"
    }
  },
  {
    name: "Mustapha",
    role: "Head Chef",
    photo: "https://images.unsplash.com/photo-1673825333083-ada9f6c51f42?auto=format&fit=crop&w=800&q=80",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    }
  },
  {
    name: "Zahara Bello",
    role: "Sous Chef",
    photo: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com"
    }
  }
];
</script>

<style scoped>
.chefs-section {
  padding: 80px 0;
  background-color: #0c0b09;
}

.section-subtitle {
  color: #cda45e;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
}

.divider {
  width: 80px;
  height: 2px;
  background-color: #cda45e;
  margin: 0 auto 40px auto;
}

/* Chef Card */
.chef-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: white;
}

.chef-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(205, 164, 94, 0.3);
}

.chef-img {
  height: 300px;
  transition: transform 0.3s ease;
}

.chef-card:hover .chef-img {
  transform: scale(1.05);
}

.chef-info {
  background-color: #1a1814;
  color: #ffffff;
  padding: 20px;
  text-align: center;
}

.chef-name {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #cda45e;
}

.chef-role {
  font-style: italic;
  font-size: 0.9rem;
  color: #b0b0b0;
  display: block;
  margin-bottom: 10px;
}

.chef-socials {
  margin-top: 10px;
}

.chef-socials a {
  color: #cda45e;
  margin: 0 8px;
  transition: all 0.3s ease;
  display: inline-block;
}

.chef-socials a:hover {
  color: #ffffff;
  transform: translateY(-2px);
}
</style>