import { useEffect, useState } from "react";
import { useOnlyOnUpdateEffect } from "../../../hooks";
import { funnel001 } from "../funnel-what";

const defaultStep = 1;
const defaultAnswer = "";
const defaultAnswers = {
  step: 1,
  answers: {},
};

const buildAnswersObject = (prev, currentStep, stepData, answer) => {
  return {
    ...prev,
    step: currentStep,
    answers: { ...prev.answers, [stepData.question]: answer },
  };
};

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const initialStep = (answers) => answers?.step || defaultStep;
const initialAnswers = (id, teaser) => (!teaser && getLocalStorage(id)) || defaultAnswers;
const initialAnswer = (answers, question) => answers[question] || defaultAnswer;
const initialStepData = (currentStep) => funnel001.find(({ step }) => step === currentStep);
const initialCompletion = (currentStep) => ((currentStep -1) / funnel001.length) * 100; 

export default function useFunnel(funnelId, onSubmit, teaser) {
  const [answers, setAnswers] = useState(() => initialAnswers(funnelId, teaser));
  const [currentStep, setCurrentStep] = useState(() => initialStep(answers));
  const [stepData, setStepData] = useState(() => initialStepData(currentStep));
  const [answer, setAnswer] = useState(() => initialAnswer(answers.answers, stepData.question));
  const [completion, setCompletion] = useState(() => initialCompletion(currentStep));

  const updateAnswers = () => {
    setAnswers((prev) => {
      const next = buildAnswersObject(prev, currentStep, stepData, answer);
      setLocalStorage(funnelId, next);
      return next;
    });
  };

  const updateStep = (step) => {
    setCurrentStep(step);
    setStepData(initialStepData(step));
    setCompletion(initialCompletion(step));
  };

  const updateAnswer = (answer) => {
    setAnswer(answer);
  };

  // TODO: fixa ref så den inte körs på intial render bara update.
  useOnlyOnUpdateEffect(() => {
    updateAnswers();
  }, [answer, currentStep]);

  // TODO: tror denna kommer köras på initial render plus att answers kommer uppdateras en gång i början.
  useOnlyOnUpdateEffect(() => {
    // kolla om step har sats till det sista available stepet, om så kör onSubmit
    // Eller om funnel är av typen teaser, om så kör onSubmit funktion
    if (completion || teaser) {
      onSubmit && onSubmit();
    };
  }, [answers]);

  return {
    stepData,
    currentStep,
    updateStep,
    updateAnswer,
    completion
  };
}
