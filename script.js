// ── Recent Calls ────────────────────────────────────────────────────────────

function weekLabel(isoMonday) {
  const d = new Date(isoMonday + 'T12:00:00Z');
  return 'Week of ' + d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'UTC' });
}

function loadRecentCalls() {
  const el = document.getElementById('recent-calls-content');
  if (!el) return;

  fetch('/recent_calls.json')
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (!data || !data.calls.length) return;

      const byWeek = {};
      data.calls.forEach(c => {
        (byWeek[c.week_start] = byWeek[c.week_start] || []).push(c);
      });

      const weeks = Object.keys(byWeek).sort().reverse().slice(0, 2);
      let html = '<div class="calls-grid">';
      weeks.forEach(ws => {
        html += '<div class="calls-week"><p class="week-label">' + weekLabel(ws) + '</p>';
        byWeek[ws].forEach(c => {
          const neg  = c.move_pct < 0;
          const sign = neg ? '−' : '+';
          const abs  = Math.abs(c.move_pct).toFixed(1);
          html += '<div class="call-row">'
            + '<span class="call-ticker">'  + c.ticker     + '</span>'
            + '<span class="call-tier '     + c.tier_class + '">' + c.tier_label + '</span>'
            + '<span class="call-move '     + (neg ? 'neg' : 'pos') + '">' + sign + abs + '%</span>'
            + '</div>';
        });
        html += '</div>';
      });
      html += '</div>';
      el.innerHTML = html;
    })
    .catch(() => {});
}

// ── Init ─────────────────────────────────────────────────────────────────────

loadRecentCalls();
