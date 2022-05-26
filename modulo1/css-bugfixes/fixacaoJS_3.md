```javascript
function calculaNota(ex, p1, p2) {
let nota = 0;
nota = (ex + (p1 * 2) + (p2 * 3))/6;
let notaEmLetra = "Não calculada"
if (nota >= 9){
  notaEmLetra = "A";
} else if (nota >= 7.5 && nota<9){
  notaEmLetra = "B";
} else if (nota < 7.5 && nota>=6){
  notaEmLetra = "C";
} else {
  notaEmLetra = "D"; 
}
return notaEmLetra;
}
```