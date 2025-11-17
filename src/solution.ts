function formatValue(acceptedParameter: string | number | boolean) {
  if (typeof acceptedParameter === "string") {
    return acceptedParameter.toUpperCase();
  } else if (typeof acceptedParameter === "number") {
    return acceptedParameter * 10;
  } else if (typeof acceptedParameter === "boolean") {
    return !acceptedParameter;
  }
}

function getLength(parameter: string | string[] | number[]) {
  if (typeof parameter === "string") {
    return parameter.length;
  } else if (typeof parameter) {
    return parameter.length;
  }
}
