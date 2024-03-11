<script setup lang="ts">
import TaskPriorities from '@/components/TaskPriorities.vue';
import { ref } from 'vue';
import type { Task } from '@/components/task.ts';

const tasks:Task[] =  [
      { id: 1, name: 'Urgent and Important', description: 'Some description', urgency: 1, impact: 1},
      { id: 2, name: 'Urgent and not important', description: 'Some description', urgency: 1, impact: 2},
      { id: 3, name: 'Not urgent but Important' , description: 'Some description', urgency: 2, impact: 1 },
      { id: 4, name: 'Not urgent and not important' , description: 'Some description', urgency: 2, impact: 2 },
      { id: 5, name: 'Not urgent and not important 2' , description: 'Some description', urgency: 2, impact: 2 },
    ];

const tasksRef = ref(tasks);

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      
    </div>
  </header>

  <main>
    <H1>This is the popup</H1>
  </main>
</template>


