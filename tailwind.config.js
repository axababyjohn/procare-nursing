/** @type {import('tailwindcss').Config} */
// Semantic colour tokens come from CSS custom properties declared in src/input.css
// (`:root` for light, `.dark` for dark), so a component uses one class (bg-surface)
// instead of paired `dark:` utilities.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  // Dark mode via a `dark` class on <html> (see the no-flash script in index.html).
  darkMode: 'class',
  // Scan every file that can contain Tailwind classes so the production build is purged
  // down to only what we use (keeps dist/styles.css tiny for the Lighthouse budget).
  content: [
    './index.html',
    './privacy.html',
    './404.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        page: token('page'),
        tint: token('tint'),
        surface: token('surface'),
        band: token('band'),
        footer: token('footer'),
        line: token('line'),
        fg: { DEFAULT: token('fg'), body: token('fg-body') },
        muted: token('muted'),
        brand: {
          DEFAULT: token('brand'),
          strong: token('brand-strong'),
          soft: token('brand-soft'),
        },
        'on-brand': token('on-brand'),
        'field-line': token('field-line'),
        danger: { DEFAULT: token('danger'), soft: token('danger-soft') },
        wa: '#097C3E',
        // Text on the dark band / footer surfaces (same in both themes).
        'band-muted': '#B7D3CF',
        'band-fg': '#E6F4F2',
        'band-accent': '#5EEAD4',
        teal: {
          50: '#F0FAF8',
          100: '#D9F1EE',
          200: '#A7E3DB',
          300: '#2DD4BF',
          400: '#14B8A6',
          500: '#0B8276',
          600: '#0F766E',
          700: '#115E59',
        },
        // Legacy aliases: src/main.js emits `text-ink-900 dark:text-cloud-50`.
        ink: { 700: '#3F5755', 900: '#10211F' },
        cloud: { 50: '#E6F4F2', 200: '#9BBDB9' },
      },
      // Fraunces for headings, Inter for body/UI. Font files are self-hosted and preloaded.
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // 17px base body size (audience skews older).
      fontSize: {
        base: ['1.0625rem', { lineHeight: '1.65' }],
      },
      borderRadius: {
        btn: '10px',
        '2xl': '1rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        card: '0 1px 2px rgb(16 33 31 / .05), 0 10px 28px -14px rgb(16 33 31 / .16)',
        'card-hover': '0 1px 2px rgb(16 33 31 / .06), 0 18px 40px -16px rgb(16 33 31 / .24)',
        float: '0 18px 40px -12px rgb(16 33 31 / .28)',
      },
    },
  },
  plugins: [],
};
