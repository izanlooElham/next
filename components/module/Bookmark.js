"use client"
import styles from "./Bookmark.module.css"
import { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { GoBookmarkFill } from "react-icons/go";

const BOOKMARK_PRODUCT =gql`
mutation BookmarkProduct($productID: String!) {
  BookmarkProduct(productID: $productID) {
    statusCode
    data
  }
}
`
function BookMark({id, bookmarks}) {
    const [bookmark, setBookmark]=useState(false)
    const [BookmarkProduct, {loading, data , error, called}]= useMutation(
        BOOKMARK_PRODUCT,
        {
          variables:{
            productID : id
          }
          // onCompleted:(data) => {
          //   if (data.BookmarkProduct.statusCode === 200) {
          //     handleBookmarkedList(_id); // Call your handler on successful bookmark
          //   }}
        }
      )
    const bookmarkHandler=()=>{
      setBookmark((bookmark)=>!bookmark)
      BookmarkProduct()
    }
  return (
    <button onClick={bookmarkHandler}  className={styles.bookmarkBTN} >
    <div className={styles.bookmarksLength}>{bookmarks.length}</div>
    <GoBookmarkFill className={`${styles.bookmarkIcon} ${bookmark ? styles.bookmarked : ''}`} style={{fontSize:"26px"}}/>
  </button>
  )
}

export default BookMark