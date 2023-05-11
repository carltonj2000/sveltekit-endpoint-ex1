import Counter from './counter.svelte';

export async function load() {
  return {
    title: 'Universal load function',
    component: Counter
  };
}
