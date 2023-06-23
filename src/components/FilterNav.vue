<template>
  <nav class="filter-nav">
    <button 
      @click="updateFilter('all')" 
      :class="{active:current=='all'}"
    >View all</button>
    <button 
      @click="updateFilter('completed')"
      :class="{active:current=='completed'}"
    >Completed</button>
    <button 
      @click="updateFilter('ongoing')"
      :class="{active:current=='ongoing'}"
    >In Process</button>
  </nav>
</template>

<script>
export default {
    props:['current'],
  methods: {

    updateFilter(by){
        this.$emit('filterChanger',by)
        
    }
    
 
  }
}
</script>

<style>
  .filter-nav button {
    background: none;
    border: none;
    color: #fff;
    outline: none;
    font-size: 16px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    padding: 5px;
  }
  .filter-nav button.active {
    color: #555;
  }
 .filter-nav button.active{
    color: blue;
  }
</style>