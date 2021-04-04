# People CRUD with postgres, express and angular

## Requeriments
* Nodejs (latest stable)

## Backend
### Run
```
    cd ./people-services
    docker-compose up --build
```
### Run test
Once:
```
    cd ./people-services
    npm ci
    npm run build
```
Then:
```
    npm run test
```
### Test endpoints
#### Create (POST):
http://localhost:3000/person
##### Example Json body:
```
{
    "fullname": "Jorge Rodriguez",
    "birth": {
        "year": "1997",
        "month": "3",
        "day": "4"
    }
}
```
#### Get all (GET):
http://localhost:3000/person
#### Get first (Get):
http://localhost:3000/person/1

## Frontend
### Run
First, install angular
```
    npm install --global @angular/cli@next
```
Then:
```
    cd ./people-ui
    ng serve
```

## References:
### Angular guide:
https://bezkoder.com/angular-10-crud-app/
### Docker + nodejs + postgres guide:
https://michalzalecki.com/docker-compose-for-nodejs-and-postgresql/
