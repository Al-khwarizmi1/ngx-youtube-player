import license from 'rollup-plugin-license';

const path = require('path');

export default {
  output: {
    format: 'es',
  },
  plugins: [
    license({
      banner: {
        file: path.join(__dirname, 'license-banner.txt'),
        encoding: 'utf-8',
      }
    })
  ],
  onwarn: () => { return }
}