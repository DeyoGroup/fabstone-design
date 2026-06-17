/* Fabstone — main JS
 * Handles: Featured Collections + Live Inventory filtering, hero video play,
 * announcement scroller pause-on-hover, mobile menu toggle (if needed).
 */
(function () {
	'use strict';

	/* ───────────── Featured Collections / Live Inventory filter ───────────── */
	function initFilterGrid(root) {
		const tabs    = root.querySelectorAll('[data-fs-tab]');
		const search  = root.querySelector('[data-fs-search]');
		const grid    = root.querySelector('[data-fs-grid]');
		const empty   = root.querySelector('[data-fs-empty]');
		const pager   = root.querySelector('[data-fs-pager]');
		const prevBtn = root.querySelector('[data-fs-prev]');
		const nextBtn = root.querySelector('[data-fs-next]');
		const perPage = parseInt(root.dataset.fsPerPage || '3', 10);
		const state   = { stone_type: 'all', search: '', paged: 1, maxPages: 1 };
		let searchTimer = null;

		if (!grid) return;

		if (pager) {
			state.maxPages = parseInt(pager.dataset.fsMax || '1', 10);
		}

		function setActiveTab(slug) {
			tabs.forEach(t => {
				const active = t.dataset.fsTab === slug;
				t.classList.toggle('is-active', active);
				t.setAttribute('aria-selected', active ? 'true' : 'false');
			});
		}

		function updatePagerUI() {
			if (!pager) return;
			pager.dataset.fsPage = String(state.paged);
			pager.dataset.fsMax  = String(state.maxPages);
			if (prevBtn) prevBtn.disabled = state.paged <= 1;
			if (nextBtn) nextBtn.disabled = state.paged >= state.maxPages;
		}

		async function fetchAndRender() {
			grid.setAttribute('aria-busy', 'true');
			const body = new FormData();
			body.append('action', 'fabstone_filter');
			body.append('nonce', FabstoneData.nonce);
			body.append('stone_type', state.stone_type);
			body.append('search', state.search);
			body.append('paged', String(state.paged));
			body.append('per_page', String(perPage));

			try {
				const r = await fetch(FabstoneData.ajaxUrl, { method: 'POST', body });
				const json = await r.json();
				if (json.success) {
					grid.innerHTML = json.data.html;
					state.maxPages = json.data.max_pages || 1;
					if (empty) empty.hidden = json.data.found > 0;
					updatePagerUI();
				}
			} catch (err) {
				console.error('[fabstone] filter failed', err);
			} finally {
				grid.removeAttribute('aria-busy');
			}
		}

		tabs.forEach(tab => tab.addEventListener('click', () => {
			state.stone_type = tab.dataset.fsTab;
			state.paged = 1;
			setActiveTab(state.stone_type);
			fetchAndRender();
		}));

		if (search) {
			search.addEventListener('input', () => {
				clearTimeout(searchTimer);
				searchTimer = setTimeout(() => {
					state.search = search.value.trim();
					state.paged = 1;
					fetchAndRender();
				}, 250);
			});
		}

		if (prevBtn) prevBtn.addEventListener('click', () => {
			if (state.paged > 1) { state.paged--; fetchAndRender(); }
		});
		if (nextBtn) nextBtn.addEventListener('click', () => {
			if (state.paged < state.maxPages) { state.paged++; fetchAndRender(); }
		});

		updatePagerUI();
	}

	/* ───────────── Hero video play ───────────── */
	function initHeroPlay() {
		document.querySelectorAll('.fs-hero__play').forEach(btn => {
			btn.addEventListener('click', () => {
				const wrap = btn.closest('.fs-hero__media');
				const video = wrap && wrap.querySelector('video');
				if (video) { video.play(); btn.style.display = 'none'; }
			});
		});
	}

	/* ───────────── Announcement scroller — pause on hover ───────────── */
	function initAnnounce() {
		document.querySelectorAll('.fs-announce__track').forEach(track => {
			track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
			track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
		});
	}

	/* ───────────── Mobile menu drawer ───────────── */
	function initMobileMenu() {
		const burger = document.querySelector('.fs-burger');
		const drawer = document.getElementById('fs-mobile');
		const closeBtn = drawer && drawer.querySelector('.fs-mobile__close');
		if (!burger || !drawer) return;

		const open = () => {
			drawer.classList.add('is-open');
			burger.classList.add('is-open');
			drawer.setAttribute('aria-hidden', 'false');
			burger.setAttribute('aria-expanded', 'true');
			document.body.style.overflow = 'hidden';
		};
		const close = () => {
			drawer.classList.remove('is-open');
			burger.classList.remove('is-open');
			drawer.setAttribute('aria-hidden', 'true');
			burger.setAttribute('aria-expanded', 'false');
			document.body.style.overflow = '';
		};

		burger.addEventListener('click', () => {
			drawer.classList.contains('is-open') ? close() : open();
		});
		closeBtn && closeBtn.addEventListener('click', close);
		drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
		document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
	}

	/* ───────────── v2 Hero play button — swap poster for embedded video ─────────────
	 * Markup expectation:
	 *   <section class="fs2-hero" data-fs2-hero>
	 *     <div class="fs2-hero__media">
	 *       <img class="fs2-hero__poster" …>
	 *       <button class="fs2-hero__play" data-fs2-play>…</button>
	 *       <template data-fs2-embed><!-- iframe or video --></template>
	 *     </div>
	 *   </section>
	 */
	function initHero2Play() {
		document.querySelectorAll('[data-fs2-hero]').forEach(hero => {
			const btn      = hero.querySelector('[data-fs2-play]');
			const tpl      = hero.querySelector('[data-fs2-embed]');
			const media    = hero.querySelector('.fs2-hero__media');
			if (!btn || !tpl || !media) return;
			btn.addEventListener('click', () => {
				const node = tpl.content.cloneNode(true);
				media.appendChild(node);
				hero.classList.add('is-playing');
			}, { once: true });
		});
	}

	/* ───────────── [fabstone_inspirations] — client-side filter ─────────────
	 * Inspiration CPT is small (a handful of posts), so a JS-only filter is
	 * lighter than an AJAX round-trip. Pill click → keep cards whose
	 * data-fs-space matches; search input → match against data-fs-text.
	 */
	function initInspirationFilter(root) {
		const tabs   = root.querySelectorAll('[data-fs-insp-tab]');
		const search = root.querySelector('[data-fs-insp-search]');
		const cards  = root.querySelectorAll('[data-fs-insp-card]');
		const empty  = root.querySelector('[data-fs-insp-empty]');
		if (!cards.length) return;

		const state = { space: 'all', term: '' };
		let searchTimer = null;

		function apply() {
			let visible = 0;
			cards.forEach(card => {
				const spaceMatch = state.space === 'all' || card.dataset.fsSpace === state.space;
				const textMatch  = !state.term || (card.dataset.fsText || '').indexOf(state.term) !== -1;
				const show = spaceMatch && textMatch;
				card.hidden = !show;
				if (show) visible++;
			});
			if (empty) empty.hidden = visible > 0;
		}

		tabs.forEach(tab => tab.addEventListener('click', () => {
			state.space = tab.dataset.fsInspTab;
			tabs.forEach(t => {
				const active = t === tab;
				t.classList.toggle('is-active', active);
				t.setAttribute('aria-selected', active ? 'true' : 'false');
			});
			apply();
		}));

		if (search) {
			search.addEventListener('input', () => {
				clearTimeout(searchTimer);
				searchTimer = setTimeout(() => {
					state.term = search.value.trim().toLowerCase();
					apply();
				}, 150);
			});
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		document.querySelectorAll('[data-fs-filter]').forEach(initFilterGrid);
		document.querySelectorAll('[data-fs-insp-root]').forEach(initInspirationFilter);
		initHeroPlay();
		initHero2Play();
		initAnnounce();
		initMobileMenu();
	});
})();
