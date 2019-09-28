# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# if you are deploying to a custom domain
# echo 'example.com' > CNAME
echo 'danielaornelas.com' > CNAME

echo Deploying..
git add dist
git commit -m "deploying dist"

# deploy
git subtree push --prefix dist origin gh-pages
#git push -f git@github.com:AndrewDrury/daniela-personal-portfolio.git gh-pages