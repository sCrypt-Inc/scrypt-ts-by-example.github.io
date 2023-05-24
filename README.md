# scrypt-ts-by-example.github.io

[sCrypt By Example](https://by-example.scrypt.io)

### License

[MIT License](LICENSE)

### Memo

```shell
## Deploy ##
# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/array

# md to react all pages
find src/pages -type d -not -path "*/__snapshots__" -exec npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts {} \;

# build routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts

# deploy
npm run deploy

## Mics ##
# rename files
find . -type f -name "index.test.js" -exec sh -c 'mv "$0" "${0%.test.js}.test.tsx"' {} \;
```
