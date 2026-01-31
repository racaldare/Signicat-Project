---
sidebar_position: 1
---

# Intro

I will use Docu to present you a small guide through the solution.

## Line numbering

Firstly, I decided to use a wrapper for Docu default CodeBlock component and set showLineNumbers as true by default. Moreover, I offered the option to disable or change numbering starting position.

```jsx
import React from "react";
import OriginalCodeBlock from "@theme-original/CodeBlock";

// Process the metastring to determine if line numbers should be shown
function parseShowLineNumbers(metastring?: string): boolean | number {
  if (!metastring) return true;

  const showLineNumbers = metastring
    .split(" ")
    .find((part) => part.startsWith("showLineNumbers="));
  if (!showLineNumbers) return true;

  const value = showLineNumbers.split("=")[1].toLocaleLowerCase();
  if (value === "true") return true;
  if (value === "false") return false;
  const parsedNumber = parseInt(value, 10);
  return isNaN(parsedNumber) ? true : parsedNumber;
}

export default function CodeBlock(props: any) {
  return (
    <OriginalCodeBlock
      {...props}
      showLineNumbers={parseShowLineNumbers(props.metastring)}
    />
  );
}
```

### Potential Risks

This approach has a risk due to usage of Docu's internal parameters that could potentially change. However, this is light modification, so I am willing to accept the risk as it could be easily fixed in the future with proper documentation and maintenance. Currently, **PARAMETER_NAME** constant is used to easily adjust the parameter subject to change

## Extra miles

- Added two different versions to demo the concept. I am willing to learn to delivery results quickly.
- Linked Docu to GitHub, so in theory (testing after this commit) anyone with access will be able to edit in GitHub.
