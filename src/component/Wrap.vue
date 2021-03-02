<template>
  <div id="app">
    <slot />
    <navbar />
  </div>
</template>
<script>

import Navbar from '../component/Navbar'
export default {
  name: 'Wrap',
  components: { Navbar }
}
</script>
