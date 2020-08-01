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

    - [ ] 'Logs' -> relationship with Matches 1 - 1
1. id -> self generated
2. matchId -> int || relationship with **Matches**
3. turns -> JSON
4. startedAt -> date/time
5. endedAt -> date/time

* Create routes
    - [ ] Index
    - [ ] Arena
    - [ ] Match Logs
    - [ ] Login
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