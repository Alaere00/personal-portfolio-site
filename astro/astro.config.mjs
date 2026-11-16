// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "",
    components: { PageTitle: '/src/components/PageTitle.astro', Search: "/src/components/Empty.astro", ThemeSelect: "/src/components/Empty.astro", SocialIcons: "/src/components/Empty.astro" },
  }
  )],


});