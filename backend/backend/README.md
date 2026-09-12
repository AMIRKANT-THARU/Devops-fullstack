# Backend

Use Java 21. Run commands from this directory so the database remains at
`data/schooldb.mv.db`.

```sh
./mvnw spring-boot:run
```

The API runs at http://localhost:8081/api/hello. Keep the terminal open.
`./mvnw test` only runs automated tests and then exits with `BUILD SUCCESS`.
That normal exit does not indicate a backend crash. Use `./mvnw spring-boot:run`
to start the server.
Stop the existing backend before starting another instance: both use port
8081 and the same database file. Do not delete database files to resolve a lock.

To keep the backend running after closing the terminal:

```sh
./mvnw package
nohup java -jar target/backend-0.0.1-SNAPSHOT.jar > backend.log 2>&1 < /dev/null &
```

Inspect `backend.log` if startup fails. H2 runs embedded without an extra TCP
listener; external database tools cannot open the file while the backend runs.
The PostgreSQL profile is configured separately in
`src/main/resources/application-postgres.properties`.
