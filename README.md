## Project Avalon

- [x] Create database | Strapi

* Create tables
    - [x] 'Names'
    - [x] 'Surnames'
    - [x] 'Users'
    - [x] 'Matches' | relationship with Users 1 - 1
        1. id -> self generated
        2. userId -> int || relationship with **Users**
        3. handPlayer -> json
        4. handAi -> json
        5. turns -> integer || range 1 - 4
        6. playerLife -> integer
        7. aiLife -> integer
        8. result -> string || list: win, tie, lose
        9. firstStrike -> string || list: player, ai

    - [x] 'Logs' -> relationship with Matches 1 - 1
        1. id -> self generated
        2. matchId -> int || relationship with **Matches**
        3. turns -> JSON
        4. startedAt -> date/time
        5. endedAt -> date/time

* Create routes
    - [x] Index
    - [x] Arena
    - [x] Match Logs
    - [x] Login
    - [x] Tutorial
    - [x] Contact
    - [x] 404

* Create Components
    - [x] Index
    - [ ] Navbar
    - [ ] Arena
    - [ ] Login
    - [x] Contact
    - [ ] 404
    - [ ] Match Logs
    - [ ] Tutorial

* Create Arena/Match Flux
    - [ ] ...N

* Create Login flux
    - [ ] Create account
    - [ ] Login
    - [ ] Reset password

* Match Logs
    - [ ] ...N

* Tutorial
    - [ ] ...N



*EXEMPLO POST MATCHES    
> {\
>     "userid": 1,\
>     "handPlayer": {\
>         //TODO\
>     },\
>     "handAi": {\
>         //TODO\
>     },\
>     "turns": 4,\
>     "result": "tie"\
> }    


*EXEMPLO POST LOGS    
> {\
>     "matchId": 1,\
>     "turns": {\
>         "t1": {\
>             "attacking": "player",\
>             "cardId": "ITkUmm38",\
>             "damage": 5\
>         },\
>         "t2": {\
>             "attacking": "ai",\
>             "cardId": "ITkUmm38",\
>             "damage": 5\
>         },\
>         "t3": {\
>             "attacking": "player",\
>             "cardId": "ITkUmm38",\
>             "damage": 5\
>         },\
>         "t4": {\
>             "attacking": "ai",\
>             "cardId": "ITkUmm38",\
>             "damage": 5\
>         }\
>     },\
>     "startedAt": "2020-08-01T02:13:55.195Z",\
>     "endedAt": "2020-08-01T02:13:55.195Z"\
> }