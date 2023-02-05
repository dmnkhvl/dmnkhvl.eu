<template>
  <form>
    <select
      class="appearance-none bg-transparent text-white/40"
      v-model="$i18n.locale"
    >
      <option value="en" class="">en</option>
      <option value="sk">sk</option>
    </select>
  </form>
</template>
