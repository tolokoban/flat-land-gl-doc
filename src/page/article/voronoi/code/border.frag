// uniThickness: thickness of the border.
// a:
//     0 is the center of the cell.
//     1 is the border.
float b = clamp((1.0 - a) * uniThickness, 0.0, 1.0);
float c = 1.0 - b;
color = mix(BLACK, color, 1.0 - c * c);
