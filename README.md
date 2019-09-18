# daniela-personal-portfolio

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run lint, build, and deploy to gh-pages

```
.\deploy.sh
```

### Deploy Manually to gh-pages

1. Commit the `.gitignore` file with 'dist' uncommented.
2. Comment out 'dist'.
3. Run `npm run build`.
4. Run `git add dist`.
5. Run `git commit -m "deploying dist"`
6. Run `git subtree push --prefix dist origin gh-pages`
7. Uncomment 'dist' in the `.gitignore` file.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
