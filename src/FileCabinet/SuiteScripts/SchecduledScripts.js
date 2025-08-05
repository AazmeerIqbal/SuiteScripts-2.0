/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */

define(["N/search", "N/log", "N/record"], (search, log, record) => {
  const SAVED_SEARCH_NAME = "Custom Employee Active List";

  const execute = (context) => {
    try {
      // Create a saved search object
      const mySearch = search.create({
        type: search.Type.EMPLOYEE,
        title: SAVED_SEARCH_NAME,
        id: "customsearch_active_employee_list",
        filters: [["isinactive", "is", "F"]],
        columns: [
          search.createColumn({ name: "internalid" }),
          search.createColumn({ name: "entityid" }),
          search.createColumn({ name: "email" }),
          search.createColumn({ name: "hiredate" }),
        ],
      });

      // Save the search
      const savedSearchId = mySearch.save();
      log.audit("Saved Search Created", `ID: ${savedSearchId}`);
    } catch (error) {
      log.error("Error creating saved search", error);
    }
  };

  return { execute };
});
