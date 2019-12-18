float distSquared(vec2 a, vec2 b) {
  float x = abs(fract(a.x) - b.x);
  if (x > .5) x = 1.0 - x;
  float y = abs(fract(a.y) - b.y);
  if (y > .5) y = 1.0 - y;

  return x*x + y*y;
}
