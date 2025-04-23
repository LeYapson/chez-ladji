Le TP s'organise en 9 étapes, il doit vous permettre de mettre en application les notions abordées en React. Il s'agit de construire une mini-boutique en ligne à partir d'une API mettant à disposition des produits : paires de lunettes et t-shirts pour hommes.
Déroulement
9h > 12h30 - réalisation du TP en autonomie
12h30 > 12h45 : je passerai parmi vous : faire une rapide démonstration des fonctionnalités demandées que vous avez mises en place
12h45-13h : rendu sur Moodle (zip du dossier ./src de votre application) + les étapes 8 et 9 sont à saisir directement dans le champs text du rendu du devoir
14h > 14h30, retour d'expérience sur les tâches demandées (problématiques rencontrées)
Règles de développement à respecter pour ce devoir
NON autorisé : library de Composants (ex Material UI...)  Library CSS autorisé (ex Pico, PrimeFlex...)  Créer une interface utilisateur réaliste en termes de style et de fonctionnalité  Vous êtes libres d'utiliser les autres hooks de React (ref, context...) si vous les maîtrisez
screen eshopComposition de l'App Eshop

Header qui contient le nom de la boutique , le nom de la catégorie dans laquelle on se situe et deux boutons qui permettent de choisir une catégorie. (sunglasses par défaut)

Filtre et Tri
Met à disposition 2 options, une pour filter par marque, l'autre pour réorganiser les produits suivant 4 critères.

Produit
 Chaque produit doit afficher, son nom (title), sa catégorie (category), sa marque (brand), sa note (rating) + nombre de reviews, son thumbnail, sa description, son prix initial (price), son prix final (price discounted), un bouton Buy Now + la disponibilité 

Footer qui reprend le titre du eshop

# 1 Mise en place ( ~10min )
Mettre en place votre application (utilisation du bundle de votre choix (Vite, parcel, rollup…) , nommez votre application my-eshop-app
Mettre en place les CSS de base pour styliser un minimum votre application, vous avez le CHOIX: écrire vos propres styles ou d'utiliser une lib CSS de votre choix, si vous n'êtes pas inspiré je vous recommande la version CSS minifiée de Pico 
Recommendation :  Pico CSS ,  récupérer le fichier généré pico.min.css  à l'adresse ci dessous , l'enregistrer dans vos assets et y faire appel directement dans votre application React - https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css; Il n'est pas demandé d'installer entièrement Pico, contentez vous de récupérer les CSS minifiées.
PIco propose tous les outils nécessaires pour styliser votre app : boutons, navbar, checkbox, card, menu dropdown.... sans Javascript
Organiser votre espace de travail (en créant les dossiers qui vous semblent pertinents)
Créer vos propres fichiers CSS  si la librairie que vous avez choisie n'est pas suffisante
# 2 Création des composants avec des données statiques pour commencer,  8 composants à créer (~ 45min)
Recommendation : Commencer avec des données statiques avant de faire les appels API (étape 4), utiliser seulement des props dans un premier temps, pensez à utiliser la déstructuration pour déclarer vos props.

Voici les URLs des produits à présenter avec les données en Json :  sunglasses (https://dummyjson.com/products/category/sunglasses). et mens-shirt.json (https://dummyjson.com/products/category/mens-shirts) . Si jamais l'API s'avère indisponible, deux fichiers sunglasses.json et mens-shirts.json sont téléchargeables dans ce devoir.

const productDetail = {
  "id": 81,
  "title": "Round Silver Frame Sun Glasses",
  "description": "A pair of sunglasses can protect your eyes from being hurt...",
  "price": 19,
  "discountPercentage": 10.1,
  "rating": 4.94,
  "reviews" : ["Good","Bad"],
  "availabilityStatus: "In Stock",
  "stock": 78,
  "brand": "Designer Sun Glasses",
  "category": "sunglasses",
  "thumbnail": "full/path/to/img",
  }
screen product
<Product />, les props correspondent aux caractéristiques d’un produit (voir ce que propose l'API, voir aussi sur la copie d'écran fournie ci dessus) - Afficher à minima les props indiquées en rouge sur l'exemple ci dessus
<Products /> , affichant la liste de tous les produits par catégorie (les sunglasses, les t shirts)
<Ratings /> affichant la note de manière graphique / visuelle
<Header /> contenant simplement le nom du e-shop, la catégorie dans laquelle on se situe, deux boutons pour changer de catégorie
<Footer /> contenant 2 links : Mentions légales , Contact, Nom du site
<App /> composant affichant l’ensemble de l’application
<OrderBy /> permettant de ré ordonner les résultats
<BrandsAvailable /> affichant les marques disponibles pour une catégorie donnée (marques pour les lunettes, pour les t shirts)
Styliser vos composants de manière réaliste avec un minimum de CSS, il vous est demandé un travail particulier pour créer votre propre composant <Ratings> avec un rendu visuel de la note.  Rappel : nous n'êtes pas autorisé à utiliser une lib de Composants (ex: Material UI...) 

# 3 Logique fonctionnelle de votre app (interaction avec l’utilisateur),
Afficher un univers : sunglasses et mens-tshirts ( ~30min )
Mettre en place 3 state hooks :
> un state hook qui contient le nom (slug) de l'univers (déterminer par le clic de l'utilisateur), sunglasses par défaut
> un state hook qui contient tous les produits de la catégorie choisie,
> un state hook contenant les marques des produits affichées (seulement les marques de la catégorie choisie)
Mettre en place les méthodes nécessaires pour que l'utilisateur puisse interagir (changer l'univers / la catégorie des produits)
> je clique sur l'univers mens-shirt, le hook correspondant est mis à jour, les produits correspondants sont affichés (utiliser <Products /> et <Product />)
# 4.1 Afficher les marques disponibles ( ~ 45min)
Ecrire le code nécessaire pour lister toutes les marques de manière unique dans la catégorie choisie, stocker ces marques dans le state correspondant (la marque n'apparait qu'une seule fois)
Afficher le nombre de produits disponibles à côté de la marque - MaMarque(7)
Afficher les marques de la catégorie sous la forme d'une liste de cases à cocher  dans un composant “BrandsAvailable”, utiliser le dropdown de Pico CSS pour le style
Recommendation : dans un 1er temps,  travailler avec des données statiques pour tester vos fonctions et vos composants 
# 4.2 Mettre à jour la liste des produits selon la/les marques sélectionnées
Au clic sur une case à cocher, filtrer les produits selon la/les marques choisies (cette étape est la plus complexe du TP), 
Prévoir les différents cas de figures : toutes les marques sont cochées par défaut ?  qu'afficher si toutes les marques sont décochées ?
# 5 Faire appel à une API distante pour alimenter l'app en données , utiliser le hook effect ( ~30min )
Comment utiliser le hook effect pour charger vos données ? https://designcode.io/react-hooks-handbook-fetch-data-from-an-api
Mettre en place le hook effect dans votre application, pour charger les données distantes
Créer une fonction asynchrone pour récupérer les données distantes (fetch) à partir du endpoint suivant (https://dummyjson.com/products/category/sunglasses || https://dummyjson.com/products/category/mens-shirts) -  l'url du endpoint doit évoluer de manière dynamique suivant le choix de l'utilisateur, les résultats renvoyés par la requête asynchrone vont permettre de mettre à jour le state qui contient tous les produits de la catégorie
Bonus / facultatif : Gérer les temps de chargement d’appel à l’API avec un Loading Component
# 6 Rendre votre application responsive ( ~15min )
Votre app doit s'afficher correctement sur mobile, tester l'affichage sur mobile

# 7 Gérer les erreurs (~10min)
Proposez une solution dans le cas ou l'API est indisponible, que va afficher votre application ?

# 8 Comment pourriez vous optimiser votre application ? ( ~10min )
En une dizaine de lignes, précisez comment vous pourriez optimiser (les performances) de votre application en citant explicitement les composants concernés…
Par ex : utilisation de hook particulier … sur tel composant...

>> A renseigner dans le champ texte libre lors du rendu du devoir.

# 9 Amélioration ( ~10min )
Proposer un axe d'amélioration / travail à venir pour développer votre application, proposer une fonctionnalité qui vous paraitrait intéressante...  (en dehors de l'optimisation)

>> A renseigner dans le champ texte libre lors du rendu du devoir.

# Facultatif:  Choisir une lib externe simple et l'installer
Installer une librairie / dépendance de votre choix pour améliorer l'UI de votre app (animation comme motion,  utilisation d'icônes, de rooting comme React router… et utiliser un composant simple lié à cette librairie. Ex : react Router, Axios
