// Assuming 'parent' is the reference field on ChildTable linking to ParentTable.
var parent = current.parent;
if (parent) {
  var gr = new GlideRecord("planned_task_baseline");
  gr.addQuery("u_baseline_name", parent);
  gr.query();

  var validRecords = [];
  while (gr.next()) {
    validRecords.push(gr.getUniqueValue());
  }
}

// Use the 'IN' query condition to limit the options to only the valid records.
current.addQuery("sys_id", "IN", validRecords.join(","));
