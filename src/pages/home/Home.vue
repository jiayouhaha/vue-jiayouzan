<template>
    <div class="app-container">
        <bind-mobile></bind-mobile>
    </div>
</template>

<script>
    import bindMobile from '../../components/bind-mobile.vue';

    export default {
        name: 'home',
        components: {
            'bind-mobile': bindMobile,
        },
        data: function () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .app-container{
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
    }
</style>
