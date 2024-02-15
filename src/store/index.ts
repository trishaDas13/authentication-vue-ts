// src/store/index.ts
import { createPinia } from 'pinia'
import { useUserStore  } from './user';

export const pinia = createPinia();

// Install each module you create
pinia.use( useUserStore );
