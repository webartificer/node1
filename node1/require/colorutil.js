var luminosity = function(r,g,b) {
    return (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
};


var darkenColorComponent = function(color){
    return color * 0.8;
};


var darkenRGB = function(r, g, b){
    return {
        r: darkenColorComponent(r),
        g: darkenColorComponent(g),
        b: darkenColorComponent(b)
    };
};


module.exports = {
    luminosity: luminosity,
    darken: darkenRGB
};
