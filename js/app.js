import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

// Clonamos el primer estudiante y modificamos el nombre
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Unimos todo en un solo arreglo
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);

const ulReportes = document.querySelector("#reportes");

todos.forEach(estudiante => {
    const lineaReporte = reporte(estudiante);
    console.log(lineaReporte);
    ulReportes.innerHTML += `<li>${lineaReporte}</li>`;
});
