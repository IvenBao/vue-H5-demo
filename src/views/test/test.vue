<!-- demo项目 -->
<template>
    <div id="test">
        <router-link to="/home">home</router-link>
        <router-link to="/login">login</router-link>
        <router-link to="/bind-mobile">bindMobile</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    components: {
    },

    computed: {},

    mounted() {
    },

    methods: {}
}

</script>
<style lang='scss' scoped>
#test {
  div {
    color: red;
    font-size: 48px;
  }
}
</style>
