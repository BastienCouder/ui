  <script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps({
    orientation: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal', 'vertical'].includes(String(value)),
    },
    className: {
      type: String,
      default: '',
    },
  });
  
  const separatorClass = computed(() => {
    const base = 'bg-border';
    const orientationClass =
      props.orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]';
    return `${base} ${orientationClass} ${props.className}`;
  });
  </script>

  <template>
    <div :class="separatorClass" v-bind="$attrs"></div>
  </template>