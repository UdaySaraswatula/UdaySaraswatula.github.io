/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
let dateTimePrefs = {};
const setDateTimePreferences = (options) => {
    dateTimePrefs = Object.freeze(options);
};
const getDateTimePreferences = () => {
    return dateTimePrefs;
};

export { getDateTimePreferences, setDateTimePreferences };
