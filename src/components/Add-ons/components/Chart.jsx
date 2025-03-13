import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const Chart = ({ sections, onSelectStage }) => {
  const width = 500;
  const height = 500;
  const radius = 200;

  useEffect(() => {
    d3.select("#plc-chart").selectAll("*").remove();

    const svg = d3
      .select("#plc-chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie().value(() => 1);
    const arc = d3.arc().innerRadius(100).outerRadius(radius);

    svg
      .selectAll("path")
      .data(pie(sections))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => d.data.color)
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .on("mouseover", function (event, d) {
        onSelectStage(d.data);
        d3.select(this).transition().duration(200).attr("opacity", 0.7);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(200).attr("opacity", 1);
      })
      .on("click", function (event, d) {
        onSelectStage(d.data);
      });

    const labelArc = d3.arc().innerRadius(130).outerRadius(radius);

    svg
      .selectAll("text")
      .data(pie(sections))
      .enter()
      .append("text")
      .attr("transform", (d) => {
        const centroid = arc.centroid(d);
        return `translate(${centroid[0] * 1}, ${centroid[1] * 1})`;
      })
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("fill", "white")
      .style("font-size", "16px")
      .style("font-weight", "normal")
      .style("stroke", "#fff")
      .text((d) => d.data.name.split(" ")[0]);
  }, [sections]);

  return <div id="plc-chart"></div>;
};

export default Chart;
