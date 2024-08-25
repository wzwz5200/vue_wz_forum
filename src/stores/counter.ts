import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Datum {
  created_at?: string;
  desc?: string;
  id?: number;
  title?: string;
  updated_at?: string;
  user_img?: string;
  [property: string]: any;
}

export interface Tag {
  tag?: string;
  [property: string]: any;
}

interface ListItem {
  content: string;
  created_at: string;
  desc: string;
  id: number;
  img: string;
  title: string;
  updated_at: string;

}


export const useCounterStore = defineStore('counter', () => {

  const lists = ref<Datum[]>([])
  

  const tips = ref<Tag[]>([])
  const txt = ref<Datum[]>([])
  const thems = ref('')
  const allpage = ref('')
  

const listsz = ref<ListItem[]>([])


  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment,lists,tips,txt,thems ,allpage,listsz}
})
