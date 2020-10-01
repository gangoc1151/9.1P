import React from "react";
import faker from "faker";
import "./App.css";
import { SocialIcon } from "react-social-icons";

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
