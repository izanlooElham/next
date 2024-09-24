const { gql } = require("@apollo/client");

const LIKE_PRODUCT =gql`
mutation LikeProduct($productID: String!) {
  LikeProduct(productID: $productID) {
    statusCode
    data
  }
}
`