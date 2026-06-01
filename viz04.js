
const viz04 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 340,
  "data": { "url": DATA_URL, "format": { "type": "csv" } },
  "mark": {
    "type": "point",
    "filled": false,
    "size": 80,
    "strokeWidth": 1.5
  },
  "encoding": {
    "x": {
      "field": "Docentes permanentes",
      "type": "quantitative",
      "title": "Docentes Permanentes"
    },
    "y": {
      "field": "Artigos em conf",
      "type": "quantitative",
      "title": "Artigos em Conferência"
    },
    "color": {
      "field": "Nível",
      "type": "nominal",
      "legend": { "title": "Nível" }
    },
    "tooltip": [
      { "field": "Programa", "type": "nominal", "title": "Programa" },
      { "field": "Docentes permanentes", "type": "quantitative", "title": "Docentes Perm." },
      { "field": "Artigos em conf", "type": "quantitative", "title": "Artigos Conf." }
    ]
  }
};
