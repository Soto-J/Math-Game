function getInputValue(elementId: string): string {
  const inputEl = <HTMLInputElement>document.getElementById(elementId);

  return inputEl.value;
}

function logger(message: string): void {
  console.log(message);
}

export { getInputValue, logger };
