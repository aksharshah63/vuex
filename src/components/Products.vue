<template>
  <div>
    <ul class="product-listing">
      <li v-for="product in allproducts" :key="product.id">
        {{product.title}} | {{product.price}}
        <button @click="deleteproduct(product.id)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  name: 'Products',
  methods: {
    ...mapActions(["getproducts","deleteproduct"]),
  },
  computed : mapGetters(["allproducts"]),
  created() {
    this.getproducts();
  },
  
}
</script>