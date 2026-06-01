
const viz07 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 340,
  "data": { "url": DATA_URL, "format": { "type": "csv" } },
  "mark": { "type": "circle", "opacity": 0.7 },
  "encoding": {
    "x": {
      "field": "Dissertacoes",
      "type": "quantitative",
      "title": "Volume de Dissertações"
    },
    "y": {
      "field": "Teses",
      "type": "quantitative",
      "title": "Volume de Teses"
    },
    "size": {
      "field": "Artigos em conf",
      "type": "quantitative",
      "title": "Volume em Conf.",
      "scale": { "range": [30, 800] }
    },
    "color": {
      "field": "Nível",
      "type": "nominal",
      "legend": { "title": "Nível" }
    },
    "tooltip": [
      { "field": "Programa", "type": "nominal", "title": "Programa" },
      { "field": "Dissertacoes", "type": "quantitative", "title": "Dissertações" },
      { "field": "Teses", "type": "quantitative", "title": "Teses" },
      { "field": "Artigos em conf", "type": "quantitative", "title": "Artigos Conf." }
    ]
  }
};
