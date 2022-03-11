<template>
    <div>
        <b-navbar class="mt-2">
            <b-button-group size="lg">
                <b-button variant="info ">Admin</b-button>
                <b-button >Projects</b-button>
            </b-button-group>
            <!-- Right aligned nav items -->
            <b-button variant="info ml-auto" size="lg">
                Create Project
            </b-button>       
            <b-button variant=" ml-auto" size="lg border">
               <router-link :to="{name: 'FormLogin'}">Login</router-link>
            </b-button>
        </b-navbar>
    </div>
</template>
