import { mdiGithub,mdiLink,mdiReceiptText,mdiFileCertificate,mdiVideo} from '@mdi/js';
import logagg1 from '../public/projects/logagg/1.png';
import logagg2 from '../public/projects/logagg/2.png';
import bts1 from '../public/projects/bts/1.png';
import bts2 from '../public/projects/bts/2.png';
import bts3 from '../public/projects/bts/3.png';
import w1 from '../public/projects/walker/1.jpg';
import w2 from '../public/projects/walker/2.jpg';
import w3 from '../public/projects/walker/3.jpg';
import w4 from '../public/projects/walker/4.jpg';
import w5 from '../public/projects/walker/5.jpg';
import w6 from '../public/projects/walker/6.jpg';
import w7 from '../public/projects/walker/7.jpg';
import w8 from '../public/projects/walker/8.jpg';
import sm0 from '../public/projects/spacemate/0.png';
import sm1 from '../public/projects/spacemate/1.png';
import sm2 from '../public/projects/spacemate/2.png';
import sm3 from '../public/projects/spacemate/3.png';
import sm4 from '../public/projects/spacemate/4.png';
import sm5 from '../public/projects/spacemate/5.png';
import sm6 from '../public/projects/spacemate/6.png';
import fk1 from '../public/projects/foodkatta/1.png';
import fk2 from '../public/projects/foodkatta/2.png';
import fk3 from '../public/projects/foodkatta/3.jpg';
import fk4 from '../public/projects/foodkatta/4.jpg';
import fk5 from '../public/projects/foodkatta/5.jpg';
import enigma1 from '../public/projects/enigma/1.png';
import enigma2 from '../public/projects/enigma/2.png';
import techsurf from '../public/other/techsurf.png';
import saaz from '../public/other/saaz.png';
import gcp from '../public/other/gcp.png';
import techniche from '../public/other/techniche.png';
import coursera from '../public/other/coursera.png';
import o2c from '../public/other/o2c.png';
import video from '../public/other/video.png';
import bmc from '../public/other/bmc.png';
import cs from '../public/other/cs.png';

const data={
    "projects": [
        { 
            "id": "logagg", 
            "title": "Log Aggregator", 
            "subtitle":"Techsurf 2023",
            "desc": "Part of my submission for the hackathon Techsurf 2023 organised by Contentstack, the hackathon provided 3 problem statements one of them was to build a log aggregator service prototype (something like logstash) that will aggregate logs and provide a way to visualize them, they had bonus points for using opentelemetery to collect logs from various sources like AWS CloudWatch, Kafka, various frontend and backend applications etc. I implemented a solution using React.js, Express.js, BullMQ, NGINX and Opentelemetry's OTLP.", 
            "images":[logagg1,logagg2],
            "skills": ["Express.js","Node.js","OpenTelemetry","ElasticSearch","Kibana"] ,
            "links":[
                {
                    "ico":mdiGithub,
                    "txt":"Github Repo",
                    "url":"https://github.com/AryanWadkar/Log-Aggregator"
                }
            ],
            "details":`
            <div>
                <p>The first major <strong>system design project</strong> that I took up made me work with <strong>various kinds of technologies</strong> and think about various aspects that one has to look at while building a system.</p>
                <p>As <strong>one of the 42 finalists</strong> for <strong>Techsurf 2023</strong> out of the <strong>34000+ applicants</strong>, this was my final submission for the problem statement that I chose, I iterated through<strong>&nbsp;multiple designs</strong>, <strong>identified issues</strong> with each and every one of them, and finally arrived at this <strong>solution</strong>.</p>
                <p>The solution I proposed is a distributed system for log aggregation and visualization, the job of log collection or instrumentation is handled by <strong>OpenTelemetry</strong>, and the data is then sent over to my aggreagation service via <strong>OTLP</strong><strong>/</strong><strong>HTTP</strong>.</p>
                <p><strong>Aggregation service</strong>:</p>
                <ol>
                    <li>Routes the request to one of the servers via an <strong>NGINX l</strong><strong>oadbalancer</strong>.</li>
                    <li>A server then pushes the request onto a <strong>BullMQ&nbsp;</strong>job queue, which in turn stores it on <strong>Redis&nbsp;</strong>to make sure the server is never fully occupied and ends up dropping a request.</li>
                    <li>When the server load is reduced, BullMQ starts a <strong>worker&nbsp;</strong><strong>thread&nbsp;</strong>to then process the data and store it on a cloud-hosted<strong>&nbsp;ElasticSearch Database</strong> instance.</li>
                </ol>
                <p>Visualization service:</p>
                <ol>
                    <li>Serves a <strong>React app</strong> via an <strong>NGINX loadbalancer</strong> that allows you to <strong>visualize&nbsp;</strong>all the log entries so far.</li>
                    <li>Allows <strong>querying logs</strong> based on <strong>multiple parameters,</strong> enabled with <strong>full text search</strong> from ElasticSearch DB.</li>
                    <li>Provides a basic <strong>graphical visualziation.</strong></li>
                </ol>
                <p>The project helped me understand optimizing systems to function <strong>effectively</strong>, <strong>efficiently </strong>and in a <strong>fault tolerant</strong> manner.</p>
            </div>
            `
        },{ 
            "id": "busticketingsys", 
            "title": "Bus Ticketing System", 
            "subtitle":"PR301 SEMESTER PROJECT",
            "desc": "Taken up as part of the PR301 semester project at IIITDM Jabalpur, the project was built with the intention to make an attempt to digitize the current system used for transit to and from the campus, the result was a system that provides real time updates about seat vacancy, a convenient wallet system, and security features like single device sign in. To prevent hogging a sophosticated QR based system was implemented to unqiuely identify user and validate tickets.", 
            "skills": ["Node.js","Express.js","MongoDB","Redis","Web Sockets","Server Sent Events"],
            "images":[bts3,bts1,bts2],
            "links":[
                {
                    "ico":mdiGithub,
                    "txt":"Server Code",
                    "url":"https://github.com/AryanWadkar/BusTicketingSystem"
                },{
                    "ico":mdiReceiptText,
                    "txt":"Medium Article",
                    "url":"https://medium.com/@wadkararyan01/efficient-real-time-communication-and-crud-operations-c8f35283ce38"
                }
            ],
            "details":`
            <div>
                <div>The project was inspired by the will to solve the current situation of <strong>bus ticketing</strong> for <strong>IIITDM Jabalpur</strong>. The campus operates two buses, which make several trips to and from the city, but there is no way to know the status of tickets other than calling and checking. There is also the issue of maintaining cash as the current method does not allow online payment. Sometimes students lose the physical ticket they bought and thus have to re-purchase and the bus conductor has no way of knowing whether the seat for that ticket will be occupied or left vacant.</div>
                <div>To solve all these problems, my friends and I decided to <strong>digitize the system</strong>, we arrived at a solution with a student app, a conductor app, and a backend server to facilitate all ticketing-related operations. I took up backend development of the project, and during the process, I was faced with many problems, solving them taught me a lot about <strong>system design</strong>, <strong>backend development</strong>, and working in a team.</div>
                <div>The project features the following:</div>
                <ul>
                    <li><strong>Real-time seat updates</strong>: The system implements <strong>Server-Sent-Events</strong> to update seat details in real-time, as soon as a ticket is purchased all other users that have their apps open are updated about the consumed seat.</li>
                    <li><strong>Live ticket booking</strong>: Users are allowed to book tickets on the go at their convenience, the consistency of this booking is ensured using <strong>MongoDB</strong> ACID-compliant transactions</li>
                    <li><strong>Queueing system</strong>: An innovative solution to solve the issue of heavy traffic during rush hours and allow preferential booking on a truly first come first serve basis. The system allows you to arrange buses in the order of your preference and join a queue of ticket requests. At a specified time during the day, the queue gets processed and you get a ticket based on the current availability and preference.</li>
                    <li><strong>Socket Architecture</strong>: The system also uses <strong>Socket.io</strong> to implement a socket event architecture in case more real-time update-based features are to be added eg. a live feed, chat system, etc.</li>
                    <li><strong>Time-bound operations</strong>: The server has a system in place that allows operations based on current time, eg. queueing is allowed only in a certain time window after which live ticketing is allowed, while the server is processing queues, it does not allow other operations to ensure a low server load.</li>
                    <li><strong>Kill-switch</strong>: The system features a kill switch to remotely shut down server routes in case of a failure or in case of need of maintenance.</li>
                    <li><strong>Ingenious wallet system</strong>: The system features an encryption-based wallet system to allow transactions that can be executed directly and reliably without having to confirm with a third party.</li>
                    <li><strong>Advanced ticket validation</strong>: The ticket validation system is designed to provide a smooth experience and avoid any kind of hogging and re-sell of tickets. The system implements a session code-based system that is stored in a <strong>Redis</strong> cache store to ensure low latency, every time a ticket is validated the session code gets updated automatically thus ensuring any user with an outdated session code can be detected and thus the legitimacy of the ticket can be verified by requesting a fresh QR generation.</li>
                    <li><strong>Single device sign-in</strong>: The system implements a single device sign-in so a user cannot open multiple sessions to spam the server with automated requests.</li>
                </ul>
            </div>`
        },
        { 
            "id": "walker", 
            "title": "Smart Walker System", 
            "subtitle":"ENGINEERING DESIGN PROJECT",
            "desc": "A result of collaboration between engineering and design departments at IIITDM Jabalpur, this project aimed to develop a gertatric safety device that can help protect and prevent the elderly. The idea of the project was to create a device that will not only help the elderly move around better but also send an alert to their caretakers via mail and SMS in case a fall is detected. This is faciliated with a NodeMCU based IOT device and a mobile application to configure the device.", 
            "images":[w1,w2,w3,w4,w5,w6,w7,w8],
            "skills": ["NodeMCU","IOT Devices","HTTP Server","C++","Electronics","Flutter"] ,
            "links":[
                {
                    "ico":mdiGithub,
                    "txt":"Node MCU",
                    "url":"https://github.com/AryanWadkar/SmartWalker"
                },
                {
                    "ico":mdiGithub,
                    "txt":"Mobile App",
                    "url":"https://github.com/aditigohil26/EDP"
                }
            ],
            "details":`
            <div>
                <p>This project was a collaborative effort of the <strong>engineering</strong> and <strong>design disciplines</strong> at<strong>&nbsp;IIITDM Jabalpur</strong>. The problem statement we picked was to build a<strong>&nbsp;geriatric safety device to protect or prevent them from falling</strong>. The project operated in two phases, the <strong>ideation </strong>phase and the <strong>fabrication </strong>phase. In the ideation phase, <strong>my team of 7 </strong>including me focused on <strong>user research</strong> and identifying the root cause of the problem, based on which we came up with many solutions that aimed to solve various parts of the problem.</p>
                <p>The result of this process was <strong>a smart walker</strong> that <strong>detected fall</strong> using an accelerometer and gyroscope sensor module and <strong>altered a caregiver</strong> via mail and SMS.<strong>&nbsp;I </strong>took on the task of <strong>designing the circuit and programming the microprocessor module</strong>, I also took on the task of <strong>implementing APIs</strong> to help our <strong>flutter app</strong> communicate with the system. The system features:</p>
                <ul>
                    <li><strong>NodeMCU ESP8266</strong> equipped with a WiFi module to allow connecting to the internet.</li>
                    <li>The system <strong>operates in two modes</strong>, <strong>sensing</strong> and <strong>configuration&nbsp;</strong>mode, indicated by the blue LED on the module and toggleable by the flash button on the module.</li>
                    <li>The module <strong>stores WiFi credentials</strong> and <strong>emergency contact</strong> data onto the <strong>EEPROM</strong>, on startup the module checks for a WiFi with matching credentials and tries to connect, if it can connect, it goes into sensing mode, else it goes into configuration mode.</li>
                    <li><strong>Sensing mode</strong>: The NodeMCU once connected to a WiFi does the following :<ol>
                            <li>Reads data from the <strong>MPU6050 gyroscope and accelerometer</strong> module and passes it through a <strong>fall detection algorithm</strong> that decides whether there has been a fall,&nbsp;</li>
                            <li>If yes it <strong>reads its EEPROM</strong> for emergency contact details and retrieves mail and SMS information.</li>
                            <li>Next, it calls a webhook hosted on <strong>IFTTT</strong> and triggers a<strong>&nbsp;mail&nbsp;</strong>and an <strong>SMS&nbsp;</strong><strong>alert&nbsp;</strong>to the retrieved contact details.</li>
                        </ol>
                    </li>
                    <li><strong>Configuration mode</strong>: The NodeMCU module starts a <strong>WiFi hotspot</strong> that you can connect to using our <strong>flutter application</strong>, it then allows you to<strong>&nbsp;change WiFi credentials</strong> and <strong>emergency contact</strong> information stored on the EEPROM. The system facilitates this by starting <strong>an HTTP server</strong> that is <strong>accessible via</strong> this <strong>hotspot </strong>and allows communication via <strong>APIs </strong>to modify this data.</li>
                    <li>The system is also equipped with a <strong>3600mAH battery</strong> and a <strong>TP4056</strong> <strong>charge controller</strong> module to allow charging the battery and running the system without any external supply and an <strong>LM1117</strong> IC to regulate voltage.</li>
                    <li>A <strong>3D-printed case</strong> to house all the components.</li>
                </ul>
            </div>`
        },{ 
            "id": "spacemate", 
            "title": "SpaceMate", 
            "subtitle":"FREELANCE PROJECT",
            "desc": "My first real world project, solving a real world problem for an interior design company based in Pune. The project resulted in a system to manage their operations, communicate with their customers and offer a mobile ecommerce platform configurable from an Admin side application. The project also features a document based chat and a system which executives at the company can use to send interior design solutions based on client input.", 
            "images":[sm0,sm1,sm2,sm3,sm4,sm5,sm6],
            "skills": ["Flutter","Google OAuth2","Firebase Cloud Storage","Figma","System Architecture Design","Firebase Push Notifications","Firebase FireStore",] ,
            "links":[
                {
                    "ico":mdiFileCertificate,
                    "txt":"View Certificate",
                    "url":"https://drive.google.com/file/d/1FqXpZyPjS00-RIn26N46xlgNSyFnq4jG/view?usp=drive_link"
                },{
                    "ico":mdiVideo,
                    "txt":"View Admin Side Video",
                    "url":"https://drive.google.com/file/d/1RaeZmn_mkKMhOZH5Mt8XS5K3O7OXAzwJ/view?usp=drive_link"
                },{
                    "ico":mdiVideo,
                    "txt":"View Client Side Video",
                    "url":"https://drive.google.com/file/d/1eFhUbU0eV2pE8R1PXEwaPeG4dxanco5A/view?usp=drive_link"
                }
            ],
            "details":`
            <div>
                    <p>This was <strong>my first freelance project</strong> and challenged me to build a system that could be practically used by a business which was an <strong>interior design company</strong> based in Pune called <strong>SpaceMate</strong>. I with <strong>my team of 2 other members</strong> conducted various rounds with different types of queries regarding the <strong>requirements of the company</strong> to better understand what kind of solution we could create.</p>
                    <p>We came up with a solution which consisted of 3 platforms:</p>
                    <ul>
                        <li><strong>Mobile Application</strong>: We decided to build a mobile application using Flutter to serve the purpose of having a <strong>catalog</strong> of the services provided by SpaceMate and also serve as the <strong>primary communication</strong> point for receiving these services.</li>
                        <li><strong>Executive Side Web application</strong>: A platform through which <strong>executives</strong> could <strong>communicate</strong> with the <strong>clients&nbsp;</strong>and provide design files as per the requirement of the project, built with Flutter.</li>
                        <li><strong>Admin Side Web Application</strong>: An admin platform, also built with Flutter, for the <strong>managers at the company&nbsp;</strong>to moderate things like<ol>
                                <li>creating new executive accounts</li>
                                <li>assigning projects to executives</li>
                                <li>running campaigns, sending notifications for the same</li>
                                <li>creating new coupons</li>
                                <li>managing content displayed in the app</li>
                            </ol>
                        </li>
                    </ul>
                    <p>To keep things simple I decided to use <strong>Firebase</strong> for all backend purposes (<strong>BaaS</strong>), <strong>I worked</strong> on designing this <strong>system architecture</strong>, and <strong>database schema</strong>, I also <strong>designed interfaces</strong> for all the <strong>applications</strong> using <strong>Figma</strong>, I worked on <strong>deciding what each application did</strong>, and <strong>developing&nbsp;</strong>the mobile application and admin side web application using Flutter.</p>
                    <hr>
                    <p>Here are some of the notable features of the <strong>mobile application</strong>:</p>
                    <ul>
                        <li><strong>Service-wise catalog</strong> showcasing all the services that the company provides which updates using the data stored in <strong>Firebase Firestore</strong>.</li>
                        <li>A <strong>pricing model</strong> that helps you calculate the cost of your picked service based on your <strong>carpet area</strong> in sq ft, which you can then <strong>add to your cart</strong> and purchase said service, also features a <strong>coupon system</strong>.</li>
                        <li>A <strong>projects section</strong> that shows you all your <strong>active</strong> and <strong>inactive projects</strong>, allows you to <strong>track project progress</strong>, and <strong>download design files</strong> submitted by the executive assigned to your project.</li>
                        <li>A <strong>document-based chat</strong> that uses Firebase Firestore to allow communication between project executive and user, <strong>enabled with attachments</strong> that uses Firebase Storage.</li>
                        <li><strong>Account </strong>creation and handling managed with <strong>Firebase Auth</strong>.</li>
                        <li><strong>Custom widget</strong> for handling password entry and confirmation.</li>
                        <li>Session management using <strong>Provider</strong>.</li>
                    </ul>
                    <hr>
                    <p>Some notable features of the <strong>admin web application</strong> are:</p>
                    <ul>
                        <li>Provides a <strong>dashboard&nbsp;</strong>with a summary of total users, total executives, total projects, and total revenue so far along with conversion rate.</li>
                        <li>Allows <strong>viewing user data</strong> and deleting users.</li>
                        <li>Allows <strong>CRUD</strong> operations on <strong>executive accounts</strong>.</li>
                        <li>Facilitates <strong>viewing&nbsp;</strong>all <strong>projects&nbsp;</strong>registered, both assigned and un-assigned, and also allows <strong>assigning projects&nbsp;</strong>to executives, deleting projects, and <strong>viewing project details</strong> as well as the <strong>chat</strong> between executive and user.</li>
                        <li>Provides<strong>&nbsp;content management</strong> access which includes <strong>creating new packages</strong>, <strong>adding or removing services</strong> from different packages, <strong>updating pricing</strong> model, images, <strong>details about packages</strong> etc.</li>
                        <li>Allows<strong>&nbsp;notifying users</strong> via <strong>Firebase push notifications</strong>, changing other data like testimonials, active coupons etc.</li>
                    </ul>
                    <p>The Firebase Firestore <strong>schema&nbsp;</strong>is designed in such a way that<strong>&nbsp;queries are optimized</strong> for response time and number of lookups required.</p>
            </div>
            `
        },
        { 
            "id": "foodkatta", 
            "title": "FoodKatta", 
            "subtitle":"FREELANCE PROJECT",
            "desc": "A freelance project for a Pune based packaged food delivery company. The company needed a crossplatform mobile application to extend their service to their customers to be. I worked with the company founder and co-founder to understand their needs and design and develop the application accordingly. I also worked with the company\'s backend development team to to further product development and implement new features.", 
            "images":[fk1,fk2,fk3,fk4,fk5],
            "skills": ["Flutter","Google OAuth2","REST APIs","Figma"] ,
            "links":[
                {
                    "ico":mdiFileCertificate,
                    "txt":"View Certificate",
                    "url":"https://drive.google.com/file/d/12gN6mbqfb6BQZFMB5KQhL8S7I9GB8vCb/view?usp=sharing"
                },{
                    "ico":mdiVideo,
                    "txt":"View Video",
                    "url":"https://drive.google.com/file/d/1-ROW7hBzNXd-CM47ykxALOGagqlQIS42/view?usp=drive_link"
                }
            ],
            "details":`
            <div>
                <p>A freelance project that I took up for a <strong>packaged food delivery company</strong> based in Pune, they wanted a <strong>mobile application</strong> that would provide a full <strong>E-commerce experience</strong> to their customers. I was provided with APIs and requirements of the application and some design guidelines based on which I created an interface for the mobile application after understanding the requirements put up to me.</p>
                <p>I ensured the interface was both satisfactory for the client as well as functional and provided a good experience to the users through constant <strong>feedback-driven discussions</strong>.</p>
                <p>I built the <strong>entire application from scratch</strong>, some <strong>notable features</strong> of which are:</p>
                <ul>
                    <li><strong>Persistent session management</strong> with <strong>shared preferences</strong> secured using <strong>256-bit AES</strong> encryption.</li>
                    <li><strong>Google OAuth2</strong> for implementing Sign-In with Google.</li>
                    <li><strong>30+ RESTful APIs</strong> for various E-commerce tasks.</li>
                    <li><strong>15+ unique screens</strong> for various sections like search, categories, brands, cart, favorites, order history etc.</li>
                    <li><strong>RazorPay</strong> payment gateway integration.</li>
                </ul>
                <p>During the development process, I also <strong>helped </strong>their backend team <strong>better structure their APIs</strong> so they can be easier to implement in their website as well as this mobile app.</p>
            </div>
            `
        },
        { 
            "id": "enigma", 
            "title": "ENIGMA", 
            "subtitle":"Personal Project",
            "desc": "A simple minimalistic web app to emulate the infamous ENIGMA machine using during WWII to encrypt and decrypt messages by the Nazi soldiers. The web app provides a simple interface with rotors that you can set, and bulbs that light up on key presses. To encrypt or decrypt, you set the rotors at any position and the type your message in, as you do, the encrypted/decrypted message will start lighting up letter by letter on the screen.", 
            "images":[enigma1,enigma2],
            "skills": ["React.js","CSS","Javascript","Figma"] ,
            "links":[
                {
                    "ico":mdiGithub,
                    "txt":"Source",
                    "url":"https://github.com/AryanWadkar/enigma-src"
                },{
                    "ico":mdiLink,
                    "txt":"Deployed",
                    "url":"https://aryanwadkar.github.io/enigma-src/"
                }
            ],
            "details":`
            <div>
                <p>A personal project that I took up to strengthen my understanding of <strong>JavaScript</strong> and use <strong>React </strong>to build SPAs, I did so by implementing something as complicated as the Enigma machine, the machine was capable of creating nearly <strong>15 quintillions</strong> or <strong>2</strong><sup><strong>67</strong>&nbsp;</sup>possible <strong>encryption combinations</strong> while not having any piece of software, it was all gears and simple electric bulbs.</p>
                <p>The <strong>mechanism</strong> of this machine is better understood with the help of this illustration <a href="https://www.cryptomuseum.com/crypto/enigma/working.htm" target="_blank" rel="noopener noreferrer">(link to illustration)</a>, this project helped me lay the foundation for creating complex applications with JavaScript-based frameworks.</p>
            </div>`
        },
    ],
    "workex":{
        "fusion":{
            "heading":"Django web developer",
            "duration":"MAY 2022 - JULY 2022",
            "skills":["Django", "Postgre SQL", "HTML", "CSS", "JavaScript"],
            "desc":
            <div>
                <p>Fusion is an ERP software for the institute, it contains various modules that faciliate various operations like making complaints, paying fees, academic details etc.</p>
                <p>The software is not yet fully deployed and is usually developed, moderated and maintanined by students from various departments willing to work on the software.</p>
                <p>I collaborated with a team of 3 and worked on the complaint moudle to achieve the following:</p>
                <ul>
                    <li>Installed a feature that allows uploading images for any type of complaint</li>
                    <li>Made it compulsory for a resolution proof to be attached by the hostel caretaker when the complaint is being marked resolved.</li>
                    <li>Made changes to the HTML of the interface to make it more syntactically accurate</li>
                </ul>
            </div>,
            "link":"",
            "pos":"18%"
            
        },
        "stlf":{
            "heading":"Django web developer ",
            "duration":"SEP 2022 - JAN 2023",
            "skills":["Django", "Postgre SQL", "HTML", "CSS", "JavaScript"],
            "desc":
            <div>
                <p>A project run by Dr. Vinod Kumar Jain, CSE department head at IIITDM Jabalpur.</p>
                <p>It is an electricity load forecasting project that aims at predicting the electricity load on a given day in the state of Madhya Pradesh ,India.</p>
                <p>I collaborated with a team of 6 to achieve the following:</p>
                <ul>
                    <li>Made a detailed documentation of the views in the software, ensuring easy onboarding and understanding of new developers</li>
                    <li>General moderation and maintainence of the portal</li>
                    <li>Worked on a feature that collects all the errors in prediction so far based on various parameters, regulary processes and moves them into a seperate database entry to allow fast fetching and easy viewing of error data</li>
                    <li>Conceptualized creating a similar system for orissa state govt</li>
                </ul>
            </div>,
            "link":"",
            "pos":"48%"
        },
        "vh":{
            "heading":"Flutter Developer",
            "duration":"FEB 2023 - MAY 2023",
            "skills":["Flutter", "Firebase", "REST API", "Localization", "Provider"],
            "desc":
            <div>
                <p>Vigorus Healthtech is a Jaipur based startup revolutionizing healthcare with their blockchain based product Chikitsa.</p>
                <p>The product allows user to upload his/her details and make booking appointments with various doctors who then autmatically recieve all of the patient's details</p>
                <p>I collaborated with a team of 3 to achieve the following:</p>
                <ul>
                    <li>Layed groundwork for the crossplatform application of the product by developing 60+ different screens in Flutter and implemented localization to make the app available in both Hindi and English</li>
                    <li>Integrated serverless APIs to faciliatate login, verification, fetching and storing of user data.</li>
                    <li>Installed vital firebase services like In-App-Messaging, Push-Notifications, Crashlytics and Event Architecture</li>
                    <li>Ehanced app security with timeout based app lock, Jailbreak detection and 256bit AES Encryption for session management.</li>
                </ul>
        </div>,
            "link":"https://drive.google.com/file/d/1SbGEKgxRZmaU_Kk8UmizoTkAfGVdiIVK/view?usp=sharing",
            "pos":"78%"
        }
    },
    "other":[
        {
            "id": "techsurf", 
            "title": "Techsurf 2023", 
            "subtitle":"Hackathon",
            "desc": "This was a hackathon organised by Contentstack, I secured rank 5 out of 34396 applicants. The selection was on the basis of speed and accuracy in an online assessment. The second round presented 3 problem statements, out which I decided to build a prototype log aggregator service as my submission for round 2 which got shortlisted. I built a full scale solution which won me rank 5th in the hackathon", 
            "skills": ["Node.js","Express.js","Data Structures","Algorithms"],
            "images":[techsurf],
            "link":""
        },{
            "id": "saaz", 
            "title": "SAAZ : THE MUSIC CLUB", 
            "subtitle":"CO-COORDINATOR",
            "desc": "The official co-coordinator and gymkhana office bearer for Saaz : The music club of the insititue. I worked with the club to express my love for music and I managed, organised and executed 10+ events and activites which recieved participation from all kinds of people in the institute.", 
            "skills": ["Event Management","Leadership"],
            "images":[saaz],
            "link":"https://www.iiitdmj.ac.in/saaz.iiitdmj.ac.in/"
        },{
            "id": "cloud", 
            "title": "30 Days of cloud", 
            "subtitle":"GOOGLE CLOUD CERITIFICATION",
            "desc": "Obtained various badges and certification for completing 30 Days of Cloud, a program run by Google to educate students about the google cloud platfrom. I learnt a lot about the various features about the platform as well as its workings.", 
            "skills": ["Google Cloud Platform"],
            "images":[gcp],
            "link":"https://www.cloudskillsboost.google/public_profiles/3bc3f3f1-6fae-43be-a76d-1af8f691de57"
        },{
            "id": "techniche", 
            "title": "Techniche IIT Guwahait", 
            "subtitle":"Robot Building Competiton",
            "desc": "Participated in a robot building competition organised by IIT Guwahati, the competiton tasked me and me team of 4 to build a bot that can move around in 4 directions, pick up and object and ascend/descend a rope. Me and my team made designs and models for the bot and also qualified among 6 other teams from our insititue.", 
            "skills": ["Robot Design","Collaboration"],
            "images":[techniche],
            "link":""
        },{
            "id": "coursera", 
            "title": "HTML CSS JS for Web Developers", 
            "subtitle":"Coursera Certification",
            "desc": "I took up a course from the popular website Coursera to learn HTML CSS and JS as a starting point for my development journey, it was a 5 week course offered by John Hopkins Univeristy and covered various web development fundamentals. The course also had weekly peer reviewed assignments which were extremely helpful.", 
            "skills": ["HTML","CSS","JavaScript"],
            "images":[coursera],
            "link":"https://coursera.org/share/7af7aa2bc03c4ac09926d7cbd3a2bf49"
        },{
            "id": "ode2code", 
            "title": "Xiaomi Ode2Code 2.0", 
            "subtitle":"Hackathon",
            "desc": "This hackathon was organised by Xiaomi, the problem statement was to create a unified billing system for their physical stores that will digitize their POS (Point of Sale) endpoints. I participated with a batchmate and qualified the first round of the hackathon among 7806 teams.", 
            "skills": ["System Architecture Design","Collaboration","Figma"],
            "images":[o2c],
            "link":""
        },{
            "id": "videoediting", 
            "title": "Video Editing", 
            "subtitle":"Hobby",
            "desc": "A hobby that I picked up as part of my goal of learning a creative skill, I primarily used Adobe Premiere Pro to edit all kinds of videos, be it promo videos or montage videos. Here is something that I edited for my club\'s, this video is meant to orient the batch 2021 and infrom them about my club.", 
            "skills": ["Abode Premiere Pro"],
            "images":[video],
            "link":"https://www.youtube.com/watch?v=_V7MZpl4_JY"
        },{
            "id": "graphicdesign", 
            "title": "BMC IIITDMJ", 
            "subtitle":"Content Graphic Design",
            "desc": "A creative skill that I decided to learn during my first year, I used Adobe Illustrator to design posts for the business and management club (BMC) of my institute, I worked in a content creation team where I had fellow content curators and graphic designers working together to create 3 posts every week. I also did poster design for events at my club Saaz.", 
            "skills": ["Adobe Illustrator","Collaboration"],
            "images":[bmc],
            "link":"https://www.instagram.com/bmc.iiitdmj/"
        },{
            "id": "dsa", 
            "title": "Data Structures & Algorithms", 
            "subtitle":"DSA Practice",
            "desc": "I practiced data structures and algorithms on various platforms like LeetCode, CodeStudio, GeeksforGeeks to better my logic and understanding and sharpen my coding skills. I also practiced the popular Striver\'s SDE sheet and used various sources from youtube to learn computer science fundamentals like operating systems, DBMS, computer networks and OOPS. I also made hand-made notes for all the questions I solved and topics I studied.", 
            "skills": ["Data Structures","Algorithms"],
            "images":[cs],
            "link":"https://www.codingninjas.com/studio/profile/aryanw"
        }
    ]
}

export default data;