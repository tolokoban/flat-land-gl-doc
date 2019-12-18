// dA: distance to the nearest control point
// dB: distance to the second nearest control point
float a = 2.0 * dA / (dA + dB);
// uniLight: 0 (flat surface) and 1 (maximum reflection).
vec3 white = mix(colorA, WHITE, uniLight);
color = mix(white, colorA, a);
