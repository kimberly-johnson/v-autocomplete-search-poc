<template>
  <v-autocomplete
    :items="pokemon"
    item-title="name"
    placeholder="Search pokemon"
    v-model="selected"
    @update:search="searchPokemon"
    no-filter
    no-data-text="Start typing to find a pokemon"
    clearable
    menu-icon="false"
  ></v-autocomplete>
  <div>{{ selected }}</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
const pokemon = ref([]);
const selected = ref('');

const searchPokemon = (newSearchTerm) => {
  axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
    pokemon.value = response.data.results.map((poke) => poke.name).filter((pokemon) => pokemon.includes(newSearchTerm));
  });
};
</script>
