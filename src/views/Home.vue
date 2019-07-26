<template>
  <div class="home">
    <Avatar msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Avatar from '@/components/Avatar';

export default {
  name: 'home',
  components: {
    Avatar
  }
}
</script>
