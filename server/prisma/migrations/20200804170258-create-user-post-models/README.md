# Migration `20200804170258-create-user-post-models`

This migration has been generated by Ejaz Ahmed at 8/4/2020, 5:02:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200804164115-create-user-post-models..20200804170258-create-user-post-models
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,9 +13,9 @@
 model User {
   id    String @default(cuid()) @id
   name  String
   email String @unique
-  Post  Post[]
+  posts Post[]
 }
 model Post {
   id       String @default(cuid()) @id
```


