FROM node:late

WORKDIR /apps

COPY package.json package.look.yaml ./

RUN npm install -g pnpm
RUN pnpm install
COPY . .

CMD ["pnpm","run","server"]