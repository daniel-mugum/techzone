// ========== FONCTIONS DE RECHERCHE ==========
function fuzzyMatch(str, pattern) {
  str = str.toLowerCase().replace(/\s+/g,'');
  pattern = pattern.toLowerCase().replace(/\s+/g,'');
  if(str.includes(pattern)) return true;
  const s = str, p = pattern;
  if(p.length === 0) return true;
  if(s.length === 0) return false;
  const maxDist = Math.floor(p.length * 0.45);
  const dp = [];
  for(let i=0;i<=s.length;i++){dp[i]=[i];}
  for(let j=0;j<=p.length;j++){dp[0][j]=j;}
  for(let i=1;i<=s.length;i++){
    for(let j=1;j<=p.length;j++){
      dp[i][j] = s[i-1]===p[j-1] ? dp[i-1][j-1] : 1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
    }
  }
  return dp[s.length][p.length] <= maxDist;
}

function searchProducts(query) {
  if(!query || query.length < 2) return [];
  return allProducts.filter(p => {
    const target = (p.name + ' ' + p.brand + ' ' + p.specs).toLowerCase();
    const words = query.toLowerCase().split(/\s+/);
    return words.every(w => target.includes(w) || target.split(/\s+/).some(t => fuzzyMatch(t, w)));
  });
}

// ========== RENDU DES CARTES ==========
function renderCard(p) {
  const badgeHtml = p.badge ? `<span class="badge badge-${p.badge}">${p.badge==='new'?'Nouveau':p.badge==='promo'?'Promo':'🔥 Hot'}</span>` : '';
  const stars = '★'.repeat(p.stars)+'☆'.repeat(5-p.stars);
  const price = p.basePrice ? p.basePrice : p.price;
  return `
    <div class="product-card" onclick="openModal('${p.id}')">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>📱</text></svg>'"/>
        ${badgeHtml}
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-specs">${p.specs}</div>
        <div class="stars">${stars}</div>
        <div class="price-row">
          <div><span class="price">$${typeof price === 'number' ? price.toLocaleString() : price}</span></div>
          <button class="add-btn" onclick="event.stopPropagation();quickOrder('${p.id}')">+</button>
        </div>
      </div>
    </div>`;
}

function renderSection(arr, gridId) {
  const grid = document.getElementById(gridId);
  if(grid) grid.innerHTML = arr.length ? arr.map(renderCard).join('') : '<p style="color:var(--muted);padding:2rem">Aucun produit trouvé.</p>';
}

// ========== FILTRES ==========
function filterIphone(gen, el) {
  document.querySelectorAll('.ip-subtab').forEach(t=>t.classList.remove('active'));
  if(el) el.classList.add('active');
  renderSection(gen==='all' ? iphones : iphones.filter(p=>p.gen===gen), 'iphoneGrid');
}

function filterHP(cat, el) {
  document.querySelectorAll('.subtab').forEach(t=>t.classList.remove('active'));
  if(el) el.classList.add('active');
  renderSection(cat==='all' ? hpProducts : hpProducts.filter(p=>p.cat===cat), 'hpGrid');
}

function filterMac(filter, el) {
  document.querySelectorAll('.mac-subtab').forEach(t=>t.classList.remove('active'));
  if(el) el.classList.add('active');
  let arr;
  if(filter==='all') arr = macbooks;
  else if(filter==='air') arr = macbooks.filter(p=>p.type==='air');
  else if(filter==='pro') arr = macbooks.filter(p=>p.type==='pro');
  else arr = macbooks.filter(p=>p.chip===filter);
  renderSection(arr, 'macGrid');
}

// ========== MODAL ==========
function openModal(id) {
  const p = allProducts.find(x=>x.id===id);
  if(!p) return;
  
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-brand').textContent = p.brand;
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-specs').textContent = p.specs + ' — ' + p.desc;
  
  const isMac = p.basePrice !== undefined;
  if(isMac && document.getElementById('modal-storage')) {
    document.getElementById('modal-storage').style.display = 'block';
    window.currentMacProduct = p;
    document.getElementById('modal-price').textContent = '$' + p.basePrice.toLocaleString();
    if(window.updateMacPrice) window.updateMacPrice();
  } else {
    if(document.getElementById('modal-storage')) document.getElementById('modal-storage').style.display = 'none';
    document.getElementById('modal-price').textContent = '$' + (typeof p.price === 'number' ? p.price.toLocaleString() : p.price);
    const msg = `Bonjour, je commande : ${p.name} - ${p.specs} - $${typeof p.price === 'number' ? p.price.toLocaleString() : p.price}`;
    document.getElementById('modal-wa').href = `https://wa.me/243982686531?text=${encodeURIComponent(msg)}`;
  }
  document.getElementById('modal').classList.add('active');
}

function closeModal() { document.getElementById('modal').classList.remove('active'); }

// ========== PANIER ==========
function quickOrder(id) {
  const p = allProducts.find(x=>x.id===id);
  if(p) {
    cartItems.push(p);
    const cartCount = document.getElementById('cartCount');
    if(cartCount) cartCount.textContent = cartItems.length;
    showToast(`${p.name} ajouté au panier`);
    const price = p.basePrice ? p.basePrice : p.price;
    const msg = `Bonjour, je commande : ${p.name} - ${p.specs} - $${typeof price === 'number' ? price.toLocaleString() : price}`;
    window.open(`https://wa.me/243982686531?text=${encodeURIComponent(msg)}`, '_blank');
  }
}

function toggleCart() {
  if(cartItems.length===0){showToast('Panier vide');return;}
  const list = cartItems.map(p=>`• ${p.name} — $${typeof (p.basePrice || p.price) === 'number' ? (p.basePrice || p.price).toLocaleString() : (p.basePrice || p.price)}`).join('\n');
  window.open(`https://wa.me/243982686531?text=${encodeURIComponent(`Ma commande :\n${list}`)}`,'_blank');
}

// ========== UTILITAIRES ==========
function scrollTo(id) { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }

function showToast(msg) {
  const old = document.querySelector('.toast');
  if(old) old.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `✓ ${msg}`;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 3000);
}

// ========== RECHERCHE ==========
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  if(!searchInput) return;
  
  searchInput.addEventListener('input', function() {
    const q = this.value.trim();
    if(q.length < 2) { if(searchResults) searchResults.classList.remove('visible'); return; }
    const results = searchProducts(q).slice(0, 8);
    if(searchResults) {
      if(results.length === 0) {
        searchResults.innerHTML = '<div class="search-empty">Aucun produit trouvé</div>';
      } else {
        searchResults.innerHTML = results.map(p => `
          <div class="search-item" onclick="openModal('${p.id}');searchResults.classList.remove('visible');document.getElementById('searchInput').value='';">
            <img src="${p.img}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>📱</text></svg>'"/>
            <div><strong>${p.name}</strong><br/>$${typeof (p.basePrice || p.price) === 'number' ? (p.basePrice || p.price).toLocaleString() : (p.basePrice || p.price)}</div>
          </div>`).join('');
      }
      searchResults.classList.add('visible');
    }
  });

  document.addEventListener('click', function(e) {
    const searchWrap = document.getElementById('searchWrap');
    if(searchWrap && !searchWrap.contains(e.target) && searchResults) {
      searchResults.classList.remove('visible');
    }
  });
}

// ========== INITIALISATION DES FILTRES ==========
function setupFilters() {
  document.querySelectorAll('.ip-subtab').forEach(tab => {
    tab.addEventListener('click', () => filterIphone(tab.dataset.filter, tab));
  });
  document.querySelectorAll('.subtab').forEach(tab => {
    tab.addEventListener('click', () => filterHP(tab.dataset.filter, tab));
  });
  document.querySelectorAll('.mac-subtab').forEach(tab => {
    tab.addEventListener('click', () => filterMac(tab.dataset.filter, tab));
  });
}

function setupHPFilters() {
  document.querySelectorAll('.subtab').forEach(tab => {
    tab.addEventListener('click', () => filterHP(tab.dataset.filter, tab));
  });
}

function setupMacFilters() {
  document.querySelectorAll('.mac-subtab').forEach(tab => {
    tab.addEventListener('click', () => filterMac(tab.dataset.filter, tab));
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  setupSearch();
  if(document.getElementById('iphoneGrid')) renderSection(iphones, 'iphoneGrid');
  if(document.getElementById('hpGrid')) renderSection(hpProducts, 'hpGrid');
  if(document.getElementById('macGrid')) renderSection(macbooks, 'macGrid');
  if(document.getElementById('featuredGrid')) {
    const featured = [...iphones, ...hpProducts, ...macbooks].slice(-6);
    document.getElementById('featuredGrid').innerHTML = featured.map(renderCard).join('');
  }
});