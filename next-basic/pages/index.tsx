import type { NextPage } from "next";

import Layout from "../components/layout";
import Script from "next/script";
import Style from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home Page">
        <div className={Style.header}>
          <h1>Welcome</h1>
          <p>NextJS Basic</p>
        </div>
        <div className={Style.content}>
          <h1 className={Style.h1}>What Is NextJS?</h1>
          <p>
            To effectively use Next.js, it helps to be familiar with JavaScript,
            React, and related web development concepts. But JavaScript and
            React are vast topics. How do you know when you're ready to learn
            Next.js? Welcome to the Next.js Foundations course! This
            beginner-friendly, example-led course will guide you through the
            prerequisite knowledge for Next.js. You will build a simple project
            step-by-step; starting with a JavaScript application, then migrating
            it to React and Next.js. Each section builds on the previous one, so
            you can choose where to start depending on what you already know.
          </p>
          <p>
            <b>
              blocks Next.js is a flexible React frame work that gives you
              building blocks to create fast web applications
            </b>
            . But what exactly do we m ean by this? Let's spend some ti
            expanding on what React and Next.js are and how they can help.
            Building Blocks of a Web Application There are a few things you need
            to consider when building modern applications. Such as:
            <ul>
              <li>
                User Interface - how users will consume and interact with your
                application.
              </li>
              <li>
                Routing - how users navigate between different parts of your
                application.
              </li>
              <li>Data Fetching - where your data lives and how to get it.</li>
              <li>
                Rendering - when and where you render static or dynamic content.
              </li>
              <li>
                Integrations - what third-party services you use (CMS, auth,
                payments, etc) and how you connect to them.
              </li>
              <li>
                Infrastructure - where you deploy, store, and run your
                application code (Serverless, CDN, Edge, etc).
              </li>
              <li>
                Performance - how to optimize your application for end-users.
              </li>
              <li>
                Scalability - how your application adapts as your team, data,
                and traffic grow.
              </li>
              <li>
                Developer Experience - your team's experience building and
                maintaining your application.
              </li>
            </ul>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Home;
