db = connect("mongodb://root:password123@localhost:27017/admin");

db = db.getSiblingDB("github-issues");
db.createCollection("logs");
