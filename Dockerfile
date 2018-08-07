FROM node:10

EXPOSE 8080

ENV APP_HOME /usr/src/app/

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY package.json           ${APP_HOME}
COPY package-lock.json      ${APP_HOME}

RUN npm install

RUN wget https://github.com/Yelp/dumb-init/releases/download/v1.2.1/dumb-init_1.2.1_amd64.deb
RUN dpkg -i dumb-init_*.deb

COPY . ${APP_HOME}

COPY CHECKS /app/CHECKS

RUN npm run build


CMD ["dumb-init", "tail", "-f", "/dev/null"]
