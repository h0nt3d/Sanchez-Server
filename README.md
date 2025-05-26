# Sanchez Server
![alt text](https://github.com/h0nt3d/Sanchez-Server/blob/main/imgs/sc.png?raw=true)

Sanchez Server is a HTTP server with a simple set up that can be used to carry out network penetration testing and to view to and download files in a private network.

I decided to make this project to practice React frontend and to you utilize an old rooted [TECNO Spark Youth (KA6)](https://www.maxbhi.com/tecno-spark-youth-spare-parts-and-accessories-en.html) using the [Termux](https://termux.dev/en/) terminal emulator.


## Dependencies
- Node.js
- npm
- python3

## Setup
1. Clone the repository

`git clone https://github.com/h0nt3d/Sanchez-Server`

2. Inside the frontend directory install Node.js modules

`npm install`

3. Create production build

`npm run build`

4. Inside build directory start server (e.g port 8080)

`python -m http.server <port>`
