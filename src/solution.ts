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

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    const compiledResult = `Name: ${this.name}, Age: ${this.age}`;
    return compiledResult;
  }
}

type TItem = {
  title: string;
  rating: number;
};

function filterByRating(items: TItem[]): TItem[] {
  const result = items.filter((item) => item.rating >= 4);
  return result;
}



type TUsers = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: TUsers[]): TUsers[] {
  const result = users.filter((user) => user.isActive);
  return result;
}

