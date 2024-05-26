// NOTE:
// You will get `.js` import auto-completions when you change `module: esnext` to `module: preserve` in the `tsconfig.json`.
// Then in this file change the import by removing /mod-1 and type the / again to get auto-completions for all files in the mod folder.

import { mod1 } from "./mod/mod-1";

console.log(mod1);