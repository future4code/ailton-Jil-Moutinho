```javascript
function calculaPrecoTotal(quantidade) {
let total = 0;
if (quantidade < 12){
  total = quantidade * 1.30;
} else {
  total = quantidade * 1.00;
}
return total;
}
```