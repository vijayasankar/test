$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("coop.feature");
formatter.feature({
  "line": 1,
  "name": "To test the feature in Co-op money",
  "description": "",
  "id": "to-test-the-feature-in-co-op-money",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1699623743,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Create a new quote",
  "description": "",
  "id": "to-test-the-feature-in-co-op-money;create-a-new-quote",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am in Coop money home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click Quotes link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be in Quotes home page",
  "keyword": "Then "
});
formatter.match({
  "location": "NewSteps.i_am_in_Coop_money_home_page()"
});
formatter.result({
  "duration": 3306850293,
  "status": "passed"
});
formatter.match({
  "location": "NewSteps.i_click_Quotes_link()"
});
formatter.result({
  "duration": 9092742426,
  "status": "passed"
});
formatter.match({
  "location": "NewSteps.i_should_be_in_Quotes_home_page()"
});
formatter.result({
  "duration": 53236201,
  "status": "passed"
});
formatter.after({
  "duration": 1001383262,
  "status": "passed"
});
});