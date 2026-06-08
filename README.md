# Professional Developer Portfolio — Congo S Anifatou

Une solution de portfolio moderne, réactive et multilingue conçue pour mettre en valeur vos compétences en développement Full Stack, Mobile et Base de Données.

## 🚀 Fonctionnalités Clés

- **Design Premium & Moderne** : Palette de couleurs Rose/Fuchsia/Violet avec des dégradés élégants et des micro-animations.
- **Multilingue (i18n)** : Support complet de 6 langues : Français (FR), Anglais (EN), Espagnol (ES), Arabe (AR - RTL), Chinois (ZH) et Portugais (PT).
- **Mode Sombre/Clair** : Basculement fluide entre les thèmes avec persistance via `localStorage`.
- **Responsive Design** : Expérience utilisateur optimisée pour tous les terminaux (Desktop, Tablette, Mobile).
- **Animations Avancées** : Effets de défilement (Scroll Reveal), orbitaux (Hero) et typographiques.
- **Formulaire de Contact** : Validation en temps réel et gestion des retours utilisateur.

## 🏗️ Architecture du Projet

### 📂 Structure des Fichiers

```text
/
├── assets/                 # Ressources statiques
│   ├── CV_Congo_S_Anifatou.pdf  # Curriculum Vitae
│   ├── icons/              # Icônes SVG
│   └── images/             # Logos, screenshots et photos
├── css/                    # Styles CSS (Vanilla)
│   ├── main.css            # Base, variables et layout global
│   ├── components.css      # Composants UI réutilisables (cards, boutons)
│   ├── hero.css            # Style spécifique à l'accueil
│   ├── animations.css      # Keyframes et transitions
│   └── theme.css           # Surcharges pour le mode clair
├── js/                     # Logique JavaScript (Vanilla)
│   ├── main.js             # Initialisations globales
│   ├── i18n.js             # Système de traduction personnalisé
│   ├── theme.js            # Gestion du thème (Dark/Light)
│   ├── portfolio.js        # Filtrage dynamique des projets
│   └── contact.js          # Logique du formulaire de contact
├── index.html              # Page d'accueil (Hero, Expertise, Projets récents)
├── about.html              # À Propos (Bio, Parcours, Formation)
├── portfolio.html          # Portfolio (Projets complets avec filtres)
├── services.html           # Services (Offres, Processus, FAQ)
└── contact.html            # Contact (Informations et Formulaire)
```

### 🌍 Système Multilingue (i18n)

Le projet utilise un système de traduction maison via `js/i18n.js`. Les textes ne sont pas codés en dur dans le HTML mais injectés via des attributs `data-i18n`. Pour ajouter ou modifier un texte, il suffit d'éditer le dictionnaire `TRANSLATIONS` dans ce fichier.

### 🎨 Design System

Le design repose sur des variables CSS standardisées (`:root` dans `main.css`). 
- **Couleurs** : `--clr-orange` (Rose), `--clr-violet` (Fuchsia), `--clr-cyan` (Violet).
- **Espacement** : Utilisation de `var(--space-*)` pour une grille cohérente.
- **Typographie** : Échelles fluides via `clamp()`.

## 🛠️ Installation & Utilisation

1. **Cloner le projet** : Téléchargez les fichiers sur votre machine locale.
2. **Lancer un serveur local** : Utilisez l'extension "Live Server" de VS Code ou une commande comme `npx serve` pour éviter les erreurs de CORS sur les assets.
3. **Personnaliser** :
    - Modifiez les informations personnelles dans `js/i18n.js`.
    - Remplacez les images dans `/assets`.
    - Configurez le formulaire de contact dans `js/contact.js` (actuellement simulé).

## 📄 Licence

© 2026 Congo S Anifatou. Tous droits réservés.
