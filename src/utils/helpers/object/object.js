export const isStrictlyObject = (property) =>
    typeof property === 'object' &&
    !Array.isArray(property) &&
    property !== null

export const objectToArrayOfObjects = (object) =>
    Object.entries(object).map((e) => ({ property: e[0], value: e[1] }));