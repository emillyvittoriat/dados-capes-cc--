const viz01 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": "container",
  "height": 300,
  "data": { "url": DATA_URL, "format": { "type": "csv" } },
  "mark": {
    "type": "bar",
    "cornerRadiusTopLeft": 4,
    "cornerRadiusTopRight": 4
  },
  "encoding": {
    "x": {
      "field": "Nível",
      "type": "nominal",
      "title": "Nível do Programa",
      "axis": { "labelAngle": 0 }
    },
    "y": {
      "aggregate": "count",
      "title": "Quantidade de Programas"
    },
    "color": {
      "field": "Nível",
      "type": "nominal",
      "scale": { "scheme": "viridis" },
      "legend": { "title": "Nível" }
    },
    "tooltip": [
      { "field": "Nível", "type": "nominal", "title": "Nível" },
      { "aggregate": "count", "title": "Quantidade" }
    ]
  }
};
