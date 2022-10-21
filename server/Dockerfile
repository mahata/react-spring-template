FROM eclipse-temurin:17-jdk-jammy

RUN addgroup spring && adduser --ingroup spring --gecos "" --disabled-password spring
USER spring

COPY ./build/libs/demo-0.0.1-SNAPSHOT.jar demo.jar
ENTRYPOINT ["java", "-jar", "/demo.jar"]
