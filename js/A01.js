/*
  A01: Realizar un algoritmo que pida los coeficientes de
  una ecuación de 2º grado, y de las posibles soluciones reales.
  Si no existen reales, debe indicarlo.

  x = -b +- (sqrt(b^2-4ac))/2a

*/

function equacionSegundo(A,B,C){

  var raiz = Math.sqrt(Math.pow(B, 2) - (4*A*C));
  var x1 = (-B + raiz);
  var x2 = (-B - raiz);

  x1 = x1 / (2*A);
  x2 = x2 / (2*A);

  return {"x1":x1, "x2":x2};
}
