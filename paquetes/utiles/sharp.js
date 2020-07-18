const sharp = require('sharp');

sharp('Screen Shot 2020-07-07 at 11.44.29 AM copy.png')
    .resize(80)
    .grayscale()
    .toFile('resize.png')