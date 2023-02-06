# AperanoGavin.github.io

<h1>Framework CSS</h1>

##see all branch 
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done

git branch -vv


##for run sass
sass ./assets/sass/main.scss  ./assets/css/main.css


vous pouvez voir le site en ligne sur [website of S1 - challenge stack semestriel](https://gavinaperano.me/)