import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Privacy = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5, ease: "easeInOut", type: "tween" }}
    >
      <h2 className="heading-1">ArtsPassage Privacy Policy</h2>
      <h3 className="heading-2">I. Introduction</h3>
      <p className="paragraph">
        This Privacy Policy explains how ArtsPassage, Inc. ("ArtsPassage" or
        "we") collects, uses, and shares personal information. As used in this
        Privacy Policy, "you" refers to a user of ArtsPassage's products or
        services, including using our website or app ("Services"). Please note,
        our Services are not intended for children under the age of majority in
        your jurisdiction of residence. If you are under the age of majority in
        your jurisdiction of residence, do not use or provide any personal
        information on or through the Services or about yourself to us. If you
        believe that we might have personal information from or about a child
        under the age of majority, please contact us.
      </p>
      <h3 className="heading-2">II. Collection of User Information</h3>
      <p className="paragraph">
        We collect and process your personal information in order to provide you
        an optimal experience possible when you interact with us. The following
        chart describes the type of information we collect, the source of that
        information, our purposes for using the information, and the third
        parties with whom we may share the information.
      </p>
      <div className="privacy-table">
        <div className="row header">
          <div className="col">Classification of Data</div>
          <div className="col">Categories of Data</div>
          <div className="col">Source of Collection</div>
        </div>
        <div className="row">
          <div className="col">
            <span>User Data:</span> Data we collect about the individuals who
            use our services. We associate this data with a unique ID (Host ID
            or Guest ID) depending on the type of user.
          </div>
          <div className="col">
            Name, email address, zip code, phone number (including country
            code), city, government ID, title, affiliated organizations such as
            professional or employment-related information, uploaded photos,
            social media handles, website URL's affiliated with the user,
            communications to and from users (including email and chat feature
            communications), identity verification information, which may
            include Social Security Numbers (SSNs) , or Social Insurance Numbers
            (SINs).
          </div>
          <div className="col">Provided by you (Users) and third parties.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Identity verification information:</span> Information
            collected that can help us verify that users are who they claim to
            be.
          </div>
          <div className="col">
            We use Stripe for identity document verification. Stripe collects
            identity document images, facial images, ID numbers and addresses as
            well as information about the devices that connect to its services.
            Stripe shares this information with us and also uses this
            information to operate and improve the services it provides,
            including for fraud detection. You may also choose to allow Stripe
            to use your data to improve Stripe’s biometric verification
            technology. You can learn more about Stripe and read its privacy
            policy at{" "}
            <a href="https://stripe.com/privacy">https://stripe.com/privacy.</a>
          </div>
          <div className="col">ArtsPassage and third parties.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Device and Location Data:</span> Data we collect about the
            device you are using
          </div>
          <div className="col">
            Internet and associated network information, browser type, device
            type, method of sign-on, device ID information, IP address.
          </div>
          <div className="col">Devices.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Platform Activity Data:</span> Information we collect about
            how you interact with the ArtsPassage Platform
          </div>
          <div className="col">
            Access date/time, pages viewed, searches made, messages sent,
            inquiries made, requests made, bookings made, reviews written,
            boards created, analytics data, error logs.
          </div>
          <div className="col">Users and devices.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Cookies and Similar Data:</span> ArtsPassages's website uses
            cookies, pixels, and other technologies to make the website work
            properly and to provide the most relevant services to our site
            visitors
          </div>
          <div className="col">
            Cookies send information back to the originating website on each
            subsequent visit, or to another website that recognizes that cookie,
            to develop a record of the user's online activity.
          </div>
          <div className="col">ArtsPassage and third parties.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Information about Artists:</span> Information associated with
            the artists listed on our service, which may be associated with a
            particular individual. We assign an Artist ID to unique artists as
            well as a Listing ID to unique listings
          </div>
          <div className="col">
            Address (street address, city, state, province, zip, postal code,
            country, metropolitan area), latitude and longitude of space, time
            zone, venue capacity, onsite contact information, space entry
            instructions, Wi-Fi access instructions.
          </div>
          <div className="col">Users and third parties.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Survey/Feedback Information:</span> We collect information
            when you fill out a form, provide feedback, or otherwise communicate
            with us..
          </div>
          <div className="col">
            Survey question responses, feedback, email correspondence.
          </div>
          <div className="col">Users.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Contract Information:</span> We collect information related to
            the agreements signed between users.
          </div>
          <div className="col">
            Contracts signed, signatures (including electronic signatures),
            affiliate information, contract terms and other information.
          </div>
          <div className="col">Users, and third parties.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Sensory Information:</span> Audio data, such as a recording of
            your voice when you contact us via Support
          </div>
          <div className="col">
            Your voice, recordings of support phone calls, calls connecting you
            with other users
          </div>
          <div className="col">Users</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Payment Data:</span> We collect information about the means by
            which you submit or receive payment through our platform
          </div>
          <div className="col">
            Credit card information, bank account information.
          </div>
          <div className="col">Users and third parties.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Other Data:</span> We collect additional information from
            individuals depending on how they use our Services.
          </div>
          <div className="col">
            Calendar information (if access is provided), Space Wi-Fi
            information, miscellaneous communication information, information
            related to Events, Bookings, Spaces, or Users (including guest
            lists, diet restrictions, physical restrictions, or other
            information).
          </div>
          <div className="col">Users and third parties.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>User Interaction/Dispute Resolution:</span> We collect
            information related to the interactions between our users and other
            users or third parties. Sometimes this is to facilitate
            communications between individuals, to resolve disputes, or for
            other business purposes compatible with the reason for collection.
          </div>
          <div className="col">
            Information provided in relation to our business purposes.
          </div>
          <div className="col">Users and third parties.</div>
        </div>

        <div className="row">
          <div className="col">
            <span>Background Check Information:</span> We may conduct background
            checks on various individuals as part of our efforts to ensure the
            safety and security of users on the site.
          </div>
          <div className="col">Information related to background checks.</div>
          <div className="col">Background check service providers.</div>
        </div>
      </div>
      <h3 className="heading-2">
        III. Our Operational and Commercial Purposes
      </h3>
      <p className="paragraph">
        As part of Service offerings we undertake a multitude of operations
        which require the processing of personal information. For example, our
        business purposes include: (1) accepting, coordinating, managing, and
        processing Listings and Bookings; (2) facilitating purchase transactions
        for goods and services; (3) providing top-level customer support,
        accommodations, and personalized services; (4) engaging in quality
        control in order to improve our offerings to you; (5) facilitating
        communications between parties; (6) engage in content based or
        interest-based advertising, (7) ensuring the safety and security of our
        users, our staff, and all other persons visiting our platform or the
        properties listed on it, including verifying your identity; (8) prevent,
        detect, and investigate fraud, cyber incidents, or other illegal
        activity; (9) communicating with you and others in relation to your use
        of our services, including providing legal updates; (10) administering
        our record-keeping for legal, tax, and operational purposes; (11)
        exploring new and unique ways to provide products and services; and (12)
        doing our best to fulfill your requests. Our commercial purposes are to
        advance our commercial interests, including for advertising and
        marketing. To learn more about how your personal information is
        processed for marketing and advertising, please see Your Marketing and
        Ad Choices below.
      </p>
      <h3 className="heading-2">
        III. Our Operational and Commercial Purposes
      </h3>
      <p className="paragraph">
        In order to provide you our service and to fulfill our business and
        commercial purposes, we may disclose your personal information outlined
        in Section II. Information disclosed to facilitate bookings and other
        interactions between users, and to enable your use of the ArtsPassage
        platform may include demographic information; financial information;
        government identifiers; protected classification characteristics;
        transaction history; internet, application, and network activity;
        location data; sensory (audio data); professional or employment-related
        information; and inferences about you.
      </p>
      <div className="paragraph">
        <ol className="list">
          <li>
            Publicly Posted Information. Some user information is posted
            publicly on the platform and is visible by others. This may include
            profile information, information related to an Artist or Listing,
            reviews, ratings and other feedback, reviews of Clients completing
            Bookings, and other information that a user submits to be posted.
            Precise location information is not publicly posted.
          </li>
          <li>
            Sharing Between Users. Our Services are designed to connect users
            and to facilitate interaction between them. We also will disclose
            your personal information to any agents or third parties to whom you
            authorize us to disclose it, including the operators, managers,
            agents, or other parties associated with an Event or when you agree
            to a Booking. This sharing is necessary to ensure the performance of
            the contract between you and ArtsPassage, and/or you and a third
            party.
          </li>
          <li>
            Our Service Providers : We may share your information to our trusted
            third party service providers, including but not limited to our
            cloud service providers, web development, analytics, and security
            providers, communications providers, and internal and external
            advisors or auditors, payment processors, dispute resolution
            providers, advertising providers, governmental entities, social
            networks, background verification providers and other users. When
            appropriate or required by applicable law, we will put in place
            appropriate contracts containing standard data protection clauses to
            protect that information and the rights of individuals.
          </li>
          <li>
            Other Disclosures. In addition to the foregoing, we may disclose
            personal information in the following circumstances: (1) In order to
            comply with an applicable federal, state, provincial, territorial,
            or local law; (2) In order to comply with a civil, criminal, or
            regulatory inquiry, investigation, subpoena, or summons by federal,
            state, or local authorities; (3) To cooperate with law enforcement
            agencies concerning conduct or activity that we reasonably and in
            good faith believe may violate federal, state, provincial,
            territorial or local law; (4) To exercise and defend legal or
            payment related claims; (5) When such disclosure is pursuant
            necessary to protect the rights and freedoms of other individuals;
            (6) As part of a prospective or completed merger, acquisition,
            bankruptcy, or other transaction in which the third party assumes
            control of all or part of ArtsPassage, Inc., and (7) In any other
            manner permitted by law, including engaging in protected speech.
          </li>
          <li>
            Third Party Links : Links to web sites that are not operated by or
            for us ("Third Party Sites") are provided solely as a convenience to
            you. If you use these links, you will leave our website. This
            Privacy Policy does not apply to Third Party Sites. We have not
            reviewed the Third Party Sites, do not control and are not
            responsible for any of their content or their privacy policies, if
            any. We do not endorse or make any representations about them, or
            any information, software or other products or materials found
            there, or any results that may be obtained from using them. If you
            decide to access any of the Third Party Sites listed on or linked to
            from our website, you should understand that you do so at your own
            risk.
          </li>
        </ol>
      </div>
      <p className="paragraph">
        In addition to the disclosures described above we may also disclose your
        personal information with your consent for purposes described at the
        time we obtain your consent.
      </p>
      <h3 className="heading-2">V. Security</h3>
      <p className="paragraph">
        We are committed to protecting the security of any personal information
        you provide. We have implemented reasonable administrative, technical
        and physical measures in an effort to safeguard the personal information
        in our custody and control against theft, loss and unauthorized access,
        use, modification and disclosure. We restrict access to personal
        information on a need-to-know basis to employees and authorized service
        providers who require access to fulfil their job requirements.
      </p>
      <p className="paragraph">
        All financial information you provide, such as credit card data, will
        generally be transferred over a Secured Socket Layer (SSL) connection
        (provided that it is supported or enabled on your browser). In spite of
        these protections, any information submitted over the Internet could be
        intercepted or otherwise corrupted during transmission, and we cannot
        guarantee the complete security of any data submitted over the Internet.
        Sensitive personal information is stored on servers or locations
        protected by procedures and technology designed to block reasonably
        foreseeable intrusions by unauthorized third parties. The servers are
        under our control at all times but may be hosted, managed or otherwise
        maintained by third party service providers with whom we contract. These
        third party service providers have no right to use or access this data
        other than in performing their services for us.
      </p>
      <p className="paragraph">
        You may access and change certain information that you submitted during
        registration (if you have registered at the Site) at any time by
        providing your username and password. Please keep your password in a
        safe place and do not provide this information to anyone. We strongly
        encourage you to check the accuracy of your data regularly as we will
        use your e-mail, phone number, and home address to communicate with you
        regarding products or services that you have requested. We will not be
        liable for any problems or difficulties that arise as a result of your
        failure to keep your information up to date.
      </p>
      <h3 className="heading-2">VI. International Data Transfers</h3>
      <p className="paragraph">
        For users located outside the jurisdiction of the United States,
        ArtsPassage, Inc. is located in the United States. Information we
        collect from you will be processed in the United States and potentially
        in other jurisdictions, and laws in the United States and other
        jurisdictions may differ from the laws where you reside. By using our
        Services (including our website) you acknowledge and consent to the
        processing of your data in the United States and elsewhere. We and our
        service providers may disclose your personal information if we are
        required or permitted by applicable law or legal process, which may
        include lawful access by foreign courts, law enforcement or other
        government authorities in the jurisdictions in which we or our service
        providers operate. For information about the manner in which we or our
        service providers treat Personal Information, please contact us as set
        out in the "Contact Information" section of the Privacy Policy.
      </p>
      <p className="paragraph">
        While we do not target individuals in the EU or other jurisdictions
        outside of the United States, we are aware that individuals from outside
        the US may interact with us and inquire about the adequacy of our data
        protection. The United States has not sought nor received a finding of
        "adequacy" from the European Union under Article 41 of the GDPR. We
        collect and transfer to the U.S. personal data only with your consent
        (as provided herein); to perform a contract with you; or to fulfill a
        compelling legitimate interest of ours in a manner that does not
        outweigh your rights and freedoms.
      </p>
      <h3 className="heading-2">VII. Your Marketing and Ad Choices</h3>
      <p className="paragraph">
        Like most businesses, ArtsPassage advertises and markets its Services in
        various ways. We may use cookies and related technologies to recognize
        you and receive information about your activity on our websites. This
        helps customize content and show you more relevant ads. You may limit or
        disable third party personalized advertising in a number of ways.
      </p>
      <p className="paragraph">
        Please note that even if you opt-out of interest-based advertising by a
        third party, these tracking technologies may still collect data for
        other purposes including analytics and you will still see ads from us,
        but the ads will not be targeted based on behavioral information about
        you and may therefore be less relevant to you and your interests.
        <br></br>
        You can also use your web browser to directly block all cookies, or just
        third-party cookies, through your browser settings. Using your browser
        settings to block all cookies, including strictly necessary ones, may
        interfere with proper site operation.
      </p>
      <p className="paragraph">
        To successfully opt out, you must have cookies enabled in your web
        browser (see your browser's instructions for information on cookies and
        how to enable them). Your opt-out only applies to the web browser you
        use so you must opt-out of each web browser on each computer you use.
        Once you opt out, if you delete your browser's saved cookies, you will
        need to opt-out again.
      </p>
      <p className="paragraph">
        Your browser and other mechanisms may permit you to send do-not-track
        signals or other similar signals to express your preferences regarding
        online tracking. However, because there is not yet a defined response to
        do-not-track requests, our Site does not respond to your browser's
        do-not-track request. We cannot control third parties' responses to
        do-not-track signals or other such mechanisms. Third parties' use of
        data relating to you and responsiveness to do-not-track signals is
        governed by their respective privacy policies.
      </p>
      <h3 className="heading-2">VIII. Children's Privacy</h3>
      <p className="paragraph">
        We are committed to complying with the Children's Online Privacy
        Protection Act (COPPA). Our website and services are not directed to
        children under the age of 18. We do not knowingly collect personal
        information from children under the age of 18. If we receive personal
        information that we discover was provided by a child under the age of
        18, we will promptly destroy such information. Parents are encouraged to
        supervise their children's online activities and consider the use of
        other means to provide a child-friendly online environment. Additional
        information is available on the Direct Marketing Association's home page
        at <a href="http://www.the-dma.org">http://www.the-dma.org.</a> If you
        would like to learn more about COPPA, visit the Federal Trade Commission
        home page at <a href="http://www.ftc.gov">http://www.ftc.gov.</a>
      </p>
      <h3 className="heading-2">IX. Agreement and Changes</h3>
      <p className="paragraph">
        By submitting your personal information through our website, you agree
        to the collection and use of your personal information on the basis
        described above. If you do not agree, please do not provide any personal
        information via our website. If we decide to update our Privacy Policy,
        we will indicate this next to the Privacy Policy link on the front page
        of our Site. If there are material changes to the Privacy Policy, we
        will prominently post and/or communicate such changes prior to
        implementing them. Information collected under previous versions of our
        Privacy Policy will then become subject to the terms of our new Privacy
        Policy.
      </p>
      <h3 className="heading-2">X. Contact Informations</h3>

      <p className="paragraph">
        If you would like to update your information, modify your communication
        preferences, or if you do not want to receive marketing communications
        from us in the future, you can contact us by e-mail at
        help@artpassage.com. Please note, we do not accept consumer rights
        requests via email.<br></br>
        If you have any questions or comments regarding our privacy practices,
        or about the manner in which we or our service providers treat your
        personal information, please contact legal@artpassage.com.
      </p>
    </motion.div>
  );
};

export default Privacy;
