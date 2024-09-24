import { getAllStories } from '@/services/stories'
import StoryCard from './StoryCard'
import styles from "./Stories.module.css"




async function Stories() {

  const {response}=await getAllStories()
  const stories= response.data.data.stories
  return (
    <div className={styles.container}>
      {
        response.data.data.stories.map(story=>{
         return <StoryCard story={story} key={story._id} stories={stories}/>
        })
      }
    </div>
  )
}

export default Stories