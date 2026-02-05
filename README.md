# 🔐 Cyber Mirror

**L'IA qui révèle les failles numériques**

Application web de sensibilisation à la cybersécurité utilisant l'intelligence artificielle pour analyser des comportements numériques simulés et générer des profils de risque personnalisés.

## 📋 Description

Cyber Mirror propose un parcours interactif basé sur des données **entièrement simulées**. L'utilisateur répond à un questionnaire sur des habitudes numériques fictives, et une IA génère un profil de risque accompagné de recommandations pédagogiques.

⚠️ **Conformité RGPD** : Aucune donnée personnelle réelle n'est collectée, stockée ou exploitée.

## 🚀 Démarrage rapide

### Prérequis

- Docker et Docker Compose
- Une clé API OpenAI (GPT-3.5 ou GPT-4)

### Installation

1. **Cloner le projet**
```bash
git clone <votre-repo>
cd cyber-mirror
```

2. **Configurer les variables d'environnement**
```bash
cp backend/.env.example backend/.env
# Éditer backend/.env et ajouter votre clé OpenAI
```

3. **Lancer l'application**
```bash
docker-compose up --build
```

4. **Accéder à l'application**
- Frontend : http://localhost:5173
- Backend : http://localhost:3000

## 🏗️ Architecture

```
cyber-mirror/
├── frontend/          # Application React
├── backend/           # API Node.js + Express
├── docs/             # Documentation RGPD et XAI
└── docker-compose.yml
```

### Stack technique

- **Frontend** : React + Vite + Recharts
- **Backend** : Node.js + Express
- **IA** : OpenAI API (GPT-3.5-turbo ou GPT-4o)
- **Containerisation** : Docker

## 📊 Fonctionnalités

- ✅ Questionnaire interactif (10 questions)
- ✅ Moteur de calcul de score transparent
- ✅ Visualisation radar des risques par thématique
- ✅ Analyse IA personnalisée ("Coach Cyber")
- ✅ Recommandations prioritaires
- ✅ 100% conforme RGPD (données simulées uniquement)

## 🔑 Variables d'environnement

Créer un fichier `backend/.env` :

```env
OPENAI_API_KEY=sk-votre-clé-ici
OPENAI_MODEL=gpt-3.5-turbo
PORT=3000
NODE_ENV=development
```

## 📚 Documentation

- [Privacy by Design](docs/privacy-by-design.md) - Conformité RGPD
- [Explicabilité XAI](docs/explicabilite-xai.md) - Validation de la cohérence IA

## 🧪 Tests

Pour tester le scoring :
```bash
cd backend
npm test
```

## 👥 Crédits

Projet réalisé dans le cadre du module **R603D - IA et Cybersécurité** - BUT MMI 3ème année.

## 📝 Licence

Projet éducatif - Tous droits réservés