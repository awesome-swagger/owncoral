# shared-fullstack

Code shared between both frontend and backend packages (via Yarn workspaces and TypeScript project
references).

Mainly used for defining the API boundary between frontend and backend, e.g. type definitions 
and data validation logic.

To start consuming this package, add a Typescript project reference
from the consuming package's `tsconfig.json` (like in
[server/tsconfig.json](../server/tsconfig.json)). For frontend Snowpack packages, you'll also need to add mounts and 
aliases to `snowpack.config.js` (see [Example](https://github.com/edmulraney/snowpack-monorepo/blob/master/packages/app/snowpack.config.js)).

To add new data, create new directory and add `index.ts`. 
Edit `package.json` file to add `"./[dir_name]": "./dist/[dir_name]/index.js"`.
