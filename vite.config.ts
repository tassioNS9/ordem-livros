import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'es2020', // ou qualquer versão que você precise
		outDir: 'build',  // Certifique-se de que a saída esteja configurada para a pasta 'build', para compatibilidade com o Netlify
		sourcemap: true,  // Se desejar gerar arquivos de mapa de fontes para depuração
	  },
	  server: {
		open: true,  // Para abrir o navegador automaticamente quando iniciar o servidor de desenvolvimento
	  },
});
