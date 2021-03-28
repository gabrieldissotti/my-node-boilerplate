# My Node Boilerplate

yarn scripts:
`yarn dev` run application in local environment

@types:
create a file like 'express.d.ts' into src/@types when you need change a interface declaration

setup:

- add eslint extension to your vscode
  press ctrl + p and find "Open settings (json)" and add de following code block

```json
"[typescript]": {
   "editor.formatOnSave": false,
   "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
   }
 },
```
