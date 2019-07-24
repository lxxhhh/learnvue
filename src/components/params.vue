<template>
<div>
    <p>{{msg}}</p>
    <p>name:{{ $route.name }}</p>
    <p>newsId:{{ $route.params.newsId }}</p>
    <p>newsTitle:{{ $route.params.newsTitle }}</p>
</div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'params page'
        }
    },
}
</script>
<style scoped>

</style>
