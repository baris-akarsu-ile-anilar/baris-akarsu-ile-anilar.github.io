<template>
  <svg
  class="icon"
  :class="name"
  >
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    name: {
      type: String,
      required: true
    }
  }

}
</script>