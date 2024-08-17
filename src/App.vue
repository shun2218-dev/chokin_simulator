<script setup lang="ts">
  import { UNITS } from '@/const';
  import { afterUnitN } from '@/modules/afterUnitN/afterUnitN';
  import { calculatePerMonth } from '@/modules/calculatePerMonth/calculatePerMonth';
  import { Unit } from '@/types';
  import dayjs from 'dayjs';
  import { computed, ref, watch } from 'vue';

  const duration = ref<number>(1);
  const targetAmount = ref<number>(10000);
  const unit = ref<Unit>('day');
  const output = ref<number | null>(null);
  const dayOfOutput = computed<number | null>(() => {
    if (output.value === null) return null;
    return Math.round((output.value / afterUnitN(1, 'day')) * 10) / 10;
  });
  const weekOfOutput = computed<number | null>(() => {
    if (output.value === null) return null;
    return Math.round((output.value / (afterUnitN(1, 'month') / afterUnitN(1, 'week'))) * 10) / 10;
  });
  const monthOfOutput = computed<number | null>(() => {
    if (output.value === null) return null;
    return Math.round(output.value * 10) / 10;
  });
  const yearOfOutput = computed<number | null>(() => {
    if (output.value === null) return null;
    return Math.round(output.value * (afterUnitN(1, 'year') / afterUnitN(1, 'month')) * 10) / 10;
  });

  const calculate = (): number => {
    try {
      const numberOfDays = afterUnitN(duration.value, unit.value);
      return calculatePerMonth(numberOfDays, targetAmount.value);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
      }
      return 0;
    }
  };

  const handleSubmit = () => {
    const result = calculate();
    if (result < 0) {
      return;
    }
    output.value = result;
  };

  // TODO: Temporary logic for graphs. I'll sort it out later.
  watch(output, () => {
    if (dayOfOutput.value !== null) {
      const today = dayjs();
      const year = 2;
      const afterYear = dayjs().add(year, 'year');
      const max = afterYear.diff(today, 'month');
      console.log(max, 'max');
      const perDay = dayOfOutput.value;
      for (let i = 1; i < max + 1; i++) {
        const iMonthLaterDays = today.add(afterUnitN(i, 'month'), 'day');
        const countFromToday = iMonthLaterDays.diff(today, 'day');
        console.log(
          `${i} month later(${countFromToday} day later): %s`,
          Math.round(perDay * countFromToday * 10) / 10,
        );
      }
    }
  });
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <select name="unit" v-model="unit">
      <option v-for="u in UNITS" :value="u">{{ u.toUpperCase() }}</option>
    </select>
    <input type="number" name="duration" min="1" v-model="duration" />
    <input type="number" name="targetAmount" min="10000" v-model="targetAmount" />
    <button>calculate</button>
  </form>
  <p v-if="output">day: {{ dayOfOutput }}</p>
  <p v-if="output">week: {{ weekOfOutput }}</p>
  <p v-if="output">month: {{ monthOfOutput }}</p>
  <p v-if="output">year: {{ yearOfOutput }}</p>
</template>

<style scoped></style>
