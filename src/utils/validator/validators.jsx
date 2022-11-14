import React from "react";

export const required = (value) => {
    if (value) return undefined;
    return "fild is required"
}

export const maxLengthCreator = (maxLength) => (value) => { 
    if (value.length < maxLength) return undefined
    return `max length is ${maxLength} simbols`
}