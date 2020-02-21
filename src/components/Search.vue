<template>
    <div>
        <ion-searchbar placeholder="exemple : Paris" :value="input" @input="input = $event.target.value" debounce="500" @keyup.enter="submit"></ion-searchbar>
        <ion-button expand="block" color="dark" @click="submit">Search</ion-button>
    </div>
</template>
<style>
    ion-button {
        padding-left: 12px;
        padding-right: 12px;
        font-weight: bolder;
    }
</style>
<script>
    export default {
        name: "search",
        data: function () {
            return {
                input: null
            }
        },
        methods: {
            submit() {
                this.$emit('submit', this.input)
                this.input = null
            }
        }
    };
</script>