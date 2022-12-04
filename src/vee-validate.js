import { extend } from "vee-validate";

extend("decimal", {
    validate: (value, { decimals = "*", separator = "." } = {}) => {
        if (value === null || value === undefined || value === "") {
            return {
                valid: false,
            };
        }
        if (Number(decimals) === 0) {
            return {
                valid: /^-?\d*$/.test(value),
            };
        }
        const regexPart = decimals === "*" ? "+" : `{1,${decimals}}`;
        const regex = new RegExp(
            `^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`
        );

        return {
            valid: regex.test(value),
        };
    },
});

extend("englishLettersAndNumbersOnly", {
    validate: (value) => {
        const regex = new RegExp(`^[a-zA-Z0-9$@$!%*?&#^-_. +]+$`);

        return {
            valid: regex.test(value),
        };
    },
});

extend("arabicLettersAndNumbersOnly", {
    validate: (value) => {
        const regex = new RegExp(`^[\u0621-\u064A0-9$@$!%*?&#^-_. + ]+$`);

        return {
            valid: regex.test(value),
        };
    },
});
extend("numbersOnly", {
    validate: (value) => {
        const regex = new RegExp(`^[0-9]{1,2}$`);

        return {
            valid: regex.test(value),
        };
    },
});
extend("15numbersOnly", {
    validate: (value) => {
        const regex = new RegExp(`^[0-9]{15}$|^[0-9]{9}$`);

        return {
            valid: regex.test(value),
        };
    },
});
extend("anyNumbersOnly", {
    validate: (value) => {
        const regex = new RegExp(`^[0-9]+$|^[\u0660-\u0669]+$`);

        return {
            valid: regex.test(value),
        };
    },
});

extend("positive", (value) => {
    return value >= 0;
});

extend("englishLettersOnly", {
    validate: (value) => {
        const regex = new RegExp(`^[a-zA-Z\\s]*$`);

        return {
            valid: regex.test(value),
        };
    },
    message: "Name must be English character",
});
extend("englishLettersOnlyNoSpace", {
    validate: (value) => {
        const regex = new RegExp(`^[A-Za-z]+$`);

        return {
            valid: regex.test(value),
        };
    },
});
extend("url", {
    validate: (value) => {
        const regex = new RegExp(
            `http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+`
        );

        return {
            valid: regex.test(value),
        };
    },
});
