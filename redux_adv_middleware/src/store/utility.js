export const updateOjbect = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    };
};