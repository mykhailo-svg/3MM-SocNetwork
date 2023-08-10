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

            if (i <= steps.length) {
                return i;
            }
            return i - 1
        });
    }
    function goTo(index: number) {
        setCurrentStepIndex(index);
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        goTo,
        previoustStep,
        nextStep,
    }
}