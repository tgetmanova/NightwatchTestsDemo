# Nightwatch based tests demo

Simple tests against github resource using Nightwatch framework

How to run in Intellij Idea:
1) Edit configuration -> New configuration "Node.js"
2) Node Interpreter = <path_to_node.exe>
3) Working directory = <path_where_nightwatch_config_is_placed> (e.g. nightwatch.conf.js)
4) JavaScript file = <path_to_nightwatch_runner> (smth like ..nodejs\node_modules\nightwatch\bin\runner.js)
5) Application parameters = nightwatch params like these: --config nightwatch.conf.js --test tests\email_tests.js
