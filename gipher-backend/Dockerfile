FROM openjdk:11
ADD target/gipher-mysql.jar gipher-mysql.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "gipher-mysql.jar"]