<template>
  <section id="menu" class="menu-section">
    <v-container>
      <!-- Header -->
      <div class="menu-header text-center mb-12">
        <div class="restaurant-name">RESTAURANTLY</div>
        <div class="menu-title">TASTY MENU</div>
        <div class="menu-subtitle">Fine Dining Experience</div>
        <div class="header-divider">
          <div class="divider-line"></div>
          <v-icon color="#cda45e" size="24" class="mx-4">mdi-chef-hat</v-icon>
          <div class="divider-line"></div>
        </div>
      </div>

      <!-- Menu Categories -->
      <v-row class="mb-10">
        <v-col cols="12">
          <div class="category-tabs">
            <v-btn
              v-for="category in categories"
              :key="category.id"
              :class="['category-tab', { 'active': selectedCategory === category.id }]"
              @click="selectedCategory = category.id"
              variant="text"
            >
              <v-icon size="20" class="mr-2">{{ category.icon }}</v-icon>
              {{ category.name }}
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Menu Items -->
      <v-row>
        <v-col
          v-for="item in filteredMenu"
          :key="item.id"
          cols="12"
          class="menu-item-wrapper"
        >
          <v-card class="menu-item-card">
            <v-row align="center" no-gutters>
              <v-col cols="9">
                <div class="menu-item-content">
                  <div class="menu-item-header">
                    <h3 class="menu-item-title">{{ item.name }}</h3>
                    <div class="price-divider"></div>
                    <div class="menu-item-price">${{ item.price }}</div>
                  </div>
                  <p class="menu-item-description">{{ item.description }}</p>
                  <div class="menu-item-tags">
                    <v-chip
                      v-for="tag in item.tags"
                      :key="tag"
                      class="tag-chip"
                      size="small"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </div>
              </v-col>
              <v-col cols="3">
                <div class="menu-item-image-wrapper">
                  <v-img
                    :src="item.image"
                    height="140"
                    cover
                    class="menu-img"
                  >
                    <template v-slot:placeholder>
                      <div class="image-placeholder">
                        <v-icon color="#cda45e" size="40">mdi-food</v-icon>
                      </div>
                    </template>
                  </v-img>
                  <div class="image-overlay">
                    <v-btn
                      icon
                      variant="text"
                      color="white"
                      class="view-btn"
                    >
                      <v-icon size="24">mdi-magnify</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
            <div class="menu-item-decoration"></div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Menu Footer -->
      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <div class="menu-footer">
            <p class="footer-text">
              * All dishes prepared with the finest ingredients
            </p>
            <p class="footer-text">
              Please inform us of any dietary requirements
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('starters')

const categories = [
  { id: 'starters', name: 'Starters', icon: 'mdi-appetizer' },
  { id: 'mains', name: 'Main Courses', icon: 'mdi-food-steak' },
  { id: 'desserts', name: 'Desserts', icon: 'mdi-cupcake' },
  { id: 'drinks', name: 'Beverages', icon: 'mdi-glass-wine' }
]

const menuItems = [
  {
    id: 1,
    name: 'Artisan Bruschetta',
    description: 'House-made sourdough grilled to perfection, rubbed with fresh garlic, extra virgin olive oil, heirloom tomatoes, and basil',
    price: '14.50',
    category: 'starters',
    tags: ['Vegetarian', 'Gluten-Free Option'],
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Classic Caesar Salad',
    description: 'Crisp romaine hearts, house-made Caesar dressing, parmesan crisps, artisan croutons, and 24-month aged Parmigiano-Reggiano',
    price: '18.00',
    category: 'starters',
    tags: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Atlantic Salmon',
    description: 'Line-caught salmon, lemon beurre blanc, seasonal vegetables, and herb-infused quinoa',
    price: '36.00',
    category: 'mains',
    tags: ['Pescatarian', 'Healthy'],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Prime Filet Mignon',
    description: '8oz grass-fed beef tenderloin, red wine reduction, truffle mashed potatoes, and grilled asparagus',
    price: '42.00',
    category: 'mains',
    tags: ['Signature', 'GF'],
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    name: 'Traditional Tiramisu',
    description: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa powder, and amaretto essence',
    price: '12.00',
    category: 'desserts',
    tags: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 6,
    name: 'Chocolate Soufflé',
    description: 'Warm chocolate soufflé with a molten Valrhona chocolate center, vanilla bean ice cream',
    price: '14.00',
    category: 'desserts',
    tags: ['Vegetarian', 'Signature'],
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
]

const filteredMenu = computed(() => {
  return menuItems.filter(item => item.category === selectedCategory.value)
})
</script>

<style scoped>
.menu-section {
  padding: 120px 0;
  background: linear-gradient(rgba(15, 15, 15, 0.95), rgba(15, 15, 15, 0.95)),
              url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.menu-header {
  color: white;
}

.restaurant-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  letter-spacing: 8px;
  color: #cda45e;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.menu-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
}

.menu-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: #b0b0b0;
  margin-bottom: 20px;
  font-style: italic;
}

.header-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.divider-line {
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #cda45e, transparent);
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  border-bottom: 1px solid rgba(205, 164, 94, 0.2);
  padding-bottom: 20px;
}

.category-tab {
  color: #b0b0b0 !important;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem !important;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 1px;
  padding: 12px 24px;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.category-tab.active {
  color: #cda45e !important;
  border-bottom: 2px solid #cda45e;
}

.category-tab:hover {
  color: #cda45e !important;
}

.menu-item-wrapper {
  margin-bottom: 16px;
}

.menu-item-card {
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(205, 164, 94, 0.1);
  border-radius: 2px;
  position: relative;
  overflow: visible;
  transition: all 0.4s ease;
}

.menu-item-card:hover {
  border-color: rgba(205, 164, 94, 0.3);
  transform: translateY(-2px);
}

.menu-item-content {
  padding: 30px;
}

.menu-item-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 16px;
}

.menu-item-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #cda45e;
  white-space: nowrap;
}

.price-divider {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(205, 164, 94, 0.3), transparent);
}

.menu-item-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
}

.menu-item-description {
  color: #b0b0b0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 12px;
  font-family: 'Cormorant Garamond', serif;
}

.menu-item-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag-chip {
  background: rgba(205, 164, 94, 0.1) !important;
  color: #cda45e !important;
  border: 1px solid rgba(205, 164, 94, 0.3);
  font-size: 0.7rem;
  height: 24px;
}

.menu-item-image-wrapper {
  position: relative;
  padding: 20px;
  overflow: hidden;
}

.menu-img {
  border-radius: 1px;
  transition: all 0.4s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(205, 164, 94, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 0;
}

.menu-item-image-wrapper:hover .image-overlay {
  background: rgba(205, 164, 94, 0.1);
  opacity: 1;
}

.menu-item-image-wrapper:hover .menu-img {
  transform: scale(1.05);
}

.view-btn {
  background: rgba(205, 164, 94, 0.9) !important;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
}

.menu-item-decoration {
  position: absolute;
  bottom: -1px;
  left: 30px;
  right: 30px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(205, 164, 94, 0.3), transparent);
}

.menu-footer {
  border-top: 1px solid rgba(205, 164, 94, 0.2);
  padding-top: 30px;
}

.footer-text {
  color: #888;
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 4px;
  font-family: 'Cormorant Garamond', serif;
}

@media (max-width: 960px) {
  .menu-title {
    font-size: 2.5rem;
  }
  
  .category-tabs {
    flex-wrap: wrap;
  }
  
  .menu-item-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .price-divider {
    display: none;
  }
  
  .menu-item-content {
    padding: 20px;
  }
  
  .menu-item-image-wrapper {
    padding: 15px;
  }
}
</style>