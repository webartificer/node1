// a program that takes a color and returns the luminosity of that color using the following formula: luminosity = 0.2126*r + 0.7152*g + 0.0722*b

var luminosity = function(r,g,b) {
    return (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
};

console.log(luminosity(process.argv[2],process.argv[3],process.argv[4]));
