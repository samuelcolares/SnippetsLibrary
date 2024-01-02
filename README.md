<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://imgur.com/kkjFBWv.png" alt="Logo" width="400" height="80">
  </a>

<h3 align="center">Sam's Personal Library</h3>

  <p align="center">
    A storage for quick acess to my code snippets
    <br />
    <!-- <a href="https://github.com/samuelcolares/dailyTodo/pulls"><strong>Explore the docs »</strong></a>
    <br />
    <br />
     <a href="https://dailytodo-sam.vercel.app/">View Demo</a>
    ·
     <a href="https://github.com/samuelcolares/dailyTodo/issues">Report Bug</a>
    ·
    <a href="https://github.com/samuelcolares/dailyTodo/pulls">Request Feature</a> -->
  </p>
</div>

<!--
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Sam's personal library Screen Shot][product-screenshot]](https://dailytodo-sam.vercel.app/)

Here and there in the course of a project I remember that somewhere in the middle of my codes exists a snippet that fit exaclty what I need.So I made this little project to not waste much time searching for, and also to enhance my knowledge of _Server Actions on Next 14 and NEXTAUTH_.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

![Static Badge](https://img.shields.io/badge/CORE-8A2BE2)

- Next.JS
- CockroachDB
- Monaco Editor

![Static Badge](https://img.shields.io/badge/ORM-0070f0)

- Prisma

![Static Badge](https://img.shields.io/badge/STYLING-2f7e74)

- NextUI
- TailwindCSS

![Static Badge](https://img.shields.io/badge/ANIMATION-ee4648)

- Framer-Motion

![Static Badge](https://img.shields.io/badge/AUTHENTICATION-1d1d1d)

- NextAuth.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

You can update this project to your own version

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/samuelcolares/dailyTodo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change DB provider on Prisma.Schema file
   ```javascript
   datasource db {
     provider = "cockroachdb" // <-- your choice, could it be mysql, postgre, mongoDB, sqlite...
     url      = env("DATABASE_URL")
    }
   ```
4. Chance variables on your .env file

   ```javascript
   //create a .env file
   NEXTAUTH_URL = "YOURPROJECTURL";
   NEXTAUTH_SECRET = "YOURNEXTAUTHSECRET";

   DATABASE_URL = "YOURDATABASEURL";
   ```

5. Start local with
   ```sh
   npm run dev
   ```

This is an example of how to install locally using NPM, but of course you can use, **PNPM**, **YARN**, **BUN**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### 1. Login Page

![Login Page][usage-1]

### 2. Home Page

![Home Page Screenshot][product-screenshot]
Filter by snippet title name, snippet code and category

Also, Show/Hidden Columns selector and display a total of 5, 10 or 15 snippets per page

### 3. Snippets

#### 3.1 New Snippet

![New Snippet Screenshot][usage-2]

#### 3.2 View Snippet

![View Snippet Screenshot][usage-3]

#### 3.3 Edit Snippet

![Edit Snippet Screenshot][usage-4]

### 4. Categories Page

![Categories Page Screenshot][usage-5]
Filter by category title name

### 5. Categories

#### 5.1 New Category

![New Category Modal Screenshot][usage-6]

#### 5.2 Edit Category

![Edit Category Modal Screenshot][usage-7]

### 6 Delete Modal

![Delete Modal Screenshot][usage-8]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ X ] Store management (CRUD) using Next14 Server Actions with DB(CockroachDB)
- [ X ] Creating Tables with NextUI (that i shall never use again)
- [ X ] Fetching data to tables
- [ X ] NextAuthJS

<!-- See the [open issues](https://github.com/samuelcolares/dailyTodo/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Samuel Colares - [LinkedIn][linkedin-url] - samuelcolaresdequino@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/samuelcolares/dailyTodo.svg?style=for-the-badge
[contributors-url]: https://github.com/samuelcolares/dailyTodo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/samuelcolares/dailyTodo.svg?style=for-the-badge
[forks-url]: https://github.com/samuelcolares/dailyTodo/network/members
[stars-shield]: https://img.shields.io/github/stars/samuelcolares/dailyTodo.svg?style=for-the-badge
[stars-url]: https://github.com/samuelcolares/dailyTodo/stargazers
[issues-shield]: https://img.shields.io/github/issues/samuelcolares/dailyTodo.svg?style=for-the-badge
[issues-url]: https://github.com/samuelcolares/dailyTodo/issues
[license-shield]: https://img.shields.io/github/license/samuelcolares/dailyTodo.svg?style=for-the-badge
[license-url]: https://github.com/samuelcolares/dailyTodo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/samuelcolares
[product-screenshot]: https://imgur.com/1o4kCCd.png
[usage-1]: https://imgur.com/tJP1Qt1.png
[usage-2]: https://imgur.com/ugoaCFD.png
[usage-3]: https://imgur.com/ODv6Sjv.png
[usage-4]: https://imgur.com/TfATCJs.png
[usage-5]: https://imgur.com/awDYUwg.png
[usage-6]: https://imgur.com/SHHqHyM.png
[usage-7]: https://imgur.com/TyssofN.png
[usage-8]: https://imgur.com/THxFWCT.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
