import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);


    function nextStep() {
        setCurrentStepIndex(i => {

            if (i > steps.length) {
                return i;
            }
            return i + 1
           
        });
    }
    function previoustStep() {
        setCurrentStepIndex(i => {

            // if (i <= steps.length) {
            //     return i;
            // }
            return i - 1
        });
    }
    function goTo(index: number) {
        setCurrentStepIndex(index);
    }
    const isFirst = ()=>{
        if (currentStepIndex === 0) {

            return true
            
        }
        else return false
    }
    const isLast = ()=>{
        if (currentStepIndex === steps.length - 1) {

            return true
            
        }
        else return false
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        goTo,
        previoustStep,
        nextStep,
        isFirst,
        isLast
    }
}