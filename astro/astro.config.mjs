// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My Astro Site',
    components: { PageTitle: '/src/components/PageTitle.astro' },
    // customCss: ['src/styles/global.css'],
  }
  )],


});