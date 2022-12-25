function sides(literals, ...expressions) {
  const [x, y] = expressions;
  return [
    (p - Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4,
    (p + Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4,
  ];
}
//не окончен 
