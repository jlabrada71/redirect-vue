<template>
    <div class="flex h-96 w-96 bg-gray-100">
        <div class="bg-gray-800 w-6 flex items-center justify-center">
            <span class="text-white -rotate-90 whitespace-nowrap text-xs uppercase tracking-widest">Low urgency</span>
        </div>
        <div class="flex-1 flex flex-col">
            <div class="h-6 bg-gray-800 flex items-center justify-center text-white uppercase tracking-widest">High impact</div>
            <div class="flex-1 flex flex-col overflow-hidden">
                <div class="h-1/2 border-b-4 border-gray-200 grid grid-cols-2">
                    <div class="border-r-4 border-gray-200 overflow-auto">
                        <ul>
                            <li v-for="task in highImpactLowUrgency" :key="task.id" >
                                {{task.name}}
                            </li>
                        </ul>
                    </div>
                    <div class="border-l-4 border-gray-200 overflow-auto">
                        <ul>
                            <li v-for="task in highImpactHighUrgency" :key="task.id" >
                                {{task.name}}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="h-1/2 border-t-4 border-gray-200 grid grid-cols-2">
                    <div class="border-r-4 border-gray-200 overflow-auto">
                        <ul>
                            <li v-for="task in lowImpactLowUrgency" :key="task.id" >
                                {{task.name}}
                            </li>
                        </ul>
                    </div>
                    <div class="border-l-4 border-gray-200 overflow-auto">
                        <ul>
                            <li v-for="task in lowImpactHighUrgency" :key="task.id" >
                                {{task.name}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="h-6 bg-gray-800 flex items-center justify-center text-white whitespace-nowrap text-xs uppercase tracking-widest">Low impact</div>
        </div>
        <div class="bg-gray-800 w-6 flex items-center justify-center">
            <span class="text-white -rotate-90 whitespace-nowrap text-xs uppercase tracking-widest">High urgency</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed } from 'vue';
import type { Task } from './task.ts';

const props = defineProps({
    tasks: {
        type: Array as PropType<Task[]>,
        required: true,
    },
});

const highImpactHighUrgency = computed(() => props.tasks.filter((task) => task.urgency === 1 && task.impact === 1));
const lowImpactHighUrgency = computed(() => props.tasks.filter((task) => task.urgency === 1 && task.impact === 2));
const highImpactLowUrgency = computed(() => props.tasks.filter((task) => task.urgency === 2 && task.impact === 1));
const lowImpactLowUrgency = computed(() => props.tasks.filter((task) => task.urgency === 2 && task.impact === 2));

</script>