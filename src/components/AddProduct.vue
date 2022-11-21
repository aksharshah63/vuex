<template>
    <div>
      <form @submit.prevent="onsubmit">
        <input type="text" placeholder="Add Product" v-model="title"/>
        <input type="text" placeholder="Add Price" v-model="price"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </template>
  
  <script>
import { mapActions } from 'vuex';

  export default {
    name: 'AddProduct',
    data(){
        return {
            title:"",
            price:""
        }
    },
    methods:
    {   
        ...mapActions(["addproduct"]),
        onsubmit()
        {
            this.addproduct({
                title: this.title,
                price: this.price
            })
            this.title="",
            this.price=""
        }
    }
    
  }
  </script>