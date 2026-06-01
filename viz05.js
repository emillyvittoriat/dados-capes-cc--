
const viz05 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 280,
  "data": { "url": DATA_URL, "format": { "type": "csv" } },
  "mark": {
    "type": "bar",
    "color": "#2ecc71",
    "cornerRadiusTopLeft": 3,
    "cornerRadiusTopRight": 3
  },
  "encoding": {
    "x": {
      "field": "per_comaluno_A1",
      "type": "quantitative",
      "bin": { "maxbins": 15 },
      "title": "Média de Artigos A1 por Aluno"
    },
    "y": {
      "aggregate": "count",
      "title": "Quantidade de Programas"
    },
    "tooltip": [
      { "field": "per_comaluno_A1", "type": "quantitative", "bin": { "maxbins": 15 }, "title": "Faixa A1/aluno" },
      { "aggregate": "count", "title": "Programas" }
    ]
  }
};
