# NodeJS Module using raw SQL Queries

### Functions

1. Import JSON to SQL Table
2. Create SQL Table
3. Create Foreign Key Constraint

#### - Import JSON to SQL Tables

The table should already be defined and the table structure should be same as the JSON file being imported for the upload to work.

```js
uploadJson(jsonFile, tableName);
```

- `jsonFile` : JSON file you want to import to SQL Table
- `tableName` : The table where you want the JSON to be uploaded (table should already be created)

#### - Create SQL Table

```js
createTable(tableName, tableSchema);
```

- `tableName` : Name to be given to the table
- `tableSchema` : Define column name and their data type(for data types refer to official mysql guide)

Table Schema object :

```js
{
  id: {
    type: "INT",
    primaryKey: true
  },
  name: {
    type: "TEXT"
  },
  dob: {
    type: "DATE"
  }
}
```

- `type` : Data type of the column
- `primaryKey` : To set the column as Primary Key for the table

#### - Create Foreign Key Constraint

Both the tables should already be defined.

```js
createForeignKeyConstraint(
  tableName,
  foreignKeyField,
  referenceTableName,
  referenceTableField
);
```

- `tableName` : Table you want to add foreign key constraint to
- `foreignKeyField` : Field of the above defined table that will act as the reference to the referenced table
- `referenceTableName` : Table to reference to
- `referenceTableField` : Foreign Key field that is being referenced
