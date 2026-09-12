// Single source of truth for the live Streamlit dashboard URL (the "Map").
// Change this one line if the dashboard ever moves.
export const DASHBOARD_URL = 'https://sitesense5g.com'

// Canonical Penang-pilot figures, kept in one place so every page agrees.
export const STATS = {
  underserved: '77,362',
  villages: '31',
  highDemand: '193',
  gapClosed: '66%',
  sites: '5',
  capex: '$2.68M',
  perThousand: '≈19',
  // Filter / parameter context — the settings these figures were produced under.
  scope: 'Penang State · 4G LTE',
  maxRange: '18,819 m',
  demandThreshold: '90th pct',
  towerRange: '1,700 m',
  profile: 'Coverage-first',
}
