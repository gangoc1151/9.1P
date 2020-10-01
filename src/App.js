import React from "react";
import faker from "faker";
import "./App.css";
import { SocialIcon } from "react-social-icons";

//Css file in index.css
h3 {
  text-align: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #4fc3f7;
}
.Card {
  text-align: center;
  float: initial;

  flex: 33.33%;
  padding: 5px;
  border-style: solid;
  margin-left: 30px;
  margin-right: 30px;
  border-width: 0.5px;
  border-radius: 5px;
  border-color: bisque;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.web_name {
  display: block;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover:not(.active) {
  background-color: #03a9f4;
}

.active {
  background-color: #4caf50;
}
.Image_cover {
  width: 100%;
  height: 350px;
}
.cardlist {
  float: left;
  width: 33%;
  text-align: center;
  margin-top: 10px;
}
.SocialIcon {
  width: 20px;
  height: 20px;
}

.letter {
  float: left;
  margin: 5px;
  margin-top: 30px;
}
.contact {
  float: right;
  margin-right: 7px;
  margin-top: 10px;
}
.text {
  float: right;
  margin-right: 7px;
  margin-top: 22px;
}
.div1 {
  border: 1px;
  border-style: solid;
}
.table1 {
  background-color: #4caf50;
  float: left;
  display: initial;
  height: 65px;
  margin-top: 10px;
  margin-left: 20px;
}
.table2 {
  background-color: #4caf50;
  display: initial;
  margin-top: 10px;
  height: 65px;
  float: right;
  margin-right: 20px;
}
//end of css file in index css


function Nav() {
  return (
    <div>
      <div>
        <ul>
          <li className="web_name">Icrowdtask</li>
          <li>
            <a href="#home">How it works</a>
          </li>
          <li>
            <a href="#news">Requesters</a>
          </li>
          <li>
            <a href="#contact">Worker</a>
          </li>
          <li>
            <a href="#contact">Pricing</a>
          </li>
          <li>
            <a href="#contact">About</a>
          </li>
          <li style={{ float: "right" }}>
            <a className="active" href="#about">
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function Cover() {
  return (
    <div>
      <img
        className="Image_cover"
        src={faker.image.nature()}
        alt="My name Cover"
      />
    </div>
  );
}
const stafflist = [
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
];

function Card(props) {
  return (
    <div>
      <img src={props.avatar} alt="Staff" />
      <h4>{props.name}</h4>
      <p>
        <b>Description:</b> {props.description}
      </p>
    </div>
  );
}
function cardcomponent(staff, i) {
  return (
    <div className="cardlist">
      <div className="Card">
        <Card
          avatar={staff.avatar}
          name={staff.name}
          description={staff.description}
        />
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div>
      <div>{stafflist.map(cardcomponent)}</div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <table className="table1">
          <thead>
            <tr>
              <td>
                <h4 className="letter">Newsletter sign</h4>
              </td>
              <td>
                <input
                  className="letter"
                  type="text"
                  placeholder="Enter your email"
                />
              </td>
              <td>
                <button className="letter">Subscribe</button>
              </td>
            </tr>
          </thead>
        </table>
        <table className="table2">
          <thead>
            <tr>
              <td>
                <h4 className="contact">Connect us</h4>
              </td>
              <td>
                <SocialIcon
                  className="contact"
                  url="http://twitter.com/jaketrent"
                />
              </td>
              <td>
                <SocialIcon network="facebook" className="contact" />
              </td>
              <td>
                <SocialIcon network="instagram" className="contact" />
              </td>
            </tr>
          </thead>
        </table>
        <div></div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Cover />
      <h3>Feature Requesters</h3>
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
