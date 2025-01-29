// src/store.js
import { writable } from "svelte/store";

// Criando um estado global chamado `tema`
export const menuAberto = writable(false);

export function toggleMenu() {
    menuAberto.update(valor => !valor);
}