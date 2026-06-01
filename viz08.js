// ── 08: Top 10 Programas em Artigos de Conferência ───────────────
const viz08 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 340,
  "data": { "url": DATA_URL, "format": { "type": "csv" } },
  "transform": [
    {
      "window": [{ "op": "rank", "as": "rank" }],
      "sort": [{ "field": "Artigos em conf", "order": "descending" }]
    },
    { "filter": "datum.rank <= 10" }
  ],
  "mark": {
    "type": "bar",
    "color": "#9b59b6",
    "cornerRadiusTopRight": 4,
    "cornerRadiusBottomRight": 4
  },
  "encoding": {
    "x": {
      "field": "Artigos em conf",
      "type": "quantitative",
      "title": "Total de Artigos em Conferência"
    },
    "y": {
      "field": "Programa",
      "type": "nominal",
      "sort": { "field": "Artigos em conf", "order": "descending" },
      "title": "Programa / Universidade"
    },
    "tooltip": [
      { "field": "Programa", "type": "nominal", "title": "Programa" },
      { "field": "Artigos em conf", "type": "quantitative", "title": "Artigos" }
    ]
  }
};
