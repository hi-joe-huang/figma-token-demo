import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer';


// will register them on StyleDictionary object
// that is installed as a dependency of this package.
registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ['**/tokens.json'], // <-- make sure to have this match your token files!!!
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
}).extend(
  makeSdTailwindConfig({ type: 'all' })
)

sd.cleanAllPlatforms();
sd.buildAllPlatforms();