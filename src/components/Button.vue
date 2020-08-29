<template>
 <button   @click='click'>{{text}}</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['text','class','click']
});
</script>