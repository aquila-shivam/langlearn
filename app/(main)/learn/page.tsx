import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { Header } from "./header"
import { UserProgress } from "@/components/user-progress"
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from "@/db/queries"
import { redirect } from "next/navigation"
import { Unit } from "./unit"
import { userSubscription } from "@/db/schema"
import { Promo } from "@/components/promo"
import { Quests } from "@/components/quests"

const LearnPage = async() => {

  const userProgressPromise = getUserProgress();
  const courseProgressPromise = getCourseProgress();
  const lessonPercentagePromise = getLessonPercentage();
  const unitsPromise = getUnits();
  const UserSubscriptionPromise = getUserSubscription();

  const [
    userProgress,
    units,
    courseProgress,
    lessonPercentage,
    userSubscription
  ] = await Promise.all([
    userProgressPromise,
    unitsPromise,
    courseProgressPromise,
    lessonPercentagePromise,
    UserSubscriptionPromise
  ]);

  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses");
  }

  if(!courseProgress){
    redirect('/course');
  }

  const isPro = !!userSubscription?.isActive


  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
      {!isPro 
      && <Promo/> 
      }
      <Quests points={userProgress.points}/>
      </StickyWrapper>

      <FeedWrapper>
        <Header title={userProgress.activeCourse.title}/>
        {units.map((unit)=>(
          
          <div key={unit.id} className="mb-10">
            <Unit
              id = {unit.id}
              order = {unit.order}
              description = {unit.description}
              title = {unit.title}
              lessons = {unit.lessons}
              activeLesson = {courseProgress.activeLesson}
              activeLessonPercentage = {lessonPercentage}

            />
          </div>

        ))}
      </FeedWrapper>
    </div>
  )
}

export default LearnPage