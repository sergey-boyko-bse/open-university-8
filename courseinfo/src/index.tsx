import React from "react";
import ReactDOM from "react-dom";

interface HeaderProps {
  courseName: string;
}

interface ContentProps {
  parts: CoursePart[];
}

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartWithDescriptionBase extends CoursePartBase {
  description: string;
}

interface CoursePartOne extends CoursePartWithDescriptionBase {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartWithDescriptionBase {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursePartWithDescriptionBase {
  name: "Custom";
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;

interface TotalProps {
  exerciseCount: number;
}

const Header: React.FC<HeaderProps> = ({ courseName }) => {
  return (
    <h1>{courseName}</h1>
  );
}

const Content: React.FC<ContentProps> = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.name} part={part} />)}
    </div>
  );
}

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
  switch(part.name) {
    case 'Fundamentals':
      return <p>Name: {part.name}, Exercise Count: {part.exerciseCount}</p>;
    case 'Using props to pass data':
      return <p>Name: {part.name}, Exercise Count: {part.exerciseCount}, Group Project Count: {part.groupProjectCount}</p>;
    case 'Deeper type usage':
      return <p>Name: {part.name}, Exercise Count: {part.exerciseCount}, Exercise Submission Link: {part.exerciseSubmissionLink}, Description: {part.description}</p>;
    case 'Custom':
      return <p>Name: {part.name}, Exercise Count: {part.exerciseCount}</p>;
    default:
      return assertNever(part);
  }
}

const Total: React.FC<TotalProps> = ({ exerciseCount }) => {
  return (
    <p>
        Number of exercises {exerciseCount}
    </p>
  );
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    },
    {
      name: "Custom",
      exerciseCount: 11,
      description: "This is a custom course part"
    }
  ];

  return (
    <div>
      <Header courseName={courseName} />
      <Content parts={courseParts} />
      <Total exerciseCount={courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));