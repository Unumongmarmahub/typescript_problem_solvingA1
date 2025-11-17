function formatValue(acceptedParameter: string | number | boolean) {
  if (typeof acceptedParameter === "string") {
    return acceptedParameter.toUpperCase();
  } else if (typeof acceptedParameter === "number") {
    return acceptedParameter * 10;
  } else if (typeof acceptedParameter === "boolean") {
    return !acceptedParameter;
  }
}



