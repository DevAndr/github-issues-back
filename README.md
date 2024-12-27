# Поиск issue в репозиториях GitHub. Бэкэнд


## Как запустить

Склонировать репозиторий:

```bash
git clone https://github.com/DevAndr/github-issues-back.git
```

### Установка docker
Если нет докера, его надо устанвоить. Ссылка ниже как это сделать

https://docs.docker.com/engine/install/

### Запуск докера
В корне проекта выполнить команду

```bash
docker-compose up
```

### Установка зависимостей

```bash
yarn
```

### Запустить в режиме разработки

```bash
yarn start:dev
```

### Админка для управления mongoDB
```bash
http://localhost:4321/
```