/* Assigning the action of creating a new record in "u_diagnostics_page" 
to the variable "gr"*/
var gr = new GlideRecord("u_diagnostics_page");
var diag = new Diagnostics();
// While loop iterating through all existing nodes //
while (diag.nextNode()) {
  // Targets the node //
  var diagNode = diag.getNode();
  // Declares variable nodeName //
  var nodeName = diagNode.name;
  // Declares variable errors //
  var errors = diagNode.stats["servlet.errors.handled"];
  // Declares variable transactions //
  var transactions = diagNode.stats["servlet.transactions"];
  // Declares variable loggedUsers //
  var loggedUsers = diagNode.stats.sessionsummary["@logged_in"];
  // Declares variable status //
  var status;
  /* This is a ternary operator.  Essentially a condensed if else statement.
   It states that if the status of the current node is "online" then the corresponding
   field in the form gets set to "online" and vice versa. */
  diagNode.status == "online" ? (status = "online") : (status = "offline");

  // Initiates a new record in table referenced in line 1 //
  gr.newRecord();
  // Assigns variable nodeName to corresponding field in table //
  gr.u_node_name = nodeName;
  // Assigns variable errors to corresponding field in table //
  gr.u_errors = errors;
  // Assigns variable transactions to corresponding field in table //
  gr.u_transactions = transactions;
  // Assigns variable loggedUsers to corresponding field in table //
  gr.u_logged_in_users = loggedUsers;
  // Assigns variable status to corresponding field in table //
  gr.u_status = status;
  // Inserts record into table //
  gr.insert();
}
