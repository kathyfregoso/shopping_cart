// get /cart
// post /add-to-cart

import axios from "axios";
const baseUrl = "http://localhost:3001/api/";


const getCart = async () => {
  const request = axios.get(`${baseUrl}cart`);
  // console.log(request.data)
  return request.then((response) => response.data);
};

//   const { productId } = req.body;
const addToCart = async(id) => {
  const request = axios.post(`${baseUrl}add-to-cart`, {productId: id});
  return request.then((response) => response.data);
}

const checkout = async () => {
  const request = axios.post(`${baseUrl}checkout`)
  return request.then(response => response.data)
}

let cartService = {getCart, addToCart, checkout}
export default cartService;

// router.post("/add-to-cart", (req, res, next) => {
//   const { productId } = req.body;
//   Product.findById(productId)
//     .then((product) => {
//       if (product.quantity === 0) {
//         product.error = "No more items";
//         return product;
//       }
//       return Product.findByIdAndUpdate(
//         productId,
//         {
//           quantity: product.quantity - 1,
//         },
//         { new: true }
//       );
//     })
//     .then((updatedProduct) => {
//       CartItem.findOne({
//         productId,
//       })
//         .then((item) => {
//           if (updatedProduct.error) {
//             return item;
//           }
//           if (!item) {
//             return CartItem.create({
//               title: updatedProduct.title,
//               price: updatedProduct.price,
//               quantity: 1,
//               productId,
//             });
//           } else {
//             return CartItem.findOneAndUpdate(
//               { productId },
//               {
//                 quantity: item.quantity + 1,
//               },
//               { new: true }
//             );
//           }
//         })
//         .then((item) => {
//           const { error, ...product } = updatedProduct.toObject();
//           res.json({ product, item });
//         });
//     });
// });


// router.post("/checkout", (req, res) => {
//   CartItem.deleteMany({}).then(() => {
//     res.json();
//   });
// });

// router.get("/cart", (req, res, next) => {
//   CartItem.find({})
//     .then((cartItems) => {
//       res.json(cartItems);
//     })
//     .catch(next);
// });