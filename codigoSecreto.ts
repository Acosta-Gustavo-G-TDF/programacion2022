let arr, ocu; //la variable elem se repite
let elem: number = Number(prompt('Ingrese tamaño: ')); 
arr = new Array(elem); 
cargar(arr, elem); 
let nro:number= Number(prompt('Ingrese numero: ')); 
ocu = metodo(arr, elem, nro); 
console.log("El número "+nro+" ... "+ocu); 
mostrar(arr, elem);

function cargar(v,l):void 
{ for (let i:number=0; i<l; i++) //la variable i se debe declarar como number
  v[i]=Math.floor(Math.random()*100);

  function mostrar(v,l):void {
  let c:string=""; for (let i: number=0; i<l; i++)
  c+=v[i]+" "; console.log();
}

  function metodo(v,l,n): number { //no retorna nada, por lo que debe ser de tipo void
  let oc:number; 
  for (let i:number=0; i<l; i++){ //no se declara la variable i y faltan llaves
    if (v[i]=n) 
    oc++
  }
  return oc;
}