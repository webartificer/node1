var luminosity = function(r,g,b) {
    return (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
};


if (luminosity(process.argv[2],process.argv[3],process.argv[4]) > 155){
    console.log('light');
}

else {
    console.log('dark');
}
