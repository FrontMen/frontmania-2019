<template>
  <section class="page-coc">
    <header>
      <h1>Code of Conduct</h1>
    </header>
    <article>
      <h2>
        The Code
      </h2>
      <p>
        All attendees, speakers, sponsors and volunteers at our conference
        are required to agree with the following code of conduct. Organisers
        will enforce this code throughout the event. We are expecting
        cooperation from all participants to help ensuring a safe
        environment for everybody.
      </p>
    </article>
    <article>
      <h2>
        Quick Version
      </h2>
      <p>
        Our conference is dedicated to providing a harassment-free
        conference experience for everyone, regardless of gender, gender
        identity and expression, age, sexual orientation, disability,
        physical appearance, body size, race, ethnicity, or religion (or
        lack thereof). We do not tolerate harassment of conference
        participants in any form. Sexual language and imagery is not
        appropriate for any conference venue, including talks, workshops,
        parties, Twitter and other online media.
      </p>
      <p>
        Conference participants violating these rules may be sanctioned or
        expelled from the conference without a refund at the discretion of
        the conference organisers.
      </p>
    </article>
    <article>
      <h2>
        THE EXTENDED QUICK VERSION
      </h2>

      <ul>
        <li>
          <em>Harassment includes offensive verbal comments or actions </em> relating to:
          <ul class="nested-list">
            <li>gender</li>
            <li>gender identity and expression</li>
            <li>age</li>
            <li>sexual orientation</li>
            <li>disability</li>
            <li>physical appearance</li>
            <li>body size</li>
            <li>race</li>
            <li>ethnicity</li>
            <li>religion</li>
            <li>sexual images in public spaces</li>
            <li>deliberate intimidation</li>
            <li>stalking</li>
            <li>following</li>
            <li>harassing photography or recording</li>
            <li>sustained disruption of talks or other events</li>
            <li>inappropriate physical contact</li>
            <li>unwelcome sexual attention</li>
          </ul>
        </li>

        <li>
          Participants asked to stop any harassing behavior are <em>expected to comply immediately.</em>
        </li>
        <li>
          If a participant
          engages in harassing behavior, the conference <em> organisers may take
            any action they deem appropriate</em>, including warning the offender or
          expulsion from the conference with no refund.
        </li>
        <li>
          If you are being
          harassed, notice that someone else is being harassed, or have any
          other concerns, please contact a member of conference staff
          immediately
        </li>
      </ul>

      <h4>Conference Staff Identification and Assistance</h4>
      <ul>
        <li>
          Conference staff can be identified as they'll be wearing FrontMania branded
          t-shirts.
        </li>
        <li>
          Conference staff will be happy to help participants
          contact venue security or local law enforcement, provide escorts
        </li>
        <li>
          or
          otherwise assist those experiencing harassment to feel safe for the
          duration of the conference.
        </li>
      </ul>


      <h4> Sponsors</h4>
      <ul>
        <li>
          Sponsors are also subject to
          the anti-harassment policy.
        </li>
        <li>
          In particular, sponsors should not use
          sexualised images, activities, or other material. Booth staff
          (including volunteers) should not use sexualised
          clothing/uniforms/costumes, or otherwise create a sexualised
          environment.
        </li>
      </ul>

      <h4>Action</h4>
      <ul>
        <li>
          If a participant engages in harassing behavior, the
          conference organisers may take any action they deem appropriate,
          including warning the offender or expulsion from the conference with
          no refund.
        </li>
      </ul>

      <p class="final-statement">
        We value your attendance. We expect
        participants to follow these rules at conference and workshop venues
        and conference-related social events.
      </p>
    </article>
  </section>
</template>

<style scoped lang="scss">
.page-coc {
  padding: 32px;
  background: black;
  color: white;
  max-width: 800px;
}

article {
  width: 100%;
  margin: 0 auto;
}

h1 {
  font-family: 'Frontmania';
  font-size: 64px;
  margin-bottom: 8px;
}

h2 {
  padding: 32px 0 0;
  font-size: 40px;
  margin-bottom: 32px;

  &:after {
    content: '';
    position: relative;
    width: 20%;
    border-bottom: 2px solid #ff66ac;
    display: block;
    top: 5px;
  }
}

h4 {
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 30px;
  font-weight: 600;
  margin: 2.5em 0px 0.5em;
  color: #ff66ac;
}

p {
  font-size: 16px;
  line-height: 24px;
  margin: 16px 0;
}
ul,
ol {
  margin: 16px 0;
  line-height: 24px;
}

li {
  margin-bottom: 1em;
}

em {
  color: #ffed00;
  font-style: normal;
}

.nested-list {
  li {
    margin-bottom: 0;
  }
}

.final-statement {
  margin-top: 3em;
  color: #ffed00;
  font-weight: 600;
}
</style>
