# Mon-Portfolio

Étape 1 : Installer Node.js

Assurez-vous que Node.js et npm (Node Package Manager) sont installés sur votre machine. Si ce n'est pas le cas, vous pouvez les télécharger et les installer à partir du [site officiel de Node.js](https://nodejs.org/).

 Étape 2 : Installer `http-server`

Ouvrez un terminal ou une invite de commandes et exécutez la commande suivante pour installer `http-server` globalement sur votre machine. L'installation globale vous permet d'utiliser `http-server` dans n'importe quel dossier de projet.


npm install --global http-server


 Étape 3 : Démarrer le serveur

Naviguez jusqu'au répertoire contenant votre projet web. Ce dossier doit inclure votre fichier `index.html` principal ainsi que tous les fichiers CSS et JavaScript associés.

Dans votre terminal ou invite de commandes, assurez-vous que vous êtes dans le bon dossier (le dossier de votre projet), puis exécutez la commande suivante :


http-server


Par défaut, `http-server` va démarrer un serveur sur le port 8080. Si vous souhaitez utiliser un port différent, vous pouvez spécifier le port avec l'option `-p`. Par exemple, pour utiliser le port 3000 :


http-server -p 3000


 Étape 4 : Accéder à votre site

Ouvrez votre navigateur web et allez à l'adresse `http://localhost:8080` (ou le port que vous avez spécifié si vous avez choisi un port différent). Vous devriez voir votre site web s'afficher.

 Étape 5 : Arrêter le serveur

Lorsque vous avez terminé et que vous souhaitez arrêter le serveur, retournez à votre terminal ou invite de commandes et appuyez sur `Ctrl + C`. Cela va interrompre `http-server` et arrêter le serveur local.
