export const isStrictlyObject = (property) => 
    typeof property === 'object' &&
    !Array.isArray(property) &&
    property !== null 