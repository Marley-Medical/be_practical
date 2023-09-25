# Marley Medical Backend Engineering Practical

👋 Hello and thank you for your interest in Marley Medical!

As part of our interview process, we want to learn a bit more about your backend technical skills.

In this engineering challenge you are being asked to build a relatively small nodejs method which will help us assess your:

1. Technical competency with TypeScript, Async I/O, Integrations and GitHub
2. Comprehension of requirements and design specifications
3. Technical communication skills with another engineer

Depending on familiarity with backend and nodejs development, we would expect this challenge to take anywhere between two and four hours. Please do not spend more than 4 hours on this challenge, your time is valuable.

Once you have completed the challenge, please share the cloned repo with your point of contact at Marley Medical.

As always, please feel free to reach out with questions at any time.

## Problem Context

One of the bets Marley Medical has made is the idea that putting consumer grade tools into clinician's hands will result in better clinical outcomes for patients. This bet has a direct affect on the complexity of our software and a lot of the challenges Marley Medical's engineers face is dealing with this integration complexity.

In this problem, we want to build a backend nodejs method that creates a new patient in Marley Medical's product when a new patient intake happens in our clinic. Our patient intake process is the process of signing up a new patient and getting them ready for our clinic to care for them. One of our sales representatives works with the patient to collect all the necessary information to create the patient in Marley Medical's product. The required patient information includes their basic demographic information like name, date of birth, as well as more complex information like insurance and shipping address. Our intake process then creates a patient in our product as well as in all of the various clinical and consumer tools our clinicians use.

## Instructions

As the lead backend engineer on this project, you have been given the problem of building software that supports our patient intake process.

At a high-level, you are being asked to implement a method which:

1. Takes patient information input from our sales representative
2. Creates the patient in our product database
3. Creates the patient in all of our clinical and consumer tools
4. Anything else to operate the product after the patient intake process has been completed

Please document your solution thoroughly! A lot of the spirit of this challenge is how well you communicate what you're thinking about in your solution when there is a wide spectrum of acceptable solutions. A good solution is a working example with well documented comments explaining why you're doing something and even more importantly why you're not doing something else.

## Getting Started

To help get you started, we have created the scaffolding of a main method in `src/index.ts` and the start of the interfaces and implementation of vendors. To avoid any unnecessary complexity of web frameworks, consider this main function as your web endpoint that accepts the patient intake process input from our sales representative. Similarly, from there all the interactions with the product database and vendors should be done in-memory. This is not a challenge to build out a software stack but instead a challenge of simulating the orchestration of various components in a software stack.

In order to run the application, you will need [Node 18 LTS](https://nodejs.org/en/) and NPM installed.

From there, you'll need to fork this repository to your public git provider of your choice like github or gitlab. Make sure that we have access to your fork for evaluation.

To install the necessary dependencies run:

```
npm install
```

To build the application run:

```
npm run build
```

To run the application run:

```
node dist/index.js
```

## Working Solution

A working solution should:

- Successfully take patient information input from our patient intake process
- Simulate creating a product database patient record
- Simulate creating a patient record in all clinical and consumer vendor systems
- Setup our product for success down the road

Mechanically, we'll run `./validate.sh` and expect an exit code of `0``. From there, we'll evaluate your solution based on how well you solved the orchestration and integration problems this challenge presents. As mentioned above, your time is valuable and some solutions would require a _lot_ of time so we'll also look at your code comments to evaluate how well you've identified big problems not addressed and why your code is doing certain things and not doing others.
