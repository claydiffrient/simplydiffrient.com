import React from "react";
import Layout from "../../../components/layout";
import Helmet from "react-helmet";
import { defaultBtn } from "../../../utils/variables";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const navBtnStyle = {
  ...defaultBtn,
  fontSize: "0.9em",
  width: "100%"
};

const PersonalProductivity = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Clay Diffrient - Personal Productivity Project</title>
    </Helmet>
    <h2>Personal Productivity Project</h2>
    <p>
      This project was completed as part of my ED PS 6445 course as part of my
      Master's of Education in Instructional Design and Educational Technology
      at the University of Utah. The assignment was to develop my own
      productivity system by implementing at least two different things. I chose
      to do the following:{" "}
      <ul css={{ marginLeft: "3em", marginTop: "1.5em" }}>
        <li>
          <a href="#gtd">Use the Getting Things Done (GTD) Method</a>
        </li>
        <li>
          <a href="#email-filters">
            Use email filters automate most of my email
          </a>
        </li>
      </ul>
    </p>
    <h3 id="gtd">GTD</h3>
    <p>
      I've previously used the GTD methodology for accomplishing things, but it
      has been about ten years since I've done it. When I did it before I used{" "}
      <a href="http://mgsd.tiddlyspot.com/#mGSD">mGSD (formerly MonkeyGTD)</a>{" "}
      to track my tasks and actions. It was a good system, but a bit tedious to
      follow. It ended up being a bit more dogmatic than I wanted.
    </p>
    <p>
      A tool I've used for a while is{" "}
      <a href="https://evernote.com/">Evernote</a>. It's a general use note
      taking application. It syncs my notes between all my devices and many
      other great things. I decided that I wanted to try using it with the GTD
      system. Evernote has so many amazing features I didn't quite know where to
      start so I researched how other people had done GTD with in in the past. I
      found{" "}
      <a href="https://thesecretweapon.org/the-secret-weapon-manifesto/setting-up-the-secret-weapon/">
        The Secret Weapon
      </a>
      , "a no bs approach to personal productivity." That sounded just like what
      I wanted. I decided not to worry with the email setup part because I
      already planned to modify my email flow which I detail in the next
      section.
      <figure css={{ display: "inline-block", float: "left", margin: "0.5em" }}>
        <Img
          fixed={data.sidebar.childImageSharp.fixed}
          alt="Evernote sidebar with action pending, completed, and inbox notebooks"
        />
        <figcaption css={{ fontSize: "80%", color: "#6c757d" }}>
          My GTD stack of notebooks in my Evernote sidebar.
        </figcaption>
      </figure>
    </p>

    <p>
      I followed the instructions and set up the appropriate notebooks in
      Evernote. I also set up the appropriate tags to make sure I was setting
      the appropriate What, When, Where, and Who tags on my tasks. I also set up
      my default notebook to be my "Inbox" so everything ends up there first.
      <figure
        css={{ display: "inline-block", float: "right", margin: "0.5em" }}
      >
        <Img
          fixed={data.tags.childImageSharp.fixed}
          alt="Evernote tags with Who, What, Where, and When sections"
        />
        <figcaption css={{ fontSize: "80%", color: "#6c757d" }}>
          My GTD-related tags in Evernote
        </figcaption>
      </figure>
    </p>

    <p>
      After I got everything set up I started putting everything I could think
      of into a note with the appropriate tags applied to it. Some of my tasks
      ended up just being a title. I felt like a full note was a waste for it,
      but sometimes there were subtasks or other information that I found useful
      to collect within the note space.{" "}
      <figure
        css={{
          display: "inline-block",
          float: "left",
          margin: "0.5em",
          width: "50%"
        }}
      >
        <Img
          fluid={data.nosubtasks.childImageSharp.fluid}
          alt="Evernote note to Organize and Print Tax Documents"
        />
        <figcaption css={{ fontSize: "80%", color: "#6c757d" }}>
          Task note with no subtasks
        </figcaption>
      </figure>
      I also started pushing emails to Evernote when it was something I needed
      to followup on. I even managed to automate my recurring daily tasks so
      that I could make sure to remember to do them each morning.
      <figure
        css={{
          display: "inline-block",
          float: "left",
          margin: "0.5em",
          width: "50%"
        }}
      >
        <Img
          fluid={data.subtasks.childImageSharp.fluid}
          alt="Evernote note to do home repairs"
        />
        <figcaption css={{ fontSize: "80%", color: "#6c757d" }}>
          Task note with subtasks
        </figcaption>
      </figure>
    </p>
    <p>
      One aspect that I really failed at with GTD was doing the weekly review. I
      didn't review things as well as I should have, but I don't think that
      really hindered me all that much. If I continue using this system I think
      I'll make myself a goal to do better and see if it contributes more
      meaningfully to my personal productivity overall. I will say overall I
      find myself forgetting less things that I need to do when I'm putting
      everything into Evernote.
    </p>

    <h3 id="email-filters">Email Filters</h3>
    <p>
      The second thing that I did was try to get my email inbox under control.
      I've managed to get to Inbox Zero several times in the past, but I always
      have let it build back up. When I started this project I had almost 2,000
      emails in my inbox with more flooding in daily. At this point I have a
      clean inbox and almost nothing comes into that isn't actionable or
      important.
    </p>
    <p>
      I went through all my emails and unsubscribed from ~50 different mailing
      lists. They were generally promotional or other marketing type material.
      Reducing the flow of unnecessary email into my inbox was definitely a key
      factor in getting things into a more manageable state.
    </p>
    <p>
      Emails that remained after getting rid of all the garbage were classified
      into various labels (Gmail's version of folders). I set up automatic
      filters to push anything not actionable out to a label where I could look
      at it later or find it for reference. So at this point my inbox no longer
      has any automatic shipping notifications or bill autopay notifications.
      These were things that cluttered it up without adding any real value to
      me. I often would just archive them right way anyway. This prevents me
      from having to even do that.
    </p>
    <figure
      css={{
        display: "inline-block",
        float: "left",
        margin: "0.5em",
        width: "50%"
      }}
    >
      <Img
        fluid={data.inboxzero.childImageSharp.fluid}
        alt="Gmail Inbox showing no emails"
      />
      <figcaption css={{ fontSize: "80%", color: "#6c757d" }}>
        Inbox Zero!
      </figcaption>
    </figure>
    <p>
      The final piece of my plan was to feed important items from my inbox in
      Gmail to my Evernote GTD inbox. I was able to accomplish this because
      Evernote gives it's users an available email address that can be used to
      capture notes. I now just forward emails that have action associated with
      them to Evernote where they become part of my GTD system.
    </p>

    <h3>Conclusion</h3>
    <p>
      I found this project to be interesting to me. I found that my personal
      productivity remained about the same overall. I didn't feel like I got
      more done really. I do feel like I was definitely more organized though.
      That provided value to me. I also found that it helped me to know more
      about what work I had actually accomplished because I had a more visible
      history of that.
    </p>
    <p>
      I think that leaders should be productive. In fact in thinking about this
      with this project, I think that leaders should be the most productive.
      They arent' necessarily as productive as an individual contributor, but
      they have responsiblity for many people. They have to be productive enough
      to deal with all the people that they lead. Their time is valuable because
      they need to inspire their followers. They have to do whatever they can to
      make that time matter. Leaders cannot get bogged down on menial tasks.
    </p>

    <p css={{ clear: "both" }} />
  </Layout>
);

export default PersonalProductivity;

export const query = graphql`
  query {
    sidebar: file(name: { eq: "evernote-gtd-sidebar" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    tags: file(name: { eq: "evernote-gtd-tags" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    nosubtasks: file(name: { eq: "evernote-gtd-note-no-subtasks" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    subtasks: file(name: { eq: "evernote-gtd-subtasks" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    inboxzero: file(name: { eq: "inbox-zero" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
