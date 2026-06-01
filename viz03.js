
const viz03 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 260,
  "data": { "url": DATA_URL, "format": { "type": "csv" } },
  "mark": {
    "type": "bar",
    "color": "#3498db",
    "cornerRadiusTopLeft": 3,
    "cornerRadiusTopRight": 3
  },
  "encoding": {
    "x": {
      "field": "Docentes colaboradores",
      "type": "quantitative",
      "bin": true,
      "title": "Número de Docentes Colaboradores"
    },
    "y": {
      "aggregate": "count",
      "title": "Frequência (Quantidade de Programas)"
    },
    "tooltip": [
      { "field": "Docentes colaboradores", "type": "quantitative", "bin": true, "title": "Faixa" },
      { "aggregate": "count", "title": "Programas" }
    ]
  }
};
