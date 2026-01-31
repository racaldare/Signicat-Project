---
sidebar_position: 3
---

# JSX Line Numbering

Another Example for JSX

## Default

This code block will look for showLineNumbers parameter in the metastring and will enable if nothing found or set to true. It will also disable line numbering if specifically indicated as false.

```jsx
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
```
