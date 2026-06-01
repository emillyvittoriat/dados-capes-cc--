
const viz09 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 340,
  "data": { "url": DATA_URL, "format": { "type": "csv" } },
  "mark": {
    "type": "point",
    "filled": false,
    "size": 60,
    "strokeWidth": 1.5
  },
  "encoding": {
    "x": {
      "field": "per_comaluno_B1",
      "type": "quantitative",
      "title": "Média B1 por Aluno"
    },
    "y": {
      "field": "per_comaluno_B2",
      "type": "quantitative",
      "title": "Média B2 por Aluno"
    },
    "color": {
      "field": "Nível",
      "type": "nominal",
      "legend": { "title": "Nível" }
    },
    "tooltip": [
      { "field": "Programa", "type": "nominal", "title": "Programa" },
      { "field": "per_comaluno_B1", "type": "quantitative", "format": ".2f", "title": "B1/aluno" },
      { "field": "per_comaluno_B2", "type": "quantitative", "format": ".2f", "title": "B2/aluno" }
    ]
  }
};
