# How to use MongoDB in Docker?

* step-1: docker ps </br>
this will show all running containers </br>
* step-2: docker exec -it user_db_c mongosh </br>
this will open mongodb shell </br>
now we can apply all mongodb shell commands

> MongoDB Shell Commands:

* show dbs </br>
this will show all databases
* use db_name </br>
this will use a db
* show collections </br>
this will show all collections inside the db
* db.collection_name.find() </br>
this will show all data inside the collection
* db.collection_name.deleteOne({ field_to_match: "value_to_match" }) </br>
this will delete an entry matching to field name and it's value