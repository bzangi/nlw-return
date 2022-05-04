import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Bug',
        image: {
            source: bugImageUrl,
            alt: 'Bug image',
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Lamp image',
        }
    },
    OTHER: {
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt: 'Thought cloud image',
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setfeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback() {
        setfeedbackType(null);
    }
    
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setfeedbackType} />
            ) : (
                <FeedbackContentStep 
                feedbackType={feedbackType} 
                onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
                Made with much effort by <a className="underline underline-offset-2 hover:text-brand-500" href="https://github.com/bzangi">bzangi</a>
            </footer>
        </div>
    )
}