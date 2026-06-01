

const DATA_URL =
  "https://raw.githubusercontent.com/nazareno/fpcc2/refs/heads/master/02-EDA-parte-2/dados/capes-cacc.csv";

const embedOpts = {
  actions: false,
  renderer: "svg",
  config: {
    background: "transparent",
    font: "DM Sans",
    axis: {
      labelFont: "DM Sans",
      titleFont: "DM Sans",
      labelFontSize: 12,
      titleFontSize: 13,
      gridColor: "#2d3561",
      domainColor: "#2d3561",
      tickColor: "#2d3561",
      labelColor: "#94a3b8",
      titleColor: "#94a3b8"
    },
    legend: {
      labelFont: "DM Sans",
      titleFont: "DM Sans",
      labelFontSize: 12,
      titleFontSize: 12,
      labelColor: "#94a3b8",
      titleColor: "#94a3b8"
    },
    title: {
      font: "DM Serif Display",
      fontSize: 15,
      color: "#e2e8f0"
    },
    view: { stroke: "transparent" }
  }
};
