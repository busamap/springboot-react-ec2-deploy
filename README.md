# springboot-react-ec2-deploy

The application has a React frontend and a Spring Boot REST API, packaged as a single module Maven application. You can build the application using Maven and run it as a Spring Boot application.

You can test the main API using the following curl commands (shown with its output):

---

$ curl -v -u greg:turnquist localhost:8080/api/employees/3
{
  "firstName" : "Frodo",
  "lastName" : "Baggins",
  "description" : "ring bearer",
  "manager" : {
    "name" : "greg",
    "roles" : [ "ROLE_MANAGER" ]
  },
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/api/employees/1"
    }
  }
}

---

To see the frontend, navigate to http://localhost:8080. You are immediately redirected to a login form. Log in as `greg/turnquist`.

