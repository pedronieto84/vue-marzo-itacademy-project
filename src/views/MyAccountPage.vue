<template>
    <div class="container">
        <account-page-nav @changeView="changeView" />
        {{ currentView }}
    </div>
</template>

<script>
import AccountPageNav from '@/components/AccountPageNav.vue'

export default {
    name: 'MyAccountPage',
    components: {
        AccountPageNav
    },
    data() {
        return {
            currentView: 'data'
        }
    },
    methods: {
        changeView(view) {
            view === 'My Data' ? this.currentView = 'data' : this.currentView = 'projects'
        }
    }
}
</script>

<style>

</style>