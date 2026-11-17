FROM openjdk:17.0.2-jdk
ADD build/libs/gemini-0.0.1-SNAPSHOT.jar gemini-0.0.1-SNAPSHOT.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "gemini-0.0.1-SNAPSHOT.jar"]
