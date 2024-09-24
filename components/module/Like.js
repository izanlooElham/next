"use client";

import styles from "./Like.module.css";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client"; // Import statement corrected
import { FaHeart } from "react-icons/fa";

const LIKE_PRODUCT = gql`
  mutation LikeProduct($productID: String!) {
    LikeProduct(productID: $productID) {
      statusCode
      data
    }
  }
`;

function Like({ likes, id }) {
  const [like, setLike] = useState(false); // Assuming likes is an array of liked product IDs);
  
  // Define like mutation using useMutation hook
  const [LikeProduct, { loading, data, error, called }] = useMutation(LIKE_PRODUCT, {
    variables: {
      productID: id,
    },
    onCompleted: (data) => {
      if (data.LikeProduct.statusCode === 200) {
        setLike((prev) => !prev); // Toggle the like state
      }
    },
  });
  console.log({data, error , loading, called})

  return (
    <button onClick={() => LikeProduct({ variables: { productID: id } })} className={styles.likeBTN} disabled={loading}>
      <FaHeart className={`${styles.heartIcon} ${like ? styles.liked : ''}`} style={{ fontSize: "26px" }} />
      <div className={styles.likesLength}>{likes.length}</div>
      {loading && <span>Loading...</span>}
      {error && <span className={styles.error}>Error: {error.message}</span>}
    </button>
  );
}

export default Like;