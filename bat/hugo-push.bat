@echo off

echo 'Adding files...'
echo;

cd ..

hugo

git add .

git push

cd public

git add .

echo 'wating ...'
echo;

git commit -m "Routing Deploy Blogs"

git push
