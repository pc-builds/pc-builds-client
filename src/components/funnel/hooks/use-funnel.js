import { useEffect, useState } from "react";
import { funnel001 } from "../funnel-what";

const defaultStep = 1;
const defaultAnswer = [];
const defaultAnswers = {
  step: 1,
  answers: {},
};

const buildAnswersObject = (prev, currentStep, question, answer) => ({
  ...prev,
  step: currentStep,
  answers: answer.length > 0
    ? { ...prev.answers, [question]: answer } 
    : { ...prev.answers },
});

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getStep = (answers, teaser) => (teaser && defaultStep) || answers?.step;
const getAnswers = (id) => getLocalStorage(id) || defaultAnswers;
const getAnswer = (answers, question, teaser) => (teaser || !answers[question]) ? defaultAnswer : answers[question];
const getStepData = (currentStep) => funnel001.find(({ step }) => step === currentStep);
const getCompletion = (currentStep) => (currentStep / funnel001.length) * 100; 

export default function useFunnel(funnelId, teaser, initialAnswers) {
  const [answers, setAnswers] = useState(() => initialAnswers || getAnswers(funnelId));
  const [currentStep, setCurrentStep] = useState(() => getStep(answers, teaser));
  const [stepData, setStepData] = useState(() => getStepData(currentStep));
  const [answer, setAnswer] = useState(() => getAnswer(answers.answers, stepData.question, teaser));
  const [completion, setCompletion] = useState(() => getCompletion(currentStep));

  useEffect(() => {
    if(!!initialAnswers) {
      setLocalStorage(funnelId, initialAnswers);
      window.history.replaceState({}, document.title);
    }
  }, [initialAnswers, funnelId]);

  const updateAnswers = (newAnswer, newStep) => {
    setAnswers((prev) => {
      const next = buildAnswersObject(prev, newStep, stepData.question, newAnswer);

      setLocalStorage(funnelId, next);
      return next;
    });
  };

  const updateStep = (step) => {
    setCurrentStep(step);
    updateAnswers(answer, step);
    setStepData(getStepData(step));
    setCompletion(getCompletion(step));
    setAnswer(getAnswer(
      answers.answers, 
      getStepData(step).question
    ));
  };

  const updateAnswer = (answer, remove) => {
    setAnswer((prev) => {
      if (remove) {
        return prev.filter((a) => a !== answer);
      } else if (stepData.answerType === 'multi-select') {
        return [...prev, answer];
      } else {
        return [answer];
      }
    });
  };

  return {
    stepData,
    currentStep,
    updateStep,
    updateAnswer,
    completion,
    buildAnswersObject,
    answers,
    answer,
  };
}
