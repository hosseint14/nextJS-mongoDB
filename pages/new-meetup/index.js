import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error");
    }

    router.push("/");
  }

  return;
  <Fragment>
    <Head>
      <title>new meetup</title>
      <meta name="A nee metup" conetnt="Add a new meetup in your page" />
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />;
  </Fragment>;
}

export default NewMeetupPage;
