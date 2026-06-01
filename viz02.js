
const viz02 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 260,
  "data": { "url": DATA_URL, "format": { "type": "csv" } },
  "mark": {
    "type": "bar",
    "color": "#e74c3c",
    "cornerRadiusTopLeft": 3,
    "cornerRadiusTopRight": 3
  },
  "encoding": {
    "x": {
      "field": "Docentes permanentes",
      "type": "quantitative",
      "bin": true,
      "title": "Número de Docentes Permanentes"
    },
    "y": {
      "aggregate": "count",
      "title": "Frequência (Quantidade de Programas)"
    },
    "tooltip": [
      { "field": "Docentes permanentes", "type": "quantitative", "bin": true, "title": "Faixa" },
      { "aggregate": "count", "title": "Programas" }
    ]
  }
};
