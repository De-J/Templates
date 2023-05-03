# Index

A database index is a data structure used to optimize queries.

Without indexing, the database engine needs to go through **each** record to see if there is a match.

Therefore, indexes are helpful in creating highly performant applications.

In MongoDB, 3 common index types are:
1. Single field index
2. Compound index
3. Text index

MongoDB Atlas (which is the cloud version of MongoDB), has MongoDB Atlas Search
which allows fine-grained text indexing and querying of data on your Atlas 
cluster without the need to run a separate search system alongside your 
database.

Indexing in Atlas can be done either using normal indexes (similar to that in Compass) or by using search indexes. You can configure search indexes using Atlas GUI or using a JSON editor.

```
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "car": {
        "type": "string"
      },
      "income": {
        "type": "number"
      }
    }
  }
}

```
Setting dynamic mappings to false prevents indexing all the fields inside the collection. This can be set to true
but at the cost of increasing space occupied by the index data structure.

Individual fields can be statically indexed as shown in above code.