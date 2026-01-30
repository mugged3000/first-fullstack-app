<template>
  <section id="specials" class="specials-section">
    <div class="container">
      <div class="section-header">
        <h2>Check Our Specials</h2>
        <p>Discover our chef's special creations that change seasonally</p>
      </div>

      <div class="specials-content">
        <div class="tabs-sidebar">
          <div 
            v-for="(special, index) in specials" 
            :key="index"
            class="tab-item"
            :class="{ active: activeSpecial === index }"
            @click="setActiveSpecial(index)"
          >
            <span class="tab-number">0{{ index + 1 }}</span>
            <span class="tab-title">{{ special.name }}</span>
          </div>
        </div>

        <div class="content-area">
          <transition name="fade-slide" mode="out-in">
            <div class="special-details" :key="activeSpecial">
              <div class="text-content">
                <h3>{{ currentSpecial.title }}</h3>
                <p class="description">{{ currentSpecial.description }}</p>
                <p class="full-description">{{ currentSpecial.fullDescription }}</p>
                <div class="price-tag">
                  <span class="price">${{ currentSpecial.price }}</span>
                  <span class="serving">{{ currentSpecial.serving }}</span>
                </div>
              </div>
              <div class="image-content">
                <div class="image-container">
                  <img 
                    :src="currentSpecial.image" 
                    :alt="currentSpecial.name"
                    class="food-image"
                  />
                  <div class="image-overlay">
                    <div class="rating">
                      <span class="stars">★★★★★</span>
                      <span class="rating-text">Chef's Choice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeSpecial = ref(0)

const specials = ref([
  {
    name: 'Truffle Pasta',
    title: 'Black Truffle Fettuccine',
    description: 'Handmade pasta with premium black truffle sauce',
    fullDescription: 'Our signature handmade fettuccine tossed in a creamy black truffle sauce with wild mushrooms, parmesan cheese, and fresh herbs. A luxurious dish that showcases the earthy flavors of premium Italian truffles.',
    price: '28.95',
    serving: 'Serves 1-2',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJ1ZmZsZSUyMHBhc3RhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Lobster Thermidor',
    title: 'Classic Lobster Thermidor',
    description: 'Fresh Maine lobster in rich cream sauce',
    fullDescription: 'Fresh Maine lobster baked in a rich cream sauce with brandy, wild mushrooms, and gruyere cheese. Served with seasonal vegetables and herb-roasted potatoes. A timeless French classic reimagined.',
    price: '42.00',
    serving: 'Serves 1',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9ic3RlciUyMGRpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Wagyu Beef',
    title: 'A5 Japanese Wagyu',
    description: 'Premium melt-in-your-mouth wagyu beef',
    fullDescription: 'Melt-in-your-mouth A5 Japanese wagyu beef, perfectly seared and served with truffle mashed potatoes, grilled asparagus, and red wine reduction. An unforgettable culinary experience.',
    price: '65.00',
    serving: 'Serves 1',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FneXUlMjBiZWVmfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Seafood Platter',
    title: 'Ocean Fresh Seafood Tower',
    description: 'Premium selection of fresh ocean delicacies',
    fullDescription: 'A magnificent tower featuring fresh oysters, lobster, king crab, shrimp cocktail, and ceviche. Served with house-made sauces and lemon wedges. Perfect for sharing.',
    price: '85.00',
    serving: 'Serves 2-3',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhZm9vZCUyMHBsYXR0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Chocolate Soufflé',
    title: 'Decadent Chocolate Soufflé',
    description: 'Warm chocolate soufflé with molten center',
    fullDescription: 'Warm, airy chocolate soufflé with a rich molten center, served with vanilla bean ice cream and fresh seasonal berries. The perfect grand finale to your dining experience.',
    price: '14.00',
    serving: 'Serves 1',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwc291ZmZsw6l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80'
  }
])

const currentSpecial = computed(() => specials.value[activeSpecial.value])

const setActiveSpecial = (index) => {
  activeSpecial.value = index
}
</script>

<style scoped>
.specials-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
}

.section-header p {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.specials-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 50px;
  align-items: start;
}

.tabs-sidebar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tab-item {
  display: flex;
  align-items: center;
  padding: 20px 25px;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.tab-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: #cda45e;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.tab-item.active::before {
  transform: scaleY(1);
}

.tab-item.active {
  border-color: #cda45e;
  background: linear-gradient(135deg, #fff 0%, #fefaf0 100%);
  transform: translateX(10px);
}

.tab-item:hover:not(.active) {
  border-color: rgba(205, 164, 94, 0.3);
  transform: translateX(5px);
}

.tab-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #cda45e;
  margin-right: 15px;
  font-family: 'Playfair Display', serif;
}

.tab-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  transition: color 0.3s ease;
}

.tab-item.active .tab-title {
  color: #cda45e;
}

.content-area {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}

.special-details {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  align-items: start;
}

.text-content h3 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
}

.text-content .description {
  font-size: 1.3rem;
  color: #cda45e;
  font-style: italic;
  margin-bottom: 20px;
  font-weight: 500;
}

.text-content .full-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #5d6d7e;
  margin-bottom: 30px;
}

.price-tag {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  border-top: 2px solid #ecf0f1;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: #cda45e;
  font-family: 'Playfair Display', serif;
}

.serving {
  font-size: 1rem;
  color: #7f8c8d;
  background: #ecf0f1;
  padding: 5px 12px;
  border-radius: 20px;
  font-weight: 500;
}

.image-content {
  position: relative;
}

.image-container {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.image-container:hover {
  transform: translateY(-5px);
}

.food-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 20px;
  color: white;
}

.rating {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stars {
  color: #f1c40f;
  font-size: 1.2rem;
}

.rating-text {
  font-size: 0.9rem;
  font-weight: 500;
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .specials-content {
    grid-template-columns: 250px 1fr;
    gap: 30px;
  }
  
  .special-details {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .image-content {
    order: -1;
  }
  
  .food-image {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .specials-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .tabs-sidebar {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 10px;
  }
  
  .tab-item {
    min-width: 200px;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
  }
  
  .content-area {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .specials-section {
    padding: 60px 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .text-content h3 {
    font-size: 1.8rem;
  }
  
  .price {
    font-size: 1.5rem;
  }
}
</style>