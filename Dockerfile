FROM node:latest

WORKDIR /apps

COPY package.json pnpm.look.yaml ./

RUN npm install -g pnpm
RUN pnpm install
COPY . .

CMD ["pnpm","run","server"]