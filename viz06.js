
const viz06 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 300,
  "data": { "url": DATA_URL, "format": { "type": "csv" } },
  "mark": { "type": "boxplot", "extent": "min-max" },
  "encoding": {
    "x": {
      "field": "Nível",
      "type": "nominal",
      "title": "Nível do Programa",
      "axis": { "labelAngle": 0 }
    },
    "y": {
      "field": "per_comaluno_A2",
      "type": "quantitative",
      "title": "Média de Artigos A2 por Aluno"
    },
    "color": {
      "field": "Nível",
      "type": "nominal",
      "legend": { "title": "Nível" }
    }
  }
};
