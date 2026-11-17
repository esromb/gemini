This is a POC project to connect Gemini chat bot with spring application with React frontend.
Partially completed end-to-end application can be access after running spring boot. 

http://localhost:8080/index.html

You can access the spring boot endpoint (api) after running the application through
HTTP POST

http://localhost:8080/gemini/chat

To run this application you need environment variable GOOGLE_GENAI_API_KEY which you will 
get from Google AI studio API KEY

To see the react app which is currently work in progress, you can 
CD to frontend and run npm start

```
cd frontend
npm run start
```

after that open

http://localhost:3000/


Running spring boot and chat with Gemini

<img width="1158" height="813" alt="image" src="https://github.com/user-attachments/assets/c6c1d449-c65a-429d-b923-5987b78d019c" />

#Deployment with Kubernetes

#To locally run it with minikube

First create secret key for Gemini API KEY

```kubectl create secret generic spring-app-secrets --from-literal=GOOGLE_GENAI_API_KEY=xxx```

Build docker image for backend

```

docker build -t spring-gemini:1.0 . 

```

Build docker image for frontend

```
cd frontend
docker build -t react-gemini:1.0 . 

```

#start minikube
```
minikube start
```
In case you have issue with docker build use the below script

#update docker demaon

```eval $(minikube docker-env -u)```

#create you pods

```
kubectl apply -f k8s-gemini.yaml 
```

#check the service endpoints/URL
#FRONTEND

```
minikube service frontend-service
```

#BACKEND
```minikube service backend-service```

you will see something like this:

<img width="814" height="249" alt="image" src="https://github.com/user-attachments/assets/c05533f5-2788-4f90-a4f8-abdd0d016515" />

click the url and you will be directed to react UI page:

<img width="1420" height="805" alt="image" src="https://github.com/user-attachments/assets/8bb33a48-b474-4c5f-8b61-4afef20c0f77" />



