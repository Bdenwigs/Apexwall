<template>
  <div class="search-results">
    <div v-if="results.length > 0">
      <h4>Search Results:</h4>
      <ul>
        <li v-for="result in results" :key="result.item.id">
          <router-link :to="result.item.path">{{ result.item.title }}</router-link>
          <p>{{ result.item.description }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.search-results {
  margin-top: 20px;
}
</style>
