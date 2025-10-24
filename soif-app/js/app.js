/**
 * SOIF MyBarFinder - Application JavaScript
 * Charge les données depuis data/bars.json
 */

// Configuration
const CONFIG = {
    DATA_PATH: './data/bars.json',
    FILTERS_PATH: './data/filters.json',
    STORAGE_KEY: 'soif_bars',
    CUSTOM_FILTERS_KEY: 'soif_custom_filters'
};

// Variables globales
let bars = [];
let BARS_JSON = []; // Données originales
let FILTERS = {}; // Filtres chargés depuis JSON
let editingBarId = null;
let selectedSearchFilters = [];
let customFilters = {};

/**
 * Charger les données des bars depuis le fichier JSON
 */
async function loadBarsFromFile() {
    try {
        const response = await fetch(CONFIG.DATA_PATH);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        BARS_JSON = data;
        console.log(`✅ ${data.length} bars chargés depuis ${CONFIG.DATA_PATH}`);
        return data;
    } catch (error) {
        console.error('❌ Erreur chargement bars:', error);
        showNotification('⚠️ Erreur de chargement des données', 'error');
        return [];
    }
}

/**
 * Charger les filtres depuis le fichier JSON
 */
async function loadFiltersFromFile() {
    try {
        const response = await fetch(CONFIG.FILTERS_PATH);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        FILTERS = data;
        console.log(`✅ ${Object.keys(data).length} catégories de filtres chargées`);
        return data;
    } catch (error) {
        console.error('❌ Erreur chargement filtres:', error);
        showNotification('⚠️ Erreur de chargement des filtres', 'error');
        return {};
    }
}

/**
 * Initialiser l'application
 */
async function initApp() {
    // Charger les filtres
    FILTERS = await loadFiltersFromFile();
    
    // Charger les données
    BARS_JSON = await loadBarsFromFile();
    
    // Charger depuis localStorage ou utiliser les données du fichier
    const savedBars = localStorage.getItem(CONFIG.STORAGE_KEY);
    if (savedBars) {
        try {
            bars = JSON.parse(savedBars);
            console.log(`📦 ${bars.length} bars chargés depuis localStorage`);
        } catch (error) {
            console.error('Erreur localStorage:', error);
            bars = [...BARS_JSON];
        }
    } else {
        bars = [...BARS_JSON];
    }
    
    // Charger les filtres personnalisés
    loadCustomFilters();
    
    // Initialiser l'interface
    generateFormFilters();
    generateSearchFilters();
    renderBarsList();
    updateCounts();
    
    console.log('✅ Application initialisée');
}

// Fonctions utilitaires
function removeArticle(name) {
    const articles = ['Le ', 'La ', 'Les ', "L'", 'The ', 'Chez ', 'Un '];
    for (let article of articles) {
        if (name.startsWith(article)) {
            return name.substring(article.length);
        }
    }
    return name;
}

function sortBarsByName(barsArray) {
    return barsArray.sort((a, b) => {
        const nameA = removeArticle(a.name).toLowerCase();
        const nameB = removeArticle(b.name).toLowerCase();
        return nameA.localeCompare(nameB);
    });
}

function saveBars() {
    try {
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(bars));
    } catch (error) {
        console.error('Erreur de sauvegarde:', error);
    }
}

function loadBars() {
    try {
        const saved = localStorage.getItem(CONFIG.STORAGE_KEY);
        if (saved) {
            bars = JSON.parse(saved);
        } else {
            bars = [...BARS_JSON];
        }
        bars = sortBarsByName(bars);
    } catch (error) {
        console.error('Erreur de chargement:', error);
        bars = [...BARS_JSON];
    }
}

function loadCustomFilters() {
    try {
        const savedFilters = localStorage.getItem(CONFIG.CUSTOM_FILTERS_KEY);
        if (savedFilters) {
            customFilters = JSON.parse(savedFilters);
            Object.keys(customFilters).forEach(category => {
                if (!FILTERS[category]) {
                    FILTERS[category] = [];
                }
                customFilters[category].forEach(filter => {
                    if (!FILTERS[category].find(f => f.id === filter.id)) {
                        FILTERS[category].push({...filter, custom: true});
                    }
                });
            });
        }
    } catch (error) {
        console.error('Erreur chargement filtres personnalisés:', error);
    }
}

function resetToOriginalData() {
    if (!confirm(`⚠️ Réinitialiser avec les ${BARS_JSON.length} bars authentiques ?\n\nToutes vos modifications seront perdues !`)) {
        return;
    }
    localStorage.clear();
    bars = [...BARS_JSON];
    bars = sortBarsByName(bars);
    saveBars();
    renderBarsList();
    updateCounts();
    showNotification(`✅ Base authentique de ${BARS_JSON.length} bars chargée !`);
}

function showNotification(message, type = 'success') {
    const notif = document.createElement('div');
    notif.className = 'notification';
    if (type === 'error') {
        notif.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    }
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => {
        if (notif.parentNode) notif.remove();
    }, 3000);
}

function updateCounts() {
    const count = bars.length;
    document.getElementById('totalBars').textContent = count;
    document.getElementById('barsCount').textContent = count;
}

// Placeholder pour les autres fonctions (à compléter avec le code original)
function generateFormFilters() { /* TODO */ }
function generateSearchFilters() { /* TODO */ }
function renderBarsList() { /* TODO */ }

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', initApp);
