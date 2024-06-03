// Importa funções utilitárias do módulo 'url' do Node.js
import { fileURLToPath, URL } from 'node:url';

// Importa a função 'defineConfig' do Vite para definir a configuração do projeto
import { defineConfig } from 'vite';

// Importa o plugin do Vue.js para Vite, permitindo a integração do Vue com Vite
import vue from '@vitejs/plugin-vue';

// Exporta a configuração do Vite
export default defineConfig({
  // Seção de plugins, adicionando o plugin Vue para suporte a arquivos .vue
  plugins: [
    vue(), // Plugin Vue.js
  ],
  // Configurações de resolução de módulos
  resolve: {
    // Definição de alias para facilitar as importações
    alias: {
      // '@' será um atalho para o diretório './src'
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
