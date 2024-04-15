import { FeedWrapper } from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import {  getUserProgress, getUserSubscription } from '@/db/queries';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import React from 'react'
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const QuestsPage = async() => {

    const userProgressPromise = getUserProgress();
    const userSubscriptionPromise = getUserSubscription();

    const [
        userProgress,
        userSubscription,
    ] = await Promise.all([
        userProgressPromise,
        userSubscriptionPromise,
    ]);

    if(!userProgress || !userProgress.activeCourse){
        redirect('/courses')
    }

    const isPro = !!userSubscription?.isActive;

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
        <StickyWrapper>
            <UserProgress
             activeCourse={userProgress.activeCourse}
             hearts={userProgress.hearts}
             points={userProgress.points}
             hasActiveSubscription={isPro}
            />
        </StickyWrapper>
        <FeedWrapper>
            <div className='w-full flex flex-col items-center'>
                <Image
                 src="/quests.svg"
                 alt='Quests'
                 height={90}
                 width={90}
                />
            <h1 className='text-center font-bold text-neutral-800 text-2xl my-6'>
                Quests
            </h1>
            <p className='text-muted-foreground text-center text-lg mb-6'>
                Complete quests by earning points
            </p>
            {/* TODO  : Add Quests */}
            </div>
        </FeedWrapper>
    </div>
  )
}

export default QuestsPage;