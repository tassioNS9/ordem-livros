// src/store.js
import { writable } from "svelte/store";

// Criando um estado global chamado `tema`
export const menuAberto = writable(false);

export function toggleMenu() {
    console.log(menuAberto);
    menuAberto.update(menuAberto => !menuAberto);
}