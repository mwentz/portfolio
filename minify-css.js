import { transform } from 'lightningcss';
import { readFileSync, writeFileSync } from 'fs';

const { code } = transform({
  filename: 'styles.css',
  code: readFileSync('styles.css'),
  minify: true,
});

writeFileSync('styles.min.css', code);
