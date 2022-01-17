import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Chart from "../components/Chart";
import { gpuData } from "/gpu-data";
import { newGpuData } from "../newGpuData";
import Header from "../components/Header";
import ChartSelector from "../components/ChartSelector";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { amdGpus } from "../amdGpuData";

export default function Home() {
  const [nvidiaCards, setNvidiaCards] = useState([]);

  const [value, setValue] = useState(true);

  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "Model", headerName: "Model", width: 150 },
    { field: "Benchmark", headerName: "Benchmark", width: 150 },
  ];

  useEffect(() => {}, []);

  return (
    <div className="mainContainer">
      <Header />
      <div className="dataGridContainer">
        <DataGrid
          rows={value ? newGpuData : amdGpus}
          columns={columns}
          style={{}}
        />
      </div>

      <div className="chartContainer">
        <ChartSelector value={value} setValue={setValue} />
        <Chart value={value} setValue={setValue} />
      </div>
    </div>
  );
}
