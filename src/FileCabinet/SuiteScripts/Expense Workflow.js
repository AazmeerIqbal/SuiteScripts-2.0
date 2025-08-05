/**
 * @NApiVersion 2.1
 * @NScriptType WorkflowActionScript
 */
define(["N/record", "N/runtime"], /**
 * @param{record} record
 * @param{runtime} runtime
 */ (record, runtime) => {
  /**
   * Defines the WorkflowAction script trigger point.
   * @param {Object} scriptContext
   * @param {Record} scriptContext.newRecord - New record
   * @param {Record} scriptContext.oldRecord - Old record
   * @param {string} scriptContext.workflowId - Internal ID of workflow which triggered this action
   * @param {string} scriptContext.type - Event type
   * @param {Form} scriptContext.form - Current form that the script uses to interact with the record
   * @since 2016.1
   */
  const onAction = (context) => {
    var workflowTotal = runtime.getCurrentScript().getParameter({
      name: "",
    });

    var expReg = context.newRecord;
    var expenseCount = expReg.getLineCount({
      sublistId: "expense",
    });

    var empId = expRegRecord.getValue({
      fieldId: "entity",
    });

    var notes =
      "Workflow Total: " +
      workflowTotal +
      "\n" +
      "Expense Count: " +
      expenseCount;

    var epmloyee = record.load({
      type: record.Type.EMPLOYEE,
      id: empId,
    });

    epmloyee.setValue({
      fieldId: "comments",
      notes,
    });

    epmloyee.save();

    if (!epmloyee) {
      return "failed";
    }
    return "success " + empId;
  };

  return { onAction };
});
