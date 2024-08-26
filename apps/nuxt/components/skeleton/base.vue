<script setup>
import Skeleton from '@/shared/skeleton.vue'
</script>

<template>
    <div class="space-y-4">
        <Skeleton class="h-44 w-64" />
        <div class="flex items-center space-x-4">
            <Skeleton class="size-10 rounded-full" />
            <div class="space-y-2">
                <Skeleton class="h-4 w-44" />
                <Skeleton class="h-4 w-36" />
            </div>
        </div>
    </div>
</template>
