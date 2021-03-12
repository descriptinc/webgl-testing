# WebGL testing script

## Installation

1. Install node/npm in the box where you want to run this
2. Do `npm install`
3. For a kubernetes pod install (or vm in GCP) dependencies with `npm run install-deps` 
4. Run
   * In your local box (like a MacBook) you should be able to just run `npm run`
   * In kubernetes or vm, you should run with `npm run k8-start` with runs the thing under an xvfb server
 
