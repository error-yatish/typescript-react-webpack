import * as React from 'react';

interface FuncProps {
    firstName: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const FunctionalComponent: React.FunctionComponent<FuncProps> = ({ firstName, enthusiasmLevel, onIncrement, onDecrement }: FuncProps) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    const [currentEnthusiasm, setEnthusiasm] = React.useState<number>(enthusiasmLevel || 1)

    return <div>
        <h3>Hello, {firstName + " " + getExclamationMarks(enthusiasmLevel)}</h3>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
    </div>;
}

export default FunctionalComponent;

// helpers

let getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
}