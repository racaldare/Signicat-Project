import React from 'react';
import OriginalCodeBlock from '@theme-original/CodeBlock';

const PARAMETER_NAME = 'showLineNumbers';

// Process the metastring to determine if line numbers should be shown
function parseShowLineNumbers(metastring?: string): boolean | number {
    if (!metastring) return true;

    const showLineNumbers = metastring.split(' ').find((part) => part.startsWith(`${PARAMETER_NAME}=`));
    if (!showLineNumbers) return true;

    const value = showLineNumbers.split('=')[1].toLocaleLowerCase();
    if (value === 'true') return true;
    if (value === 'false') return false;
    const parsedNumber = parseInt(value, 10);
    return isNaN(parsedNumber) ? true : parsedNumber;
}

export default function CodeBlock(props: any) {
    return <OriginalCodeBlock {...props} showLineNumbers={parseShowLineNumbers(props.metastring)} />;
}
