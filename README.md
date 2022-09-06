### Welcome to the 🏝 WYTLAND official repository for candidates committed to the front-end position. The codebase is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using TypeScript.

![https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif](https://c.tenor.com/ypItxpv66-sAAAAd/mr-bean-test.gif)

## General purpose of the assessment.

🙂 The following exercise will assess your ability to deliver well structured and maintainable code. This is fundamental for us to ensure that we can work together in the future and that we can deliver high quality products to our customers.

## Instructions

You are building a launchpad backoffice for a Travel brand named <b>TRVL</b> wanting to deploy its own NFTs collection. The app allows its users to mint their own collection of NFTs and to manage the sales of these NFTs.

1. Authenticate the user using [Rainbowkit](https://github.com/rainbow-me/rainbowkit) (or anything else you're comfortable with) on the Polygon mumbai testnet rpc provider.

2. Build a form that allows the brand to create a new NFT Campaign. The form should have the following fields:

- name: `string`
- description: `string`
- quantity (number of NFTs to mint): `integer`
- price (in MATIC): `integer`

3. The NFTs will be displayed on the homepage as a list of cards and can be minted by any user logged-in with its wallet. You can get inspired from [this page](https://opensea.io/collection/allstarfreaks).

(Information: You can use an existing smart contract on the polygon blockchain, or use the [Thirdweb SDK to deploy a signature drop on polygon testnet](https://portal.thirdweb.com/sdk/interacting-with-contracts/signature-drop))

4. The layout of the app shows the logged user status, the wallet balance, and an access to the already minted NFTs.

Extra details:

You're free to pick an audited ready-to-use smart contract using [Thirdweb SDK](https://portal.thirdweb.com/typescript).
You're free to go on the design implementation, we want you to use the [Tailwind UI](https://tailwindui.com/) design system.

## How to complete the assessment

### Step 1

Fork this repository in a private repository and invite the following users as collaborators:

- sense

### Step 2

Please read the [INSTRUCTIONS](#instructions) to complete the following exercise in <b>Typescript</b>. Use git to version control your exercise.

☝️ Create a branch from the forked repository under the following format to complete the exercise: `ass/lastname-firstname` and submit a pull request to the `main` branch only when it's fully ready.

Please send us an email when it's completely been done with all the details in your pull request's description with instructions that may be needed if there's special configuration required to run your code.

📛 Do not send us binaries, they won't get through our firewalls.

Please identify and tag your commits so that we can evaluate your approach. You may make other commits to further demonstrate your approach later on.

✅ Complete the steps in order. Don't read ahead. At each step build the simplest possible solution which meets our requirement. Tag a git commit after each step so that your approach is clear.

End it by enhancing the current `Dockerfile` file.

(Bonus) if you implement `react-testing-library`, `Enzyme`, or React's `TestUtils` on some components.

### Step 3

Send us an email with the link to your private repository <b>ONLY</b> when its fully ready to be reviewed.
Your answers will be used as part of our sifting and are likely to be discussed with your interviewer at later stages.

## Evaluation criterias

- Code quality & structure
- Code readability & maintainability
- Code test coverage & performance
- Code linting / formatting
- Code documentation & comments

Rating for each criteria goes from 1 to 5 (1 being the lowest, 5 being the highest).
Criteria table :
| Rating | Notation  
|----------|-------------:|
| ⭐️ | Poor
| ⭐️⭐️ | Below average
| ⭐️⭐️⭐️ | Average
| ⭐️⭐️⭐️⭐️ | Average
| ⭐️⭐️⭐️⭐️⭐️ | Excellent
