// Tablas de la OMS - Percentiles IMC por edad y género
// Valores P5, P85, P95 para determinar categoría

export const percentilesNinos = {
  2:  { p5: 14.7, p85: 17.4, p95: 18.5 },
  3:  { p5: 14.0, p85: 17.0, p95: 18.1 },
  4:  { p5: 13.6, p85: 16.7, p95: 17.8 },
  5:  { p5: 13.4, p85: 16.8, p95: 18.0 },
  6:  { p5: 13.3, p85: 17.1, p95: 18.5 },
  7:  { p5: 13.4, p85: 17.6, p95: 19.2 },
  8:  { p5: 13.6, p85: 18.2, p95: 20.1 },
  9:  { p5: 13.9, p85: 18.9, p95: 21.0 },
  10: { p5: 14.2, p85: 19.6, p95: 22.0 },
  11: { p5: 14.6, p85: 20.4, p95: 23.0 },
  12: { p5: 15.0, p85: 21.2, p95: 24.0 },
  13: { p5: 15.5, p85: 21.9, p95: 24.9 },
  14: { p5: 16.0, p85: 22.6, p95: 25.7 },
  15: { p5: 16.5, p85: 23.3, p95: 26.4 },
  16: { p5: 17.0, p85: 23.9, p95: 27.1 },
  17: { p5: 17.5, p85: 24.4, p95: 27.6 },
}

export const percentilesNinas = {
  2:  { p5: 14.4, p85: 17.1, p95: 18.3 },
  3:  { p5: 13.8, p85: 16.7, p95: 17.9 },
  4:  { p5: 13.4, p85: 16.5, p95: 17.7 },
  5:  { p5: 13.2, p85: 16.6, p95: 17.9 },
  6:  { p5: 13.1, p85: 17.0, p95: 18.5 },
  7:  { p5: 13.2, p85: 17.5, p95: 19.2 },
  8:  { p5: 13.4, p85: 18.2, p95: 20.2 },
  9:  { p5: 13.7, p85: 19.0, p95: 21.3 },
  10: { p5: 14.1, p85: 19.9, p95: 22.4 },
  11: { p5: 14.6, p85: 20.9, p95: 23.5 },
  12: { p5: 15.2, p85: 21.8, p95: 24.5 },
  13: { p5: 15.8, p85: 22.6, p95: 25.4 },
  14: { p5: 16.4, p85: 23.3, p95: 26.1 },
  15: { p5: 16.9, p85: 23.9, p95: 26.7 },
  16: { p5: 17.3, p85: 24.3, p95: 27.1 },
  17: { p5: 17.7, p85: 24.7, p95: 27.4 },
}

export function calcularPercentilAproximado(imc, edad, genero) {
  const tabla = genero === 'masculino' ? percentilesNinos : percentilesNinas
  const valores = tabla[edad]

  if (imc < valores.p5)  return { percentil: '< 5',  categoria: 'Bajo peso' }
  if (imc < valores.p85) return { percentil: '5-84',  categoria: 'Peso saludable' }
  if (imc < valores.p95) return { percentil: '85-94', categoria: 'Sobrepeso' }
  return                          { percentil: '≥ 95',  categoria: 'Obesidad' }
}