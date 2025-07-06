const tf = require("@tensorflow/tfjs-node");

// scalar
const scalar = tf.scalar(3)
scalar.print();

/*
çıktı:

Tensor
    3
 */


// vectorel
// [70,90,98]
const vector = tf.tensor1d([70,90,98]);
vector.print()

/*
çıktı:

Tensor
    [70, 90, 98]
 */


// matrisler
/* [
      [70,90,98],
      [90,85,40]
   ]
 */

const matrix = tf.tensor2d([
    [70,90,98],
    [90,85,40]
]);

matrix.print();

/*
    çıktı:

Tensor
    [[70, 90, 98],
     [90, 85, 40]]
 */
